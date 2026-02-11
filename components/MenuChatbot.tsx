"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function MenuChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Bonjour! Je suis votre assistant culinaire. Je peux vous aider à choisir vos plats, vous renseigner sur les ingrédients, les allergènes ou les valeurs nutritionnelles. Comment puis-je vous aider?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulation d'une réponse (à remplacer par une vraie API)
    setTimeout(() => {
      const response = generateResponse(input);
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    // Réponses sur les allergènes
    if (lowerQuery.includes("allergène") || lowerQuery.includes("allergie")) {
      return "Nos plats peuvent contenir des allergènes courants : gluten, lactose, fruits à coque, œufs. Pour des informations précises sur un plat spécifique, n'hésitez pas à me demander!";
    }

    // Réponses nutritionnelles
    if (lowerQuery.includes("calorie") || lowerQuery.includes("nutrition") || lowerQuery.includes("nutritif")) {
      return "Je peux vous fournir les informations nutritionnelles de nos plats. Par exemple, notre Salade Normande contient environ 350 kcal, notre Poulet Rôti 480 kcal. Quel plat vous intéresse?";
    }

    // Recommandations végétariennes
    if (lowerQuery.includes("végétarien") || lowerQuery.includes("vegetarien")) {
      return "Nos options végétariennes incluent : Risotto aux Champignons (€14), Salade Normande (€12), Salade César sans poulet (€9.50), et tous nos desserts. Que préférez-vous?";
    }

    // Recommandations de plats
    if (lowerQuery.includes("recommand") || lowerQuery.includes("conseil") || lowerQuery.includes("suggér")) {
      return "Je vous recommande nos spécialités : le Boeuf Bourguignon (cuisson lente 4h), la Soupe à l'Oignon Gratinée, et notre Pain au Levain 72h. Pour le dessert, le Fondant au Chocolat est exceptionnel!";
    }

    // Plats populaires
    if (lowerQuery.includes("populaire") || lowerQuery.includes("meilleur")) {
      return "Nos best-sellers sont : le Croque Monsieur (€9.50), le Poulet Rôti Fermier (€16.50), et la Tarte aux Pommes (€4.80). Tous préparés avec des produits locaux!";
    }

    // Commande
    if (lowerQuery.includes("commander") || lowerQuery.includes("commande")) {
      return "Pour passer commande, cliquez sur le bouton 'Commander' sous le plat de votre choix. Vous pouvez aussi appeler au +33 2 35 00 00 00 ou venir directement au restaurant!";
    }

    // Réponse par défaut
    return "Je suis là pour vous aider! Vous pouvez me poser des questions sur nos plats, les allergènes, les valeurs nutritionnelles, ou demander des recommandations. Que souhaitez-vous savoir?";
  };

  const quickQuestions = [
    "Quels sont vos plats végétariens?",
    "Informations nutritionnelles",
    "Plats sans gluten",
    "Vos recommandations"
  ];

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? "bg-gray-700 scale-95" : "bg-primary hover:scale-110"
        }`}
      >
        {isOpen ? (
          <span className="material-symbols-outlined text-white text-2xl">close</span>
        ) : (
          <>
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
            <span className="material-symbols-outlined relative z-10 text-white text-2xl">restaurant_menu</span>
          </>
        )}
      </button>

      {/* Message incitatif qui apparaît automatiquement */}
      {!isOpen && (
        <div className="fixed bottom-24 right-6 z-50 animate-bounce-slow">
          <div className="bg-white text-background-dark text-sm font-bold px-4 py-3 rounded-xl shadow-2xl max-w-[200px] relative animate-fade-in-up">
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45" />
            <p className="relative z-10">Besoin d&apos;aide pour choisir? Discutez avec moi! 💬</p>
          </div>
        </div>
      )}

      {/* Fenêtre du chatbot */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] h-[600px] bg-surface-dark rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-primary px-6 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">smart_toy</span>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg">Assistant Culinaire</h3>
              <p className="text-white/80 text-xs">En ligne • Répond en quelques secondes</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background-dark">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-surface-dark border border-white/10 text-gray-200 rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-surface-dark border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Questions rapides */}
          {messages.length === 1 && (
            <div className="px-4 py-3 bg-background-dark border-t border-white/5">
              <p className="text-xs text-gray-400 mb-2">Questions rapides :</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(question)}
                    className="text-xs bg-surface-dark hover:bg-surface-dark/80 text-gray-300 px-3 py-1.5 rounded-full border border-white/10 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-surface-dark border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Posez votre question..."
                className="flex-1 bg-background-dark text-white px-4 py-3 rounded-xl border border-white/10 focus:border-primary focus:outline-none text-sm placeholder:text-gray-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-primary hover:bg-red-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
