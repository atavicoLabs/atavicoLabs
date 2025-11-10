# Studio Full Stack - Landing Page

Modern responsive landing page built with Next.js 14, React, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Font:** Inter (Google Fonts)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Features

- ✅ Fully responsive design (desktop, tablet, mobile)
- ✅ Smooth scroll animations with Framer Motion
- ✅ Modern gradient backgrounds
- ✅ SEO optimized
- ✅ Fast loading with Next.js Image optimization
- ✅ Clean component architecture
- ✅ Easy to customize content

## 📁 Project Structure

```
landing_agency/
├── app/
│   ├── components/
│   │   ├── Hero.tsx        # Hero section with CTA
│   │   ├── About.tsx       # About section with tech icons
│   │   ├── Services.tsx    # Services pricing cards
│   │   ├── Portfolio.tsx   # Project showcase grid
│   │   ├── CTA.tsx         # Contact call-to-action
│   │   └── Footer.tsx      # Footer with links
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎯 Customization

### Updating Content

All content can be easily modified in the respective component files:

- **Hero section:** `app/components/Hero.tsx`
- **Services & pricing:** `app/components/Services.tsx`
- **Portfolio projects:** `app/components/Portfolio.tsx`
- **Contact info:** `app/components/CTA.tsx` and `app/components/Footer.tsx`

### Changing Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    dark: "#0f172a",    // Background color
    accent: "#3b82f6",  // Accent blue
  },
}
```

### Adding New Sections

1. Create a new component in `app/components/`
2. Import and add it to `app/page.tsx`
3. Follow the existing pattern with Framer Motion animations

## 🌐 Deployment

Deploy easily to Vercel (recommended):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use the Vercel GitHub integration for automatic deployments.

## 📝 License

MIT License - feel free to use this template for your projects!

## 🤝 Contact

For questions or support, reach out at hello@studiofullstack.dev
