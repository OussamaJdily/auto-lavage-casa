import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  className = '',
  ...rest
}) {
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary:
      'relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_10px_40px_-10px_rgba(0,180,255,0.6)] hover:shadow-[0_20px_60px_-10px_rgba(0,180,255,0.8)]',
    secondary:
      'relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 text-[var(--text-primary)] hover:bg-white/10 hover:border-white/20',
    outline:
      'relative overflow-hidden border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400',
    ghost: 'relative text-[var(--text-primary)] hover:bg-white/5',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        group inline-flex items-center justify-center gap-2
        font-display font-semibold rounded-full
        transition-all duration-300 ease-out
        ${sizes[size]}
        ${variants[variant]}
        ${className}
      `}
      {...rest}
    >
      {variant === 'primary' && (
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ x: '-100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
        {children}
        {Icon && iconPosition === 'right' && (
          <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
        )}
      </span>
    </motion.button>
  )
}