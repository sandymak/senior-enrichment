import axios from 'axios';

const initialState = [];

// ACTION TYPE
const GOT_STUDENTS = 'GOT_STUDENTS';
const NEW_STUDENT = 'NEW_STUDENT';
const REMOVED_STUDENT = 'REMOVED_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';

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

const removedStudent = (students) => {
  const action = {
    type: REMOVED_STUDENT,
    students

  }
  return action
}

const editStudent = (updatedStudent) => {
  const action = {
    type: EDIT_STUDENT,
    updatedStudent
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
    return axios.post('/api/students', newStudent)
      .then(res => res.data)
      .then(student => dispatch(addedStudent(student)))
      .catch(console.error)
  }
}

export function deleteStudent(studentId) {
  return function thunkFunc(dispatch) {
    return axios.delete(`/api/students/${studentId}`)
    .then(() => axios.get('/api/students'))
    .then(res => res.data)
    .then(students => dispatch(removedStudent(students)))
    .catch(console.error)
  }
}

export function updateStudent(studentId, currentState) {
  return function thunkFunc(dispatch) {
    return axios.put(`/api/students/${studentId}`, currentState)
    .then(res => res.data)
    .then(updatedStudent => dispatch(editStudent(updatedStudent)))
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

    case REMOVED_STUDENT:
      return action.students;

    case EDIT_STUDENT:
      return [...state, action.updatedStudent];

    default:
      return state
  }
}

export default studentReducer

