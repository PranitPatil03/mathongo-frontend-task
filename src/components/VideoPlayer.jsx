/* eslint-disable react/prop-types */
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId, onReady}) => {
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="w-full">
      <YouTube
        className="w-full h-full aspect-w-16 aspect-h-9"
        videoId={videoId}
        opts={opts}
        onReady={onReady}
      />
    </div>
  );
};

export default VideoPlayer;
