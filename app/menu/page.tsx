import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuChatbot from "@/components/MenuChatbot";
import Link from "next/link";

export default function MenuPage() {
  const products = [
    {
      name: "Pain de Campagne",
      description: "Pain de campagne traditionnel avec une croûte épaisse et croustillante.",
      price: "€4.50",
      status: "Fraîchement Cuit",
      stock: "12 en stock",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1Q2MQDxkeGIHs9dhQRnXUtDN7hyiXWyE_I6Z3v6YddA62DNnU4Z0Q5l0QU-fjOLiITyZU4Am4x6k8FswipyWesoO8Vcu8G6qzBLb4nUQcjVBHzC_t2YK8K8yu4oo3MUxAJh8RqwKF-wKlboy1e4Z2bcnB9pembauC2qiX82R0AIsBswtydivXuLzYvcCpSjTRqQHlftX1hI748q4Q96M32rzWVVSggiM-2IdaEl2eNM5mP9A5ei7vJReVw0SS0gj8tqFmRnCasRM"
    },
    {
      name: "Baguette Tradition",
      description: "La classique. Croûte croustillante, intérieur aéré.",
      price: "€1.30",
      status: "Stock Limité",
      stock: "3 dernières restantes",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0mc0Nx5Rmjum-JE4kJeTkm0hVhJ93Xg2g6eX87zE3GG0IC41LYANtLfuBHZlYmJyu526ybYSpdiAGDqY4JxtcjiwPEm3UuejxYcMuEGN0Xwby_IU4oeA6mWYvmaAF0R8mPMG7MG1mI7tOho3btdjGk5ejz_ECTH_Hz1JeT6RuGrahzGXGYbKItyGUD0GdkQ1JSHvCX9dtIIjoiGOiEyEZAIngXB5V4_d79XZcdJjpc0mZ6kFda50xCAjKrHbkL-XjM3-UkDlhK6U"
    },
    {
      name: "Croissant Isigny",
      description: "27 couches de pur beurre d'Isigny.",
      price: "€1.40",
      status: "Meilleure Vente",
      stock: "Stock Élevé",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAuvUswkRCb_wQMCZi-IngfgBeGl2Q-1vPhizOlZq_tI0A5lkudE38S1ueZtPRFFcxKzHEgwbR-Wq0C27fW0FTbFHjl6bdx8uMJTnbn846RRe-k_kRZQxzjWKwsv-sZVd6zrMwZm7yt9E_Emvoe7ZPwn5tOBUBBxngFk8tddRgRJDC5YAvRYuh2p9albMPrCmLcwlD8B-T1vFkLE19Mahc0AI-r92TuQQOTXsrMrR6mZW2hk5RQMsGjiGoUqMNKx5Cc9bwR4WkIbA"
    },
    {
      name: "Pain au Chocolat",
      description: "Beurre d'Isigny, bâtons de chocolat noir.",
      price: "€1.60",
      status: "Disponible",
      stock: "Cuit il y a 2h",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1Bm7QdiH0XRKUL5cidF8h3T-cetX9pbCHDwCblHenGwzj1uP640Ycr5t8UI7GSCY1L7gSxZmnOVw92H34pZtxBlij5Mm4fhuu0bWch25SSzvQtdcP4qGJAh3yI0r3WxS2kadBW8fg97pIPQhWNTvZ8N9q-gLpAIC2EYvZn4AAj7Iw86ZODBIqYdq2tfoK-wnoolT5oi8HKwhOPsEJkRt5dmi5xcARw_wc-8Kh4X3675yDBa_oIk3_WP6_1labeeW5u8Pa8tckB78"
    }
  ];

  return (
    <div className="bg-background-dark text-white min-h-screen font-display">
      <Header />
      
      <main className="pt-24 px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <section className="mb-16 relative rounded-2xl overflow-hidden h-[400px] flex items-end p-12 animate-fade-in-up">
            <div className="absolute inset-0 bg-cover bg-center" 
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtQxdb2izNE1ax49k-daQhkwIcF1GxD0CVPmB6lUwg2DN3nFgFr2sDwdVEjHBaKKasFzIUxFIJoyzs6mpdEonr1Js1vzwvvkHPloxWSNbKMG9PK-YJnZmruxd5DXhU2It7o11by4c9KFtEXlnZEqaCc7yBHxnCKAt7QMZUPWpNoe67ZubZ1JNtDACtobhDgSmUzC-tDzjVVR3EOKOOvnt6UUXX2cTsHn7xNu22QQcje3qFNNuMWkiEQzjxGDl1-rbiACkpKuSzcEw')"}}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-5xl font-bold text-white mb-2">Fraîchement Sorti du Four</h2>
              <p className="text-text-muted text-lg">Disponibilité en temps réel directement de nos fours à Rouen.</p>
            </div>
          </section>

          {/* Products Grid */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8 animate-slide-in-left">
              <h3 className="text-2xl font-bold">Pains Artisanaux & Viennoiseries</h3>
              <span className="text-sm text-text-muted">Mis à jour il y a 2 min</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div 
                  key={index} 
                  className="group bg-surface-dark rounded-xl border border-border-dark overflow-hidden hover:border-primary/50 transition-all animate-scale-in"
                  style={{animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards'}}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-bold uppercase rounded-md backdrop-blur-sm">
                        {product.status}
                      </span>
                    </div>
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{backgroundImage: `url('${product.image}')`}}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{product.name}</h4>
                      <span className="text-lg font-medium">{product.price}</span>
                    </div>
                    <p className="text-text-muted text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        {product.stock}
                      </div>
                      <Link href="/reservation" className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-1">
                        Ajouter <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Plats Chauds Section */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8 animate-slide-in-left">
              <h3 className="text-2xl font-bold">Plats Chauds</h3>
              <span className="text-sm text-text-muted">Service 11h30 - 14h30</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Croque Monsieur",
                  description: "Jambon, béchamel maison, emmental, pain de mie.",
                  price: "€9.50",
                  status: "Disponible",
                  stock: "Préparé sur place",
                  image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80"
                },
                {
                  name: "Soupe à l'Oignon Gratinée",
                  description: "Oignons caramélisés, bouillon maison, croûtons, gruyère.",
                  price: "€7.50",
                  status: "Chef's Choice",
                  stock: "Spécialité du jour",
                  image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80"
                },
                {
                  name: "Poulet Rôti Fermier",
                  description: "Poulet fermier, légumes de saison, jus corsé.",
                  price: "€16.50",
                  status: "Meilleure Vente",
                  stock: "Limité",
                  image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80"
                },
                {
                  name: "Boeuf Bourguignon",
                  description: "Boeuf mijoté au vin rouge, carottes, champignons.",
                  price: "€18.00",
                  status: "Signature",
                  stock: "Cuisson lente 4h",
                  image: "https://images.unsplash.com/photo-1595777216528-071e0127ccbf?w=800&q=80"
                },
                {
                  name: "Risotto aux Champignons",
                  description: "Riz Carnaroli, champignons forestiers, parmesan.",
                  price: "€14.00",
                  status: "Végétarien",
                  stock: "Disponible",
                  image: "https://images.unsplash.com/photo-1476124369491-f1a4598d494e?w=800&q=80"
                },
                {
                  name: "Saumon Grillé",
                  description: "Filet de saumon, purée de céleri, sauce citron.",
                  price: "€19.50",
                  status: "Frais du jour",
                  stock: "Arrivage matin",
                  image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80"
                }
              ].map((product, index) => (
                <div 
                  key={index} 
                  className="group bg-surface-dark rounded-xl border border-border-dark overflow-hidden hover:border-primary/50 transition-all animate-scale-in"
                  style={{animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards'}}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-primary/90 text-white text-xs font-bold uppercase rounded-md backdrop-blur-sm">
                        {product.status}
                      </span>
                    </div>
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{backgroundImage: `url('${product.image}')`}}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{product.name}</h4>
                      <span className="text-lg font-medium">{product.price}</span>
                    </div>
                    <p className="text-text-muted text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        {product.stock}
                      </div>
                      <Link href="/reservation" className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-1">
                        Commander <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Salades & Entrées Section */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8 animate-slide-in-left">
              <h3 className="text-2xl font-bold">Salades & Entrées</h3>
              <span className="text-sm text-text-muted">Produits frais & locaux</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Salade Normande",
                  description: "Camembert rôti, pommes, noix, vinaigrette au cidre.",
                  price: "€12.00",
                  status: "Bio",
                  stock: "Produits locaux",
                  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80"
                },
                {
                  name: "Salade César",
                  description: "Poulet grillé, parmesan, croûtons, sauce César maison.",
                  price: "€11.50",
                  status: "Classique",
                  stock: "Disponible",
                  image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80"
                },
                {
                  name: "Tartare de Saumon",
                  description: "Saumon frais, avocat, citron vert, toast.",
                  price: "€13.50",
                  status: "Frais",
                  stock: "Préparé minute",
                  image: "https://images.unsplash.com/photo-1580959375944-1ab5b8c78f88?w=800&q=80"
                }
              ].map((product, index) => (
                <div 
                  key={index} 
                  className="group bg-surface-dark rounded-xl border border-border-dark overflow-hidden hover:border-primary/50 transition-all animate-scale-in"
                  style={{animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards'}}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-bold uppercase rounded-md backdrop-blur-sm">
                        {product.status}
                      </span>
                    </div>
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{backgroundImage: `url('${product.image}')`}}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{product.name}</h4>
                      <span className="text-lg font-medium">{product.price}</span>
                    </div>
                    <p className="text-text-muted text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        {product.stock}
                      </div>
                      <Link href="/reservation" className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-1">
                        Commander <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Desserts Section */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8 animate-slide-in-left">
              <h3 className="text-2xl font-bold">Desserts Maison</h3>
              <span className="text-sm text-text-muted">Pâtisserie artisanale</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Tarte aux Pommes",
                  description: "Pommes caramélisées, pâte feuilletée maison.",
                  price: "€4.80",
                  status: "Signature",
                  stock: "Cuit aujourd'hui",
                  image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=800&q=80"
                },
                {
                  name: "Tarte au Citron Meringuée",
                  description: "Crème citron, meringue italienne, pâte sablée.",
                  price: "€5.20",
                  status: "Populaire",
                  stock: "Disponible",
                  image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80"
                },
                {
                  name: "Fondant au Chocolat",
                  description: "Chocolat noir 70%, cœur coulant, glace vanille.",
                  price: "€6.50",
                  status: "Gourmand",
                  stock: "Servi chaud",
                  image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80"
                },
                {
                  name: "Crème Brûlée",
                  description: "Vanille de Madagascar, sucre caramélisé.",
                  price: "€5.80",
                  status: "Classique",
                  stock: "Fait maison",
                  image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&q=80"
                },
                {
                  name: "Profiteroles",
                  description: "Choux, glace vanille, sauce chocolat chaud.",
                  price: "€6.00",
                  status: "Gourmand",
                  stock: "Disponible",
                  image: "https://images.unsplash.com/photo-1612201142855-c7a9b44c9c1e?w=800&q=80"
                },
                {
                  name: "Tiramisu Maison",
                  description: "Mascarpone, café, cacao, biscuits cuillère.",
                  price: "€5.50",
                  status: "Italien",
                  stock: "Préparé ce matin",
                  image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80"
                }
              ].map((product, index) => (
                <div 
                  key={index} 
                  className="group bg-surface-dark rounded-xl border border-border-dark overflow-hidden hover:border-primary/50 transition-all animate-scale-in"
                  style={{animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards'}}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-yellow-500/90 text-white text-xs font-bold uppercase rounded-md backdrop-blur-sm">
                        {product.status}
                      </span>
                    </div>
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{backgroundImage: `url('${product.image}')`}}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{product.name}</h4>
                      <span className="text-lg font-medium">{product.price}</span>
                    </div>
                    <p className="text-text-muted text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        {product.stock}
                      </div>
                      <Link href="/reservation" className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-1">
                        Commander <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Boissons Section */}
          <section>
            <div className="flex items-center justify-between mb-8 animate-slide-in-left">
              <h3 className="text-2xl font-bold">Boissons</h3>
              <span className="text-sm text-text-muted">Café & Thés premium</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Espresso",
                  description: "Café arabica torréfié artisanalement.",
                  price: "€2.50",
                  image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80"
                },
                {
                  name: "Cappuccino",
                  description: "Espresso, lait mousseux, cacao.",
                  price: "€3.80",
                  image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80"
                },
                {
                  name: "Thé Bio",
                  description: "Sélection de thés verts, noirs, infusions.",
                  price: "€3.50",
                  image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80"
                },
                {
                  name: "Jus Frais Pressé",
                  description: "Orange, pomme, carotte du jour.",
                  price: "€4.50",
                  image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&q=80"
                }
              ].map((product, index) => (
                <div 
                  key={index} 
                  className="group bg-surface-dark rounded-xl border border-border-dark overflow-hidden hover:border-primary/50 transition-all animate-scale-in"
                  style={{animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards'}}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{backgroundImage: `url('${product.image}')`}}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{product.name}</h4>
                      <span className="text-lg font-medium">{product.price}</span>
                    </div>
                    <p className="text-text-muted text-sm mb-4">{product.description}</p>
                    <Link href="/reservation" className="w-full text-sm font-bold hover:text-primary transition-colors flex items-center justify-center gap-1 border-t border-white/5 pt-4">
                      Commander <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <MenuChatbot />
      <Footer />
    </div>
  );
}
