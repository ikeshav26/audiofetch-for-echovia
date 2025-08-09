import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Convert = () => {
    const [videoId, setVideoId] = useState('')
    const [downloadLink, setDownloadLink] = useState('')

    const submithandler=async (e)=>{
        e.preventDefault();
        console.log(videoId);

        try{
            const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/convert`, { videoId });
            console.log(res.data);
            setDownloadLink(res.data.data.link);
            setVideoId('');
            toast.success(res.data.message || 'Conversion successful!');
        }catch(err){
            console.error(err);
            toast.error(err.response?.data?.message || 'Conversion failed. Please try again.');
        }
    }
  return (
    <div>
      <form onSubmit={submithandler}>
        <input className='bg-green-200 text-black border-2 border-red-400' type="text" value={videoId} onChange={(e) => setVideoId(e.target.value)} />
        <button className='bg-green-200 text-black border-2 border-blue-400'>Convert</button>
      </form>
      {downloadLink && (
        <div className='mt-4'>
          <Link className='text-blue-500' to={downloadLink} target="_blank" rel="noopener noreferrer">Download Link</Link>
        </div>
      )}
    </div>
  )
}

export default Convert
