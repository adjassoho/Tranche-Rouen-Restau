import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background-dark pt-24 pb-12 px-6 lg:px-12 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary text-2xl">bakery_dining</span>
              <h2 className="text-white text-lg font-bold uppercase">Tranché</h2>
            </div>
            <p className="text-gray-400 text-sm font-body">
              Boulangerie au levain et restaurant moderne à Rouen. <br/>Fabriqué quotidiennement avec passion.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6">Nous Rendre Visite</h3>
            <address className="text-gray-400 text-sm not-italic font-body space-y-2">
              <p>12 Rue de la République</p>
              <p>76000 Rouen, France</p>
              <p className="mt-4 text-white">Lun - Dim : 07:00 - 19:00</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6">Explorer</h3>
            <ul className="space-y-3 text-sm font-body">
              <li><Link className="text-gray-400 hover:text-primary transition-colors" href="/">Notre Histoire</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" href="/menu">Menu</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" href="#">Carrières</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" href="#">Presse</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold mb-2">Restez Informé</h3>
            <div className="flex flex-col gap-3">
              <input 
                className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm font-body w-full" 
                placeholder="Votre adresse email" 
                type="email"
              />
              <button className="bg-primary text-white font-bold px-4 py-3 rounded hover:bg-red-700 transition-colors text-sm uppercase tracking-wider">
                S&apos;abonner
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-gray-600 text-xs font-body">© 2024 Tranché Rouen. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="text-gray-500 hover:text-white transition-colors" href="#"><span className="sr-only">Instagram</span>IG</Link>
            <Link className="text-gray-500 hover:text-white transition-colors" href="#"><span className="sr-only">Twitter</span>TW</Link>
            <Link className="text-gray-500 hover:text-white transition-colors" href="#"><span className="sr-only">Facebook</span>FB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
