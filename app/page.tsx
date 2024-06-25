import Image from "next/image";
import Carousel from "@/components/Carousel/Carousel";
import Brands from "@/components/Brands/Brands";
import Sale from "@/components/Sale/Sale"
import ImageOverlayComponent from "@/components/ImageOverlayComponent/ImageOverlayComponent"
import ImageSection from "@/components/ImageSection/ImageSection"
import Link from "next/link";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";



export default function Home() {
  return (
    
    <><Sale />
    <main className="flex min-h-screen flex-col items-start justify-between p-24 gap-28">



      <ScrollToTopButton />


      <div className="border-border border-black">
        <h1>vad är du sugen på förnågot?</h1>
        <p>produket</p>
      </div>


      <div className="">
        <Carousel />
      </div>

      <div className="border-border border-black">
        <h1>Bästsäljare</h1>
        <p>produket</p>
      </div>



      <ImageSection />

      <Brands />





      <div className="container mx-auto flex sm:hidden justify-center items-center">
        <h1> Kategorier på mobil</h1>
      </div>

      <div className="flex flex-col justify-start items-start  mt-16 gap-2">
        <h1 className="text-2xl font-bold">Om Gymiceps</h1>
        <p>Vi tror på effektiv träning och att få optimala resultat av dina ansträngningar.
          Därför har vi tagit fram ett antal kosttillskottsprodukter som gör träningslivet lite enklare för dig.
          De tillverkas såklart här i Sverige och vi använder bara de absolut bästa råvarorna.</p>
        <Link href={""}><p>Läs mer om oss</p></Link>

      </div>

    </main>
  
    
    </>
    
  );
}
