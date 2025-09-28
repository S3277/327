# 327.io - AI Infrastructure Website

A modern, responsive website for AI infrastructure services with French/English translation support.

## Features

- Responsive design with modern animations
- French/English language toggle
- Contact form integration
- Pricing calculator
- Mobile-optimized navigation

## Deploy to Netlify

### Option 1: Drag & Drop (Easiest)
1. Run `npm run build` to create the `dist` folder
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to the deploy area
4. Your site will be live instantly with a secure HTTPS URL

### Option 2: Git Integration
1. Push this code to a GitHub repository
2. Connect your GitHub account to Netlify
3. Select this repository
4. Netlify will automatically build and deploy

### Option 3: Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## Local Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Contact Form

The contact form is configured to work with Formspree. The form will work immediately after deployment.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)