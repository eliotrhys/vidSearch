import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

  const renderedList = videos.map((video) => {
    return <div>
    <VideoItem
      key={video.id.videoId}
      onVideoSelect={onVideoSelect}
      video={video}
    />
    <div class="video-list-item"></div>
  </div>
  });

  return <div className="list-group">{renderedList}</div>
};

export default VideoList;
