# Superior — AI-Powered Roblox Group Management

The premium marketing website for Superior, an AI-powered operations platform for Roblox groups.

## Tech Stack

- **Next.js** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion**

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── about/        # About Us page
│   ├── enterprise/   # Enterprise page
│   ├── features/     # Features page
│   ├── pricing/      # Pricing page
│   ├── globals.css   # Global styles & design tokens
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page section components
│   └── ui/           # Reusable UI components
├── data/             # Centralized content/config data
└── lib/              # Constants, utilities
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_DASHBOARD_URL` | Dashboard app URL |
| `NEXT_PUBLIC_SIGNUP_URL` | Signup page URL |
| `NEXT_PUBLIC_LOGIN_URL` | Login page URL |

## Deploying to Vercel

1. Push the repository to GitHub
2. Connect the repository to [Vercel](https://vercel.com)
3. Vercel automatically detects Next.js
4. Configure environment variables in the Vercel dashboard if needed
5. Deploy

The project includes a `vercel.json` configuration and is fully compatible with Vercel's default Next.js build pipeline. It supports automatic preview deployments and production deployments.

## Media Assets

- Place hero video at `public/videos/north-shore.mp4`
- Place hero poster image at `public/images/hero-poster.jpg`
- Additional images go in `public/images/`

