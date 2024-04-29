import React from 'react'

const Hero = ({text}) => {
  return (
    <div
    class="relative z-10 overflow-hidden  bg-primary bg-gradient-to-r from-primary  pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]"
  >
    <div class="container">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="w-full px-4">
          <div class="text-center">
            <h1 class="text-4xl font-semibold text-white">{text}</h1>
          </div>
        </div>
      </div>
    </div>
    <div>
     
    </div>
  </div>
  )
}

export default Hero