import Image from 'next/image';
import React from 'react';

export default function SlideTwo() {
  return (
    <div className="mb-10 md:mb-15 xl:mb-20 h-20 md:h-40 xl:h-50 w-full relative">
      <Image src="/images/graphics/slide-2.jpeg" alt="slide-2" fill className='object-cover'/>
    </div>
  );
}
