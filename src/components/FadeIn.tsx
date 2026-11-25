import React from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: keyof typeof motion;
  style?: React.CSSProperties;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number | 'some' | 'all';
  };
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  style,
  viewport = { once: true, margin: '50px', amount: 0 },
}) => {
  // Support dynamic motion element type via motion.create or motion[as]
  const MotionComponent = (
    typeof motion.create === 'function' ? motion.create(as as any) : motion[as as keyof typeof motion]
  ) as any;

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewport}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </MotionComponent>
  );
};
