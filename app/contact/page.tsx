import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen font-display">
      <Header />
      
      <main className="flex flex-col lg:flex-row pt-[72px] min-h-screen">
        {/* Left Panel */}
        <div className="flex flex-col flex-1 px-6 lg:px-20 py-20">
          <div className="max-w-2xl mx-auto w-full flex flex-col gap-12">
            <div className="flex flex-col gap-4 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Accès &amp; Informations
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
                VENEZ NOUS VOIR AU<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  7 RUE DE L&apos;HÔPITAL
                </span>
              </h1>
              <p className="text-text-muted text-lg font-light leading-relaxed max-w-lg mt-4">
                Niché au cœur historique de Rouen, où le patrimoine rencontre la modernité brutaliste.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group flex flex-col justify-between p-6 rounded-xl border border-border-dark bg-surface-dark/50 hover:bg-surface-dark hover:border-primary/50 transition-all animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                <div className="mb-6 text-white/80 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined !text-3xl">location_on</span>
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-1 uppercase tracking-wide">Adresse</h3>
                  <p className="text-text-muted">7 Rue de l&apos;Hôpital</p>
                  <p className="text-text-muted">76000 Rouen, France</p>
                </div>
              </div>

              <div className="group flex flex-col justify-between p-6 rounded-xl border border-border-dark bg-surface-dark/50 hover:bg-surface-dark hover:border-primary/50 transition-all animate-slide-in-right" style={{animationDelay: '0.3s'}}>
                <div className="mb-6 text-white/80 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined !text-3xl">call</span>
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-1 uppercase tracking-wide">Contact</h3>
                  <p className="text-text-muted hover:text-white cursor-pointer transition-colors">+33 2 35 00 00 00</p>
                  <p className="text-text-muted hover:text-white cursor-pointer transition-colors">bonjour@trancherouen.fr</p>
                </div>
              </div>

              <div className="md:col-span-2 group flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-border-dark bg-surface-dark/50 hover:bg-surface-dark hover:border-primary/50 transition-all animate-scale-in" style={{animationDelay: '0.4s'}}>
                <div className="flex-shrink-0 text-white/80 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined !text-3xl">schedule</span>
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white text-lg font-bold mb-2 uppercase tracking-wide flex items-center gap-2">
                      <span className="material-symbols-outlined !text-sm">bakery_dining</span> Boulangerie
                    </h3>
                    <p className="text-text-muted text-sm">Lun - Ven : 07:00 - 19:00</p>
                    <p className="text-text-muted text-sm">Sam - Dim : 08:00 - 18:00</p>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold mb-2 uppercase tracking-wide flex items-center gap-2">
                      <span className="material-symbols-outlined !text-sm">restaurant</span> Restaurant
                    </h3>
                    <p className="text-text-muted text-sm">Mar - Sam : 12:00 - 14:30</p>
                    <p className="text-text-muted text-sm">Jeu - Sam : 19:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#2a1d1f] to-[#181112] border border-border-dark p-8 shadow-2xl animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 rounded-full bg-surface-dark border border-primary/30 flex items-center justify-center relative z-10">
                    <span className="material-symbols-outlined text-primary !text-3xl animate-pulse">smart_toy</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-1">Maître d&apos;Hôtel Digital</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 max-w-md">
                    Allergènes ? Demandes spéciales ? Disponibilité en temps réel ? Discutez instantanément avec notre concierge IA.
                  </p>
                  <button className="group flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors">
                    Démarrer la conversation 
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform !text-lg">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Map */}
        <div className="relative lg:w-1/2 h-[50vh] lg:h-auto min-h-[400px] bg-surface-dark overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-80" 
            style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBUWSX_BRjRbICiQ3lJGDE2x7ZrmJXDJsSSM4TViyPgBMWZ3kGK5VsmkSd2WQUuWqQ0qJ6Aezl1U4dS5hbMopAM6-x15hq6fWCV9GEBDzCN-BQxToaIxEwSyhC8yehXlavOx0hKqWpMJuve9zXAqGIFCumX5NKI1Xj2y3QdZWWEIc2boo66lRodPP1CqD9pCr_KxKUCjM3YjOXBNsssIVutEAL7U3EsRtwr0IlBqL8M5CjmDxlvYPcoqDyW6hnPkw6bDpz4ZCqZk0')", filter: "grayscale(100%) contrast(120%) brightness(60%)"}}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent lg:bg-gradient-to-l lg:from-background-dark lg:via-transparent lg:to-transparent" />
          
          {/* Pin */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer">
            <div className="relative flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-full relative z-10 shadow-[0_0_20px_rgba(212,17,50,0.6)]" />
              <div className="absolute w-12 h-12 bg-primary/20 rounded-full animate-ping" />
            </div>
            <div className="bg-background-dark/90 backdrop-blur-sm px-4 py-2 rounded border border-border-dark shadow-xl translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <p className="text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap">Tranché Rouen</p>
              <p className="text-text-muted text-[10px] uppercase tracking-wide text-center">7 Rue de l&apos;Hôpital</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
