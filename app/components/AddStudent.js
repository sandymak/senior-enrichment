// SANDY NOTES : refactoring target -> form should redirect to All Students List if submit is sucessful.
// SANDY NOTES: if there is an error to the server, shoul dhave message to User.


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchStudents, postStudent } from '../reducers/studentReducer';
import { fetchCampi } from '../reducers/campusReducer';

class AddStudent extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      campusId: null
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleGPAChange = this.handleGPAChange.bind(this);
    this.handleCampusIdSelect = this.handleCampusIdSelect.bind(this);
  }

  componentDidMount() {
    this.props.loadStudents()
    this.props.loadCampi();
  }

  handleFirstNameChange (event) {
    this.setState({ firstName: event.target.value})
  }
  handleLastNameChange (event) {
    this.setState({ lastName: event.target.value})
  }
  handleEmailChange (event) {
    this.setState({ email: event.target.value})
  }
  handleGPAChange (event) {
    this.setState({ gpa: event.target.value})
  }
  handleCampusIdSelect (event) {
    this.setState({ campusId: event.target.value})
  }


  render() {
    const {campi} = this.props;
    const {firstName, lastName, email, gpa} = this.state;
    const handleFirstNameChange = this.handleFirstNameChange;
    const handleLastNameChange = this.handleLastNameChange;
    const handleEmailChange = this.handleEmailChange;
    const handleGPAChange = this.handleGPAChange;
    const handleCampusIdSelect = this.handleCampusIdSelect;

    return (
      <div>
        <form onSubmit={(event) => {
          event.preventDefault();
          this.props.handleSubmit(this.state);
          this.props.history.push('/students')
        }}>
          <fieldset>
            <legend>Hello! Join A Campus</legend>
              <label>First Name: </label>
                <input
                onChange={handleFirstNameChange}
                required
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                value={firstName} />
                <div />
              <label>Last Name: </label>
                <input
                onChange={handleLastNameChange}
                required
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={lastName} />
                <div />
              <label>Email: </label>
                <input
                onChange={handleEmailChange}
                required
                type="email"
                name="email"
                placeholder="Enter Email"
                value={email} />
                <div />
              <label>GPA: </label>
                <input
                onChange={handleGPAChange}
                required
                type="number"
                min="0.0"
                max="4.0"
                step="0.1"
                name="gpa"
                placeholder="Enter GPA"
                value={gpa} />
                <div />

                <div>
                  <label>Select a Campus: </label>
                  <select
                  name="campusId"
                  required
                  onChange={handleCampusIdSelect}>
                  {
                    campi.map(campus => {
                      return (<option key={campus.id} value={campus.id}>{campus.name}</option>)
                    })
                  }
                  </select>
                </div>
              <div>
                <button type="submit">Enroll</button>
              </div>
          </fieldset>
        </form>
      </div>
    )
  }

}

function mapStateToProps (storeState) {
  return {
    students: storeState.students,
    campi: storeState.campi
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadStudents: () => dispatch(fetchStudents()),
    loadCampi: () => dispatch(fetchCampi()),
    handleSubmit: (currentState) => dispatch(postStudent(currentState))
  }
}


const AddStudentContainerWithRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(AddStudent));

export default AddStudentContainerWithRouter;
