import Image from 'next/image'
import React from 'react'

export default function Profile() {
  return (
    <div className="ml-6 p-2 flex flex-1 justify-end items-center gap-2.5">
      <Image
        src="/images/graphics/avatar.png"
        alt="Ваш профиль"
        width={40}
        height={40}
        className="min-w-10 min-h-10"
      />
      <p className="hidden xl:block cursor-pointer p-2.5">Алексей</p>
      <button className="hidden md:block cursor-pointer p-2">
        <Image
          src="/icons-header/icon-arrow.svg"
          alt="arrow"
          width={24}
          height={24}
          sizes='24px'
        />
      </button>
    </div>
  )
}
