import Image from "next/image";
import Carousel from "@/components/Carousel/Carousel";
import Brands from "@/components/Brands/Brands";
import Sale from "@/components/Sale/Sale"
import ImageOverlayComponent from "@/components/ImageOverlayComponent/ImageOverlayComponent"
import ImageSection from "@/components/ImageSection/ImageSection"
import Link from "next/link";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";
import CategoryCarousel from "@/components/CategoryCarousel/CategoryCarousel";




export default function Home() {
  return (
    
    <>
      <Sale />
      <main className="flex min-h-screen flex-col items-start justify-between container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollToTopButton />
        <section className="w-full mb-8 mt-12">
          <h1 className="font-bold text-xl sm:text-2xl">Vad är du ute efter?</h1>
          <CategoryCarousel />
        </section>
        <section className="w-full mt-8">
          <h1 className="font-bold text-xl sm:text-2xl">Bästsäljare</h1>
          <Carousel />
        </section>
        <section className="w-full mt-8">
          <ImageSection />
        </section>
        <section className="w-full mt-8">
        <h1 className="font-bold text-xl sm:text-2xl">Populära märken</h1>
          <Brands />
        </section>
        <section className="w-full flex flex-col justify-start items-start mt-16 gap-2">
          <h1 className="text-2xl font-bold">Om Gymiceps</h1>
          <p className="text-base sm:text-lg">Vi tror på effektiv träning och att få optimala resultat av dina ansträngningar.
            Därför har vi tagit fram ett antal kosttillskottsprodukter som gör träningslivet lite enklare för dig.
            De tillverkas såklart här i Sverige och vi använder bara de absolut bästa råvarorna.
          </p>
          <Link href={"/"} >
            <p className="font-bold hover:underline">Läs mer om oss</p>
          </Link>
        </section>
      </main>
    </>
    
  );
}
