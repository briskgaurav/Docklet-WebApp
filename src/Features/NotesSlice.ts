import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import gsap from "gsap";

interface Note {
  id: string;
  note: string;
  favourite: boolean;
  editable: boolean;
  date: number;
  selectedColor: string;
  inputValue: string;
}

interface NotesState {
  colors: string[];
  notes: Note[];
  colorPicker: string;
  searchQuery: string;
  notequery: string;
  showFavorite: boolean;
  NotePushingAnimationOrder: boolean;
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
      note: "",
      favourite: false,
      editable: false,
      date: Date.now(),
      selectedColor: "bg-purple-300",
      inputValue: "",
    },
  ],

  colorPicker: "bg-purple-300",
  searchQuery: "",
  notequery: "",
  showFavorite: false,
  NotePushingAnimationOrder: false,
};

const updateLocalStorage = (notes: Note[]) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotes: (state, action: PayloadAction<string>) => {
      const newNote: Note = {
        id: nanoid(),
        note: "",
        favourite: false,
        editable: false,
        date: Date.now(),
        selectedColor: action.payload,
        inputValue: "",
      };
      state.notes.unshift(newNote);
      updateLocalStorage(state.notes);
    },
    toggleFavourite: (state, action: PayloadAction<string>) => {
      const favNote = state.notes.find((note) => note.id === action.payload);
      if (favNote) {
        favNote.favourite = !favNote.favourite;
        updateLocalStorage(state.notes);
      }
    },

    SetColorPicker: (state, action: PayloadAction<string>) => {
      state.colorPicker = action.payload;
    },

    deleteNote: (state, action: PayloadAction<string>) => {
      const allNotes = state.notes.filter((note) => note.id !== action.payload);
      state.notes = allNotes;
      updateLocalStorage(state.notes);
    },

    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      updateLocalStorage(state.notes);
    },

    setWhoValue: (
      state,
      action: PayloadAction<{ id: string; value: string }>
    ) => {
      const { id, value } = action.payload;
      const note = state.notes.find((note) => note.id === id);
      if (note) {
        note.inputValue = value;
        updateLocalStorage(state.notes);
      }
    },

    searchNoteValue: (
      state,
      action: PayloadAction<{ id: string; value: string }>
    ) => {
      const { id, value } = action.payload;
      const note = state.notes.find((note) => note.id === id);
      if (note) {
        note.note = value;
        updateLocalStorage(state.notes);
      }
    },
    toggleShowfavorite: (state) => {
      state.showFavorite = !state.showFavorite;
    },
    deletAll: (state) => {
      if (state.notes.length > 0) {
        gsap.to(".allnotes", {
          y: 500,
          duration: 1,
          ease: "bounce.out",
          opacity: 0,
          onComplete: () => {
            state.notes = [];
          },
        });
        localStorage.clear();
      }
    },
    setNotePushingAnimationOrder: (state) => {
      state.NotePushingAnimationOrder = !state.NotePushingAnimationOrder;
    },
    setInitialNotes: (state, action: PayloadAction<Note[]>) => {
      state.notes = action.payload;
    },
  },
});

export const {
  addNotes,
  toggleFavourite,
  SetColorPicker,
  deleteNote,
  setSearchQuery,
  setWhoValue,
  searchNoteValue,
  toggleShowfavorite,
  deletAll,
  setNotePushingAnimationOrder,
  setInitialNotes,
} = notesSlice.actions;

export default notesSlice.reducer;
