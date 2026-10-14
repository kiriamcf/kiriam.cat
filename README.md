# kiriam.cat

My personal portfolio website: a space to share what I do, with a bit of motion to make it memorable.

The intro loader is inspired by [chriskalafatis.com](https://chriskalafatis.com).

## Stack

- [Nuxt 3](https://nuxt.com) + [Vue 3](https://vuejs.org), server-rendered and deployed on Cloudflare Pages
- [TailwindCSS](https://tailwindcss.com) for styling
- [GSAP](https://gsap.com) + ScrollTrigger for animations
- [Lenis](https://lenis.darkroom.engineering) for smooth scrolling
- [SplitType](https://github.com/lukePeavey/SplitType) for the letter-by-letter text reveal

## Running locally

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run preview   # preview the production build
```

## Deploying

The site is deployed manually to Cloudflare Pages. The `cloudflare_pages` preset in `nuxt.config.ts` builds into `dist/`:

```bash
npm run build
npx wrangler pages deploy dist/
```

The first deploy from a machine asks you to log in to Cloudflare (`npx wrangler login`).

Stop `npm run dev` before building: it rewrites `.nuxt` with dev-only code that ends up in the build, and every request in production then fails with a 500. Check the build locally with `npx wrangler pages dev dist/` before deploying.

## Structure

```
components/
  animations/Loading.vue   intro loader: name → initials → curved reveal
  sections/                page sections (Header, Hero, AboutMe, Skills, Footer)
  Text/, icons/            small presentational pieces
composables/
  useGsap.js               scoped GSAP context per component, cleaned up on unmount
  useLoader.js             "loader finished" signal shared across the page
  useSmoothScroll.js       Lenis wired to GSAP's ticker and ScrollTrigger
layouts/default.vue        mounts the loader and smooth scroll
utils/motion.js            reduced-motion check
```

## Animation conventions

- **Animate through `useGsap`.** Selectors are scoped to the component, and every tween and ScrollTrigger is reverted on unmount.
- **Wait for the loader.** Anything that animates in on page load hooks into `onLoaderFinished` instead of using a hard-coded delay.
- **Set hidden starting states with GSAP, never with CSS classes like `opacity-0`.** With `prefers-reduced-motion` enabled, no animations run and all content stays visible.
