import { motion } from 'framer-motion'
import { useStore } from '../store/useStore'
import { Droplets, Sparkles, Wrench, Shield, CarFront, Wind, ArrowUpRight } from 'lucide-react'

const services = [
  {
    key: 'exterior',
    icon: Droplets,
    accent: 'from-cyan-500/20 to-blue-600/20',
    iconColor: 'text-cyan-400',
  },
  {
    key: 'interior',
    icon: Sparkles,
    accent: 'from-blue-500/20 to-indigo-600/20',
    iconColor: 'text-blue-400',
  },
  {
    key: 'detailing',
    icon: Wrench,
    accent: 'from-purple-500/20 to-pink-600/20',
    iconColor: 'text-purple-400',
  },
  {
    key: 'protection',
    icon: Shield,
    accent: 'from-emerald-500/20 to-teal-600/20',
    iconColor: 'text-emerald-400',
  },
  {
    key: 'polish',
    icon: CarFront,
    accent: 'from-amber-500/20 to-orange-600/20',
    iconColor: 'text-amber-400',
  },
  {
    key: 'perfume',
    icon: Wind,
    accent: 'from-rose-500/20 to-red-600/20',
    iconColor: 'text-rose-400',
  },
]

export default function Services() {
  const { t } = useStore()

  return (
    <section id="services" className="relative py-32 px-6 lg:px-10 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-cyan-400/20 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300 mb-6">
            {t('services.label')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--text-primary)]">
            {t('services.title')}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8 }}
                className="group relative glass rounded-3xl p-8 border border-white/5 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden cursor-pointer"
                style={{ background: 'var(--bg-card)' }}
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10`}
                />

                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-px rounded-3xl bg-[var(--bg-card)]" />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/0 via-cyan-400/30 to-blue-500/0 p-px">
                    <div className="w-full h-full rounded-3xl bg-[var(--bg-card)]" />
                  </div>
                </div>

                {/* Icon with animation */}
                <div className="relative mb-6 inline-block">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center border border-white/5 group-hover:border-cyan-400/30 transition-colors`}
                  >
                    <Icon className={`w-8 h-8 ${service.iconColor}`} strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-semibold mb-3 text-[var(--text-primary)]">
                  {t(`services.items.${service.key}.title`)}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {t(`services.items.${service.key}.desc`)}
                </p>

                {/* Feature list */}
                <ul className="space-y-2">
                  {t(`services.items.${service.key}.features`, []).map((feature, fi) => (
                    <li
                      key={fi}
                      className="flex items-center gap-2 text-xs text-[var(--text-muted)]"
                    >
                      <span className={`w-1 h-1 rounded-full ${service.iconColor.replace('text-', 'bg-')}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <div className="absolute top-6 right-6 rtl:right-auto rtl:left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 group-hover:-translate-y-0 translate-x-2 -translate-y-2">
                  <ArrowUpRight className="w-5 h-5 text-cyan-400" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}