import React, { createContext } from 'react';
import { useState } from 'react';

const VideoContext = createContext();

const VideoContextProvider = ({ children }) => {
  const video_info = {
    video_url: '',
    latest_videos: [],
  };

  const [videoInfo, setVideoInfo] = useState(video_info);

  const data = { videoInfo, setVideoInfo };

  return <VideoContext.Provider value={data}>{children}</VideoContext.Provider>;
};

export default VideoContext;

export { VideoContextProvider };
