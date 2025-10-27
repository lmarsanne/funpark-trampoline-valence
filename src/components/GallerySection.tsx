import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const images = [
  {
    src: gallery1,
    alt: "Familles s'amusant sur les trampolines",
    span: "md:col-span-2",
  },
  {
    src: gallery2,
    alt: "Zone de dunk basketball",
    span: "md:col-span-1",
  },
  {
    src: gallery3,
    alt: "Parcours acrobatique avec foam pit",
    span: "md:col-span-1",
  },
];

export const GallerySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
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

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" className="group" asChild>
            <a
              href="https://www.valence-bowling.com/trampoline/?g-path=%2Fcart%2Factivities%2FFpsK4WIXZdbufxO69hcqr2UTy8MPoRDv3V7A"
              target="_blank"
              rel="noopener noreferrer"
            >
              Réserver maintenant
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
