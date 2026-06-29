import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { ArrowRight, Sparkles, MapPin, Star, Calendar } from 'lucide-react'
import { useStore } from '../store/useStore'
import Button from '../components/Button'

const HeroCar = lazy(() => import('../canvas/HeroCar'))
const WaterBackground = lazy(() => import('../canvas/WaterBackground'))

export default function Hero() {
  const { t } = useStore()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center pt-20"
    >
      {/* 3D Water background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <Suspense fallback={null}>
          <WaterBackground />
        </Suspense>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/80 via-transparent to-transparent rtl:bg-gradient-to-l pointer-events-none" />

      {/* Mouse-following glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.4) 0%, transparent 60%)',
        }}
        animate={{
          x: typeof window !== 'undefined' ? [window.innerWidth * 0.2, window.innerWidth * 0.5, window.innerWidth * 0.2] : 0,
          y: [200, 400, 200],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Content */}
        <div className="text-center lg:text-start rtl:lg:text-right">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-400/20 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-xs font-medium text-cyan-300 tracking-wider uppercase">
              {t('hero.badge')}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            <span className="block text-[var(--text-primary)]">{t('hero.title')}</span>
            <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {t('hero.titleAccent')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-12"
          >
            <Button
              size="lg"
              icon={Calendar}
              onClick={() => scrollTo('booking')}
            >
              {t('hero.cta1')}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              icon={ArrowRight}
              onClick={() => scrollTo('services')}
            >
              {t('hero.cta2')}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
          >
            {[
              { value: '15K+', label: t('hero.stat1') },
              { value: '4.9', label: t('hero.stat2'), icon: Star },
              { value: '24/7', label: t('hero.stat3') },
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-start rtl:lg:text-right">
                <div className="flex items-center justify-center lg:justify-start rtl:lg:justify-end gap-1 font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                  {stat.value}
                  {stat.icon && <stat.icon className="w-5 h-5 text-yellow-400 fill-yellow-400" />}
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - 3D Car */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative aspect-square max-w-xl mx-auto w-full hidden md:block"
        >
          {/* Glow rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 rounded-full border border-cyan-400/20 animate-pulse" />
            <div className="absolute w-96 h-96 rounded-full border border-cyan-400/10" />
          </div>

          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-cyan-400 animate-pulse" />
              </div>
            }
          >
            <HeroCar />
          </Suspense>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-10 right-10 rtl:right-auto rtl:left-10 glass rounded-2xl p-3 flex items-center gap-2 border border-white/10"
          >
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                Premium
              </div>
              <div className="text-xs font-semibold text-[var(--text-primary)]">Detailing Pro</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-10 left-10 rtl:left-auto rtl:right-10 glass rounded-2xl p-3 flex items-center gap-2 border border-white/10"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-blue-300" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                Casablanca
              </div>
              <div className="text-xs font-semibold text-[var(--text-primary)]">Maarif</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[var(--text-muted)] flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}