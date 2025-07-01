import Image from 'next/image'
import React from 'react'

export default function TopMenu() {
  return (
    <ul className="flex flex-row gap-x-6 items-end">
      <li className="flex flex-col items-center md:hidden gap-2.5 x w-11 cursor-pointer">
        <Image
          src="/icons-header/icon-menu-mob.svg"
          alt="Каталог"
          width={24}
          height={24}
          className="object-contain w-6 h-6"
        />
        <span>Каталог</span>
      </li>
      <li className="flex flex-col items-center gap-2.5 w-11 cursor-pointer">
        <Image
          src="/icons-header/icon-heart.svg"
          alt="Избранное"
          width={24}
          height={24}
          className="object-contain w-6 h-6"
        />
        <span>Избранное</span>
      </li>
      <li className="flex flex-col items-center gap-2.5 w-11 cursor-pointer">
        <Image
          src="/icons-header/icon-box.svg"
          alt="Заказы"
          width={24}
          height={24}
          className="object-contain w-6 h-6"
        />
        <span>Заказы</span>
      </li>
      <li className="flex flex-col items-center gap-2.5 w-11 cursor-pointer">
        <Image
          src="/icons-header/icon-cart.svg"
          alt="Корзина"
          width={24}
          height={24}
          className="object-contain w-6 h-6"
        />
        <span>Корзина</span>
      </li>
    </ul>
  )
}
