# Aayush Agarwal - Developer Portfolio

A modern, cyberpunk-themed developer portfolio built with Next.js 15, showcasing professional experience, projects, and skills.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 18, Tailwind CSS
- **Modular Architecture**: Clean separation of data, components, and pages
- **Single Source of Truth**: All data centralized in `/app/data` directory
- **Interactive Terminal**: Command-line interface for navigation
- **Responsive Design**: Optimized for all device sizes
- **Matrix Theme**: Cyberpunk-inspired design with animations
- **Form Integration**: Contact form powered by Formspree
- **SEO Optimized**: Proper meta tags and structured data

## 📁 Project Structure

```
aayush-portfolio/
├── app/
│   ├── data/              # Single source of truth for all data
│   │   ├── index.js       # Main export file
│   │   ├── profile.js     # Personal information
│   │   ├── projects.js    # Project details
│   │   ├── experience.js  # Work experience
│   │   ├── techStack.js   # Technical skills
│   │   ├── skills.js      # Soft skills
│   │   ├── achievements.js# Awards and stats
│   │   ├── recommendations.js # LinkedIn recommendations
│   │   └── blog.js        # Blog posts
│   │
│   ├── components/        # Reusable React components
│   │   ├── MainLayout.jsx
│   │   ├── Modal.jsx
│   │   └── TerminalOverlay.jsx
│   │
│   ├── utils/            # Utility functions
│   │   └── terminal.js
│   │
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
│
├── public/               # Static assets
│   └── experience/       # Certificate images
│
├── FORMSPREE_SETUP.md   # Form setup instructions
└── README.md            # This file
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aayush-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Configuration

### Updating Personal Information

All data is centralized in `/app/data/` directory. Update the respective files:

- **Personal Info**: Edit `profile.js`
- **Projects**: Edit `projects.js`
- **Experience**: Edit `experience.js`
- **Skills**: Edit `techStack.js` and `skills.js`
- **Achievements**: Edit `achievements.js`
- **Recommendations**: Edit `recommendations.js`
- **Blog**: Edit `blog.js`

### Form Setup

The contact form uses Formspree. See `FORMSPREE_SETUP.md` for configuration instructions.

### Adding Images

Place images in `/public/` directory and reference them using relative paths:
- Project images: `/project-name.jpg`
- Company logos: `/company-name.png`
- Certificates: `/experience/certificate-name.jpg`

## 🎨 Customization

### Colors & Theme

Edit `globals.css` and Tailwind classes in components for theme customization.

### Terminal Commands

Add/modify terminal commands in `/app/utils/terminal.js`

### Animations

Matrix rain and other animations are in `/app/page.tsx` and can be customized.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Configure environment variables if needed
4. Deploy

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud
- Self-hosted with Node.js

## 🔧 Development

### Adding New Sections

1. Create data file in `/app/data/`
2. Export from `/app/data/index.js`
3. Import and use in components/pages

### Code Quality

```bash
npm run lint        # Run ESLint
npm run build       # Test production build
```

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork and customize for your own portfolio!

## 📞 Contact

- **Email**: aayush.agarwal1936@gmail.com
- **LinkedIn**: [aayush1936](https://www.linkedin.com/in/aayush1936)
- **GitHub**: [aayush1936](https://github.com/aayush1936)

---

Built with ❤️ using Next.js and Tailwind CSS
