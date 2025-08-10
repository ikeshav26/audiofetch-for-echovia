import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Convert = () => {
  const [videoId, setVideoId] = useState('')
  const [downloadLink, setDownloadLink] = useState('')
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/convert`,
        { videoId }
      )
      setDownloadLink(res.data.data.link)
      setTitle(res.data.data.title)
      setVideoId('')
      toast.success(res.data.message || 'Conversion successful!')
    } catch (err) {
      console.error(err)
      toast.error(
        err.response?.data?.message || 'Conversion failed. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AudioFetch <span className="text-blue-600">for Echovia</span>
          </h1>
          <p className="text-lg text-gray-600">
            Convert online videos to high-quality MP3 and grow your personal,
            ad-free music library
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="videoUrl"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Video URL or ID
              </label>
              <input
                id="videoUrl"
                type="text"
                value={videoId}
                onChange={(e) => setVideoId(e.target.value)}
                placeholder="Paste youtube video URL or ID..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                required
                disabled={loading}
              />
              <p className="mt-1 text-sm text-gray-500">
                Works with both full links and just the video ID
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full font-medium py-3 px-6 rounded-md transition duration-200 ease-in-out ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
              } text-white`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 
                      1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Converting...
                </div>
              ) : (
                'Convert to MP3'
              )}
            </button>
          </form>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <svg
                className="animate-spin h-6 w-6 text-yellow-600 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 
                  0 0 5.373 0 12h4zm2 5.291A7.962 
                  7.962 0 014 12H0c0 3.042 
                  1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <div>
                <h3 className="text-lg font-medium text-yellow-800">
                  Converting your video...
                </h3>
                <p className="text-yellow-700">
                  Please wait while we process your video into MP3 format
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Download Section */}
        {downloadLink && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-green-800 mb-2">
                  Conversion Complete!
                </h3>
                <div className="mb-2">
                  <span className="text-sm font-medium text-black">
                    Video title:
                  </span>
                  <p className="text-sm font-medium text-green-800 break-words">
                    {title}
                  </p>
                </div>
                <p className="text-green-700 text-sm">
                  Your MP3 file is ready for download
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to={downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full lg:w-auto text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition duration-200 ease-in-out"
                >
                  Download MP3
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            How to use AudioFetch:
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Copy the video link or ID</li>
            <li>Paste it into the input field above</li>
            <li>Click “Convert to MP3” and wait for processing</li>
            <li>Download your MP3 file once it’s ready</li>
          </ol>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>AudioFetch for Echovia • Build your ad-free personal music library</p>
        </div>
      </div>
    </div>
  )
}

export default Convert