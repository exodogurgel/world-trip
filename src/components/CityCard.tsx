import Image from 'next/image'

type City = {
  image_url: string
  name: string
  country: string
  flag: string
}

export function CityCard({ name, country, flag, image_url }: City) {
  return (
    <div className="w-64 rounded mx-auto">
      <Image
        className="rounded-t object-cover h-[173px]"
        src={image_url}
        alt={name}
        width={256}
        height={173}
      />
      <div className="pt-[18px] pb-6 px-6 bg-white flex justify-between items-center border border-t-0 border-yellow-20">
        <div className="flex flex-col gap-3">
          <span className="font-sans2 font-semibold text-xl">{name}</span>
          <span className="font-sans2 font-medium text-gray-600 leading-6">
            {country}
          </span>
        </div>
        <Image
          className="w-[30px] h-[30px] rounded-full object-cover"
          src={flag}
          alt=""
          width={30}
          height={30}
        />
      </div>
    </div>
  )
}
