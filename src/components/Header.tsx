import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../assets/logo.png'

export function Header() {
  return (
    <header className="py-7 w-full">
      <Link href="/">
        <Image
          className="mx-auto w-20 h-5 md:w-[184px] md:h-11"
          src={logoImg}
          alt="worldtrip"
          priority
        />
      </Link>
    </header>
  )
}
