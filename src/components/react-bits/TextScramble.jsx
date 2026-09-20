import React, { useEffect, useState } from 'react';

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789@#$&*%';

export const TextScramble = ({
  text,
  speed = 40,
  scrambleDuration = 1000,
  className = ''
}) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.floor(scrambleDuration / speed);
    
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      const scrambled = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index / text.length < progress) {
            return char;
          }
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      setDisplayText(scrambled);

      if (frame >= totalFrames) {
        setDisplayText(text);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, scrambleDuration]);

  return <span className={className}>{displayText}</span>;
};
