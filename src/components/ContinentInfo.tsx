interface ContinentInfoProps {
  quantity: number
  infoName: string
}

export function ContinentInfo({ infoName, quantity }: ContinentInfoProps) {
  return (
    <div className="flex flex-col items-start md:items-center">
      <strong className="text-2xl md:text-5xl md:font-semibold text-yellow-400 leading-8 md:leading-[60px]">
        {quantity}
      </strong>
      <span className="text-lg md:text-2xl font-semibold">{infoName}</span>
    </div>
  )
}
