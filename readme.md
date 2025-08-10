# AudioFetch for Echovia

A full-stack web application that converts online video links into high-quality MP3 audio files.  
Built to help create a personal, ad-free music library — later to be integrated into the **Echovia** music player.

---

## 🎵 Project Purpose

AudioFetch is designed to:
- Extract high-quality audio from supported online video platforms
- Help build a curated collection of personal songs
- Support the development of the **Echovia** ad-free music player
- Provide a simple, fast, and responsive way to convert and download music

---

## 🚀 Features

- **Simple URL Input** – Paste a link or video ID  
- **High-Quality Conversion** – Optimal MP3 audio quality  
- **Real-time Feedback** – Loading states + toast notifications  
- **Responsive Design** – Works on desktop & mobile  
- **Error Handling** – User-friendly error messages  
- **Clean Interface** – Modern, distraction-free UI  

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM
- React Hot Toast
- Axios

### Backend
- Node.js
- Express.js
- RapidAPI (Video to MP3 conversion API)
- CORS
- dotenv

---

## 📁 Project Structure
```
audiofetch-for-echovia/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   └── Convert.jsx
│   │   └── ...
├── server/                 # Express backend
│   ├── src/
│   │   ├── controller/
│   │   │   └── convert.controller.js
│   │   └── routes/
│   │       └── converter.routes.js
│   ├── index.js
│   └── .env
```

---

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14+)
- npm or yarn
- RapidAPI account for a Video-to-MP3 service

### Backend Setup
```bash
cd server
npm install
```
Create `.env`:
```env
PORT=4000
API_KEY=your_rapidapi_key_here
API_HOST=api_service_host_here
```
Run:
```bash
npm run dev
```

### Frontend Setup
```bash
cd client
npm install
```
Create `.env`:
```env
VITE_API_BASE_URL=http://localhost:4000
```
Run:
```bash
npm run dev
```

---

## 💡 Usage
1. Start backend & frontend
2. Open the app in your browser
3. Paste your video link or ID
4. Click “Convert to MP3”
5. Download your MP3 file once ready

---

## 🎯 Future Plans
- Personal Music Library integration with **Echovia**
- Ad-Free Custom Music Player
- Playlist Management
- Metadata Editing

---

## ⚠️ Disclaimer
This project is for **personal & educational use only**.  
You are responsible for ensuring you have the right to download the content you convert.  
Always follow the source platform’s Terms of Service & copyright laws.

---
**AudioFetch for Echovia – Build your personal ad-free music experience** 🎵
