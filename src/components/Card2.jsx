import React from 'react'

const Card = ({img1}) => {
  return (
    <div className='pt-[20px] pb-[15px] flex flex-col max-w-[400px]  h-[420px] max-h-[420px] '>
         <div className="px-[20px] mb-[10px] max-h-[54.2px]">
              <h2 className='text-[21px] leading-[27.3px] font-[700]'>50% - 80% off | Wardrobe Refresh Sale</h2>
         </div>
         <div className="px-[20px] mb-[44px] h-[275px]">
              <div className="px-[10px] ">
                 <img src={img1} width={344.59} height={276.4} alt="" />
              </div>
             
         </div>
         <div className="px-[20px]">
               <a href="#" className='text-[#007185] text-[13px] text-left'>See all offers</a>
         </div>
    </div>
  )
}

export default Card