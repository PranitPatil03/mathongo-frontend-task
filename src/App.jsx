import { useRef, useState } from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import useNotes from "./hooks/useNotes";
import NoteForm from "./components/NoteForm";
import { formattedDate } from "./util/Date";
import { formatTimestamp } from "./util/timestamp";
import NotesList from "./components/NoteList";

function App() {
  const defaultVideoID = "zdGfo6I1yrA";

  const [videoID, setVideoID] = useState(defaultVideoID);
  const playerRef = useRef(null);

  const handleVideoIDChange = (e) => {
    setVideoID(e.target.value);
  };

  const { notes,saveNote ,deleteNote,editNote,setShowModal} = useNotes(videoID);

  const handleSaveNote = (content) => {
    const timestamp = playerRef.current.getCurrentTime();
    const formattedTimestamp = formatTimestamp(timestamp);

    console.log(formattedTimestamp);

    const newNote = {
      id: Date.now(),
      timestamp: formattedTimestamp,
      date: formattedDate,
      content,
    };
    saveNote(newNote);
  };

  return (
    <div className="flex flex-col min-h-screen py-10 px-4 sm:px-10">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-8 px-auto">
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
          <hr className="mt-3 border border-[#e7e7e7] w-full" />
        </div>
      </div>
      <div className="px-auto">
        <NoteForm onSave={handleSaveNote} videoID={videoID} />
      </div>
    </div>
  );
}

export default App;
