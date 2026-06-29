import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Clock, MessageSquare, Phone, User, CheckCircle2, Send } from 'lucide-react'
import { useStore } from '../store/useStore'

export default function Booking() {
  const { t } = useStore()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'exterior',
    date: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const services = t('booking.services', [])

  return (
    <section id="booking" className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-cyan-400/20 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300 mb-6">
            {t('booking.label')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
            {t('booking.title')}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t('booking.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
          style={{ background: 'var(--bg-card)' }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] font-medium flex items-center gap-2">
                  <User className="w-3.5 h-3.5" /> {t('booking.name')}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400/50 focus:bg-white/[0.07] outline-none transition-all text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/50"
                  placeholder={t('booking.namePlaceholder')}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] font-medium flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" /> {t('booking.phone')}
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400/50 focus:bg-white/[0.07] outline-none transition-all text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/50"
                  placeholder="+212 6XX XXX XXX"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] font-medium flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" /> {t('booking.service')}
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400/50 outline-none transition-all text-[var(--text-primary)] cursor-pointer"
                >
                  {services.map((s) => (
                    <option key={s.value} value={s.value} className="bg-zinc-900">
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] font-medium flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" /> {t('booking.date')}
                </label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400/50 outline-none transition-all text-[var(--text-primary)]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] font-medium flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5" /> {t('booking.message')}
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400/50 focus:bg-white/[0.07] outline-none transition-all text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/50 resize-none"
                placeholder={t('booking.messagePlaceholder')}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="relative w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm uppercase tracking-[0.2em] overflow-hidden group shadow-[0_10px_40px_-10px_rgba(0,180,255,0.6)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    {t('booking.success')}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t('booking.submit')}
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}