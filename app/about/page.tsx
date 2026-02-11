import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default function AboutPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen font-display">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" 
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=80')"}}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background-dark" />
          
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Notre Histoire</h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-gray-300 font-body">
                L&apos;art de la boulangerie rencontre la gastronomie moderne au cœur de Rouen
              </p>
            </FadeIn>
          </div>
        </section>

        {/* L'Histoire Section */}
        <section className="py-24 px-6 lg:px-12 bg-background-dark">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <FadeIn direction="right">
                <div className="space-y-6">
                  <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">2019 - Aujourd&apos;hui</span>
                  <h2 className="text-4xl md:text-5xl font-bold">Une Passion Devenue Réalité</h2>
                  <div className="space-y-4 text-gray-300 font-body text-lg leading-relaxed">
                    <p>
                      Tranché est né de la vision d&apos;un chef passionné qui rêvait de créer un lieu où l&apos;artisanat traditionnel de la boulangerie française rencontrerait l&apos;innovation culinaire moderne.
                    </p>
                    <p>
                      En 2019, nous avons ouvert nos portes dans le quartier historique de Rouen, avec une mission simple : offrir à nos clients une expérience gastronomique authentique, en utilisant uniquement des ingrédients locaux et de saison.
                    </p>
                    <p>
                      Notre pain au levain, fermenté pendant 72 heures, est devenu notre signature. Mais nous ne nous sommes pas arrêtés là. Nous avons développé une carte complète de plats cuisinés qui célèbrent les saveurs de la Normandie.
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.2}>
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-cover bg-center"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&q=80')"}}
                  />
                </div>
              </FadeIn>
            </div>

            {/* Notre Équipe */}
            <div className="mb-24">
              <div className="text-center mb-16">
                <FadeIn>
                  <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">L&apos;Équipe</span>
                  <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Les Artisans de Tranché</h2>
                  <p className="text-gray-300 font-body text-lg max-w-2xl mx-auto">
                    Une équipe passionnée et dévouée qui travaille chaque jour pour vous offrir le meilleur
                  </p>
                </FadeIn>
              </div>

              <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
                <StaggerItem>
                  <div className="bg-surface-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all group">
                    <div className="aspect-[3/4] bg-cover bg-center"
                      style={{backgroundImage: "url('https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=600&q=80')"}}
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-1">Pierre Dubois</h3>
                      <p className="text-primary text-sm font-bold mb-3">Chef & Fondateur</p>
                      <p className="text-gray-400 text-sm font-body">
                        Formé dans les meilleures boulangeries parisiennes, Pierre a créé Tranché pour partager sa passion de l&apos;artisanat et de la gastronomie.
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-surface-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all group">
                    <div className="aspect-[3/4] bg-cover bg-center"
                      style={{backgroundImage: "url('https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&q=80')"}}
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-1">Sophie Martin</h3>
                      <p className="text-primary text-sm font-bold mb-3">Chef Pâtissière</p>
                      <p className="text-gray-400 text-sm font-body">
                        Diplômée de l&apos;école Ferrandi, Sophie crée des desserts qui allient tradition française et créativité moderne.
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-surface-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all group">
                    <div className="aspect-[3/4] bg-cover bg-center"
                      style={{backgroundImage: "url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80')"}}
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-1">Marc Lefebvre</h3>
                      <p className="text-primary text-sm font-bold mb-3">Maître Boulanger</p>
                      <p className="text-gray-400 text-sm font-body">
                        Avec 20 ans d&apos;expérience, Marc maîtrise l&apos;art de la fermentation et crée nos pains signature chaque jour.
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Nos Valeurs */}
            <div>
              <div className="text-center mb-16">
                <FadeIn>
                  <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Nos Valeurs</span>
                  <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Ce Qui Nous Anime</h2>
                </FadeIn>
              </div>

              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
                <StaggerItem>
                  <div className="text-center p-8 bg-surface-dark/50 rounded-xl border border-white/5">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">eco</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Local & Bio</h3>
                    <p className="text-gray-400 text-sm font-body">
                      Nous travaillons exclusivement avec des producteurs locaux dans un rayon de 50km.
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="text-center p-8 bg-surface-dark/50 rounded-xl border border-white/5">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">handshake</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Artisanat</h3>
                    <p className="text-gray-400 text-sm font-body">
                      Chaque produit est fait main avec des techniques traditionnelles et du temps.
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="text-center p-8 bg-surface-dark/50 rounded-xl border border-white/5">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">restaurant</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Qualité</h3>
                    <p className="text-gray-400 text-sm font-body">
                      Aucun compromis sur la qualité des ingrédients et la préparation de nos plats.
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="text-center p-8 bg-surface-dark/50 rounded-xl border border-white/5">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">favorite</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Passion</h3>
                    <p className="text-gray-400 text-sm font-body">
                      Notre amour pour la cuisine et la boulangerie se ressent dans chaque bouchée.
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6 lg:px-12 bg-[#1a0c0e]">
          <div className="max-w-[1200px] mx-auto">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" staggerDelay={0.1}>
              <StaggerItem>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-400 uppercase tracking-wider text-sm font-body">Années d&apos;Excellence</div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-400 uppercase tracking-wider text-sm font-body">Producteurs Partenaires</div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-400 uppercase tracking-wider text-sm font-body">Recettes Maison</div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">10k+</div>
                <div className="text-gray-400 uppercase tracking-wider text-sm font-body">Clients Satisfaits</div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
