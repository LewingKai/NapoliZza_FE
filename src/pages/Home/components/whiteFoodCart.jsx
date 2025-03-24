export default function WhiteFoodCart({ item }) {
  return (
    <div className='w-[600px] p-5 mb-7'>
      <div className='text-right text-[30px] font-bold mb-2'>{item.price}</div>
      <div className='border-2  border-black border-dashed w-full'></div>
      <h3 className='text-[40px] font-extrabold line-clamp-2'>{item.name}</h3>
      <p className='text-[25px] line-clamp-4 mt-4 italic'>{item.desc}</p>
    </div>
  )
}
