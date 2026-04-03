import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { setPresentationData } from "@/store/slices/presentationGeneration";
import { DashboardApi } from '../../services/api/dashboard';
import { clearHistory } from "@/store/slices/undoRedoSlice";
import { useFontLoader } from "../../hooks/useFontLoad";
import { Theme } from "../../services/api/types";


export const usePresentationData = (
  presentationId: string,
  setLoading: (loading: boolean) => void,
  setError: (error: boolean) => void
) => {
  const dispatch = useDispatch();

  const applyTheme = async (theme: Theme) => {
    const element = document.getElementById('presentation-slides-wrapper')
    if (!element) return;
    const themeData = (theme as any)?.data ?? (theme as any);
    if (!themeData || !themeData.colors) { return; }
    if (!themeData.colors['graph_0']) { return; }
    const cssVariables = {
      '--primary-color': themeData.colors['primary'],
      '--background-color': themeData.colors['background'],
      '--card-color': themeData.colors['card'],
      '--stroke': themeData.colors['stroke'],
      '--primary-text': themeData.colors['primary_text'],
      '--background-text': themeData.colors['background_text'],
      '--graph-0': themeData.colors['graph_0'],
      '--graph-1': themeData.colors['graph_1'],
      '--graph-2': themeData.colors['graph_2'],
      '--graph-3': themeData.colors['graph_3'],
      '--graph-4': themeData.colors['graph_4'],
      '--graph-5': themeData.colors['graph_5'],
      '--graph-6': themeData.colors['graph_6'],
      '--graph-7': themeData.colors['graph_7'],
      '--graph-8': themeData.colors['graph_8'],
      '--graph-9': themeData.colors['graph_9'],
    }
    Object.entries(cssVariables).forEach(([key, value]) => {
      element.style.setProperty(key, value)
    })
    if (themeData.fonts?.textFont?.name && themeData.fonts?.textFont?.url) {
      useFontLoader({ [themeData.fonts.textFont.name]: themeData.fonts.textFont.url })
    }

    // Apply fonts to preview container
    if (themeData.fonts?.textFont?.name) {
      element.style.setProperty('font-family', `"${themeData.fonts.textFont.name}"`)
      element.style.setProperty('--heading-font-family', `"${themeData.fonts.textFont.name}"`)
      element.style.setProperty('--body-font-family', `"${themeData.fonts.textFont.name}"`)
    }
    // Update the Presentation content with theme
  }

  const fetchUserSlides = useCallback(async () => {
    try {
      const data = await DashboardApi.getPresentation(presentationId);
      if (data) {
        dispatch(setPresentationData(data));
        dispatch(clearHistory());
        setLoading(false);
      }
      if (data?.theme) {
        applyTheme(data.theme);
      }
    } catch (error) {
      setError(true);
      toast.error("Failed to load presentation");
      console.error("Error fetching user slides:", error);
      setLoading(false);
    }
  }, [presentationId, dispatch, setLoading, setError]);

  return {
    fetchUserSlides,
  };
};
