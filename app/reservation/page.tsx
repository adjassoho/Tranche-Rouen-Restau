"use client";

import Header from "@/components/Header";
import { useState } from "react";

export default function ReservationPage() {
  const [selectedTable, setSelectedTable] = useState<number | null>(12);

  return (
    <div className="bg-background-dark text-white h-screen flex flex-col overflow-hidden font-display">
      <Header />
      
      <main className="flex flex-1 relative overflow-hidden pt-[72px]">
        {/* 3D Viewport */}
        <section className="flex-1 relative bg-black group overflow-hidden perspective-container animate-fade-in-up">
          <div className="absolute inset-0 bg-cover bg-center opacity-40 tilted-plane origin-center" 
            style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFKCm-_58wxshPwJjJWfVaEUDM7g79uHhrknElP2vTIHMsSwdN2XTES7onQOuC-hVeBUvZhk9DoLyAMg7BlyOV4RnLMSsZEuULSqWk_EQsJIfC6zJEf4MyHbRWS4WypJStxrPqoiWwiNguBWXuXW2oQhPlJKQ6ruMYW60WSUc2yurECq2YQRerrIII5RTFuvwW565bckxRmtPpPMnTbLQ0sPDkV6Hrv3leHWL_Ge0O0VEByw2fNTQZlpoE_Rr5o0t5lx8uW3JSfJk')", filter: "grayscale(20%) contrast(120%)"}}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80 pointer-events-none" />
          
          {/* View Controls */}
          <div className="absolute top-6 left-6 z-20 flex gap-2">
            <div className="bg-surface-dark/90 backdrop-blur-md border border-surface-accent rounded-lg p-1 flex shadow-lg">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-primary text-white text-xs font-bold">
                <span className="material-symbols-outlined text-[16px]">grid_view</span>
                Vue 3D
              </button>
            </div>
          </div>

          {/* Context Info */}
          <div className="absolute bottom-8 left-8 z-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
              <div>
                <h3 className="text-white font-bold text-xl">7 Rue de l&apos;Hôpital</h3>
                <p className="text-text-dim text-sm">Rouen, France</p>
              </div>
            </div>
            <div className="flex gap-4 text-xs font-medium text-text-dim mt-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" /> Disponible
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-slate-600" /> Occupée
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(212,17,50,0.5)]" /> Sélectionnée
              </div>
            </div>
          </div>

          {/* Interactive Tables */}
          <div className="absolute top-[55%] left-[55%] w-28 h-28 transform -translate-x-1/2 -translate-y-1/2 group/table cursor-pointer z-10 animate-scale-in" style={{animationDelay: '0.3s'}}>
            <div className="relative w-full h-full animate-pulse hover:animate-none">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-xl group-hover/table:bg-emerald-500/30 transition-all" />
              <div className="absolute inset-0 bg-surface-dark rounded-full border-2 border-emerald-500/50 group-hover/table:border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all" />
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center animate-float">
                <div className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg mb-1 whitespace-nowrap">
                  Table 04 • 2 Places
                </div>
                <div className="w-0.5 h-6 bg-emerald-500/50" />
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              </div>
            </div>
          </div>

          <div className="absolute top-[35%] right-[25%] w-32 h-24 transform -translate-x-1/2 -translate-y-1/2 group/table cursor-pointer z-20 animate-scale-in" style={{animationDelay: '0.5s'}}>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl" />
              <div className="absolute inset-0 bg-surface-dark rounded-lg border-2 border-primary shadow-[0_0_20px_rgba(212,17,50,0.4)]" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg mb-1 whitespace-nowrap flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Sélectionnée
                </div>
                <div className="w-0.5 h-8 bg-primary" />
                <div className="w-3 h-3 bg-primary rounded-full ring-4 ring-primary/20" />
              </div>
            </div>
          </div>
        </section>

        {/* AI Concierge Panel */}
        <aside className="w-[400px] flex-none bg-surface-dark border-l border-surface-accent flex flex-col shadow-2xl z-30 animate-slide-in-right">
          <div className="p-6 border-b border-surface-accent flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">smart_toy</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-surface-dark rounded-full" />
              </div>
              <div>
                <h3 className="text-white font-bold leading-none">Concierge</h3>
                <p className="text-text-dim text-xs mt-1">En ligne • Temps de réponse &lt; 1s</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-orange-600 flex-shrink-0 flex items-center justify-center mt-1">
                <span className="material-symbols-outlined text-white text-xs">smart_toy</span>
              </div>
              <div className="flex flex-col gap-3 max-w-[90%]">
                <div className="bg-surface-accent p-4 rounded-2xl rounded-tl-none text-sm text-gray-200 leading-relaxed shadow-sm">
                  J&apos;ai trouvé une table tranquille près de la fenêtre (Table 12) disponible à 19h30. Souhaitez-vous que je la réserve pour vous ?
                </div>
                
                <div className="border border-surface-accent bg-surface-dark/50 rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-white font-bold text-base">Table 12</h4>
                      <p className="text-text-dim text-xs">Près de la fenêtre • Zone calme</p>
                    </div>
                    <div className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-[10px] font-bold uppercase">Disponible</div>
                  </div>
                  <div className="h-px bg-surface-accent w-full" />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-text-dim text-[10px] uppercase font-bold">Date</span>
                      <p className="text-white text-sm font-medium">24 Oct</p>
                    </div>
                    <div>
                      <span className="text-text-dim text-[10px] uppercase font-bold">Heure</span>
                      <p className="text-white text-sm font-medium">19:30</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-1">
                    <button className="flex-1 bg-primary hover:bg-red-700 text-white py-2 rounded-lg text-xs font-bold transition-colors">
                      Confirmer la réservation
                    </button>
                    <button className="flex-1 bg-surface-accent hover:bg-surface-accent/80 text-white py-2 rounded-lg text-xs font-bold transition-colors">
                      Autres horaires
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-surface-accent bg-surface-dark/95 backdrop-blur">
            <div className="relative flex items-center">
              <input 
                className="w-full bg-surface-accent text-white placeholder-text-dim text-sm rounded-xl py-3 pl-4 pr-12 border-none focus:ring-1 focus:ring-primary focus:bg-surface-accent/80 transition-all shadow-inner" 
                placeholder="Tapez un message ou posez une question..." 
                type="text"
              />
              <div className="absolute right-2 flex gap-1">
                <button className="p-1.5 rounded-lg text-white bg-primary hover:bg-red-700 transition-colors shadow-lg">
                  <span className="material-symbols-outlined text-xl">arrow_upward</span>
                </button>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
