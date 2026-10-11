# nicholaschew.ca

The source for [nicholaschew.ca](https://nicholaschew.ca), a statically exported personal site built with Next.js and React.

## Local development

Requires Node.js 24 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

- `npm run dev` starts the development server.
- `npm run lint` checks JavaScript and JSX.
- `npm run format` formats the repository with Prettier.
- `npm run build` creates the static site in `out/`.
- `npm run check` runs all validation and a production build.

## Deployment

Pushes to `master` are built and deployed to GitHub Pages by the workflow in `.github/workflows/nextjs.yml`. The custom domain is configured in `CNAME`.
