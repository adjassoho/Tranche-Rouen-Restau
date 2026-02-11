# Composants d'Animation

Ce dossier contient des composants d'animation réutilisables basés sur Framer Motion.

## Composants Disponibles

### FadeIn
Fait apparaître un élément en fondu avec un mouvement directionnel.

```tsx
<FadeIn delay={0.2} duration={0.8} direction="up">
  <h1>Mon titre</h1>
</FadeIn>
```

**Props:**
- `delay` (number): Délai avant l'animation (défaut: 0)
- `duration` (number): Durée de l'animation (défaut: 0.5)
- `direction` ("up" | "down" | "left" | "right" | "none"): Direction du mouvement (défaut: "up")
- `className` (string): Classes CSS additionnelles

### StaggerContainer
Conteneur qui anime ses enfants de manière échelonnée.

```tsx
<StaggerContainer staggerDelay={0.1}>
  <StaggerItem>Élément 1</StaggerItem>
  <StaggerItem>Élément 2</StaggerItem>
  <StaggerItem>Élément 3</StaggerItem>
</StaggerContainer>
```

**Props:**
- `staggerDelay` (number): Délai entre chaque enfant (défaut: 0.1)
- `className` (string): Classes CSS additionnelles

### StaggerItem
Élément enfant d'un StaggerContainer.

```tsx
<StaggerItem className="my-class">
  <div>Mon contenu</div>
</StaggerItem>
```

### ScaleIn
Fait apparaître un élément avec un effet de zoom.

```tsx
<ScaleIn delay={0.3}>
  <div>Mon contenu</div>
</ScaleIn>
```

**Props:**
- `delay` (number): Délai avant l'animation (défaut: 0)
- `className` (string): Classes CSS additionnelles

### ParallaxSection
Crée un effet de parallaxe au scroll.

```tsx
<ParallaxSection speed={0.5}>
  <div>Contenu avec parallaxe</div>
</ParallaxSection>
```

**Props:**
- `speed` (number): Vitesse du parallaxe (défaut: 0.5)
- `className` (string): Classes CSS additionnelles

### PageTransition
Anime les transitions entre les pages.

```tsx
<PageTransition>
  <YourPageContent />
</PageTransition>
```

## Utilisation

Importez les composants depuis le fichier index :

```tsx
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animations";
```

## Exemples

### Animation de liste de produits
```tsx
<StaggerContainer staggerDelay={0.15}>
  {products.map((product) => (
    <StaggerItem key={product.id}>
      <ProductCard product={product} />
    </StaggerItem>
  ))}
</StaggerContainer>
```

### Section avec animations multiples
```tsx
<section>
  <FadeIn direction="up">
    <h2>Titre</h2>
  </FadeIn>
  <FadeIn direction="up" delay={0.2}>
    <p>Description</p>
  </FadeIn>
  <ScaleIn delay={0.4}>
    <button>Call to Action</button>
  </ScaleIn>
</section>
```
