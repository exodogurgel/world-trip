import { CityCard } from '@/components/CityCard'
import { ContinentInfo } from '@/components/ContinentInfo'
import Head from 'next/head'

export default function Continent() {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <main>
        <div className="w-full h-[150px] md:h-[500px] bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')]">
          <div className="h-full max-w-[1240px] flex flex-col items-center md:items-start justify-center md:justify-end mx-auto md:pb-14 md:px-10">
            <strong className="text-3xl md:text-5xl font-semibold text-gray-100">
              Europe
            </strong>
          </div>
        </div>

        <section className="px-4 h-full mt-6 mb-8 md:my-20 max-w-[1240px] md:px-10 mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-[70px]">
          <article className="text-lg leading-7 md:flex-1 md:text-2xl md:leading-9 text-justify">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </article>
          <div className="w-full flex-1 flex justify-between">
            <ContinentInfo infoName="países" quantity={50} />
            <ContinentInfo infoName="linguas" quantity={60} />
            <ContinentInfo infoName="cidades + 100" quantity={27} />
          </div>
        </section>

        <section className="px-4 max-w-[1240px] md:px-10 mx-auto mb-44">
          <h2 className="text-2xl md:text-4xl font-medium mb-5 md:mb-10">
            Cidades +100
          </h2>
          <div className="grid grid-cols-1 gap-5 mx-auto md:grid-cols-4 md:gap-11">
            <CityCard />
            <CityCard />
            <CityCard />
            <CityCard />
            <CityCard />
          </div>
        </section>
      </main>
    </>
  )
}
