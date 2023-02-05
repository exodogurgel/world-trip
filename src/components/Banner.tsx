import Image from 'next/image'

import airplaneImg from '../assets/airplane.png'

export function Banner() {
  return (
    <div className="bg-hero w-full h-40 md:h-[335px] bg-no-repeat bg-cover text-gray-100 py-7 px-4 md:px-10 md:pt-20 md:pb-[70px]">
      <div className="md:grid md:grid-cols-2 max-w-[1240px] mx-auto md:px-10">
        <div className="max-w-[524px]">
          <h1 className="text-xl md:text-4xl font-medium leading-7 md:leading-[54px] mb-2 md:mb-5">
            5 Continentes, <br /> infinitas possibilidades.
          </h1>
          <p className="text-sm leading-5 md:text-xl md:leading-8 text-gray-200">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </p>
        </div>

        <Image
          className="hidden ml-auto md:block"
          src={airplaneImg}
          alt="airplane"
          width={420}
          height={270}
        />
      </div>
    </div>
  )
}
