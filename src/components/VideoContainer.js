import React, { useEffect } from 'react'
import { VIDEO_API } from '../utils/constants/ConstantsApi';
const VideoContainer = () => {
    const getVideos=async()=>
  {
    const data=await fetch(VIDEO_API);
    const jsonData=await data.json();
    console.log(jsonData);
  };
  useEffect(()=>
  {
    getVideos();
  },[]);


  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer