"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import Link from "next/link";

export default function DeliveryPage() {
  const [selectedOption, setSelectedOption] = useState<"delivery" | "pickup">("delivery");

  return (
    <div className="bg-background-dark text-white min-h-screen font-display">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 py-16 bg-gradient-to-b from-background-dark to-[#1a0c0e]">
          <div className="max-w-[1200px] mx-auto text-center">
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Livraison & Click & Collect</h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-gray-300 font-body max-w-3xl mx-auto">
                Profitez de nos plats et pains artisanaux chez vous ou venez les récupérer au restaurant
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Options Toggle */}
        <section className="px-6 lg:px-12 py-12">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-surface-dark rounded-xl p-2 border border-white/10">
                <button
                  onClick={() => setSelectedOption("delivery")}
                  className={`px-8 py-4 rounded-lg font-bold transition-all flex items-center gap-2 ${
                    selectedOption === "delivery"
                      ? "bg-primary text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="material-symbols-outlined">delivery_dining</span>
                  Livraison à Domicile
                </button>
                <button
                  onClick={() => setSelectedOption("pickup")}
                  className={`px-8 py-4 rounded-lg font-bold transition-all flex items-center gap-2 ${
                    selectedOption === "pickup"
                      ? "bg-primary text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="material-symbols-outlined">shopping_bag</span>
                  Click & Collect
                </button>
              </div>
            </div>

            {/* Livraison Content */}
            {selectedOption === "delivery" && (
              <div className="animate-fade-in-up">
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                  <FadeIn direction="right">
                    <div className="space-y-6">
                      <h2 className="text-4xl font-bold">Livraison Rapide à Rouen</h2>
                      <p className="text-gray-300 font-body text-lg leading-relaxed">
                        Recevez vos plats préférés directement chez vous, chauds et frais. Notre service de livraison couvre tout Rouen et ses environs proches.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-surface-dark/50 rounded-xl border border-white/5">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-primary">schedule</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">Horaires de Livraison</h3>
                            <p className="text-gray-400 text-sm font-body">
                              Lundi - Vendredi : 11h30 - 14h00 & 18h30 - 21h30<br/>
                              Samedi - Dimanche : 12h00 - 15h00 & 18h30 - 22h00
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-surface-dark/50 rounded-xl border border-white/5">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-primary">timer</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">Délai de Livraison</h3>
                            <p className="text-gray-400 text-sm font-body">
                              30 à 45 minutes en moyenne selon votre localisation
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-surface-dark/50 rounded-xl border border-white/5">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-primary">euro</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">Frais de Livraison</h3>
                            <p className="text-gray-400 text-sm font-body">
                              3,50€ • Gratuit à partir de 30€ de commande
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn direction="left" delay={0.2}>
                    <div className="bg-surface-dark rounded-2xl p-8 border border-white/5">
                      <h3 className="text-2xl font-bold mb-6">Zones de Livraison</h3>
                      <div className="space-y-3 mb-6">
                        {[
                          { zone: "Centre-ville de Rouen", time: "25-35 min" },
                          { zone: "Rive Gauche", time: "30-40 min" },
                          { zone: "Mont-Saint-Aignan", time: "35-45 min" },
                          { zone: "Bois-Guillaume", time: "35-45 min" },
                          { zone: "Sotteville-lès-Rouen", time: "30-40 min" },
                          { zone: "Saint-Étienne-du-Rouvray", time: "40-50 min" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-background-dark rounded-lg">
                            <div className="flex items-center gap-3">
                              <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                              <span className="font-body">{item.zone}</span>
                            </div>
                            <span className="text-sm text-gray-400">{item.time}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link href="/menu" className="w-full bg-primary hover:bg-red-700 text-white font-bold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        Commander Maintenant
                      </Link>
                    </div>
                  </FadeIn>
                </div>

                {/* Comment ça marche */}
                <div className="bg-[#1a0c0e] rounded-2xl p-12">
                  <h2 className="text-3xl font-bold text-center mb-12">Comment Ça Marche ?</h2>
                  <StaggerContainer className="grid md:grid-cols-4 gap-8" staggerDelay={0.1}>
                    <StaggerItem>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                          <span className="text-primary font-bold text-2xl">1</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2">Choisissez</h3>
                        <p className="text-gray-400 text-sm font-body">
                          Parcourez notre menu et sélectionnez vos plats préférés
                        </p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                          <span className="text-primary font-bold text-2xl">2</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2">Commandez</h3>
                        <p className="text-gray-400 text-sm font-body">
                          Validez votre panier et renseignez votre adresse
                        </p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                          <span className="text-primary font-bold text-2xl">3</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2">Suivez</h3>
                        <p className="text-gray-400 text-sm font-body">
                          Recevez des notifications sur l&apos;état de votre commande
                        </p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                          <span className="text-primary font-bold text-2xl">4</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2">Dégustez</h3>
                        <p className="text-gray-400 text-sm font-body">
                          Recevez votre commande chaude et savourez !
                        </p>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>
                </div>
              </div>
            )}

            {/* Click & Collect Content */}
            {selectedOption === "pickup" && (
              <div className="animate-fade-in-up">
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                  <FadeIn direction="right">
                    <div className="space-y-6">
                      <h2 className="text-4xl font-bold">Récupérez Votre Commande</h2>
                      <p className="text-gray-300 font-body text-lg leading-relaxed">
                        Commandez en ligne et venez récupérer votre commande au restaurant. Pratique, rapide et sans frais supplémentaires !
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-surface-dark/50 rounded-xl border border-white/5">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-primary">schedule</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">Horaires de Retrait</h3>
                            <p className="text-gray-400 text-sm font-body">
                              Lundi - Vendredi : 07h00 - 22h00<br/>
                              Samedi - Dimanche : 08h00 - 23h00
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-surface-dark/50 rounded-xl border border-white/5">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-primary">timer</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">Temps de Préparation</h3>
                            <p className="text-gray-400 text-sm font-body">
                              15 à 30 minutes selon votre commande
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-surface-dark/50 rounded-xl border border-white/5">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-primary">payments</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">Paiement</h3>
                            <p className="text-gray-400 text-sm font-body">
                              En ligne ou sur place • CB, Espèces, Tickets Restaurant
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn direction="left" delay={0.2}>
                    <div className="bg-surface-dark rounded-2xl p-8 border border-white/5">
                      <h3 className="text-2xl font-bold mb-6">Point de Retrait</h3>
                      
                      <div className="mb-6">
                        <div className="aspect-video rounded-xl overflow-hidden mb-4">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2596.8947!2d1.0937!3d49.4432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDI2JzM1LjUiTiAxwrAwNSczNy4zIkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{border: 0}}
                            allowFullScreen
                            loading="lazy"
                          />
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                            <div>
                              <p className="font-bold">Tranché Rouen</p>
                              <p className="text-gray-400 text-sm font-body">7 Rue de l&apos;Hôpital, 76000 Rouen</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-xl">call</span>
                            <div>
                              <p className="text-gray-400 text-sm font-body">+33 2 35 00 00 00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <Link href="/menu" className="w-full bg-primary hover:bg-red-700 text-white font-bold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">shopping_bag</span>
                        Commander & Récupérer
                      </Link>
                    </div>
                  </FadeIn>
                </div>

                {/* Avantages Click & Collect */}
                <div className="bg-[#1a0c0e] rounded-2xl p-12">
                  <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Choisir Click & Collect ?</h2>
                  <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
                    <StaggerItem>
                      <div className="text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
                        </div>
                        <h3 className="font-bold text-xl mb-3">Rapide</h3>
                        <p className="text-gray-400 font-body">
                          Commandez en ligne et récupérez en 15-30 minutes
                        </p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <span className="material-symbols-outlined text-primary text-3xl">savings</span>
                        </div>
                        <h3 className="font-bold text-xl mb-3">Économique</h3>
                        <p className="text-gray-400 font-body">
                          Aucun frais de livraison, payez uniquement vos produits
                        </p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                        </div>
                        <h3 className="font-bold text-xl mb-3">Garanti Frais</h3>
                        <p className="text-gray-400 font-body">
                          Vos plats sont préparés juste avant votre arrivée
                        </p>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 lg:px-12 py-16 bg-background-dark">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Puis-je modifier ma commande après validation ?",
                  a: "Oui, vous pouvez modifier votre commande dans les 5 minutes suivant la validation en nous appelant directement."
                },
                {
                  q: "Quels sont les moyens de paiement acceptés ?",
                  a: "Nous acceptons les cartes bancaires, espèces, Apple Pay, Google Pay et les tickets restaurant (Swile, Edenred)."
                },
                {
                  q: "Proposez-vous des options végétariennes/sans gluten ?",
                  a: "Oui ! Notre menu comprend plusieurs options végétariennes et nous pouvons adapter certains plats. Contactez-nous pour plus d'informations."
                },
                {
                  q: "Y a-t-il un montant minimum de commande ?",
                  a: "Pour la livraison, le montant minimum est de 15€. Aucun minimum pour le Click & Collect."
                }
              ].map((item, index) => (
                <div key={index} className="bg-surface-dark/50 rounded-xl p-6 border border-white/5">
                  <h3 className="font-bold text-lg mb-2 flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-xl">help</span>
                    {item.q}
                  </h3>
                  <p className="text-gray-400 font-body ml-8">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
