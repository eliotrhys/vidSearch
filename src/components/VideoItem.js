import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="lift"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content ml-4">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
};

export default VideoItem;
