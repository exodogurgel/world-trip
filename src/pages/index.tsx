import { Banner } from '@/components/Banner'
import { Carousel } from '@/components/Carousel'
import { Separator } from '@/components/Separator'
import { TravelTypes } from '@/components/TravelTypes'
import { prisma } from '@/lib/prisma'
import { GetStaticProps } from 'next'
import Head from 'next/head'

type Continent = {
  slug: string
  name: string
  description: string
  banner_url: string
}

interface HomeProps {
  continents: Continent[]
}

export default function Home({ continents }: HomeProps) {
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

          <Carousel continents={continents} />
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const continents = await prisma.continent.findMany({
    select: {
      slug: true,
      name: true,
      description: true,
      banner_url: true,
    },
    orderBy: {
      name: 'asc',
    },
  })

  return {
    props: {
      continents,
    },
    revalidate: 60 * 60 * 24, // 60 days
  }
}
