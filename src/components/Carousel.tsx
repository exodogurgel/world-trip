import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from 'swiper'
import Link from 'next/link'

export function Carousel() {
  SwiperCore.use([Autoplay])
  return (
    <>
      <Swiper
        cssMode={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-64 md:h-[450px] w-full bg-center bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')]">
            <Link
              className="flex flex-col gap-3 items-center justify-center"
              href="/"
            >
              <strong className="text-2xl font-bold md:text-5xl text-gray-100">
                Europa
              </strong>
              <span className="text-sm md:text-2xl font-bold text-gray-100">
                O continente mais antigo.
              </span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-64 md:h-[450px] w-full bg-center bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')]">
            <Link
              className="flex flex-col gap-3 items-center justify-center"
              href="/"
            >
              <strong className="text-2xl font-bold md:text-5xl text-gray-100">
                Ásia
              </strong>
              <span className="text-sm md:text-2xl font-bold text-gray-100">
                O maior do continents.
              </span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-64 md:h-[450px] w-full bg-center bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1525608567027-0642704ccb46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1542&q=80')]">
            <Link
              className="flex flex-col gap-3 items-center justify-center"
              href="/"
            >
              <strong className="text-2xl font-bold md:text-5xl text-gray-100">
                África
              </strong>
              <span className="text-sm md:text-2xl font-bold text-gray-100">
                O continente mais quente.
              </span>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
