import React from 'react'

const Hero = () => {
  return (
    <div className=' w-full h-screen'>
      <img className=' absolute top-0 left-0 w-full h-screen object-cover' src='https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='sea'/>
      <div className=' bg-black/30 absolute top-0 left-0 w-full h-screen'/>
      <div className=' absolute top-0 w-full h-full flex flex-col justify-center text-white p-4'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>All Inclusive</p>
          <h1 className=' font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private beaches & Getaways</h1>
          <p className=' max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Deserunt aliquid sed explicabo voluptatum aspernatur voluptatem.</p>
          <button className=' bg-white text-black'>Reserve Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero