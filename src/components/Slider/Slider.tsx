'use client';

import { motion } from 'motion/react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';

export default function Slider() {
  const slides = [<SlideOne key="slide1" />, <SlideTwo key="slide2" />];
  return (
    <div className="relative h-20 md:h-40 xl:h-50 w-full mb-10 md:mb-15 xl:mb-20">
      {slides.map((slide, id) => (
        <motion.div
          key={`slide-${id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: slides.length * 5 - 5,
            delay: id * 5
          }}
          className="absolute w-full h-full"
        >
          {slide}
        </motion.div>
      ))}
    </div>
  );
}
