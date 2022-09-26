import React, { createContext } from 'react';
import { useState } from 'react';

const VideoContext = createContext();

const VideoContextProvider = ({ children }) => {
  const video_info = {
    video_url: '',
    latest_videos: ['https://video.twimg.com/ext_tw_video/1574364626002788352/pu/vid/640x360/cA42qYxxDjtZpSYy.mp4?tag=12\n', 'https://video.twimg.com/amplify_video/1574297995138502656/vid/1280x720/OMYnSHXQHAMx-3aj.mp4?tag=14\n', 'https://video.twimg.com/amplify_video/1574297995138502656/vid/1280x720/OMYnSHXQHAMx-3aj.mp4?tag=14\n', 'https://video.twimg.com/amplify_video/1574297995138502656/vid/1280x720/OMYnSHXQHAMx-3aj.mp4?tag=14\n'],
  };

  const [videoInfo, setVideoInfo] = useState(video_info);

  const data = { videoInfo, setVideoInfo };

  return <VideoContext.Provider value={data}>{children}</VideoContext.Provider>;
};

export default VideoContext;

export { VideoContextProvider };
