# Full-Stack Web Application Template

A starter template for building a web application with a React/Vite client and an Express server.

## Stack

- **Client:** React, Vite, Tailwind CSS, shadcn/ui components, Lucide icons, Axios, and React Router
- **Server:** Node.js, Express, MongoDB/Mongoose dependencies, JWT, bcryptjs, CORS, and cookie-parser

## Project structure

```text
practice/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       │   └── ui/
│       ├── lib/
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
├── server/
│   ├── config/
│   ├── src/
│   │   └── app.js
│   ├── .env
│   └── index.js
└── README.md
```

## Prerequisites

- Node.js 22 or a compatible current Node.js release
- npm
- MongoDB only when database features are added and the database connection is enabled

## Installation

Install dependencies in both workspaces:

```bash
cd client
npm install

cd ../server
npm install
```

## Environment variables

Create or update `server/.env`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/fakedb
JWT_SECRET=replace_with_a_long_random_secret
```

Never commit real secrets. The server `.gitignore` excludes `.env`.

## Development

Run the client and server in separate terminals.

### Client

```bash
cd client
npm run dev
```

The Vite development server prints its local URL in the terminal.

### Server

```bash
cd server
npm run dev
```

The API server starts on the port configured in `server/.env` (port `5000` by default).

## Client commands

Run these commands from `client/`:

```bash
npm run lint
npm run build
npm run preview
```

## Current scaffold status

- The client contains a working Vite/React entry point and starter UI components.
- The server exposes a basic `GET /` route and starts successfully.
- The database configuration file is currently a placeholder; the server does not connect to MongoDB yet.
- Authentication dependencies are installed but authentication routes and middleware have not been implemented.
- Client and server currently have separate npm manifests and scripts.

## Before using this as a production template

- Add a root-level workflow or workspace scripts if you want one command to install, lint, test, and run both applications.
- Implement and verify the MongoDB connection before using `MONGODB_URI`.
- Replace the development JWT secret with a securely managed production secret.
- Restrict CORS to the deployed client origin.
- Add API routes, validation, centralized error handling, tests, and production logging as the application grows.