"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScaleIn from "@/components/animations/ScaleIn";
import ProductCarousel from "@/components/ProductCarousel";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col w-full overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased selection:bg-primary selection:text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" 
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')"}}
        />
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/60 via-transparent to-background-dark" />
        
        <div className="relative z-10 text-center px-4 flex flex-col items-center gap-6 max-w-4xl mx-auto mt-16">
          <FadeIn delay={0.2} duration={0.8}>
            <h1 className="text-6xl md:text-[10rem] font-black leading-none tracking-tighter text-white uppercase mix-blend-overlay opacity-90">
              Tranché
            </h1>
          </FadeIn>
          <FadeIn delay={0.4} duration={0.8}>
            <p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl tracking-wide font-body">
              L&apos;intersection de la farine, de l&apos;eau et du feu à Rouen.
            </p>
          </FadeIn>
          <FadeIn delay={0.6} duration={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/menu" className="bg-primary hover:bg-red-700 text-white text-base font-bold px-8 py-4 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center gap-2 hover:scale-105 justify-center">
                <span>Commander en ligne</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <Link href="/menu" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-base font-bold px-8 py-4 rounded-lg transition-all flex items-center gap-2 hover:scale-105 justify-center">
                <span>Voir le menu</span>
              </Link>
            </div>
          </FadeIn>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
        </div>
      </section>

      {/* Artisanat & Modernité Section */}
      <section className="py-24 px-6 lg:px-12 bg-background-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <FadeIn direction="right">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Notre Philosophie</span>
                <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                  Artisanat <span className="font-light italic font-body text-gray-400">&amp;</span><br/>Modernité
                </h2>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="space-y-6 text-gray-300 font-body text-lg leading-relaxed max-w-xl">
                <p>
                  Nous mélangeons des processus de fermentation traditionnels de 72 heures avec une esthétique brutaliste ultra-moderne. Situé au cœur de Rouen, Tranché n&apos;est pas qu&apos;une boulangerie ; c&apos;est une expérience culinaire complète.
                </p>
                <p>
                  De notre pain au levain cuit sur pierre à nos plats cuisinés avec passion, chaque création reflète notre engagement envers l&apos;excellence et l&apos;authenticité. Notre cuisine célèbre les saveurs de la Normandie.
                </p>
              </div>
            </FadeIn>
            <StaggerContainer staggerDelay={0.15}>
              <div className="flex items-center gap-8 mt-4">
                <StaggerItem>
                  <div className="flex flex-col gap-1">
                    <span className="text-3xl font-bold text-white">72h</span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Fermentation</span>
                  </div>
                </StaggerItem>
                <div className="w-px h-12 bg-white/10" />
                <StaggerItem>
                  <div className="flex flex-col gap-1">
                    <span className="text-3xl font-bold text-white">100%</span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Farine Locale</span>
                  </div>
                </StaggerItem>
                <div className="w-px h-12 bg-white/10" />
                <StaggerItem>
                  <div className="flex flex-col gap-1">
                    <span className="text-3xl font-bold text-white">0g</span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Additifs</span>
                  </div>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
          
          <StaggerContainer className="relative order-1 lg:order-2 h-[600px] w-full grid grid-cols-2 gap-4" staggerDelay={0.2}>
            <StaggerItem className="col-span-2 h-[280px] w-full rounded-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAab5HI-TmzctN6JXwaDC-8FrZB5g1xuF3OxKlWKgesjLjQIMMqrZa_jnwHSjL0mwQ2vAMCWZ1CsbAKiMcG15yz1iB-hxKTxFDlmQU8d3pvwc4Uh_Oev6HJO54544H5NGCxvAzgqqtF36VtMmhQKv1rTG48oZzDwPZu1XMj4JzicLXB-BhCcN6Xzw-NDfHJiL3bxivLIjtjxc0C8CnJlGNK9fAB7_IPDk5ZumRDLJmN8uzdhkk7zUf8HQfTTbqTP3ar4oddUxLJZ1M')"}}
              />
            </StaggerItem>
            <StaggerItem className="h-[280px] w-full rounded-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5N3HwHToWJ6nigQGh-Gpxu7d-v2bEMxeolQ9Ofy8cRhW7TCwzx3UyQTZoy_z1pTTKsweQqU0wq1l28GrqK3qviiS3uFa1QHlbi_54CEzSmfCwCe-8sJCsFRp9bc80bk63e4sJMIzO6xLYdWbES4iFhdn_ad03Npx5Fvf9i9mq1Wlb3HM3qjxsmI3Dh5V-CttHNSbSVgibwneYDOVMEIBV_QmS2vVeplF1Z11jWFJzxA53kzFwAMuKaXKpVR2l6MmmUoV0617SD8Q')"}}
              />
            </StaggerItem>
            <StaggerItem className="h-[280px] w-full rounded-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvhfuIQfhp7PxpS0CyevR0vOXT0rOQYd5T98vb5WX9EjaaPkx74YgfA6OHsBDNLJ3aFG7CQBMa3VOq6hP4AdPQHy7r7VJa7Hz6_jzaSJMVhZD9KIJ3Mb28dHKlZdB2NpudF-qI825l5RoAsloutWYf1gLVFf-xVhGYYqqruJZn6D5Z6Sidk9Jm5mj-FpYav4nQuHNYBCgflitH2aRghLa_3jAYMmmO5ZWRramdQVT0wmEhkaLCoZ6YhMQqeWX0pt8JE2VuEvRXs_k')"}}
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Section Nos Fournisseurs / Provisions */}
      <section className="py-24 px-6 lg:px-12 bg-background-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Nos Partenaires</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              Des Produits d&apos;Exception
            </h2>
            <p className="text-gray-300 font-body text-lg max-w-2xl mx-auto">
              Nous travaillons avec les meilleurs producteurs locaux et régionaux pour vous offrir une cuisine authentique et de qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Fournisseur 1 */}
            <div className="group bg-surface-dark/50 rounded-xl p-6 border border-white/5 hover:border-primary/50 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">agriculture</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Ferme Bio de Normandie</h3>
              <p className="text-gray-400 text-sm font-body mb-3">
                Légumes frais et produits laitiers biologiques cultivés à 30km de Rouen.
              </p>
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Légumes • Laitages</span>
            </div>

            {/* Fournisseur 2 */}
            <div className="group bg-surface-dark/50 rounded-xl p-6 border border-white/5 hover:border-primary/50 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">bakery_dining</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Moulins de Seine</h3>
              <p className="text-gray-400 text-sm font-body mb-3">
                Farines artisanales moulues sur pierre, certifiées Label Rouge et bio.
              </p>
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Farines • Céréales</span>
            </div>

            {/* Fournisseur 3 */}
            <div className="group bg-surface-dark/50 rounded-xl p-6 border border-white/5 hover:border-primary/50 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">set_meal</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Boucherie Dubois</h3>
              <p className="text-gray-400 text-sm font-body mb-3">
                Viandes d&apos;élevages locaux, sélectionnées pour leur qualité exceptionnelle.
              </p>
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Viandes • Volailles</span>
            </div>

            {/* Fournisseur 4 */}
            <div className="group bg-surface-dark/50 rounded-xl p-6 border border-white/5 hover:border-primary/50 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">phishing</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Marée de Dieppe</h3>
              <p className="text-gray-400 text-sm font-body mb-3">
                Poissons et fruits de mer frais, livrés quotidiennement depuis le port.
              </p>
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Poissons • Fruits de mer</span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-body">Produits Frais</div>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">&lt;50km</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-body">Circuit Court</div>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.7s'}}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-body">Producteurs Locaux</div>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">Bio</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-body">Certifié AB</div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Products Carousel */}
      <section className="py-24 bg-[#1a0c0e] relative" id="menu">
        <ProductCarousel products={[
          {
            name: "Le Pain au Levain 72h",
            description: "Levure sauvage, farine bio, sel de mer.",
            price: "€6.50",
            badge: "BEST SELLER",
            badgeColor: "white",
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
          },
          {
            name: "Croissant au Beurre",
            description: "Beurre d'Isigny AOP, 27 couches feuilletées.",
            price: "€1.40",
            image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80"
          },
          {
            name: "Salade Normande",
            description: "Camembert rôti, pommes, noix, vinaigrette au cidre.",
            price: "€12.00",
            badge: "BIO",
            badgeColor: "green",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80"
          },
          {
            name: "Tarte aux Pommes",
            description: "Pommes caramélisées, pâte feuilletée maison.",
            price: "€4.80",
            image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=800&q=80"
          },
          {
            name: "Croque Monsieur",
            description: "Jambon, béchamel, emmental, pain de mie maison.",
            price: "€9.50",
            image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80"
          },
          {
            name: "Soupe à l'Oignon",
            description: "Gratinée au fromage, croûtons maison.",
            price: "€7.50",
            badge: "CHEF'S CHOICE",
            badgeColor: "purple",
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80"
          }
        ]} />
      </section>

      {/* 3D Reservation Teaser */}
      <section className="py-24 px-6 lg:px-12 bg-background-dark border-t border-white/5" id="reservation">
        <ScaleIn>
          <div className="max-w-[1440px] mx-auto bg-[#2a1518] rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="grid lg:grid-cols-2 gap-12 relative z-10 p-8 lg:p-16 items-center">
              <FadeIn direction="right">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Nouvelle Fonctionnalité
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Choisissez votre table en 3D.
                  </h2>
                  <p className="text-gray-300 text-lg font-body max-w-md">
                    Découvrez notre espace avant d&apos;arriver. Sélectionnez l&apos;endroit parfait pour votre café du matin ou votre menu dégustation du soir.
                  </p>
                  <Link href="/reservation" className="bg-white text-background-dark hover:bg-gray-200 font-bold px-8 py-4 rounded-lg transition-all flex items-center gap-3 w-fit hover:scale-105">
                    <span className="material-symbols-outlined">view_in_ar</span>
                    Démarrer la visite 3D
                  </Link>
                </div>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.2}>
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group">
                  <div className="w-full h-full bg-cover bg-center" 
                    style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoqRZQ1uNRmQHki8o4LwgFkBvHjlPjyGjFJYaUpipUddmlX_0acMG4mvoUnEiGWbPWGI3bZgCoPMJpoDEq5fmfN3Tzd8QMnTfvmpbOCjq74eSUAkt2Rn_20rQVmZW9Ard1GVoryE6LmWUZrdN83jEyxwpkGNSVVM7A2R79V5BCQ4JgL5aqcm7z8bkxzV-ZPgwAnxjf9_7WwR0Qho0cDCQcS67VuPnThZ1mzEhPmUeldBRh5R7Fx1XbkmY15o33sZrBMu-ZXJRO7N8')"}}
                  />
                  
                  {/* UI Overlay for "3D" feel */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded flex items-center gap-2 text-white text-xs font-mono">
                    <span className="w-2 h-2 bg-green-500 rounded-full" /> Vue en direct
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur p-2 rounded text-white border border-white/20">
                      <span className="material-symbols-outlined text-sm">zoom_in</span>
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur p-2 rounded text-white border border-white/20">
                      <span className="material-symbols-outlined text-sm">360</span>
                    </button>
                  </div>
                  
                  {/* Floating "Table" Markers */}
                  <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform cursor-pointer">
                    <div className="bg-primary/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/20">Table 4</div>
                    <div className="w-0.5 h-8 bg-white/50 mx-auto" />
                  </div>
                  <div className="absolute top-2/3 right-1/4 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform cursor-pointer delay-100">
                    <div className="bg-white/90 text-background-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">Table 8</div>
                    <div className="w-0.5 h-8 bg-white/50 mx-auto" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </ScaleIn>
      </section>

      {/* Section Avis Clients */}
      <section className="py-24 px-6 lg:px-12 bg-background-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Témoignages</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-gray-300 font-body text-lg max-w-2xl mx-auto">
              Découvrez les expériences de ceux qui ont savouré notre cuisine et notre ambiance unique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Avis 1 */}
            <div className="bg-surface-dark/50 rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-yellow-500 text-xl">star</span>
                ))}
              </div>
              <p className="text-gray-300 font-body text-base leading-relaxed mb-6 italic">
                &quot;Une expérience culinaire exceptionnelle ! Le pain au levain est absolument divin et les plats sont préparés avec un soin remarquable. L&apos;ambiance moderne et chaleureuse rend chaque visite mémorable.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">MC</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">Marie Dupont</h4>
                  <p className="text-gray-500 text-sm">Cliente régulière</p>
                </div>
              </div>
            </div>

            {/* Avis 2 */}
            <div className="bg-surface-dark/50 rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-yellow-500 text-xl">star</span>
                ))}
              </div>
              <p className="text-gray-300 font-body text-base leading-relaxed mb-6 italic">
                &quot;Tranché est devenu mon endroit préféré à Rouen. Les produits sont frais, locaux et délicieux. La quiche lorraine est la meilleure que j&apos;ai jamais goûtée. Service impeccable !&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">JL</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">Jean Lefebvre</h4>
                  <p className="text-gray-500 text-sm">Habitué du midi</p>
                </div>
              </div>
            </div>

            {/* Avis 3 */}
            <div className="bg-surface-dark/50 rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-yellow-500 text-xl">star</span>
                ))}
              </div>
              <p className="text-gray-300 font-body text-base leading-relaxed mb-6 italic">
                &quot;Un concept unique qui allie boulangerie artisanale et restaurant gastronomique. Le design est magnifique et l&apos;atmosphère parfaite pour un déjeuner d&apos;affaires ou un dîner romantique.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">SB</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">Sophie Bernard</h4>
                  <p className="text-gray-500 text-sm">Amatrice de gastronomie</p>
                </div>
              </div>
            </div>
          </div>

          {/* Note globale */}
          <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="inline-flex items-center gap-4 bg-surface-dark/50 rounded-xl px-8 py-6 border border-white/5">
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-white mb-2">4.9</div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-yellow-500 text-lg">star</span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm">Basé sur 247 avis</p>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="text-left">
                <p className="text-white font-bold text-lg mb-1">Excellence reconnue</p>
                <p className="text-gray-400 text-sm">Google • TripAdvisor • La Fourchette</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Carte Interactive */}
      <section className="py-24 px-6 lg:px-12 bg-[#1a0c0e] relative">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Nous Trouver</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              Au Cœur de Rouen
            </h2>
            <p className="text-gray-300 font-body text-lg max-w-2xl mx-auto">
              Situé à quelques pas de la cathédrale, dans le quartier historique de Rouen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Carte */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-slide-in-left">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2596.8947!2d1.0937!3d49.4432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDI2JzM1LjUiTiAxwrAwNSczNy4zIkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute top-4 left-4 bg-background-dark/90 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 text-white">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span className="font-bold text-sm">7 Rue de l&apos;Hôpital</span>
                </div>
              </div>
            </div>

            {/* Informations */}
            <div className="space-y-6 animate-slide-in-right">
              {/* Adresse */}
              <div className="bg-surface-dark/50 rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Adresse</h3>
                    <p className="text-gray-300 font-body">7 Rue de l&apos;Hôpital</p>
                    <p className="text-gray-300 font-body">76000 Rouen, France</p>
                    <a href="https://maps.google.com/?q=7+Rue+de+l'Hôpital+Rouen" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary text-sm font-bold mt-3 hover:underline">
                      Ouvrir dans Google Maps
                      <span className="material-symbols-outlined text-sm">arrow_outward</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-surface-dark/50 rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-4">Horaires d&apos;ouverture</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400 mb-1">Lundi - Vendredi</p>
                        <p className="text-white font-medium">07:00 - 22:00</p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-1">Samedi - Dimanche</p>
                        <p className="text-white font-medium">08:00 - 23:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-surface-dark/50 rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl">call</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Contact</h3>
                    <p className="text-gray-300 font-body mb-1">
                      <a href="tel:+33235000000" className="hover:text-primary transition-colors">+33 2 35 00 00 00</a>
                    </p>
                    <p className="text-gray-300 font-body">
                      <a href="mailto:bonjour@trancherouen.fr" className="hover:text-primary transition-colors">bonjour@trancherouen.fr</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Accès */}
              <div className="bg-surface-dark/50 rounded-xl p-6 border border-white/5">
                <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">directions</span>
                  Comment venir ?
                </h3>
                <ul className="space-y-2 text-sm text-gray-300 font-body">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">directions_bus</span>
                    <span>Métro : Station Palais de Justice (ligne T1)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">local_parking</span>
                    <span>Parking : Vieux-Marché (5 min à pied)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">directions_walk</span>
                    <span>À 3 min de la Cathédrale Notre-Dame</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <div className="absolute -top-12 right-0 bg-white text-background-dark text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg mb-2 pointer-events-none transform translate-y-2 group-hover:translate-y-0 duration-300">
          Demandez à Tranché AI sur les allergènes
        </div>
        <button className="relative w-14 h-14 bg-primary rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
          <span className="material-symbols-outlined relative z-10 text-2xl">smart_toy</span>
        </button>
      </div>

      <Footer />
    </div>
  );
}
