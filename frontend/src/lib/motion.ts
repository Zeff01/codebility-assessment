export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const slideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const pop = {
  initial: { scale: 0.98 },
  animate: { scale: 1, transition: { duration: 0.2 } },
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};


