import { motion } from 'framer-motion'
import { Check, Sparkles, Crown } from 'lucide-react'
import { useStore } from '../store/useStore'

export default function Pricing() {
  const { t } = useStore()
  const plans = t('pricing.plans', [])

  return (
    <section id="pricing" className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-cyan-400/20 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300 mb-6">
            {t('pricing.label')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {plans.map((plan, i) => {
            const isPopular = plan.popular
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{ y: -10 }}
                className={`relative rounded-3xl p-8 ${
                  isPopular
                    ? 'glass border-2 border-cyan-400/40 scale-100 lg:scale-105 shadow-[0_30px_80px_-20px_rgba(0,212,255,0.4)] z-10'
                    : 'glass border border-white/10'
                }`}
                style={{ background: 'var(--bg-card)' }}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider text-white shadow-lg flex items-center gap-1.5">
                    <Crown className="w-3.5 h-3.5" />
                    {t('pricing.popular')}
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 mb-4">
                    <Sparkles className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] min-h-[2.5rem]">
                    {plan.description}
                  </p>
                </div>

                <div className="text-center mb-8 pb-8 border-b border-white/10">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-display text-5xl font-bold text-[var(--text-primary)]">
                      {plan.price}
                    </span>
                    <span className="text-lg text-[var(--text-muted)]">{plan.currency}</span>
                  </div>
                  <div className="text-xs text-[var(--text-muted)] mt-1 uppercase tracking-wider">
                    {t('pricing.perService')}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                      <div className={`mt-0.5 w-5 h-5 rounded-full ${isPopular ? 'bg-cyan-400/20' : 'bg-white/5'} flex items-center justify-center flex-shrink-0`}>
                        <Check className={`w-3 h-3 ${isPopular ? 'text-cyan-400' : 'text-white/70'}`} strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                    isPopular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_10px_40px_-10px_rgba(0,180,255,0.6)] hover:scale-[1.02]'
                      : 'bg-white/5 hover:bg-white/10 text-[var(--text-primary)] border border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {t('pricing.cta')}
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}