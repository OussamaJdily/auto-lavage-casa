import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle, Navigation, Clock3, CarFront } from 'lucide-react'
import { useStore } from '../store/useStore'

export default function Location() {
  const { t } = useStore()

  return (
    <section id="contact" className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-cyan-400/20 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
            {t('location.label')}
          </span>

          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
              {t('location.title')}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl">
              {t('location.subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl glass border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="font-medium text-[var(--text-primary)]">Casablanca, Morocco</div>
                <div className="text-sm text-[var(--text-muted)]">Quartier premium · Service sur rendez-vous</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl glass border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="font-medium text-[var(--text-primary)]">+212 6XX XX XX XX</div>
                <div className="text-sm text-[var(--text-muted)]">Réponse rapide WhatsApp et téléphone</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl glass border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0">
                <Clock3 className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="font-medium text-[var(--text-primary)]">Lun - Sam · 9h00 - 20h00</div>
                <div className="text-sm text-[var(--text-muted)]">Service premium au cœur de Casablanca</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[var(--text-primary)] font-medium hover:bg-white/10 transition-colors"
            >
              <Navigation className="w-4 h-4" />
              {t('location.cta')}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="glass border border-white/10 rounded-3xl p-4 shadow-2xl">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-gradient-to-br from-slate-800 via-slate-900 to-black">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,212,255,0.15),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.18),transparent_40%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 rounded-2xl glass border border-cyan-400/20 flex items-center justify-center mb-6">
                  <CarFront className="w-10 h-10 text-cyan-300" />
                </div>
                <h3 className="font-display text-3xl font-bold text-white mb-3">Auto Lavage Casablanca</h3>
                <p className="text-white/70 max-w-md mb-8">
                  Carte Google Maps premium placeholder. Intégration réelle possible selon votre adresse exacte.
                </p>
                <div className="grid grid-cols-3 gap-3 w-full max-w-sm text-xs text-white/70">
                  <div className="glass border border-white/10 rounded-xl p-3">Parking</div>
                  <div className="glass border border-white/10 rounded-xl p-3">Wifi</div>
                  <div className="glass border border-white/10 rounded-xl p-3">Salle attente</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}