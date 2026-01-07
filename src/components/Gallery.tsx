import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Image descriptions in each language
  const galleryDescriptions = {
    fr: [
      "Soupe Asiatique",
      "Repas Équilibré",
      "Plat Thaï",
      "Soupe Riche",
      "Wok Savoureux",
      "Nouilles Asiatiques"
    ],
    en: [
      "Asian Noodle Soup",
      "Balanced Meal Set",
      "Thai Dish",
      "Rich Soup",
      "Savory Wok",
      "Asian Noodles"
    ],
    zh: [
      "亚洲面汤",
      "均衡餐食",
      "泰国菜",
      "浓汤",
      "香炒锅",
      "亚洲面条"
    ]
  };

  const images = [
    { src: "/images/img-1.jpg", alt: galleryDescriptions[lang][0] },
    { src: "/images/img-2.jpg", alt: galleryDescriptions[lang][1] },
    { src: "/images/img-4.jpg", alt: galleryDescriptions[lang][2] },
    { src: "/images/img-5.jpg", alt: galleryDescriptions[lang][3] },
    { src: "/images/img-6.jpg", alt: galleryDescriptions[lang][4] },
    { src: "/images/img-3.jpg", alt: galleryDescriptions[lang][5] },
  ];

  return (
    <section id="galerie" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-4">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
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
                <p className="text-sm font-medium text-white">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-auto rounded-2xl"
            />
            <p className="text-white text-center mt-4 font-medium">
              {images[selectedImage].alt}
            </p>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-accent transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
