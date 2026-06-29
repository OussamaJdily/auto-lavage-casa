import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [hidden, setHidden] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mobile = window.matchMedia('(pointer: coarse)').matches
    setIsMobile(mobile)
    if (mobile) return

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }
    const leave = () => setHidden(true)
    const enter = () => setHidden(false)

    const onOver = (e) => {
      const target = e.target
      if (target.closest('a, button, [data-cursor="hover"], input, textarea, select, [role="button"]')) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    window.addEventListener('mouseenter', enter)
    window.addEventListener('mouseover', onOver)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
      window.removeEventListener('mouseenter', enter)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference"
        animate={{
          x: position.x - (hovering ? 20 : 6),
          y: position.y - (hovering ? 20 : 6),
          scale: hovering ? 1 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.3 }}
      >
        <div className={`rounded-full border-2 border-white transition-all duration-200 ${hovering ? 'w-10 h-10 bg-white/20' : 'w-3 h-3'}`} />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100]"
        animate={{
          x: position.x - 2,
          y: position.y - 2,
          opacity: hidden ? 0 : 0.6,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 30, mass: 0.1 }}
      >
        <div className="w-1 h-1 rounded-full bg-cyan-400" />
      </motion.div>
    </>
  )
}