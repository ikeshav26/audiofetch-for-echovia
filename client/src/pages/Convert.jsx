import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Convert = () => {
    const [videoId, setVideoId] = useState('')
    const [downloadLink, setDownloadLink] = useState('')
    const [loading, setLoading] = useState(false)

    const submithandler=async (e)=>{
        e.preventDefault();
        console.log(videoId);
        setLoading(true);

        try{
            const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/convert`, { videoId });
            console.log(res.data);
            setDownloadLink(res.data.data.link);
            setVideoId('');
            toast.success(res.data.message || 'Conversion successful!');
        }catch(err){
            console.error(err);
            toast.error(err.response?.data?.message || 'Conversion failed. Please try again.');
        } finally {
            setLoading(false);
        }
    }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            YouTube to MP3 Converter
          </h1>
          <p className="text-lg text-gray-600">
            Convert your favorite YouTube videos to MP3 format quickly and easily
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <form onSubmit={submithandler} className="space-y-6">
            <div>
              <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700 mb-2">
                YouTube Video URL or ID
              </label>
              <input 
                id="videoUrl"
                type="text" 
                value={videoId} 
                onChange={(e) => setVideoId(e.target.value)}
                placeholder="Paste YouTube URL here (e.g., https://youtube.com/watch?v=...)"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                required
              />
              <p className="mt-1 text-sm text-gray-500">
                Supports both full URLs and video IDs
              </p>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-200 ease-in-out transform hover:scale-105"
            >
              Convert to MP3
            </button>
          </form>
        </div>

        {/* Download Section */}
        {downloadLink && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-green-800 mb-2">
                  Conversion Complete!
                </h3>
                <p className="text-green-700">
                  Your MP3 file is ready for download
                </p>
              </div>
              <Link 
                to={downloadLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition duration-200 ease-in-out"
              >
                Download MP3
              </Link>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">How to use:</h2>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Copy the YouTube video URL from your browser</li>
            <li>Paste it in the input field above</li>
            <li>Click "Convert to MP3" and wait for processing</li>
            <li>Download your MP3 file when ready</li>
          </ol>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Free YouTube to MP3 converter • No registration required</p>
        </div>
      </div>
    </div>
  )
}

export default Convert
