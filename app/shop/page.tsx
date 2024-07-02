import React from 'react'
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import Card from '@/components/Card/Card';
import Link from 'next/link';

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
        <p className='font-bold hover:underline cursor-pointer'>Läs mer</p>
      </div>
    </div>

    <div className='flex sm:flex-row flex-col sm:justify-between items-center justify-center sm:gap-0 gap-2 p-2'>
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

<section className="w-full flex flex-col justify-start items-start mt-16 gap-2">
          <h1 className="text-2xl font-bold">Om Gymiceps</h1>
          <p className="text-base sm:text-lg">Vi tror på effektiv träning och att få optimala resultat av dina ansträngningar.
            Därför har vi tagit fram ett antal kosttillskottsprodukter som gör träningslivet lite enklare för dig.
            De tillverkas såklart här i Sverige och vi använder bara de absolut bästa råvarorna.
          </p>
          <Link href={"/"} >
            <p className="font-bold hover:underline cursor-pointer">Läs mer om oss</p>
          </Link>
        </section>

  </div>
  
  )
}

export default shop;
