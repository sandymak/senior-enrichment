import axios from 'axios';

const initialState = [];

// Action Type
const GOT_CAMPI = 'GOT_CAMPI';
const NEW_CAMPUS = 'NEW_CAMPUS';
const REMOVED_CAMPUS = 'REMOVED_CAMPUS';
const EDITED_CAMPUS = 'EDITED_CAMPUS';


// Action Creator
const gotCampi = (campi) => {
  const action = {
    type: GOT_CAMPI,
    campi
  }
  return action
}

const addedCampus = newCampus => {
  const action = {
    type: NEW_CAMPUS,
    newCampus
  }
  return action
}

const removedCampus = (campi) => {
  const action = {
    type: REMOVED_CAMPUS,
    campi
  }
  return action
}

const editedCampus = (updatedCampus) => {
  const action = {
    type: EDITED_CAMPUS,
    updatedCampus
  }
  return action
}

// Thunk Action Creator
export function fetchCampi () {
 return function thunkfunc (dispatch) {
    axios.get('/api/campi')
    .then((res) => {dispatch(gotCampi(res.data))})
    .catch(console.error)
  }
}

export function postCampus(newCampus) {
  return function thunkFunc(dispatch) {
    axios.post('/api/campi', newCampus)
    .then(res => res.data)
    .then(campus => dispatch(addedCampus(campus)))
    .catch(console.error)
  }
}

export function deleteCampus (campusId) {
  return function thunkFunc (dispatch) {
    axios.delete(`/api/campi/${campusId}`)
    .then(() => axios.get('/api/campi'))
    .then(res => res.data)
    .then(campi => dispatch(removedCampus(campi)))
    .catch(console.error)
  }
}

export function updatedCampus (campusId, currentState) {
  return function thunkFunc (dispatch) {
    axios.put(`/api/campi/${campusId}`, currentState)
    .then(res => res.data)
    .then(updated => dispatch(editedCampus(updated)))
    .catch(console.error)
  }
}

// reducer
const campusReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CAMPI:
      return action.campi;

    case NEW_CAMPUS:
      return [...state, action.newCampus];

    case REMOVED_CAMPUS:
      return action.campi;

    case EDITED_CAMPUS:
    return [...state.filter(campus => campus.id !== action.updatedCampus.id), action.updatedCampus]

    default:
      return state
  }
}

// export default reducer

export default campusReducer;
