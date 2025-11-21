import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
const images = [{
  src: gallery1,
  alt: "Familles s'amusant sur les trampolines"
}, {
  src: gallery2,
  alt: "Zone de dunk basketball"
}, {
  src: gallery3,
  alt: "Parcours acrobatique avec foam pit"
}];
export const GallerySection = () => {
  return <section className="py-4 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ambiance{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Fun Park
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre parc en images et plongez dans l'univers du trampoline !
          </p>
        </div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => <CarouselItem key={index}>
                <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* CTA Button */}
        
      </div>
    </section>;
};