export default function WhiteFoodCart({ item }) {
  const textTitle = 'text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px]'
  const textDesc = 'text-[18px] sm:text-[20px] md:text-[27px] lg:text-[30px] xl:text-[30px]'
  return (
    <div className='w-[45vw] p-5 sm:mb-7'>
      <div className={`text-right $${textDesc} font-bold mb-2`}>{item.price}</div>
      <div className='border-2  border-black border-dashed w-full'></div>
      <h3 className={`${textTitle} font-extrabold line-clamp-2`}>{item.name}</h3>
      <p className={`${textDesc} line-clamp-4 mt-4 italic`}>{item.desc}</p>
    </div>
  )
}
