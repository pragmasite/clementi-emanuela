import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "/images/b7.jpg",
      alt: lang === "de" ? "Moderne Behandlungsraum" : "Modern treatment room",
    },
    {
      src: "/images/b4.jpg",
      alt: lang === "de" ? "Helles Studio" : "Bright studio",
    },
    {
      src: "/images/b11.jpg",
      alt: lang === "de" ? "Organisierte Einrichtung" : "Organized studio",
    },
    {
      src: "/images/b10.jpg",
      alt: lang === "de" ? "Professionelle Ausrüstung" : "Professional equipment",
    },
    {
      src: "/images/b2.jpg",
      alt: lang === "de" ? "Studio Interieur" : "Studio interior",
    },
    {
      src: "/images/bld2.jpg",
      alt: lang === "de" ? "Fußmassage Behandlung" : "Foot massage treatment",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.gallery.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">{t.gallery.title}</h2>
          <p className="max-w-2xl mx-auto text-foreground/70 text-lg">{t.gallery.description}</p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full rounded-2xl"
              />
              <p className="text-white text-center mt-4">{images[selectedImage].alt}</p>

              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-accent transition"
              >
                <X className="h-8 w-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
