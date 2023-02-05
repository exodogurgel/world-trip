import Image from 'next/image'

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

export function TravelTypes() {
  return (
    <section className="max-w-[1240px] grid grid-cols-2 grid-rows-3 gap-y-6 px-12 mx-auto mt-9 mb-9 md:mb-20 md:mt-28 md:flex md:items-center md:justify-between md:px-10">
      {travelTypes.map((travel) => {
        return (
          <div
            key={travel.id}
            className="mx-auto md:mx-0 flex md:flex-col md:h-36 md:w-40 items-center gap-2 md:gap-6"
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
  )
}
