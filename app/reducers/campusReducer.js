import axios from 'axios';

const initialState = [];

// Action Type
const GOT_CAMPI = 'GOT_CAMPI';

// Action Creator
const gotCampi = (campi) => {
  const action = {
    type: GOT_CAMPI,
    campi
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

// reducer
const campusReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CAMPI:
      return action.campi

    default:
      return state
  }
}

// export default reducer

export default campusReducer;
