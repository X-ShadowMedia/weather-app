// save note action
export const saveNote = (key, day, title, desc, time, cityData) => ({
  type: "SAVE_NOTE",
  key: key,
  day: day,
  title: title,
  desc: desc,
  time: time,
  cityData: cityData,
});

// save note action
export const updateNote = (key, day, title, desc, time, cityData) => ({
  type: "UPDATE_NOTE",
  key: key,
  day: day,
  title: title,
  desc: desc,
  time: time,
  cityData: cityData,
});

// delete note action
export const deleteNote = (key) => ({
  type: "DELETE_NOTE",
  key: key,
});
