import axios from 'axios';

const initialState = [];

// ACTION TYPE
const GOT_STUDENTS = 'GOT_STUDENTS';
const ADDED_STUDENT = 'ADDED_STUDENT'

// ACTION CREATOR
const gotStudents = students => {
  const action = {
    type: GOT_STUDENTS,
    students
  };
  return action;
}

const addedStudent = student => {
  const action = {
    type: ADDED_STUDENT,
    student
  }
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

export function postStudents() {
  return function thunkFun(dispatch) {
    return axios.post()
  }
}

// REDUCER
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_STUDENTS:
      return action.students;

    default:
      return state
  }
}

export default studentReducer

