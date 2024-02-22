import React from 'react'

const ShimmerUI = () => {
    // eslint-disable-next-line no-array-constructor
    const Arr = new Array(50).fill('a')
  return (
    <div className='flex flex-wrap'>
        {
            Arr.map((ele,index)=> <div key={index} className="mx-3 my-3 shadow-lg p-3 cursor-pointer">
            <div  className="w-full h-60 bg-slate-300 md:w-72 rounded-lg">
             
            </div>
            <p className="my-2 h-12 overflow-hidden text-ellipsis w-full md:w-72 bg-slate-300 "></p>
            <p className='my-2 h-12 w-full md:w-72 bg-slate-300 '></p>
           
          </div>)
        }
        
    </div>
  )
}

export default ShimmerUI