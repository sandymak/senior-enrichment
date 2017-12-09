import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStudents, postStudent } from '../reducers/studentReducer';
import { fetchCampi } from '../reducers/campusReducer';

class AddStudent extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: 0,
      campusId: null,
      error: false
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
    this.setState({ GPA: event.target.value})
  }
  handleCampusIdSelect (event) {
    this.setState({ campusId: event.target.value})
  }


  render() {
    const {campi, students} = this.props;
    const {firstName, lastName, email, gpa, campusId} = this.state;
    const handleFirstNameChange = this.handleFirstNameChange;
    const handleLastNameChange = this.handleLastNameChange;
    const handleEmailChange = this.handleEmailChange;
    const handleGPAChange = this.handleGPAChange;
    const handleCampusIdSelect = this.handleCampusIdSelect;
    // const boundHandleSubmit = this.props.handleSubmit.bind(state);

    return (
      <div>
        <form onSubmit={(event) => {
          event.preventDefault();
          this.props.handleSubmit(this.state)
        }}>
          <fieldset>
            <legend>Join A Campus</legend>
              <label>First Name: </label>
                <input
                onChange={handleFirstNameChange}
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                value={firstName} />
                <div />
              <label>Last Name: </label>
                <input
                onChange={handleLastNameChange}
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={lastName} />
                <div />
              <label>Email: </label>
                <input
                onChange={handleEmailChange}
                type="text"
                name="email"
                placeholder="Enter Email"
                value={email} />
                <div />
              <label>GPA: </label>
                <input
                onChange={handleGPAChange}
                type="text"
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
                  <div>
                    <button type="submit">Enroll</button>
                  </div>
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


const AddStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddStudent);

export default AddStudentContainer;
