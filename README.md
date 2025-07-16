# llm-comparison-web-app
Web app to compare responses of multiple LLMs via OpenRouter
# 🧠 LLM Comparison Web App

Compare responses from multiple Large Language Models (LLMs) like GPT-4, Claude, LLaMA, and Gemini — side-by-side, in real time — using the OpenRouter API.

---

## 🚀 Features

- ✅ Enter any prompt
- ✅ Choose 2 LLMs from a dropdown
- ✅ See real model outputs, side-by-side
- ✅ Optional: Google OAuth login
- ✅ Powered by OpenRouter API

---

## 🛠 Tech Stack

| Layer       | Technology            |
|-------------|------------------------|
| Frontend    | React (Vite)           |
| Backend     | FastAPI (Python)       |
| Auth        | Google OAuth (Authlib) |
| LLM Access  | OpenRouter API         |
| HTTP Client | Axios (frontend), httpx (backend) |
| Versioning  | Git + GitHub           |

---

## 📦 Folder Structure

llm-comparison-web-app/
├── backend/
│ ├── main.py
│ ├── routers/
│ ├── .env.example
│ └── requirements.txt
├── frontend/
│ └── client/
│ ├── src/
│ ├── components/
│ └── App.jsx
├── .gitignore
├── README.md


---

## 🧪 How It Works

1. User enters a prompt
2. Selects two LLMs from dropdown
3. Frontend sends two POST requests to backend
4. Backend hits OpenRouter API for both models
5. Responses are returned and displayed side-by-side

---

## 🧰 How to Run Locally

### ✅ Backend (FastAPI)

cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn main:app --reload

### ✅ Frontend (React + Vite)

cd frontend/client
npm install
npm run dev

