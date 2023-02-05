import { Carousel } from '@/components/Carousel'
import Head from 'next/head'
import Image from 'next/image'

import airplaneImg from '../assets/airplane.png'

const travelTypes = [
  {
    id: '1',
    title: 'vida noturna',
    imageUrl: '/travel/cocktail.svg',
  },
  {
    id: '2',
    title: 'praia',
    imageUrl: '/travel/surf.svg',
  },
  {
    id: '3',
    title: 'moderno',
    imageUrl: '/travel/building.svg',
  },
  {
    id: '4',
    title: 'clássico',
    imageUrl: '/travel/museum.svg',
  },
  {
    id: '5',
    title: 'e mais...',
    imageUrl: '/travel/earth.svg',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>
      <main>
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

        <section className="max-w-[1240px] grid grid-cols-2 grid-rows-3 gap-y-6 px-12 mx-auto mt-9 mb-9 md:mb-20 md:mt-28 md:flex md:items-center md:justify-between md:px-10">
          {travelTypes.map((travel) => {
            return (
              <div
                key={travel.id}
                className="mx-auto md:mx-0 flex md:flex-col items-center gap-2 md:gap-6"
              >
                <Image
                  className="hidden md:block"
                  src={travel.imageUrl}
                  alt={travel.title}
                  width={85}
                  height={85}
                />
                <span className="w-2 h-2 rounded-full bg-yellow-400 md:hidden" />
                <span className="text-lg font-medium md:text-2xl md:font-semibold">
                  {travel.title}
                </span>
              </div>
            )
          })}
        </section>

        <div className="w-16 h-[1px] md:w-24 md:h-[2px] bg-gray-700 mx-auto mt" />

        <section className="max-w-[1240px] mx-auto mt-6 md:mt-14 flex flex-col items-center text-center mb-10">
          <h2 className="text-xl font-medium leading-7 md:text-4xl md:leading-[54px] mb-5 md:mb-[52px]">
            Vamos nessa? <br /> Então escolha seu continente
          </h2>

          <Carousel />
        </section>
      </main>
    </>
  )
}
