import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video){
    return <div>Loading...</div>
}

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div className="">
    <div className="width-100">
      <iframe title="video player" className="width-100 height-100 mb-3 no-border lift" src={videoSrc} />
    </div>
      <div className="card card-body">
        <h2 className="mb-3">{video.snippet.title}</h2>
        <p className="">{video.snippet.description}</p>
      </div>
    </div>
  )
};

export default VideoDetail;
