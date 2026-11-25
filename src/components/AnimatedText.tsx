import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface CharacterSpanProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const CharacterSpan: React.FC<CharacterSpanProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const displayChar = char === ' ' ? '\u00A0' : char;

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
        {displayChar}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 select-none pointer-events-none"
      >
        {displayChar}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalChars = text.length;
  const words = text.split(' ');
  let charCounter = 0;

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        const charSpans = wordChars.map((char) => {
          const index = charCounter++;
          const start = index / totalChars;
          const end = (index + 1) / totalChars;
          return (
            <CharacterSpan
              key={`char-${index}`}
              char={char}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        });

        // Account for space after word
        if (wordIdx < words.length - 1) {
          charCounter++;
        }

        return (
          <span
            key={`word-${wordIdx}`}
            className="inline-block whitespace-nowrap mr-[0.28em]"
          >
            {charSpans}
          </span>
        );
      })}
    </p>
  );
};
