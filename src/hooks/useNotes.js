// src/hooks/useNotes.js
import { useState, useEffect } from 'react';
import localforage from 'localforage';

const useNotes = videoId => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const loadNotes = async () => {
      const savedNotes = await localforage.getItem(videoId);
      if (savedNotes) {
        setNotes(savedNotes);
      }
    };

    loadNotes();
  }, [videoId]);

  const saveNotes = async newNotes => {
    setNotes(newNotes);
    await localforage.setItem(videoId, newNotes);
  };

  return {
    notes,
    saveNote: note => saveNotes([...notes, note]),
    deleteNote: id => saveNotes(notes.filter(note => note.id !== id)),
    editNote: editedNote =>
      saveNotes(notes.map(note => (note.id === editedNote.id ? editedNote : note))),
  };
};

export default useNotes;
