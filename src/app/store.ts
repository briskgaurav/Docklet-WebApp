import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../Features/NotesSlice";

export const store = configureStore({
    reducer: {
        notes: notesReducer,
    }
})
