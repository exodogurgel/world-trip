import Image from 'next/image'
import Link from 'next/link'
import { CaretLeft } from 'phosphor-react'

import logoImg from '../assets/logo.png'

interface HomeProps {
  isHome?: boolean
}

export function Header({ isHome = true }: HomeProps) {
  return (
    <header className="py-7 w-full">
      <div
        className={`flex items-center ${
          isHome ? 'justify-center' : 'justify-between'
        } max-w-[1240px] mx-auto md:px-10`}
      >
        {!isHome && (
          <Link href="/">
            <CaretLeft size={28} weight="bold" />
          </Link>
        )}

        <Image
          className="w-20 h-5 md:w-[184px] md:h-11"
          src={logoImg}
          alt="worldtrip"
          priority
        />

        {!isHome && <div className="w-7 h-7"></div>}
      </div>
    </header>
  )
}
