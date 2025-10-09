# AVLCommercial.com - 530 Merrimon Avenue Showcase

A modern, responsive showcase site for the commercial property at 530 Merrimon Avenue, Asheville, NC 28804.

## Features

- 📸 **Image Gallery** with property photos (with attribution)
- 📊 **Key Statistics** (roof, parking, traffic, frontage)
- 📍 **Location Details** (proximity, access, VPD)
- 🏢 **Property Information** (uses, parking, compliance)
- 📱 **Fully Responsive** design
- ⚡ **Fast** Next.js build with Tailwind CSS

## Quick Start

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

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Configuration

### Update Contact Info

Edit `app/page.tsx` and replace:
- `hello@avlcommercial.com` with your email
- `(XXX) XXX-XXXX` with your phone number

### Replace Images

The site currently uses placeholder images from LoopNet/Crexi with attribution. For production:

1. Create a `/public/images` directory
2. Add your own property photos
3. Update the `GALLERY` array in `app/page.tsx`:

```typescript
const GALLERY = [
  { 
    src: "/images/exterior.jpg", 
    alt: "Building exterior",
    credit: "Your Credit",
    href: "#"
  },
  // ... more images
]
```

### Customize Styling

Colors and theme can be adjusted in:
- `tailwind.config.js` - Color palette
- `app/globals.css` - Global styles and utility classes

## Deploy to Vercel

1. Push this repo to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy (automatic)
4. Add custom domain `avlcommercial.com` in Vercel settings
5. Update DNS records per Vercel instructions

## Adding Features

### Contact Form

Replace the `mailto:` link with a form backend:
- [Formspree](https://formspree.io/) - Easy setup
- [Resend](https://resend.com/) - Developer-friendly API
- Vercel Edge Functions - Custom backend

### Floor Plans

Add PDF links in the property details section or create a modal viewer.

### Zoning Information

After confirming official zoning, add a section linking to permitted uses.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## License

Proprietary - AVLCommercial.com

## Notes

- Verify all property details with official sources
- Replace third-party images before production deployment
- Update contact information before going live
- Consider adding Google Analytics or similar tracking

