import { SET_TOTAL_SUMMARY } from "./types";

export function setTotalSummary(notesList) {
  const summary = Object.values(notesList).reduce((acc, note) => {
    const { category, isArchived } = note;
    const type = isArchived ? "archived" : "active";
    if (!acc[category]) {
      acc[category] = {
        category,
        archived: 0,
        active: 0,
      };
    }
    acc[category][type]++;
    return acc;
  }, {});

  return {
    type: SET_TOTAL_SUMMARY,
    payload: summary,
  };
}
