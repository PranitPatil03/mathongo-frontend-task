import { useState } from "react";

const VideoPlayer = () => {

  const [videoID, setVideoID] = useState();

  const handleVideoIDChange=(e)=>{
    setVideoID(e.target.value)
  }

  console.log(videoID)

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <p className="text-3xl font-serif font-semibold">
          Video Player with Notes
        </p>
        <input
          className="border border-[#d5d4d4] outline-none px-3 py-2 rounded-lg w-96 placeholder:italic placeholder:text-[#656060]"
          type="text"
          placeholder="Enter the youtube url"
          value={videoID}
          onChange={(e)=>handleVideoIDChange(e)}
        />
      </div>

      <div className="flex w-full py-8 justify-center">
        <div className="w-full max-w-7xl">
          <iframe
            className="w-full h-[80vh] rounded-lg shadow-lg"
            src={videoID || "https://www.youtube.com/embed/_2s-0Z4YR3A?autoplay=0&mute=0"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
