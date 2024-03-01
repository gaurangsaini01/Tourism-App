import React, { useState } from 'react'

const Card = ({id,name,image,price,info,removeTour}) => {
    const[readMore,setReadMore] = useState(false);
    const description = `${info.substring(0,200)}....`
    // console.log(description)
  return (
    <div className='lg:w-[40%] xl:w-[25%] flex flex-col border justify-evenly bg-slate-800 text-gray-200  rounded-xl p-2  my-4'>
        <div className=' p-3  h-[50%]'>
            <img className='h-[250px] w-full bg-cover object-cover fit rounded-xl' src={image}></img>
        </div>
        <div className="tour-info sm:p-7 md:p-4 p-4">
            <div className='tour-details'>
                <h3 className='tour-price font-bold text-green-600'>{price}</h3>
                <h3 className='tour-name font-bold text-2xl mb-2'>{name}</h3>
            </div>
            <div className="description">
                {readMore ? info:description }
                <span className='read-more text-bold text-blue-500 hover:cursor-pointer' onClick={()=>{
                    setReadMore(!readMore)
                }}>
                    {readMore ? '  Show less' : '  Read More'}
                </span>
            </div>
        </div>
        <div className='flex flex-row justify-center '>
        <button className='btn-red bg-gray-300 p-2 text-black rounded-xl w-[50%]' onClick={()=>removeTour(id)}>Not Interested</button>
        </div>
    </div>
  )
}

export default Card;