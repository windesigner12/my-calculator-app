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
```


### 2️⃣ Run the Backend (Express API)
```bash
cd Backend
npm install
npm run dev
```

- Runs at: http://localhost:3000
- Example request:

```bash
GET http://localhost:3000/api/convert?type=inchesToMeters&value=10
```

- Response:

```bash
{
  "type": "inchesToMeters",
  "input": 10,
  "result": 0.254
}
```
### 3️⃣ Run the Frontend (React)
```bash
cd Frontend
npm install
npm run dev
```

- Runs at: http://localhost:5173
- The frontend communicates with the backend API.

### 4️⃣ Run Both Frontend + Backend Together

At the project root (my-converter-app/), create a package.json (if you don’t already have one):

```bash
npm init -y
npm install concurrently --save-dev
```

Then add this to root package.json:
```bash
{
  "scripts": {
    "start": "concurrently \"npm run dev --prefix Backend\" \"npm run dev --prefix Frontend\""
  }
}
```

### Now you can run:
```bash
npm start
```
### ✅ This will start both:

- Backend → http://localhost:3000
- Frontend → http://localhost:5173

### ⚡ Features

- Dropdown to select conversion type
- Input field for numeric values
- Fetches results from the backend
- Displays conversion results dynamically

Run both servers with one command

### 🛠 Tech Stack

- Frontend: React (Vite)
- Backend: Node.js, Express
- Other: CORS, Nodemon, Concurrently

### 🔮 Future Improvements

- Add more conversion types (length, weight, temperature, currency, etc.)
- Add unit tests for backend
- Styled UI with Tailwind or Material UI
- Dockerize for easier deployment

### 👨‍💻 Author

- Developed by <a href="https://www.youtube.com/@winshelost-louis4593" target="_blank">Winshelo ST LOUIS</a>