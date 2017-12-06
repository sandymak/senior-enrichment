import axios from 'axios';
import thunkMiddleware from 'redux-thunk';


const initialState = [];

// ACTION TYPE
const GET_STUDENTS = 'GET_STUDENTS';


// ACTION CREATOR
const getStudents = students => {
  const action = {
    type: GET_STUDENTS,
    students
  };
  return action;
}

// THUNK CREATORS!!!
export function fetchStudents() {
  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      })
      .catch(console.error);
  }
}


// REDUCER

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        action.students
      };

    default:
      return state
  }
}



// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };
