import { CityCard } from '@/components/CityCard'
import { ContinentInfo } from '@/components/ContinentInfo'
import { prisma } from '@/lib/prisma'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

type City = {
  id: string
  image_url: string
  name: string
  country: string
  flag: string
}

type ContinentType = {
  slug: string
  name: string
  cover: string
  resume: string
  description: string
  citiesAmount: number
  countriesAmount: number
  languagesAmount: number
  cities: City[]
}

interface ContinentProps {
  continent: ContinentType
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.name} | Worldtrip</title>
      </Head>
      <main>
        <div
          style={{
            backgroundImage: `url(${continent.cover})`,
          }}
          className="w-full h-[150px] md:h-[500px] bg-no-repeat bg-cover"
        >
          <div className="h-full max-w-[1240px] flex flex-col items-center md:items-start justify-center md:justify-end mx-auto md:pb-14 md:px-10">
            <strong className="text-3xl md:text-5xl font-semibold text-gray-100">
              {continent.name}
            </strong>
          </div>
        </div>

        <section className="px-4 h-full mt-6 mb-8 md:my-20 max-w-[1240px] md:px-10 mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-[70px]">
          <article className="text-lg leading-7 md:flex-1 md:text-2xl md:leading-9 text-justify">
            {continent.resume}
          </article>
          <div className="w-full flex-1 flex justify-between">
            <ContinentInfo
              infoName="países"
              quantity={continent.countriesAmount}
            />
            <ContinentInfo
              infoName="linguas"
              quantity={continent.languagesAmount}
            />
            <ContinentInfo
              infoName="cidades + 100"
              quantity={continent.citiesAmount}
            />
          </div>
        </section>

        <section className="px-4 max-w-[1240px] md:px-10 mx-auto mb-44">
          <h2 className="text-2xl md:text-4xl font-medium mb-5 md:mb-10">
            Cidades +100
          </h2>
          <div className="grid grid-cols-1 gap-5 mx-auto md:grid-cols-4 md:gap-11">
            {continent.cities.map((city) => {
              return (
                <CityCard
                  key={city.id}
                  country={city.country}
                  flag={city.flag}
                  image_url={city.image_url}
                  name={city.name}
                />
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = String(params!.slug)

  const continent = await prisma.continent.findFirst({
    where: {
      slug,
    },
    include: {
      cities: true,
    },
  })

  const continentFormatted = {
    slug: continent!.slug,
    name: continent!.name,
    cover: continent!.cover,
    resume: continent!.resume,
    description: continent!.description,
    citiesAmount: continent!.cities_amount,
    countriesAmount: continent!.countries_amount,
    languagesAmount: continent!.languages_amount,
    cities: continent!.cities,
  }

  return {
    props: {
      continent: continentFormatted,
    },
  }
}
