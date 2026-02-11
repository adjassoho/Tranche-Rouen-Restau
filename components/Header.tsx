"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-background-dark/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="material-symbols-outlined text-primary text-3xl">bakery_dining</span>
          <h2 className="text-white text-xl font-bold tracking-tight uppercase">Tranché</h2>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          <Link className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest" href="/">
            Accueil
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest" href="/menu">
            Menu
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest" href="/about">
            Notre Histoire
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest" href="/delivery">
            Livraison
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest" href="/contact">
            Contact
          </Link>
        </nav>
        
        <Link href="/reservation" className="hidden md:flex bg-primary hover:bg-red-700 text-white text-sm font-bold px-6 py-3 rounded-lg transition-all transform hover:scale-105 items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">calendar_month</span>
          <span>Réserver</span>
        </Link>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-background-dark border-t border-white/10 px-6 py-4">
          <nav className="flex flex-col gap-4">
            <Link className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest" href="/">
              Accueil
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest" href="/menu">
              Menu
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest" href="/about">
              Notre Histoire
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest" href="/delivery">
              Livraison
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest" href="/contact">
              Contact
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest" href="/reservation">
              Réserver une table
            </Link>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
