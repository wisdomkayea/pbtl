# PBTL Landing Page Structure

This workspace is scaffolded for a multi-page company landing website for **PBTL**.

## Included Pages
- Home page
- About Us page
- Contact Us page

## Notes
- The project now includes a working Next.js App Router setup with React + TypeScript.
- Routing is configured using the `src/app` directory.
- The structure is ready for future growth (additional pages, sections, shared components, services, and tests).

## Run Locally
- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Build production bundle: `npm run build`
- Start production server: `npm run start`

## Folder Structure

```text
pbtl-website/
  public/
    images/
      .gitkeep
  src/
    app/
      layout.tsx
      page.tsx
      about/
        page.tsx
      contact/
        page.tsx
      industries/
        page.tsx
      privacy-policy/
        page.tsx
      request-quote/
        page.tsx
      solutions/
        page.tsx
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
  tests/
    pages/
      .gitkeep
  next-env.d.ts
  next.config.ts
  .gitignore
  package.json
  tsconfig.json
```
