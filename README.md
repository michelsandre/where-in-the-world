## 🌐 Where in the world?

### 💬 About

This refers to Fronend Mentor challenge of: [REST Countries API with color theme switcher](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

A responsive country information explorer built with **Next.js 16**, **React 19**, and **Mantine UI**. This application consumes the **REST Countries API** to display country cards, region filters, text search, and country detail pages with border-country navigation.

---

### 📌 Overview

The application provides a clean front-end experience for browsing country data. Users can:

- Search countries by name
- Filter results by region
- View a responsive grid of country cards
- Open a country detail page with official name, population, region, capital, currencies, languages, and bordering countries
- Preserve search and filter state when navigating between pages

---

### 🧩 Architecture

#### App structure

- `src/app/(front)/page.tsx`
  - server component that fetches the complete country list
  - renders `HomeClient` with initial data
- `src/app/(front)/detail/[code]/page.tsx`
  - server component that loads country details by ISO code
  - resolves related border country names
  - renders `DetailClient`
- `src/components`
  - UI components for layout, search, filters, cards, and detail views
  - client components manage navigation and query state with `next/navigation`
- `src/services`
  - reusable API wrappers for REST Countries requests
- `src/types`
  - shared TypeScript interfaces for API responses
- `src/settings`
  - configuration constants for API endpoints and cache behavior
  - central location for app-wide runtime settings

#### Settings & configuration

- `src/settings/constants.ts`
  - `API_REST_COUNTRIES` — base URL for REST Countries API
  - `CACHE_TIME` — server fetch cache duration (in seconds)

This keeps environment-agnostic values centralized and easy to update.

#### Data fetching

The app uses the REST Countries API:

- `GET /all?fields=name,capital,population,region,flags,cca3`
- `GET /alpha/{code}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags,cca3`
- `GET /alpha/?codes={codes}&fields=name,cca3`

Requests are cached for `300` seconds using Next.js fetch caching.

---

### ⭐ Features

- Search by country name with debounced input handling
- Filter by region using a dynamic select list
- Responsive card-based grid layout
- Detail view with back navigation and persisted filter/query context
- Border country badges that link to neighbor detail pages
- Client-side URL state management via query strings
- Progressive image loading with Next.js `Image`

---

### 📂 Component breakdown

- `HomeClient`
  - renders the search bar, region selector, summary badges, and card list
  - applies filter logic for `name` and `region` query parameters
- `DetailClient`
  - renders country metadata and border country links
  - uses `router.replace` to preserve browser history correctly
- `CountryCard`
  - clickable card with flag preview, population, region, and capital
- `ListOfCards`
  - displays either the filtered results or an empty state component
- `SearchInput`
  - debounced text input updates `name` query parameter
- `SelectGroup`
  - builds a region filter list from the loaded data

---

### ⚙️ Project setup

#### Requirements

- Node.js 20+
- pnpm (recommended) or npm/yarn

#### Install dependencies

```bash
pnpm install
```

#### Development server

```bash
pnpm dev
```

Open `http://localhost:3000` to view the application.

#### Production build

```bash
pnpm build
pnpm start
```

#### Code quality

```bash
pnpm lint
```

---

### 🌐 Routes

- `/` — homepage with country search and region filtering
- `/detail/[code]` — country detail page by ISO 3166-1 alpha-3 code

Query parameters supported on the homepage:

- `name` — text search for country names
- `region` — region filter

Example: `/ ?name=brazil&region=americas`

---

### 🛠️ Technologies

- Next.js 16
- React 19
- TypeScript
- Mantine UI
- Phosphor Icons
- Tailwind/PostCSS support
- REST Countries API

---

### 📝 Notes

- Country detail pages are server-rendered and hydrated by client components for interactivity.
- The app preserves filter state when returning from the detail page using the `from` query parameter.
- The project is structured to separate server data loading from client UI logic for clear maintainability.
