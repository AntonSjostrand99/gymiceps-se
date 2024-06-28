import React from 'react'
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import Card from '@/components/Card/Card';

function shop() {
  return (
    <div className='container mx-auto px-2 min-h-screen'>
    <div className='flex md:flex-row flex-col justify-between items-start md:gap-0 gap-3 mb-7 mt-10'>
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

    <div className='flex sm:flex-row flex-col sm:justify-between items-center justify-center sm:gap-0 gap-2 border border-black p-2'>
    <p className='sm:flex hidden'>1337 produkter</p>
    <FilterSidebar/>
    <p className='sm:hidden flex'>1337 produkter</p>
    </div>
    

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-6 mt-6 mb-10'>
  <Card title={'Proteinpulver'} size={'1kg'} price={'249 kr'} imageSrc={'/Protein.png'} />
  <Card title={'Proteinpulver'} size={'1kg'} price={'249 kr'} imageSrc={'/Protein.png'} />
  <Card title={'Proteinpulver'} size={'1kg'} price={'249 kr'} imageSrc={'/Protein.png'} />
  <Card title={'Proteinpulver'} size={'1kg'} price={'249 kr'} imageSrc={'/Protein.png'} />
  <Card title={'Proteinpulver'} size={'1kg'} price={'249 kr'} imageSrc={'/Protein.png'} />
  <Card title={'Proteinpulver'} size={'1kg'} price={'249 kr'} imageSrc={'/Protein.png'} />
  <Card title={'Proteinpulver'} size={'1kg'} price={'249 kr'} imageSrc={'/Protein.png'} />
  <Card title={'Proteinpulver'} size={'1kg'} price={'249 kr'} imageSrc={'/Protein.png'} />
</div>

  </div>
  
  )
}

export default shop;
