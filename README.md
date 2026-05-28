# PBTL Landing Page Structure

This workspace is scaffolded for a multi-page company landing website for **PBTL**.

## Included Pages
- Home page
- About Us page
- Contact Us page

## Notes
- The project now includes a working React + TypeScript + Vite boilerplate.
- Routing is configured for Home, About Us, and Contact Us.
- The structure is ready for future growth (additional pages, sections, shared components, services, and tests).

## Run Locally
- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Build production bundle: `npm run build`

## Folder Structure

```text
pbtl-website/
  public/
    images/
      .gitkeep
  src/
    app/
      App.tsx
      routes.tsx
    pages/
      HomePage.tsx
      AboutUsPage.tsx
      ContactUsPage.tsx
    components/
      layout/
        MainLayout.tsx
        Header.tsx
        Footer.tsx
      sections/
        HeroSection.tsx
        AboutPreviewSection.tsx
        ContactCtaSection.tsx
      common/
        Button.tsx
        Section.tsx
    styles/
      globals.css
      variables.css
    assets/
      .gitkeep
    lib/
      constants.ts
      types.ts
    hooks/
      .gitkeep
    services/
      .gitkeep
    utils/
      .gitkeep
    index.css
    main.tsx
  tests/
    pages/
      .gitkeep
  .gitignore
  index.html
  package.json
  tsconfig.json
  tsconfig.node.json
  vite.config.ts
```
