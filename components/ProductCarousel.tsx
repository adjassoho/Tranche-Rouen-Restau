"use client";

import { useRef } from "react";

interface Product {
  name: string;
  description: string;
  price: string;
  badge?: string;
  badgeColor?: string;
  image: string;
}

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420; // Width of card + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === "left" 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    }
  };

  const getBadgeClasses = (color?: string) => {
    switch (color) {
      case "yellow":
        return "bg-yellow-500/90 text-black";
      case "green":
        return "bg-green-500/90 text-white";
      case "purple":
        return "bg-purple-500/90 text-white";
      case "red":
        return "bg-primary text-white";
      default:
        return "bg-white/90 text-black";
    }
  };

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-4xl font-bold text-white mb-2">Produits Signature</h2>
          <p className="text-gray-400 font-body">Sélection quotidienne de nos fours.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 px-6 lg:px-12 pb-12 scrollbar-hide snap-x snap-mandatory"
      >
        {products.map((product, index) => (
          <div key={index} className="min-w-[300px] md:min-w-[400px] snap-center group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6">
              {product.badge && (
                <div className={`absolute top-4 right-4 z-10 backdrop-blur text-xs font-bold px-3 py-1 rounded-full ${getBadgeClasses(product.badgeColor)}`}>
                  {product.badge}
                </div>
              )}
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                style={{backgroundImage: `url('${product.image}')`}}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-primary text-white font-bold px-6 py-3 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Commander
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 font-body">{product.description}</p>
              </div>
              <span className="text-lg font-bold text-primary">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
