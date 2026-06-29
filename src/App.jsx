import { useStore } from './store/useStore'
import './index.css'

export default function App() {
  const { language } = useStore()
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] p-12">
      <h1 className="text-4xl font-bold text-white">Auto Lavage test - lang: {language}</h1>
      <p className="text-cyan-400 mt-4">Store + CSS + React render OK</p>
    </div>
  )
}
