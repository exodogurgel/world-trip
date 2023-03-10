import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
} from 'swiper'
import Link from 'next/link'

SwiperCore.use([Autoplay, Pagination, Scrollbar, A11y, Navigation])

type Continent = {
  slug: string
  name: string
  description: string
  banner_url: string
}

interface CarouselProps {
  continents: Continent[]
}

export function Carousel({ continents }: CarouselProps) {
  return (
    <>
      <Swiper
        cssMode={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {continents?.map((continent) => {
          return (
            <SwiperSlide key={continent.slug}>
              <div
                style={{
                  backgroundImage: `url(${continent.banner_url})`,
                }}
                className="flex flex-col items-center justify-center h-64 md:h-[450px] w-full bg-center bg-no-repeat bg-cover"
              >
                <Link
                  className="flex flex-col gap-3 items-center justify-center"
                  href={`/continent/${continent.slug}`}
                >
                  <strong className="text-2xl font-bold md:text-5xl text-gray-100">
                    {continent.name}
                  </strong>
                  <span className="text-sm md:text-2xl font-bold text-gray-100">
                    {continent.description}
                  </span>
                </Link>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
