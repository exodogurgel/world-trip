import { Banner } from '@/components/Banner'
import { Carousel } from '@/components/Carousel'
import { Separator } from '@/components/Separator'
import { TravelTypes } from '@/components/TravelTypes'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>
      <main>
        <Banner />

        <TravelTypes />

        <Separator />

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
