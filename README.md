# Client

Vite + React + TypeScript web app for **Kyro**.

Mock-first UI (`VITE_USE_MOCK=true`). Delivery: **Web done → Mobile → API**. See [../FRONTEND_FIRST.md](../FRONTEND_FIRST.md).

## Setup

```bash
cp .env.example .env
npm install
npm run dev
```

App runs at http://localhost:5173.

## Routes

| Path | Page |
|------|------|
| `/` | Landing |
| `/campaigns` | Browse (search + filters) |
| `/campaigns/new` | Create campaign wizard (auth) |
| `/my-campaigns` | Your campaigns (auth) |
| `/campaigns/:id` | Detail + donate modal |
| `/login` | Log in (`admin@kyro.test` → admin) |
| `/signup` | Sign up |
| `/ngo/apply` | Nonprofit application (auth) |
| `/admin/ngo` | Approve NGO applications (admin) |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Typecheck and production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint with oxlint |
# kyro-client
