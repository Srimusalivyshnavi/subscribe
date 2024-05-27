import React from 'react'
import tress from './assessts/trees.jpg'

export const App = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-zinc-800'>
      <div className='bg-zinc-700 mx-6 p-1 rounded-xl'>
      <div className='flex flex-col md:flex-row rounded-l-xl'>
      <img src={tress} className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-300" alt="tree"/>
      <div className='p-6 md:p-12'>
        <h2 className='font-serif text-xl font-medium text-center text-white md:text-left'>Get tree planting tips in your inbox</h2>
        <p className='text-white text-xs max-w-md my-4 text-center leading-5 tracking-wide md:text-left'> The tree gives shade even to him who cuts off its boughs.” “I took a walk in the woods and came out taller than the trees.” "Trees are poems that the earth writes upon the sky." “Trees give peace to the souls of men.”</p>
        <div className='flex flex-col mt-5 space-y-4 md:flex-row space-x-3 md:space-y-0'>
          <input type="text" placeholder="enter your email" className='p-2 px-2 text-center text-white bg-zinc-700 border border-zinc-500 placeholder:text-xs placeholder:text-center md:text-left md:placeholder:text-left focus:outline-none'/>
          <button className='px-4 py-2 text-xs rounded-md md:text-left text-zinc-800 bg-lime-500 hover:text-white hover:bg-lime-400 duration-200'>subscribe</button>
        </div>
      </div>
      </div>
      </div>
    </div>
   
  )
}


export default App;
