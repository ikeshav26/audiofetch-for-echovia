# YouTube to MP3 Converter

A full-stack web application that converts YouTube videos to high-quality MP3 audio files. This project was created to build a personal ad-free music library by downloading the best quality songs from YouTube, which will then be integrated into a custom music player application.

## 🎵 Project Purpose

This converter is specifically designed to:
- Extract high-quality audio from YouTube videos
- Build a curated collection of best quality songs
- Support the development of a personal ad-free music player
- Provide a seamless way to convert and download music for offline listening

## 🚀 Features

- **Simple URL Input**: Accepts both full YouTube URLs and video IDs
- **High-Quality Conversion**: Converts videos to MP3 format with optimal audio quality
- **Real-time Feedback**: Loading states and toast notifications for better UX
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Clean Interface**: Modern, human-designed UI without AI-generated appearance

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Router DOM** - For navigation and routing
- **React Hot Toast** - Beautiful toast notifications
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **RapidAPI** - YouTube MP3 conversion service
- **CORS** - Cross-origin resource sharing middleware
- **dotenv** - Environment variable management

## 📁 Project Structure

```
yt-to-mp3/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   └── Convert.jsx # Main conversion page
│   │   └── ...
│   └── package.json
├── server/                 # Express backend
│   ├── src/
│   │   ├── controller/
│   │   │   └── convert.controller.js
│   │   └── routes/
│   │       └── converter.routes.js
│   ├── index.js
│   ├── .env
│   └── package.json
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- RapidAPI account for YouTube MP3 conversion service

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory:
```env
PORT=4000
API_KEY=your_rapidapi_key_here
API_HOST=youtube-mp36.p.rapidapi.com
```

4. Start the server:
```bash
npm run dev
# or
npm start
```

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the client directory:
```env
VITE_API_BASE_URL=http://localhost:4000
```

4. Start the development server:
```bash
npm run dev
```

## 🔑 API Configuration

This project uses RapidAPI's YouTube MP3 converter service. To get your API key:

1. Visit [RapidAPI](https://rapidapi.com/)
2. Sign up for a free account
3. Subscribe to a YouTube MP3 converter service
4. Copy your API key and host URL
5. Add them to your server's `.env` file

## 💡 Usage

1. **Start both servers** (backend on port 4000, frontend on development port)
2. **Open the application** in your browser
3. **Paste a YouTube URL** or video ID in the input field
4. **Click "Convert to MP3"** and wait for processing
5. **Download your MP3 file** when the conversion completes

### Supported URL Formats
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `VIDEO_ID` (just the ID)

## 🎯 Future Plans

This converter is part of a larger project to create:
- **Personal Music Library**: Curated collection of high-quality songs
- **Ad-Free Music Player**: Custom player application without advertisements
- **Offline Listening**: Local music storage for uninterrupted playback
- **Enhanced Features**: Playlist management, metadata editing, and more

## 🚧 Development Notes

### Error Handling
- Comprehensive API error handling
- User-friendly error messages
- Loading states for better UX
- Input validation and sanitization

### Code Quality
- Clean, maintainable code structure
- Proper separation of concerns
- Environment variable management
- Consistent naming conventions

## 📝 License

This project is for personal use and educational purposes. Please respect YouTube's Terms of Service and copyright laws when using this tool.

## 🤝 Contributing

This is a personal project, but suggestions and improvements are welcome! Feel free to:
- Report bugs or issues
- Suggest new features
- Submit pull requests
- Share feedback

## ⚠️ Disclaimer

This tool is intended for personal use only. Users are responsible for ensuring they have the right to download and use the content they convert. Always respect copyright laws and YouTube's Terms of Service.

---

**Created for building a personal ad-free music experience** 🎵