// Initial State
const initialState = {
  notes: [],
};

const update = (notes, key, day, title, desc, time, cityData) => {
  // alert("Data in update" + key + " :" + title);
  const updatedNotes = notes;
  // alert("Data in update" + JSON.stringify(updatedNotes));
  for (let i = 0; i < updatedNotes.length; i++) {
    if (updatedNotes[i].key == key) {
      alert("match" + updatedNotes[i].key);

      updatedNotes[i].day = day;
      updatedNotes[i].title = title;
      updatedNotes[i].desc = desc;
      updatedNotes[i].time = time;
      updatedNotes[i].cityData = cityData;
    }
  }
  return updatedNotes;
};

// Reducers (Modifies The State And Returns A New State)
const noteReducer = (state = initialState, action) => {
  console.log("ACtion Logg" + JSON.stringify(action));
  switch (action.type) {
    //SAVE NOTE
    case "SAVE_NOTE": {
      return {
        // notes: [],
        // State
        ...state,
        // Redux Store
        notes: state.notes.concat({
          key: action.key,
          day: action.day,
          title: action.title,
          desc: action.desc,
          time: action.time,
          cityData: action.cityData,
        }),
      };
    }

    //UPDATE NOTE
    case "UPDATE_NOTE": {
      return {
        // notes: [],
        // State
        ...state,

        notes: state.notes.splice(
          0,
          state.notes.length,
          update(
            state.notes,
            action.key,
            action.day,
            action.title,
            action.desc,
            action.time,
            action.cityData
          )
        ),
        // // Redux Store
        // notes: state.notes.concat({
        //   key: action.key,
        //   day: action.day,
        //   title: action.title,
        //   desc: action.desc,
        //   time: action.time,
        //   cityData: action.cityData,
        // }),
      };
    }

    //SAVE NOTE
    case "DELETE_NOTE": {
      return {
        // notes: [],
        // State
        ...state,
        // Redux Store
        notes: state.notes.filter((note) => {
          return note.key !== action.key;
        }),
      };
    }

    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default noteReducer;
