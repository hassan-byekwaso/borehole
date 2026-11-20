# Borehole Drilling frontend

Frontend foundation for the company website. Company-specific content is
intentionally not included until it is provided.

## Development

The enquiry form requires the Express API and MongoDB to be running. Configure
the API environment once:

```powershell
Copy-Item server/.env.example server/.env
```

Set `PORT=5000`, `MONGODB_URI` to a reachable MongoDB instance, and
`CLIENT_ORIGIN=http://localhost:5173` in `server/.env`. Email notification
settings are optional; without them, enquiries are still saved.

Start the API in one terminal:

```sh
cd server
npm install
npm run dev
```

Start the frontend from the repository root in another terminal:

```sh
npm install
npm run dev
```

The Vite development server proxies `/api` requests to `http://localhost:5000`,
so the form uses the same origin in development. Confirm the API and database
are ready at `http://localhost:5000/api/health`; the response should report
`"database":"connected"`. For production, route `/api` to the backend on the
same origin or set `VITE_API_BASE_URL` to the backend's public origin. On
Vercel, set `MONGODB_URI` and `CLIENT_ORIGIN` (the deployed frontend origin) for
the API function. `RESEND_API_KEY` and `ENQUIRY_NOTIFICATION_EMAIL` are optional;
without MongoDB configuration the API starts but reports the database as
disconnected and cannot accept enquiries.

## Production build

```sh
npm run build
npm run preview
```
