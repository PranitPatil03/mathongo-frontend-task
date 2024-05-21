import { useState } from "react";

/* eslint-disable react/prop-types */
const Note = ({ note, onDelete, onEdit, handleTimestampClick }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useState(note.content);

  const handleNoteEdit = () => {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      onEdit({ ...note, content: updatedContent });
    }
  };

  const handleTimeStamp = (note) => {
    handleTimestampClick(note.timestamp);
  };

  const handleContentChange = (e) => {
    setUpdatedContent(e.target.value);
  };

  return (
    <div className="flex flex-col px-4 rounded mx-auto ">
      <p className="text-lg font-serif font-medium ">{note.date}</p>
      <div className="text-base font-serif font-medium ">
        <button onClick={() => handleTimeStamp(note)}>
          Timestamp: <span className="text-[#6941C6]">{note.timestamp}</span>
        </button>
      </div>
      <textarea
        disabled={!isEditing}
        className="border p-2 rounded-lg shadow-sm mt-3 resize-none outline-none"
        value={updatedContent}
        onChange={handleContentChange}
      />
      <div className="flex space-x-2 justify-end">
        <button
          onClick={() => onDelete(note.id)}
          className="border px-2 py-1 rounded-lg shadow-sm mt-3"
        >
          Delete
        </button>
        <button
          onClick={handleNoteEdit}
          className={`border px-2  py-1 rounded-lg shadow-sm mt-3 ${
            isEditing ? "text-white bg-black" : "text-black bg-white"
          }`}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <hr className="my-5 border border-[#f6f3f3] w-full" />
    </div>
  );
};

export default Note;
