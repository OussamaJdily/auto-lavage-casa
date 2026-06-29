import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'
import { useStore } from '../store/useStore'

export default function BeforeAfter() {
  const { t } = useStore()
  const [active, setActive] = useState(55)
  const x = useMotionValue(active)
  const clipPath = useTransform(x, (value) => `inset(0 ${100 - value}% 0 0)`)

  return (
    <section className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-cyan-400/20 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300 mb-6">
            {t('beforeAfter.label')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            {t('beforeAfter.title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-[520px] rounded-[2rem] overflow-hidden glass border border-white/10 shadow-2xl"
        >
          {/* Before */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-900 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.05),transparent_30%)]" />
            <div className="absolute bottom-10 left-10 rtl:left-auto rtl:right-10 text-white">
              <div className="text-xs uppercase tracking-[0.4em] opacity-70 mb-2">Before</div>
              <div className="text-3xl font-display font-bold">Dirty car</div>
            </div>
          </div>

          {/* After */}
          <motion.div
            style={{ clipPath }}
            className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-white to-blue-100"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.9),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(0,212,255,0.15),transparent_30%)]" />
            <div className="absolute bottom-10 right-10 rtl:right-auto rtl:left-10 text-slate-900 text-right rtl:text-left">
              <div className="text-xs uppercase tracking-[0.4em] opacity-70 mb-2">After</div>
              <div className="text-3xl font-display font-bold">Premium clean car</div>
            </div>
          </motion.div>

          {/* Slider handle */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center">
            <div
              className="relative w-full h-full"
              onPointerMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const value = Math.max(5, Math.min(95, ((e.clientX - rect.left) / rect.width) * 100))
                setActive(value)
                x.set(value)
              }}
            >
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                style={{ left: `${active}%` }}
              />
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                style={{ left: `${active}%`, x: '-50%' }}
                onDrag={(e, info) => {
                  const rect = e.currentTarget.parentElement.getBoundingClientRect()
                  const value = Math.max(5, Math.min(95, ((info.point.x - rect.left) / rect.width) * 100))
                  setActive(value)
                  x.set(value)
                }}
                className="absolute top-1/2 -translate-y-1/2 w-16 h-16 rounded-full glass border border-white/30 backdrop-blur-xl flex items-center justify-center cursor-ew-resize"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <div className="w-1.5 h-6 bg-white rounded-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}