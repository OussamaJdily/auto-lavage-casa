import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Globe, Droplets, ChevronDown } from 'lucide-react'
import { useStore } from '../store/useStore'
import { languages } from '../i18n/translations'

export default function Navbar({ scrolled }) {
  const { t, language, setLanguage, theme, toggleTheme, menuOpen, setMenuOpen } = useStore()
  const [langOpen, setLangOpen] = useState(false)

  const navLinks = [
    { id: 'services', label: t('nav.services') },
    { id: 'pricing', label: t('nav.pricing') },
    { id: 'gallery', label: t('nav.gallery') },
    { id: 'whyus', label: t('nav.whyUs') },
    { id: 'contact', label: t('nav.contact') },
  ]

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[var(--bg-secondary)]/80 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/60 transition-shadow">
              <Droplets className="w-5 h-5 text-white" strokeWidth={2.5} />
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="leading-none">
              <div className="font-display font-extrabold text-[15px] tracking-tight text-[var(--text-primary)]">
                AUTO LAVAGE
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-cyan-400 font-semibold">
                Casablanca
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="relative px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Language */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm font-medium text-[var(--text-secondary)]"
                aria-label="Language"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{language.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-40 rounded-xl bg-[var(--bg-card)] backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl"
                  >
                    {Object.values(languages).map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLanguage(l.code); setLangOpen(false) }}
                        className={`w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-white/5 transition-colors ${
                          language === l.code ? 'text-cyan-400' : 'text-[var(--text-secondary)]'
                        }`}
                      >
                        <span>{l.name}</span>
                        {language === l.code && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors text-[var(--text-secondary)]"
              aria-label="Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* CTA */}
            <button
              onClick={() => scrollTo('booking')}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60 hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              {t('nav.book')}
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-[var(--bg-primary)]/95 backdrop-blur-xl pt-24"
          >
            <nav className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.id)}
                  className="text-2xl font-display font-semibold text-[var(--text-primary)] hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => scrollTo('booking')}
                className="mt-4 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/40"
              >
                {t('nav.book')}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}