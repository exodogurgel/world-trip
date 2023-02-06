import Image from 'next/image'

export function CityCard() {
  return (
    <div className="w-64 rounded mx-auto">
      <Image
        className="rounded-t"
        src="https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="londes"
        width={256}
        height={173}
      />
      <div className="pt-[18px] pb-6 px-6 bg-white flex justify-between items-center border border-t-0 border-yellow-20">
        <div className="flex flex-col gap-3">
          <span className="font-sans2 font-semibold text-xl">Londres</span>
          <span className="font-sans2 font-medium text-gray-600 leading-6">
            Reino Unido
          </span>
        </div>
        <Image
          className="w-[30px] h-[30px] rounded-full object-cover"
          src="https://static.significados.com.br/flags/ar.svg"
          alt=""
          width={30}
          height={30}
        />
      </div>
    </div>
  )
}
