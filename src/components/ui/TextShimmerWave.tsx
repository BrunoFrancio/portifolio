import { type ElementType, type JSX } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type TextShimmerWaveProps = {
  children: string;
  as?: ElementType;
  className?: string;
  duration?: number;
  spread?: number;
};

export function TextShimmerWave({
  children,
  as: Component = 'span',
  className,
  duration = 1.25,
  spread = 1.35,
}: TextShimmerWaveProps) {
  const reduceMotion = useReducedMotion();
  const MotionComponent = motion.create(Component as keyof JSX.IntrinsicElements);

  return (
    <MotionComponent className={`text-shimmer-wave ${className ?? ''}`}>
      {children.split('').map((char, index) => (
        <motion.span
          className="text-shimmer-letter"
          key={`${char}-${index}`}
          animate={reduceMotion ? undefined : {
            color: ['var(--shimmer-base)', 'var(--shimmer-light)', 'var(--shimmer-base)'],
            textShadow: ['0 0 0 transparent', '0 0 18px var(--shimmer-glow)', '0 0 0 transparent'],
            y: [0, -2, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            repeatDelay: 2.4,
            delay: (index * duration) / (children.length * spread),
            ease: 'easeInOut',
          }}
        >
          {char}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
