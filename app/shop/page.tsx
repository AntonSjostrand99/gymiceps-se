import React from 'react'
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';

function shop() {
  return (
    <div className='container mx-auto px-2 min-h-screen'>
    <div className='flex md:flex-row flex-col justify-between items-start md:gap-0 gap-3'>
      <div className='flex justify-start items-start md:w-1/2 w-full'>
        <h1 className='text-left font-bold lg:text-5xl md:text-4xl text-4xl'>
          KOSTTILLSKOTT
        </h1>
      </div>
      <div className='flex flex-col justify-start items-start md:w-1/2 w-full'>
        <p className='text-left'>
          Kosttillskott är precis vad det låter som: Ett tillskott till kosten. Det är sällan nödvändigt, men ofta praktiskt  oavsett om du vill gå upp i vikt, bygga muskler utan att lägga på dig onödigt fett, eller helt enkelt få en extra kick i din träning.
        </p>
        <p className='font-bold'>Läs mer</p>
      </div>
    </div>
    <FilterSidebar/>
  </div>
  
  )
}

export default shop;
