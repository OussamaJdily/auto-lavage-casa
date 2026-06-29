import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { useStore } from '../store/useStore'

export default function Footer() {
  const { t } = useStore()

  return (
    <footer className="relative px-6 lg:px-10 pt-20 pb-10 border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
                AL
              </div>
              <div>
                <div className="font-display font-bold text-xl text-white">Auto Lavage</div>
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">Casablanca Premium</div>
              </div>
            </div>
            <p className="text-sm text-white/60 max-w-sm">
              Luxury auto detailing, washing and protection for Casablanca customers who expect more.
            </p>
          </div>

          <div>
            <div className="font-semibold text-white mb-4">Navigation</div>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-cyan-300 transition-colors">Tarifs</a></li>
              <li><a href="#gallery" className="hover:text-cyan-300 transition-colors">Galerie</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white mb-4">Contact</div>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +212 6XX XX XX XX</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@autolavage-casablanca.ma</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Casablanca, Maroc</li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white mb-4">Social</div>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/15 transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/15 transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/15 transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between items-center pt-8 border-t border-white/10 text-xs text-white/40">
          <p>© 2026 Auto Lavage Casablanca. Tous droits réservés.</p>
          <a href="#top" className="inline-flex items-center gap-2 hover:text-cyan-300 transition-colors">
            Back to top <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  )
}