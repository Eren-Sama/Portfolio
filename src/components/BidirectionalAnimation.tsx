import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';

interface BidirectionalAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
}

export const BidirectionalAnimation = ({ 
  children, 
  className = '',
  animationType = 'fadeUp',
  delay = 0,
  duration = 0.6
}: BidirectionalAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const scrollDirection = useScrollDirection();

  const getAnimationVariants = () => {
    const baseVariants = {
      fadeUp: {
        hidden: { y: 60, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      },
      fadeLeft: {
        hidden: { x: -60, opacity: 0 },
        visible: { x: 0, opacity: 1 }
      },
      fadeRight: {
        hidden: { x: 60, opacity: 0 },
        visible: { x: 0, opacity: 1 }
      },
      scale: {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
      },
      rotate: {
        hidden: { rotate: -10, scale: 0.9, opacity: 0 },
        visible: { rotate: 0, scale: 1, opacity: 1 }
      }
    };

    return baseVariants[animationType];
  };

  const variants = getAnimationVariants();

  const getAnimationState = () => {
    if (!isInView) {
      return scrollDirection === 'up' ? 'hidden' : 'hidden';
    }
    return 'visible';
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={getAnimationState()}
      variants={variants}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.1, 0.25, 1],
        type: 'spring',
        stiffness: 100,
        damping: 15
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
