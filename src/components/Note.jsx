/* eslint-disable react/prop-types */
const Note = ({ note, onDelete, onEdit, setShowModal }) => {
  const handleNoteEdit = () => {
    setShowModal(true);
    onEdit(note.id);
  };

  const handleTimeStamp = () => {

  };

  return (
    <div className="flex flex-col px-4 rounded mx-auto ">
      <p className="text-lg font-serif font-medium ">{note.date}</p>
      <a
        onClick={handleTimeStamp(note)}
        className="text-base font-serif font-medium "
      >
        <p className="">
          Timestamp: <span className="text-[#6941C6]">{note.timestamp}</span>
        </p>
      </a>
      <p className="border p-2 rounded-lg shadow-sm mt-3">{note.content}</p>
      <div className="flex space-x-2 justify-end">
        <button
          onClick={() => onDelete(note.id)}
          className="border px-2 py-1 rounded-lg shadow-sm mt-3"
        >
          Delete
        </button>
        <button
          onClick={handleNoteEdit}
          className="border px-2  py-1 rounded-lg shadow-sm mt-3"
        >
          Edit
        </button>
      </div>
      <hr className="my-5 border border-[#f6f3f3] w-full" />
    </div>
  );
};

export default Note;
