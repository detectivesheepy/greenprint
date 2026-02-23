# Greenprint Framework

A new website structure made to deploy on Vercel with **Vercel Speed Insights** integrated.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript support
- ✅ Vercel Speed Insights pre-configured
- ✅ ESLint configuration
- ✅ Ready for deployment

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- A Vercel account ([sign up for free](https://vercel.com/signup))
- The Vercel CLI installed

### Installation

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building

Build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

## Vercel Speed Insights

This project comes with Vercel Speed Insights pre-configured. Speed Insights automatically tracks Web Vitals and performance metrics.

### Setup Speed Insights on Vercel

1. **Enable Speed Insights in your Vercel project**:
   - Go to your [Vercel dashboard](https://vercel.com/dashboard)
   - Select your project
   - Navigate to the **Speed Insights** tab
   - Click **Enable**

2. **Deploy your app**:
   ```bash
   vercel deploy
   ```

3. **View metrics**:
   - Once deployed and users visit your site, metrics will appear in the Speed Insights dashboard
   - Go to your project → **Speed Insights** tab to view data

### How It Works

The `<SpeedInsights />` component is integrated in `app/layout.tsx`:

```tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

This component:
- Automatically tracks Core Web Vitals (LCP, FID, CLS, FCP, TTFB, INP)
- Only loads in production environments
- Sends data to Vercel's analytics endpoint
- Has minimal performance impact

### Verifying Installation

After deployment, you can verify Speed Insights is working by:

1. Visiting your deployed site
2. Opening browser DevTools → Network tab
3. Looking for requests to `/_vercel/speed-insights/script.js`

## Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform:

```bash
vercel deploy
```

Or connect your Git repository to Vercel for automatic deployments:

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Your app will be deployed on every push to your main branch

## Project Structure

```
greenprint-framework/
├── app/
│   ├── layout.tsx       # Root layout with Speed Insights
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── public/
│   └── index.html       # Public HTML template
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore rules
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md            # This file
```

## Learn More

### Next.js Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js/)

### Vercel Speed Insights Documentation
- [Speed Insights Overview](https://vercel.com/docs/speed-insights)
- [Using Speed Insights](https://vercel.com/docs/speed-insights/using-speed-insights)
- [Speed Insights Package Documentation](https://vercel.com/docs/speed-insights/package)
- [Speed Insights Metrics](https://vercel.com/docs/speed-insights/metrics)
- [Privacy and Compliance](https://vercel.com/docs/speed-insights/privacy-policy)
- [Troubleshooting](https://vercel.com/docs/speed-insights/troubleshooting)

## License

MIT
