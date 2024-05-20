/* eslint-disable react/prop-types */
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";
import NotesList from "./NoteList";
import useNotes from "../hooks/useNotes";

const NoteForm = ({ videoID, onSave}) => {
  const [showModal, setShowModal] = useState(false);
  const { notes, deleteNote, editNote } = useNotes(videoID);

  return (
    <div className="flex flex-col border border-[#e7e7e7] p-5 rounded-xl shadow-md mx-auto">
      <div className="flex flex-row justify-between items-center">
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
            className="block font-medium rounded-lg text-sm text-center "
            type="button"
          >
            Add new note
          </button>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            onSave={onSave}
          />
        </div>
      </div>
      <hr className="my-5 border border-[#f6f3f3] w-full" />

      <NotesList
        notes={notes}
        onDelete={deleteNote}
        onEdit={editNote}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default NoteForm;
