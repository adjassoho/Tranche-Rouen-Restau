#!/bin/bash

# Script de déploiement pour Vercel
# Usage: ./deploy.sh [production|preview]

set -e

echo "🚀 Déploiement de Tranché sur Vercel"
echo "======================================"

# Vérifier si Vercel CLI est installé
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI n'est pas installé"
    echo "📦 Installation de Vercel CLI..."
    npm install -g vercel
fi

# Build local pour vérifier les erreurs
echo ""
echo "🔨 Build de vérification..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build réussi!"
else
    echo "❌ Erreur lors du build. Corrigez les erreurs avant de déployer."
    exit 1
fi

# Déploiement
echo ""
if [ "$1" = "production" ]; then
    echo "🚀 Déploiement en PRODUCTION..."
    vercel --prod
else
    echo "🔍 Déploiement en PREVIEW..."
    vercel
fi

echo ""
echo "✅ Déploiement terminé!"
echo "🌐 Votre site est maintenant en ligne"
