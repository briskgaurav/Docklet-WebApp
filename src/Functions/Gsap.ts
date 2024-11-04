import {
  addNotes,
  deleteNote,
  SetColorPicker,
  setNotePushingAnimationOrder,
} from "../Features/NotesSlice";
import { gsap } from "gsap";
import { Dispatch } from "redux";

// Handle Delete Animation Function
export const handleDelAnimation = (
  id: string,
  dispatch: any,
  animatingId: any,
  setAnimatingId: React.Dispatch<React.SetStateAction<string | null>>
) => {
  const noteElement = document.getElementById(`note-${id}`);
  if (!noteElement) return;

  setAnimatingId(id);

  gsap.to(noteElement, {
    scale: 0,
    duration: 0.5,
    ease: "bounce.out",
    opacity: 0,
    onComplete: () => {
      dispatch(deleteNote(id));
      setAnimatingId(null);
    },
  });
};
// Filter Funtion
export const filterNotes = (
  notes: any[],
  searchQuery: string,
  showFavourites: boolean
) => {
  return notes.filter((note) => {
    const matchesSearch = note.inputValue
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFavorite = !showFavourites || note.favourite;
    return matchesSearch && matchesFavorite;
  });
};

// Handle Add Button Click
export const animatePlusButton = (
  condition: boolean,
  setCondition: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: Dispatch
) => {
  let mm = gsap.matchMedia();

  mm.add("(min-width:800px)", () => {
    const tl = gsap.timeline();
    if (condition) {
      tl.to("#plus", {
        scale: 1.1,
        rotate: "230deg",
        ease: "elastic",
        duration: 0.5,
      });
      tl.to("#colors", {
        opacity: 1,
        y: 10,
        ease: "elastic.inOut",
        duration: 1,
        stagger: 0.2,
      });
    } else {
      tl.to("#plus", {
        scale: 1,
        rotate: "180deg",
        ease: "bounce.inOut",
        duration: 0.2,
      });
      tl.to("#colors", {
        opacity: 0,
        y: -100,
        ease: "elastic.inOut",
        duration: 1,
        stagger: 0.2,
      });
    }
  });

  mm.add("(max-width:799px)", () => {
    const tl = gsap.timeline();
    if (condition) {
      tl.to("#plus", {
        scale: 1.2,
        rotate: "230deg",
        ease: "elastic",
        duration: 0.5,
      });
      tl.to("#colors", {
        opacity: 1,
        x: 10,
        ease: "elastic.inOut",
        duration: 1,
        stagger: 0.2,
      });
    } else {
      tl.to("#plus", {
        scale: 1,
        rotate: "180deg",
        ease: "bounce.inOut",
        duration: 0.2,
      });
      tl.to("#colors", {
        opacity: 0,
        x: -100,
        ease: "elastic.inOut",
        duration: 1,
        stagger: 0.2,
      });
    }
   
  });

  setCondition(!condition);

};

// Handle Color Pick
export const handleColorPick = (
  color: string,
  dispatch: Dispatch,
  setCondition: React.Dispatch<React.SetStateAction<boolean>>,
  NotePushingAnimationOrder: any
) => {
  dispatch(SetColorPicker(color));
  dispatch(addNotes(color));
  dispatch(setNotePushingAnimationOrder(NotePushingAnimationOrder));

  let mm = gsap.matchMedia();
  mm.add("(max-width:799px)", () => {
    const tl = gsap.timeline();

    tl.to("#colors", {
      opacity: 0,
      x : -100,
      ease: "elastic.inOut",
      duration: 1,
      stagger: 0.2,
    });
    tl.to("#plus", {
      rotate: "180deg",
      ease: "bounce.inOut",
      duration: 0.2,
    });
  });
  mm.add("(min-width:800px)", () => {
    const tl = gsap.timeline();

    tl.to("#colors", {
      opacity: 0,
      y: -100,
      ease: "elastic.inOut",
      duration: 1,
      stagger: 0.2,
    });
    tl.to("#plus", {
      rotate: "180deg",
      ease: "bounce.inOut",
      duration: 0.2,
    });
  });

  setCondition(true);
};
