'use client'

import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react'
import { File, Paperclip, X } from 'lucide-react'
import { toast } from 'sonner'

interface SupportingDocProps {
    files: File[]
    onFilesChange: (files: File[]) => void
    accept?: string
    multiple?: boolean
}

const PDF_TYPES = ['.pdf']
const TEXT_TYPES = ['.txt']
const POWERPOINT_TYPES = ['.pptx']
const WORD_TYPES = ['.docx']

const ACCEPT_DEFAULT = [
    'application/pdf', 'text/plain',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    ...PDF_TYPES, ...TEXT_TYPES, ...POWERPOINT_TYPES, ...WORD_TYPES,
].join(',')
const ALLOWED_MIME_PREFIXES: string[] = []
const ALLOWED_MIME_TYPES = [
    'application/pdf', 'application/x-pdf', 'application/acrobat', 'applications/pdf', 'text/pdf',
    'application/vnd.pdf', 'text/plain',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
]
const ALLOWED_EXTENSIONS = [...PDF_TYPES, ...TEXT_TYPES, ...POWERPOINT_TYPES, ...WORD_TYPES]

const SupportingDoc = ({ files, onFilesChange, accept = ACCEPT_DEFAULT, multiple = true }: SupportingDocProps) => {
    const [isDragging, setIsDragging] = useState(false)
    const dragDepthRef = useRef(0)
    const [previewUrls, setPreviewUrls] = useState<(string | null)[]>([])
    const hasFiles = files.length > 0
    const filteredFiles = useMemo(() => files.filter(isAllowedFile), [files])

    useEffect(() => {
        const urls = filteredFiles.map((file) => (file.type.startsWith('image/') ? URL.createObjectURL(file) : null))
        setPreviewUrls(urls)
        return () => { urls.forEach((url) => { if (url) URL.revokeObjectURL(url) }) }
    }, [filteredFiles])

    const handleValidate = (filesToReview: File[]) => {
        const disallowed = filesToReview.filter((file) => !isAllowedFile(file))
        if (disallowed.length > 0) toast.error('Some files are not supported', { description: 'Only PDF, TXT, PPTX, and DOCX files are allowed.' })
    }

    const handleFilesSelected = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(e.target.files ?? [])
        if (selectedFiles.length === 0) return
        const nextFiles = multiple ? [...files, ...selectedFiles] : [selectedFiles[0]]
        const allowedFiles = nextFiles.filter(isAllowedFile)
        onFilesChange(allowedFiles)
        handleValidate(nextFiles)
        if (allowedFiles.length > files.length) toast.success('Files selected', { description: `${allowedFiles.length - files.length} file(s) have been added` })
        e.currentTarget.value = ''
    }

    const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        dragDepthRef.current = 0
        setIsDragging(false)
        const droppedFiles = Array.from(e.dataTransfer.files ?? [])
        if (droppedFiles.length === 0) return
        const nextFiles = multiple ? [...files, ...droppedFiles] : [droppedFiles[0]]
        const allowedFiles = nextFiles.filter(isAllowedFile)
        onFilesChange(allowedFiles)
        handleValidate(nextFiles)
        if (allowedFiles.length > files.length) toast.success('Files selected', { description: `${allowedFiles.length - files.length} file(s) have been added` })
    }

    const handleDragEnter = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        if (!Array.from(e.dataTransfer.types || []).includes('Files')) return
        dragDepthRef.current += 1
        setIsDragging(true)
    }

    const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        dragDepthRef.current = Math.max(0, dragDepthRef.current - 1)
        if (dragDepthRef.current === 0) setIsDragging(false)
    }

    return (
        <div className="space-y-2" data-testid="attachments-uploader">
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400 font-syne">
                    {hasFiles ? `${filteredFiles.length} attachment${filteredFiles.length > 1 ? 's' : ''}` : 'No attachments yet'}
                </p>
                <button type="button" onClick={() => hasFiles && onFilesChange([])} disabled={!hasFiles}
                    className={`text-sm font-medium font-syne ${!hasFiles ? 'cursor-not-allowed text-gray-300' : 'text-blue-300 hover:text-blue-200'}`}
                    data-testid="attachments-clear-button" aria-disabled={!hasFiles}>
                    Clear all
                </button>
            </div>
            <label
                className={`mt-1 block cursor-pointer rounded-xl border-2 border-dashed px-4 py-6 text-center transition-all duration-200 ${isDragging ? 'border-blue-400/50 bg-blue-500/10' : 'border-gray-200 hover:border-blue-400/40 hover:bg-blue-500/5'}`}
                onDragEnter={handleDragEnter}
                onDragOver={(e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'copy' }}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}>
                <input type="file" className="hidden" onChange={handleFilesSelected} accept={accept} multiple={multiple} data-testid="file-upload-input" />
                <div className="flex flex-col items-center gap-2">
                    <div className="p-2 rounded-lg bg-blue-500/15">
                        <Paperclip className="h-5 w-5 text-blue-300" />
                    </div>
                    <p className="text-sm font-medium text-gray-400 font-syne">
                        Drag and drop PDF, TXT, PPTX, DOCX, or <span className="text-blue-300">click to browse</span>
                    </p>
                </div>
            </label>

            {hasFiles && (
                <div className="mt-2">
                    <ul data-testid="file-list" className="grid grid-cols-1 gap-2 sm:grid-cols-2" aria-label="Attached files">
                        {filteredFiles.map((file, idx) => (
                            <li key={`${file.name}-${idx}`}
                                className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/50 px-3 py-2 transition-colors hover:bg-gray-50"
                                data-testid="attached-file-item">
                                {previewUrls[idx] ? (
                                    <img src={previewUrls[idx] as string} alt="Preview" className="h-10 w-10 flex-none rounded object-cover" />
                                ) : (
                                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                                        <File className="h-5 w-5" />
                                    </div>
                                )}
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-700 font-syne" title={file.name}>{file.name}</p>
                                    <p className="text-xs text-gray-400 font-syne">{formatFileSize(file.size)}</p>
                                </div>
                                <button type="button" onClick={() => onFilesChange(filteredFiles.filter((_, i) => i !== idx))}
                                    className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-lg text-blue-300 hover:bg-blue-500/10 hover:text-blue-200 transition-colors"
                                    aria-label={`Remove ${file.name}`} data-testid="remove-file-button">
                                    <X className="h-5 w-5" />
                                </button>
                            </li>
                        ))}
                    </ul>
                    {filteredFiles.length !== files.length && (
                        <p className="mt-2 text-xs text-amber-500 font-syne">Some files were skipped. Only PDF, TXT, PPTX, and DOCX files are supported.</p>
                    )}
                </div>
            )}
        </div>
    )
}

const formatFileSize = (bytes: number): string => {
    if (!bytes || bytes <= 0) return '0 KB'
    return `${(bytes / 1024).toFixed(1)} KB`
}

function isAllowedFile(file: File): boolean {
    const type = (file.type || '').toLowerCase()
    const name = (file.name || '').toLowerCase()
    const typeAllowed = ALLOWED_MIME_TYPES.includes(type) || ALLOWED_MIME_PREFIXES.some((prefix) => type.startsWith(prefix))
    if (typeAllowed) return true
    return ALLOWED_EXTENSIONS.some((ext) => name.endsWith(ext))
}

export default SupportingDoc
