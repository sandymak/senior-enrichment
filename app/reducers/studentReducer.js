import axios from 'axios';

const initialState = [];

// ACTION TYPE
const GOT_STUDENTS = 'GOT_STUDENTS';
const NEW_STUDENT = 'NEW_STUDENT'

// ACTION CREATOR
const gotStudents = students => {
  const action = {
    type: GOT_STUDENTS,
    students
  };
  return action;
}

const addedStudent = newStudent => {
  const action = {
    type: NEW_STUDENT,
    newStudent
  }
  return action
}

// THUNK ACTION CREATORS!!! generates a function that can be dispatched because we are using `redux-thunk`
export function fetchStudents() {
  return function thunkFunc(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = gotStudents(students);
        dispatch(action);
      })
      .catch(console.error);
  }
}

export function postStudent(newStudent) {
  return function thunkFunc(dispatch) {
    return axios.post('/api/students/', newStudent)
      .then(res => res.data)
      .then(student => dispatch(addedStudent(student)))
      .catch(console.error)
  }
}

// REDUCER
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_STUDENTS:
      return action.students;

    case NEW_STUDENT:
      return [...state, action.newStudent];

    default:
      return state
  }
}

export default studentReducer

