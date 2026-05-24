# Landing

Portfolio landing page built with Next.js.

## Local development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to GitHub Pages

The project is configured for static export in production (`output: "export"`) and is deployed automatically from the `main` branch via GitHub Actions.

1. Push changes to `main`.
2. GitHub Actions workflow `Deploy to GitHub Pages` builds the app and publishes `out/`.
3. Site becomes available at:
   - `https://astormspirit.github.io/landing/`

### One-time GitHub setup

In the repository settings:

1. Go to **Settings -> Pages**.
2. In **Build and deployment**, set **Source** to **GitHub Actions**.
3. Save settings.

After that, every push to `main` triggers a new deploy.
