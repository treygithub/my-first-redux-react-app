//Declaire your init state
const initialState={
    userName:'',
    password:'',
    id:0
}
// declaire const's
const UPDATE_USERNAME="UPDATE_USERNAME";
const UPDATE_PASSWORD= "UPDATE_PASSWORD";
const UPDATE_ID="UPDATE_ID";

// *******************
// **ACTION-CREATORS**
// *******************

export function updateUsername(newUser) {
    return {
      type: UPDATE_USERNAME,
      payload: newUser
    };
  }
  export function updatePassword(password) {
    return {
      type: UPDATE_PASSWORD,
      payload: password
    };
  }
  export function updateId(id) {
    return {
      type: UPDATE_ID,
      payload: id
    };
  }
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_USERNAME:
        return {
          ...state,
          userName: action.payload
        };
      case UPDATE_PASSWORD:
        return {
          ...state,
          password: action.payload
        };
      case UPDATE_ID:
        return {
          ...state,
          id: +action.payload
        };
      default:
        return state;
    }
  }
  