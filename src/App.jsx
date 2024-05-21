import { useRef, useState } from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import useNotes from "./hooks/useNotes";
import { formattedDate } from "./util/Date";
import { formatTimestamp, parseTimestampToSeconds } from "./util/timestamp";
import NotesList from "./components/NoteList";
import { CirclePlus } from "lucide-react";
import Modal from "./components/Modal";

function App() {
  const defaultVideoID = "7XDeI5fyj3w";

  const [videoID, setVideoID] = useState(defaultVideoID);
  const playerRef = useRef(null);
  console.log(playerRef);

  const handleVideoIDChange = (e) => {
    setVideoID(e.target.value);
  };

  const { notes, saveNote, deleteNote, editNote } = useNotes(videoID);

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

  const [showModal, setShowModal] = useState(false);

  const handleTimestampClick = (timestamp) => {
    const seconds = parseTimestampToSeconds(timestamp);
    playerRef.current.seekTo(seconds);
  };

  return (
    <div className="mx-0 flex flex-col min-h-screen py-10 px-4 sm:px-10 md:mx-52">
      <div className="flex flex-col w-full justify-center items-center mx-auto px-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-8 px-auto">
          <p className="text-xl md:text-3xl font-serif font-semibold mb-4 sm:mb-0">
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

        <div className="flex flex-col justify-center items-center w-full mb-8">
          <VideoPlayer
            ref={playerRef}
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
        <div className="flex flex-col border border-[#e7e7e7] p-5 rounded-xl shadow-md ">
          <div className="gap-4 md:gap-0 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="font-serif text-xl font-semibold">My notes</h3>
              <p className="font-serif text-sm font-thin">
                All your notes at a single place. Click on any note to go to
                specific timestamp in the video.
              </p>
            </div>
            <div className="flex flex-row border border-[#e7e7e7] p-2 gap-2 rounded-md justify-between items-center">
              <CirclePlus className="w-4 h-4" />
              <button
                onClick={() => setShowModal(true)}
                className="w-full font-medium rounded-lg text-sm "
                type="button"
              >
                Add new note
              </button>
              <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                onSave={handleSaveNote}
              />
            </div>
          </div>
          <hr className="my-5 border border-[#f6f3f3] w-full" />

          <NotesList
            notes={notes}
            onDelete={deleteNote}
            onEdit={editNote}
            setShowModal={setShowModal}
            ref={playerRef}
            handleTimestampClick={handleTimestampClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
