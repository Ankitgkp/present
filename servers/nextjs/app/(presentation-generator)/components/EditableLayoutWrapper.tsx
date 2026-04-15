"use client";

import React, { ReactNode, useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSlideImage, updateSlideIcon, updateImageProperties, updateSlideArrangement } from '@/store/slices/presentationGeneration';
import ImageEditor from './ImageEditor';
import IconsEditor from './IconsEditor';

interface EditableLayoutWrapperProps {
    children: ReactNode;
    slideIndex: number;
    slideData: any;
    isEditMode?: boolean;
    properties?: any;
    isArrangeMode?: boolean;
    arrangeCommand?: { type: 'reset' | null; nonce: number };
    
}

interface EditableElement {
    id: string;
    type: 'image' | 'icon';
    src: string;
    dataPath: string;
    data: any;
    element: HTMLImageElement | SVGElement;
}

const EditableLayoutWrapper: React.FC<EditableLayoutWrapperProps> = ({
    children,
    slideIndex,
    slideData,
    properties,
    isArrangeMode = false,
    arrangeCommand,
    
}) => {
    const dispatch = useDispatch();
    const containerRef = useRef<HTMLDivElement>(null);
    const [editableElements, setEditableElements] = useState<EditableElement[]>([]);
    const [activeEditor, setActiveEditor] = useState<EditableElement | null>(null);
    const arrangementRef = useRef<Record<string, { x: number; y: number }>>({});
    const dragCleanupRef = useRef<(() => void)[]>([]);
    const SNAP_SIZE = 12;

    const snapToGrid = (value: number) => Math.round(value / SNAP_SIZE) * SNAP_SIZE;
    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

    const getArrangementFromProps = () => {
        return (properties && properties.__arrangement && typeof properties.__arrangement === 'object')
            ? properties.__arrangement
            : {};
    };

    const getDomPathId = (el: HTMLElement, root: HTMLElement) => {
        const path: string[] = [];
        let current: HTMLElement | null = el;
        while (current && current !== root) {
            const parentEl: HTMLElement | null = current.parentElement;
            if (!parentEl) break;
            const index = Array.from(parentEl.children).indexOf(current);
            path.unshift(`${current.tagName.toLowerCase()}-${index}`);
            current = parentEl;
        }
        return `auto-${path.join('_')}`;
    };

    const isContainerKeywordClass = (className: string) => {
        const keywords = ['card', 'chart', 'metric', 'kpi', 'tile', 'panel', 'box', 'section', 'block', 'item', 'bullet'];
        const cls = (className || '').toLowerCase();
        return keywords.some((key) => cls.includes(key));
    };

    const getElementArea = (el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        return rect.width * rect.height;
    };

    const shouldAutoAnchorElement = (el: HTMLElement, stage: HTMLElement) => {
        if (el.hasAttribute('data-rearrange-id')) return false;
        if (el.closest('.tiptap-text-editor, [contenteditable="true"], [data-editable-processed], [data-sonner-toaster]')) return false;

        const rect = el.getBoundingClientRect();
        const stageRect = stage.getBoundingClientRect();
        if (rect.width < 60 || rect.height < 24) return false;

        // Skip full-slide wrappers and layout roots
        if (rect.width > stageRect.width * 0.9 && rect.height > stageRect.height * 0.9) return false;

        const tag = el.tagName.toLowerCase();
        if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'img', 'table', 'blockquote', 'figure', 'svg', 'canvas'].includes(tag)) {
            return true;
        }

        // For generic containers, require semantic class or chart-like children
        if (['div', 'section', 'article', 'aside'].includes(tag)) {
            if (isContainerKeywordClass(el.className)) return true;
            if (el.querySelector('.recharts-wrapper, .recharts-surface, svg, canvas')) return true;
        }

        return false;
    };

    const ensureRearrangeAnchors = () => {
        if (!containerRef.current) return;
        const stage = containerRef.current;

        // Recompute auto-generated anchors each cycle so we can pick the most granular
        // draggable nodes for the current DOM.
        stage.querySelectorAll<HTMLElement>('[data-rearrange-auto="true"]').forEach((el) => {
            el.removeAttribute('data-rearrange-id');
            el.removeAttribute('data-rearrange-auto');
        });

        const candidates = Array.from(
            stage.querySelectorAll<HTMLElement>('h1, h2, h3, h4, h5, h6, p, li, img, table, blockquote, figure, svg, canvas, div, section, article, aside')
        )
            .filter((el) => shouldAutoAnchorElement(el, stage))
            // Prefer smaller/leaf elements first. This avoids anchoring large wrappers
            // that move groups of children together.
            .sort((a, b) => getElementArea(a) - getElementArea(b));

        candidates.forEach((el) => {
            if (!shouldAutoAnchorElement(el, stage)) return;

            // Skip nested anchors: if a parent already contains anchored descendants,
            // keep descendants only to allow individual movement.
            if (el.querySelector('[data-rearrange-id]')) return;

            // Skip if this node is inside an existing (manual or auto) anchored ancestor.
            if (el.parentElement?.closest('[data-rearrange-id]')) return;

            el.setAttribute('data-rearrange-id', getDomPathId(el, stage));
            el.setAttribute('data-rearrange-auto', 'true');
        });
    };

    const applyArrangementToElement = (element: HTMLElement, x = 0, y = 0) => {
        element.style.transform = `translate(${x}px, ${y}px)`;
        element.style.willChange = 'transform';
    };

    const applyArrangementToAllElements = () => {
        if (!containerRef.current) return;
        ensureRearrangeAnchors();
        const arrangement = getArrangementFromProps();
        arrangementRef.current = arrangement;
        const rearrangeElements = containerRef.current.querySelectorAll<HTMLElement>('[data-rearrange-id]');
        rearrangeElements.forEach((el) => {
            const id = el.dataset.rearrangeId;
            if (!id) return;
            const pos = arrangement[id] || { x: 0, y: 0 };
            applyArrangementToElement(el, pos.x, pos.y);
        });
    };

    const persistArrangement = (nextArrangement: Record<string, { x: number; y: number }>) => {
        arrangementRef.current = nextArrangement;
        dispatch(updateSlideArrangement({
            slideIndex,
            arrangement: nextArrangement,
        }));
    };

    const removeArrangeListeners = () => {
        dragCleanupRef.current.forEach((cleanup) => cleanup());
        dragCleanupRef.current = [];
        if (!containerRef.current) return;

        const rearrangeElements = containerRef.current.querySelectorAll<HTMLElement>('[data-rearrange-id]');
        rearrangeElements.forEach((el) => {
            el.style.cursor = '';
            el.style.userSelect = '';
            el.style.zIndex = el.dataset.baseZIndex || '';
        });
    };

    const setupArrangeMode = () => {
        if (!containerRef.current || !isArrangeMode) return;

        const stage = containerRef.current;
        ensureRearrangeAnchors();
        const stageRect = stage.getBoundingClientRect();
        const arrangement = getArrangementFromProps();
        arrangementRef.current = arrangement;

        const rearrangeElements = stage.querySelectorAll<HTMLElement>('[data-rearrange-id]');
        rearrangeElements.forEach((el) => {
            const rearrangeId = el.dataset.rearrangeId;
            if (!rearrangeId) return;

            if (el.dataset.baseZIndex === undefined) {
                el.dataset.baseZIndex = el.style.zIndex || '';
            }

            const current = arrangementRef.current[rearrangeId] || { x: 0, y: 0 };
            applyArrangementToElement(el, current.x, current.y);
            el.style.cursor = 'grab';
            el.style.userSelect = 'none';

            const onMouseDown = (event: MouseEvent) => {
                if (!isArrangeMode || event.button !== 0) return;
                event.preventDefault();
                event.stopPropagation();

                const stageRectNow = stage.getBoundingClientRect();
                const elementRect = el.getBoundingClientRect();
                const startX = event.clientX;
                const startY = event.clientY;
                const origin = arrangementRef.current[rearrangeId] || { x: 0, y: 0 };

                const baseLeft = elementRect.left - stageRectNow.left - origin.x;
                const baseTop = elementRect.top - stageRectNow.top - origin.y;

                const minX = -baseLeft;
                const maxX = stageRectNow.width - elementRect.width - baseLeft;
                const minY = -baseTop;
                const maxY = stageRectNow.height - elementRect.height - baseTop;

                el.style.cursor = 'grabbing';
                el.style.zIndex = '60';

                const onMouseMove = (moveEvent: MouseEvent) => {
                    const dx = moveEvent.clientX - startX;
                    const dy = moveEvent.clientY - startY;

                    const nextX = snapToGrid(clamp(origin.x + dx, minX, maxX));
                    const nextY = snapToGrid(clamp(origin.y + dy, minY, maxY));

                    applyArrangementToElement(el, nextX, nextY);
                    arrangementRef.current = {
                        ...arrangementRef.current,
                        [rearrangeId]: { x: nextX, y: nextY },
                    };
                };

                const onMouseUp = () => {
                    el.style.cursor = 'grab';
                    el.style.zIndex = el.dataset.baseZIndex || '';
                    window.removeEventListener('mousemove', onMouseMove);
                    window.removeEventListener('mouseup', onMouseUp);
                    persistArrangement({ ...arrangementRef.current });
                };

                window.addEventListener('mousemove', onMouseMove);
                window.addEventListener('mouseup', onMouseUp);
            };

            el.addEventListener('mousedown', onMouseDown);
            dragCleanupRef.current.push(() => {
                el.removeEventListener('mousedown', onMouseDown);
            });
        });
    };


    /**
     * Recursively searches for ALL image/icon data paths in the slide data structure
     */
    const findAllDataPaths = (targetUrl: string, data: any, path: string = ''): { path: string; type: 'image' | 'icon'; data: any }[] => {
        if (!data || typeof data !== 'object') return [];

        const matches: { path: string; type: 'image' | 'icon'; data: any }[] = [];

        // Check current level for __image_url__ or __icon_url__
        if (data.__image_url__ && targetUrl.includes(data.__image_url__)) {
            matches.push({ path, type: 'image', data });
        }

        if (data.__icon_url__ && targetUrl.includes(data.__icon_url__)) {
            matches.push({ path, type: 'icon', data });
        }

        // Recursively check nested objects and arrays
        for (const [key, value] of Object.entries(data)) {
            const newPath = path ? `${path}.${key}` : key;

            if (Array.isArray(value)) {
                for (let i = 0; i < value.length; i++) {
                    const results = findAllDataPaths(targetUrl, value[i], `${newPath}[${i}]`);
                    matches.push(...results);
                }
            } else if (value && typeof value === 'object') {
                const results = findAllDataPaths(targetUrl, value, newPath);
                matches.push(...results);
            }
        }

        return matches;
    };

    /**
     * Finds the best matching data path for a specific DOM element
     */
    const findBestDataPath = (targetUrl: string, imgElement: HTMLImageElement | SVGElement, data: any): { path: string; type: 'image' | 'icon'; data: any } | null => {
        const allMatches = findAllDataPaths(targetUrl, data);

        if (allMatches.length === 0) return null;
        if (allMatches.length === 1) return allMatches[0];

        // If multiple matches, use DOM position to find the correct one across images and svgs
        const getElementSourceUrl = (el: Element): string | null => {
            if (el instanceof HTMLImageElement) {
                return el.src || null;
            }
            if (el instanceof SVGElement) {
                const wrapperWithUrl = (el as unknown as HTMLElement).closest('[data-path]') as HTMLElement | null;
                return wrapperWithUrl?.getAttribute('data-path') || null;
            }
            return null;
        };

        const allMediaInContainer = containerRef.current?.querySelectorAll('img, svg') || [] as unknown as NodeListOf<Element>;
        const imgIndex = Array.from(allMediaInContainer).indexOf(imgElement as Element);

        // Find images with the same URL pattern
        const sameUrlElements: Element[] = [];
        allMediaInContainer.forEach((el) => {
            const elUrl = getElementSourceUrl(el);
            if (elUrl && isMatchingUrl(elUrl, targetUrl)) {
                sameUrlElements.push(el);
            }
        });

        const sameUrlIndex = sameUrlElements.indexOf(imgElement as Element);

        // Try to match based on position in the same URL group
        if (sameUrlIndex >= 0 && sameUrlIndex < allMatches.length) {
            return allMatches[sameUrlIndex];
        }

        // Fallback: try to match based on overall DOM position
        if (imgIndex >= 0 && imgIndex < allMatches.length) {
            return allMatches[imgIndex];
        }

        // Last resort: return the first match
        return allMatches[0];
    };

    /**
     * Checks if two URLs match using various comparison strategies
     */
    const isMatchingUrl = (url1: string, url2: string): boolean => {
        if (!url1 || !url2) return false;

        // Direct match
        if (url1 === url2) return true;

        // Remove protocol and domain differences
        const cleanUrl1 = url1 && url1.replace(/^https?:\/\/[^\/]+/, '').replace(/^\/+/, '');
        const cleanUrl2 = url2 && url2.replace(/^https?:\/\/[^\/]+/, '').replace(/^\/+/, '');

        if (cleanUrl1 === cleanUrl2) return true;

        // Handle placeholder URLs - be more specific
        if ((url1.includes('placeholder') && url2.includes('placeholder')) ||
            (url1.includes('/static/images/') && url2.includes('/static/images/'))) {
            return url1 === url2; // Require exact match for placeholders
        }

        // Handle app_data paths - be more specific about filename matching
        if (url1.includes('/app_data/') || url2.includes('/app_data/')) {
            const getFilename = (path: string) => path.split('/').pop() || '';
            const filename1 = getFilename(url1);
            const filename2 = getFilename(url2);
            if (filename1 === filename2 && filename1 !== '' && filename1.length > 10) { // Ensure significant filename
                return true;
            }
        }

        // Extract and compare filenames for other URLs - be more restrictive
        const getFilename = (path: string) => path.split('/').pop() || '';
        const filename1 = getFilename(url1);
        const filename2 = getFilename(url2);

        if (filename1 === filename2 && filename1 !== '' && filename1.length > 10) { // Ensure significant filename
            return true;
        }

        return false; // Remove the overly permissive substring matching
    };

    /**
     * Finds and processes images in the DOM, making them editable
     */
    const findAndProcessImages = () => {
        if (!containerRef.current) return;

        const imgElements = containerRef.current.querySelectorAll('img:not([data-editable-processed])');
        const svgElements = containerRef.current.querySelectorAll('svg:not([data-editable-processed])');
        const newEditableElements: EditableElement[] = [];

        imgElements.forEach((img, index) => {
            const htmlImg = img as HTMLImageElement;
            const src = htmlImg.src;

            if (src) {
                const result = findBestDataPath(src, htmlImg, slideData);

                if (result) {
                    const { path: dataPath, type, data } = result;

                    // Mark as processed to prevent re-processing
                    htmlImg.setAttribute('data-editable-processed', 'true');

                    // Add a unique identifier to help with debugging
                    htmlImg.setAttribute('data-editable-id', `${slideIndex}-${type}-${dataPath}-${index}`);

                    const editableElement: EditableElement = {
                        id: `${slideIndex}-${type}-${dataPath}-${index}`,
                        type,
                        src,
                        dataPath,
                        data,
                        element: htmlImg
                    };

                    newEditableElements.push(editableElement);

                    // Add click handler directly to the image
                    const clickHandler = (e: Event) => {
                        if (isArrangeMode) return;
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveEditor(editableElement);
                    };

                    htmlImg.addEventListener('click', clickHandler);

                    const itemIndex = parseInt(`${slideIndex}-${type}-${dataPath}-${index}`.split('-').pop() || '0');
                    const propertiesData = properties?.[itemIndex];

                    // Add hover effects without changing layout
                    htmlImg.style.cursor = 'pointer';
                    htmlImg.style.transition = 'opacity 0.2s, transform 0.2s';
                    htmlImg.style.objectFit = propertiesData?.initialObjectFit;
                    htmlImg.style.objectPosition = `${propertiesData?.initialFocusPoint?.x}% ${propertiesData?.initialFocusPoint?.y}%`;

                    const mouseEnterHandler = () => {
                        htmlImg.style.opacity = '0.8';

                    };

                    const mouseLeaveHandler = () => {
                        htmlImg.style.opacity = '1';

                    };

                    htmlImg.addEventListener('mouseenter', mouseEnterHandler);
                    htmlImg.addEventListener('mouseleave', mouseLeaveHandler);

                    // Store cleanup functions
                    (htmlImg as any)._editableCleanup = () => {
                        htmlImg.removeEventListener('click', clickHandler);
                        htmlImg.removeEventListener('mouseenter', mouseEnterHandler);
                        htmlImg.removeEventListener('mouseleave', mouseLeaveHandler);
                        htmlImg.style.cursor = '';
                        htmlImg.style.transition = '';
                        htmlImg.style.opacity = '';
                        htmlImg.style.transform = '';
                        htmlImg.removeAttribute('data-editable-processed');
                    };
                }
            }
        });
        
        // Process SVG icons
        svgElements.forEach((svg, index) => {
            const svgEl = svg as SVGElement;
            const wrapperWithUrl = (svgEl as unknown as HTMLElement).closest('[data-path]') as HTMLElement | null;
            const src = wrapperWithUrl?.getAttribute('data-path') || '';

            if (src) {
                const result = findBestDataPath(src, svgEl, slideData);

                if (result && result.type === 'icon') {
                    const { path: dataPath, data } = result;

                    // Mark as processed to prevent re-processing
                    svgEl.setAttribute('data-editable-processed', 'true');

                    // Add a unique identifier to help with debugging
                    svgEl.setAttribute('data-editable-id', `${slideIndex}-icon-${dataPath}-svg-${index}`);

                    const editableElement: EditableElement = {
                        id: `${slideIndex}-icon-${dataPath}-svg-${index}`,
                        type: 'icon',
                        src,
                        dataPath,
                        data,
                        element: svgEl
                    };

                    newEditableElements.push(editableElement);

                    // Add click handler directly to the svg
                    const clickHandler = (e: Event) => {
                        if (isArrangeMode) return;
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveEditor(editableElement);
                    };

                    svgEl.addEventListener('click', clickHandler);

                    // Add hover effects without changing layout
                    (svgEl as unknown as HTMLElement).style.cursor = 'pointer';
                    (svgEl as unknown as HTMLElement).style.transition = 'opacity 0.2s, transform 0.2s';

                    const mouseEnterHandler = () => {
                        (svgEl as unknown as HTMLElement).style.opacity = '0.8';
                    };

                    const mouseLeaveHandler = () => {
                        (svgEl as unknown as HTMLElement).style.opacity = '1';
                    };

                    svgEl.addEventListener('mouseenter', mouseEnterHandler as any);
                    svgEl.addEventListener('mouseleave', mouseLeaveHandler as any);

                    // Store cleanup functions
                    (svgEl as any)._editableCleanup = () => {
                        svgEl.removeEventListener('click', clickHandler);
                        svgEl.removeEventListener('mouseenter', mouseEnterHandler as any);
                        svgEl.removeEventListener('mouseleave', mouseLeaveHandler as any);
                        (svgEl as unknown as HTMLElement).style.cursor = '';
                        (svgEl as unknown as HTMLElement).style.transition = '';
                        (svgEl as unknown as HTMLElement).style.opacity = '';
                        (svgEl as unknown as HTMLElement).style.transform = '';
                        svgEl.removeAttribute('data-editable-processed');
                    };
                }
            }
        });


        setEditableElements(prev => [...prev, ...newEditableElements]);
    };

    /**
     * Cleanup function to remove event listeners and reset styles
     */
    const cleanupElements = () => {
        editableElements.forEach(({ element }) => {
            if ((element as any)._editableCleanup) {
                (element as any)._editableCleanup();
            }
        });
        setEditableElements([]);
    };

    // Wait for LoadableComponent to render and then process images
    useEffect(() => {
        const timer = setTimeout(() => {
            findAndProcessImages();
            applyArrangementToAllElements();
        }, 400);

        return () => {
            clearTimeout(timer);
            cleanupElements();
        };
    }, [slideData, children, isArrangeMode]);

    useEffect(() => {
        applyArrangementToAllElements();
    }, [properties, slideData]);

    useEffect(() => {
        removeArrangeListeners();
        if (isArrangeMode) {
            setupArrangeMode();
        }

        return () => {
            removeArrangeListeners();
        };
    }, [isArrangeMode, properties, slideData]);

    useEffect(() => {
        if (!arrangeCommand || !arrangeCommand.type) return;
        if (arrangeCommand.type === 'reset') {
            applyArrangementToAllElements();
        }
    }, [arrangeCommand?.nonce]);

    // Re-run when container content changes
    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new MutationObserver((mutations) => {
            const hasNewMedia = mutations.some(mutation =>
                Array.from(mutation.addedNodes).some(node =>
                    node.nodeType === Node.ELEMENT_NODE &&
                    (
                        (node as Element).tagName === 'IMG' ||
                        (node as Element).tagName === 'SVG' ||
                        (node as Element).querySelector('img:not([data-editable-processed]), svg:not([data-editable-processed])')
                    )
                )
            );

            if (hasNewMedia) {
                setTimeout(findAndProcessImages, 100);
            }
        });

        observer.observe(containerRef.current, {
            childList: true,
            subtree: true
        });

        return () => observer.disconnect();
    }, [slideData, isArrangeMode]);

    /**
     * Handles closing the active editor
     */
    const handleEditorClose = () => {
        setActiveEditor(null);
    };

    /**
     * Handles image change from ImageEditor
     */
    const handleImageChange = (newImageUrl: string, prompt?: string) => {
        if (activeEditor && activeEditor.element) {


            // Update the DOM element immediately for visual feedback
            (activeEditor.element as HTMLImageElement).src = newImageUrl;

            // Update Redux store
            dispatch(updateSlideImage({
                slideIndex,
                dataPath: activeEditor.dataPath,
                imageUrl: newImageUrl,
                prompt: prompt || activeEditor.data?.__image_prompt__ || ''
            }));
            setActiveEditor(null);
        }
    };
    /**
     * Handles icon change from IconsEditor
     */
    const handleIconChange = (newIconUrl: string, query?: string) => {
        console.log('newIconUrl', newIconUrl);
        if (activeEditor && activeEditor.element) {
            // Update Redux store
            dispatch(updateSlideIcon({
                slideIndex,
                dataPath: activeEditor.dataPath,
                iconUrl: newIconUrl,
                query: query || activeEditor.data?.__icon_query__ || ''
            }));



        }
    };
    const handleFocusPointClick = (propertiesData: any) => {

        const id = activeEditor?.id;
        const editableId = document.querySelector(`[data-editable-id="${id}"]`);

        if (editableId) {
            const editableElement = editableId as HTMLImageElement;
            editableElement.style.objectFit = propertiesData.initialObjectFit;
            editableElement.style.objectPosition = `${propertiesData.initialFocusPoint.x}% ${propertiesData.initialFocusPoint.y}%`;
        }

        dispatch(updateImageProperties({
            slideIndex,
            itemIndex: parseInt(activeEditor?.id.split('-').pop() || '0'),
            properties: propertiesData
        }));

    };

    return (
        <div ref={containerRef} className="editable-layout-wrapper w-full ">
            {children}

            {/* Render ImageEditor when an image is being edited */}
            {activeEditor && activeEditor.type === 'image' && (
                <ImageEditor
                    initialImage={activeEditor.src}
                    slideIndex={slideIndex}
                    promptContent={activeEditor.data?.__image_prompt__ || ''}
                    imageIdx={0}
                    properties={null}
                    onClose={handleEditorClose}
                    onImageChange={handleImageChange}
                    onFocusPointClick={handleFocusPointClick}
                >
                </ImageEditor>
            )}

            {/* Render IconsEditor when an icon is being edited */}
            {activeEditor && activeEditor.type === 'icon' && (
                <IconsEditor
                    icon_prompt={activeEditor.data?.__icon_query__ ? [activeEditor.data.__icon_query__] : []}
                    onClose={handleEditorClose}
                    onIconChange={handleIconChange}
                >

                </IconsEditor>
            )}
        </div>
    );
};

export default EditableLayoutWrapper;