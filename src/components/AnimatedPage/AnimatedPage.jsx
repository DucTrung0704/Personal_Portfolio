import { motion } from 'framer-motion';

const animations = {
  fadeSlideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  scaleFade: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
};

/**
 * Wrapper component for page transition animations
 * @param {'fadeSlideUp' | 'scaleFade'} variant - Animation variant
 */
export default function AnimatedPage({ children, variant = 'fadeSlideUp' }) {
  const animation = animations[variant] || animations.fadeSlideUp;

  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
