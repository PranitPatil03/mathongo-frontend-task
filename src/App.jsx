import { useRef, useState } from "react";
import "./App.css";
import Notes from "./components/Notes";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const defaultVideoID = "zdGfo6I1yrA";

  const [videoID, setVideoID] = useState(defaultVideoID);
  const playerRef = useRef(null);

  const handleVideoIDChange = (e) => {
    setVideoID(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen py-10 px-4 sm:px-10">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-8 px-48">
          <p className="text-3xl font-serif font-semibold mb-4 sm:mb-0">
            Video Player with Notes
          </p>
          <input
            className="border border-gray-300 outline-none px-3 py-2 rounded-lg w-full sm:w-96 placeholder-italic placeholder-gray-500"
            type="text"
            placeholder="Enter the YouTube URL"
            value={videoID}
            onChange={handleVideoIDChange}
          />
        </div>

        <div className="flex flex-col justify-center items-center w-full max-w-7xl mb-8">
          <VideoPlayer
            videoId={videoID}
            onReady={(e) => (playerRef.current = e.target)}
          />
          <div className="mt-5 self-start w-full">
            <h2 className="font-serif text-xl font-semibold">
              Video title goes here
            </h2>
            <p className="font-serif text-base   font-thin">
              This is the description of the video
            </p>
          </div>
          <hr className="mt-3 border border-[#e7e7e7] w-full"/>
        </div>  
      </div>
      <Notes />
    </div>
  );
}

export default App;
