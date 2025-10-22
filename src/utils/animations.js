// src/utils/animations.js

/**
 * Returns Framer Motion variant object for fade-in-up animation.
 * @param {number} delay - Animation delay in seconds
 */
export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});
