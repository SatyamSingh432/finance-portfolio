# Finance Portfolio Dashboard

A full-stack finance portfolio dashboard built with React, Vite, Express, and MongoDB. It displays a live-updating summary, sector breakdown, and holdings table for your stock portfolio.

## Features

- **Frontend:** React + Vite + TailwindCSS
- **Backend:** Express + MongoDB
- **Live Data:** Stock prices update every 10 seconds
- **Components:** Portfolio summary, sector breakdown, holdings table

## How to Download the Project

1. Clone the repository from GitHub:
   ```sh
   git clone https://github.com/SatyamSingh432/finance-portfolio.git
   ```
2. Navigate into the project directory:
   ```sh
   cd finance-portfolio
   ```

## Folder Structure

```
finance-portfolio/
├── backend/
│   ├── package.json
│   └── src/
│       ├── data.js
│       └── index.js
├── frontend/
│   └── src/
│       ├── App.css
│       ├── App.jsx
│       └── components/
│           ├── HoldingsTable.jsx
│           ├── Sector.jsx
│           └── Summary.jsx
├── .gitignore
└── README.md
```

## Getting Started

### Frontend Setup

1. Install dependencies:
   ```sh
   cd frontend
   npm install
   ```
2. Start frontend dev server:
   ```sh
   npm run dev
   ```

## API

- `GET /api/portfolio`  
  Returns portfolio summary, sectors, and holdings as JSON.

## Technologies Used

- React
- Vite
- TailwindCSS
- Express
- MongoDB
- ESLint
