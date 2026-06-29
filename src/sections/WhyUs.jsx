import { motion } from 'framer-motion'
import { Check, Award, Clock, Heart, Users } from 'lucide-react'
import { useStore } from '../store/useStore'

const reasons = [
  { icon: Award, key: 'pro' },
  { icon: Users, key: 'team' },
  { icon: Heart, key: 'result' },
  { icon: Clock, key: 'fast' },
]

export default function WhyUs() {
  const { t } = useStore()

  return (
    <section id="whyUs" className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square max-w-lg mx-auto w-full order-2 lg:order-1"
        >
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden glass border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,212,255,0.2),transparent_50%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="relative w-64 h-64"
              >
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/30" />
                <div className="absolute inset-8 rounded-full border-2 border-dashed border-blue-400/30" />
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-2xl opacity-50" />
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 flex items-center justify-center shadow-2xl">
                  <Award className="w-16 h-16 text-white" strokeWidth={1.5} />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-cyan-400/20 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300 mb-6">
            {t('whyUs.label')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
            {t('whyUs.title')}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-12 leading-relaxed">
            {t('whyUs.subtitle')}
          </p>

          <div className="space-y-4">
            {reasons.map((reason, i) => {
              const Icon = reason.icon
              return (
                <motion.div
                  key={reason.key}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center gap-5 p-5 rounded-2xl glass border border-white/5 hover:border-cyan-400/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Check className="w-4 h-4 text-emerald-400" strokeWidth={3} />
                      <h3 className="font-semibold text-[var(--text-primary)]">
                        {t(`whyUs.points.${reason.key}.title`)}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--text-muted)]">
                      {t(`whyUs.points.${reason.key}.desc`)}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}