/* eslint-disable react/prop-types */
import Note from "./Note";

const NotesList = ({
  notes,
  onDelete,
  onEdit,
  setShowModal,
  handleTimestampClick,
}) => (
  <div>
    {notes.map((note) => (
      <Note
        key={note.id}
        note={note}
        onDelete={onDelete}
        onEdit={onEdit}
        setShowModal={setShowModal}
        handleTimestampClick={handleTimestampClick}
      />
    ))}
  </div>
);

export default NotesList;
