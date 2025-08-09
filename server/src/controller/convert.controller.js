import axios from "axios";

export const convertYoutubeToMp3 = async (req, res) => {
  try {
    const { videoId } = req.body;
    

    if (!videoId || videoId.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "videoId is required"
      });
    }

  
    let cleanVideoId = videoId;
    if (videoId.includes('youtube.com') || videoId.includes('youtu.be')) {
      const urlParams = new URLSearchParams(new URL(videoId).search);
      cleanVideoId = urlParams.get('v') || videoId.split('/').pop().split('?')[0];
    }


    const options = {
      method: 'GET',
      url: 'https://youtube-mp36.p.rapidapi.com/dl',
      params: { id: cleanVideoId },
      headers: {
        'x-rapidapi-key': process.env.API_KEY,
        'x-rapidapi-host': process.env.API_HOST
      }
    };

    const response = await axios.request(options);
 
   
    if (response.data.status === 'fail' || response.data.code === 403) {
      return res.status(400).json({
        success: false,
        message: "Failed to convert video",
        error: response.data.msg || response.data.error,
        details: "Check if the video ID is correct and the video is available"
      });
    }
   
    res.json({
      success: true,
      message: "Conversion completed successfully",
      data: response.data
    });
    
  } catch (error) {
    console.error('Conversion error:', error);
    
    
    if (error.response) {
      return res.status(error.response.status).json({
        success: false,
        message: "API request failed",
        error: error.response.data?.msg || error.response.data?.error || error.message,
        statusCode: error.response.status
      });
    }
    
    res.status(500).json({
      success: false,
      message: "Failed to convert video",
      error: error.message
    });
  }
};
