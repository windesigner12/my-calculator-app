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

<img width="717" height="693" alt="Screenshot 2025-08-30 153938" src="https://github.com/user-attachments/assets/002f5f36-f26f-41a7-91fb-88560709a7f8" />




---

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/my-converter-app.git
cd my-converter-app

2️⃣ Run the Backend (Express API)
cd Backend
npm install
npm run dev


Runs at: http://localhost:3000

Example request:

GET http://localhost:3000/api/convert?type=inchesToMeters&value=10


Response:

{
  "type": "inchesToMeters",
  "input": 10,
  "result": 0.254
}