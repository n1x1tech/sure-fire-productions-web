
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

// Gallery categories
const categories = ["All", "Concerts", "Festivals", "Corporate", "Special Events"];

// Gallery items
const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    title: "Neon Dreams Festival",
    category: "Festivals",
    year: "2023"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    title: "Tech Summit",
    category: "Corporate",
    year: "2023"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec",
    title: "Laser Symphony",
    category: "Concerts",
    year: "2022"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    title: "Electric Avenue Tour",
    category: "Concerts",
    year: "2022"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1504680177321-2e6a879aac86",
    title: "Product Launch Event",
    category: "Corporate",
    year: "2022"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1574739782594-db4ead022697",
    title: "Wedding Spectacular",
    category: "Special Events",
    year: "2023"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
    title: "Downtown Music Fest",
    category: "Festivals",
    year: "2022"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
    title: "Summer Solstice Party",
    category: "Special Events",
    year: "2022"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    title: "Annual Awards Gala",
    category: "Corporate",
    year: "2023"
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-black relative overflow-hidden">
        <div className="laser-beam h-0.5 w-screen -rotate-45 top-1/4 -left-1/4"></div>
        <div className="light-glow w-64 h-64 bg-surefire-red/10 top-1/4 right-1/4"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4 tracking-wider"
            >
              <span className="text-white">OUR</span>
              <span className="text-surefire-red"> GALLERY</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              Explore our portfolio of stunning event productions showcasing our creativity, technical expertise, and passion for excellence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8 bg-surefire-dark-gray sticky top-20 z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium text-sm tracking-wider transition-all ${
                  activeCategory === category
                    ? "bg-surefire-red text-white"
                    : "bg-black/50 text-white/70 hover:bg-black hover:text-white"
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-black min-h-screen">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedItem(item.id)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <p className="text-surefire-red text-sm mb-1">{item.category} | {item.year}</p>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-surefire-red transition-colors duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-white z-10 bg-surefire-red w-10 h-10 rounded-full flex items-center justify-center"
              onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>
            
            <div className="relative">
              {galleryItems.find(item => item.id === selectedItem) && (
                <>
                  <img 
                    src={galleryItems.find(item => item.id === selectedItem)?.image} 
                    alt={galleryItems.find(item => item.id === selectedItem)?.title} 
                    className="w-full rounded-lg"
                  />
                  <div className="p-6 bg-black rounded-b-lg">
                    <p className="text-surefire-red text-sm mb-1">
                      {galleryItems.find(item => item.id === selectedItem)?.category} | 
                      {galleryItems.find(item => item.id === selectedItem)?.year}
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      {galleryItems.find(item => item.id === selectedItem)?.title}
                    </h3>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </Layout>
  );
};

export default Gallery;
