import React from 'react'
import { useAuthContext } from '../context/AuthContext';

const VideoSection = () => {
    const{videoKey}=useAuthContext()

    return (
            <iframe style={{width:400,height:200}}
              className="rounded-xl"
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
              title="YouTube video"
              allowFullScreen
            ></iframe>
      );
}

export default VideoSection