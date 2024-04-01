import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className='bg-secondary w-full h-full py-10'>
        <div className='max-w-2xl w-full mx-auto text-center text-white space-y-8 py-4'>
          <h1 className='lg:text-4xl text-3xl font-bold'>Easy access for easy bookings</h1>
          <p className='lg:text-xl text-lg lg:mx-0 mx-4'>Share your Calendly link right from your browser, so you can schedule meetings without the back-and-forth</p>
          <div className='flex items-center justify-center gap-4 '>
            <button className='bg-primary text-xs font-semibold px-10 py-5 rounded-full outline-none'>Start for free</button>
            <button className='border-2 border-white text-xs font-semibold px-10 py-4 rounded-full'>Talk with Sales</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
