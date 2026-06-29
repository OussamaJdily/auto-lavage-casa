import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { useStore } from '../store/useStore'

const galleryItems = [
  { id: 1, span: 'row-span-2', gradient: 'from-slate-700 via-slate-900 to-black', title: 'Mercedes S-Class', category: 'Detailing' },
  { id: 2, span: '', gradient: 'from-blue-700 via-cyan-600 to-blue-900', title: 'Premium Wash', category: 'Exterior' },
  { id: 3, span: '', gradient: 'from-zinc-700 via-zinc-800 to-black', title: 'Interior Premium', category: 'Interior' },
  { id: 4, span: '', gradient: 'from-slate-600 via-blue-800 to-slate-900', title: 'Porsche 911', category: 'Detailing' },
  { id: 5, span: 'row-span-2', gradient: 'from-cyan-800 via-blue-900 to-black', title: 'BMW M4', category: 'Detailing' },
  { id: 6, span: '', gradient: 'from-neutral-800 via-neutral-900 to-black', title: 'Polishing', category: 'Process' },
  { id: 7, span: '', gradient: 'from-slate-800 via-blue-950 to-slate-900', title: 'Final Touch', category: 'Premium' },
  { id: 8, span: '', gradient: 'from-gray-700 via-gray-900 to-black', title: 'Ceramic Coat', category: 'Protection' },
  { id: 9, span: '', gradient: 'from-blue-900 via-slate-900 to-black', title: 'Range Rover', category: 'SUV' },
]

export default function Gallery() {
  const { t } = useStore()
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="relative py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-cyan-400/20 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300 mb-6">
            {t('gallery.label')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelected(item)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer glass border border-white/5 hover:border-cyan-400/30 transition-all ${item.span}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_50%)]" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full glass border border-white/20 backdrop-blur-xl flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all">
                <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-300 mb-1">
                  {item.category}
                </div>
                <div className="font-display font-semibold text-white text-lg">
                  {item.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 cursor-pointer"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className={`max-w-4xl w-full aspect-[4/3] rounded-3xl bg-gradient-to-br ${selected.gradient} relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="absolute bottom-8 left-8">
              <div className="text-xs uppercase tracking-[0.4em] text-cyan-300 mb-2">
                {selected.category}
              </div>
              <div className="font-display text-4xl font-bold text-white">
                {selected.title}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}