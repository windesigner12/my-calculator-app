# 🧮 My Converter App

A simple **full-stack unit converter** built with:

- **Backend**: Node.js + Express (with CORS enabled)
- **Frontend**: React (Vite)
- **Dev Tools**: Nodemon (auto-reload for backend), Concurrently (run both servers with one command)

The app allows users to:
- Select a **conversion type** (e.g. Inches → Meters, Pounds → Kilograms, Celsius ↔ Fahrenheit)
- Enter a value
- Get the converted result in real time

---

## 📂 Project Structure

my-converter-app/
│
├── Backend/ # Node.js + Express API
│ ├── package.json
│ ├── server.js # Main Express app
│ ├── routes/
│ │ └── convertRoutes.js # Conversion API endpoints
│ ├── controllers/
│ │ └── convertController.js # Conversion logic
│ └── node_modules/
│
├── Frontend/ # React app (Vite)
│ ├── package.json
│ ├── vite.config.js
│ ├── public/
│ │ └── index.html
│ └── src/
│ ├── App.jsx # Main React component
│ ├── main.jsx # Entry point
│ ├── components/
│ │ └── Converter.jsx # Dropdown + input + result
│ └── assets/
│
└── package.json # Root scripts (for concurrently)
└── README.md