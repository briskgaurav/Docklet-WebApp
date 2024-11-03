import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import gsap from "gsap";

interface Note {
  id: string;
  favourite: boolean;
  editable: boolean;
  date: number;
  selectedColor: string;
}

interface NotesState {
  colors: string[];
  notes: Note[];
  colorPicker: string;
}

const initialState: NotesState = {
  colors: [
    "bg-yellow-300",
    "bg-red-300",
    "bg-purple-300",
    "bg-sky-300",
    "bg-green-300",
  ],
  notes: [
    {
      id: nanoid(),
      favourite: false,
      editable: false,
      date: Date.now(),
      selectedColor: "bg-purple-300",
    },
  ],

  colorPicker: "bg-purple-300",
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotes: (state, action: PayloadAction<string>) => {
      const newNote: Note = {
        id: nanoid(),
        favourite: false,
        editable: false,
        date: Date.now(),
        selectedColor: action.payload,
      };
      state.notes.unshift(newNote);
    },
    toggleFavourite: (state, action: PayloadAction<string>) => {
      const favNote = state.notes.find((note) => note.id === action.payload);
      if (favNote) {
        gsap.to("#Fav", {
          scale: 1.1,
          duration: 0.1,
          ease: "bounce.inOut",
        });
        favNote.favourite = !favNote.favourite;
      }
    },

    SetColorPicker: (state, action: PayloadAction<string>) => {
      state.colorPicker = action.payload;
    },
  },
});

export const { addNotes, toggleFavourite, SetColorPicker } = notesSlice.actions;

export default notesSlice.reducer;
