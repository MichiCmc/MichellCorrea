import React from 'react'
import MyWork from '../componentes/MyWork'

const Projects = () => {
  return (
   <>
      <div className="flex flex-col w-full mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 ">
          Applications that I have built
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
          fuga dolore.
        </p>
      </div>
    
    <MyWork/>

   
   </>
  )
}

export default Projects