import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { languages, translations } from '../i18n/translations'

export const useStore = create(
  persist(
    (set, get) => ({
      // Theme
      theme: 'dark',
      toggleTheme: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),

      // Language
      language: 'fr',
      setLanguage: (lang) => {
        const dir = languages[lang]?.dir || 'ltr'
        document.documentElement.lang = lang
        document.documentElement.dir = dir
        set({ language: lang })
      },

      // UI
      menuOpen: false,
      setMenuOpen: (v) => set({ menuOpen: v }),

      scrolled: false,
      setScrolled: (v) => set({ scrolled: v }),

      // Cursor
      cursorPos: { x: 0, y: 0 },
      setCursorPos: (x, y) => set({ cursorPos: { x, y } }),

      // Gallery filter
      galleryFilter: 'all',
      setGalleryFilter: (f) => set({ galleryFilter: f }),

      // Helpers
      t: (key) => {
        const lang = get().language
        const keys = key.split('.')
        let value = translations[lang]
        for (const k of keys) {
          if (value && typeof value === 'object') value = value[k]
          else return key
        }
        return value ?? key
      },
    }),
    {
      name: 'auto-lavage-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ theme: state.theme, language: state.language }),
    }
  )
)

// Apply theme + direction on initial load
const applyInitial = () => {
  const stored = JSON.parse(localStorage.getItem('auto-lavage-storage') || '{}')
  const theme = stored.state?.theme || 'dark'
  const lang = stored.state?.language || 'fr'
  document.documentElement.classList.toggle('light', theme === 'light')
  document.documentElement.lang = lang
  document.documentElement.dir = languages[lang]?.dir || 'ltr'
}
applyInitial()

// React to theme changes
useStore.subscribe((state) => {
  document.documentElement.classList.toggle('light', state.theme === 'light')
  document.documentElement.dir = languages[state.language]?.dir || 'ltr'
  document.documentElement.lang = state.language
})