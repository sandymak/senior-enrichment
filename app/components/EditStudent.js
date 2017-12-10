import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents, updateStudent } from '../reducers/studentReducer';
import { fetchCampi } from '../reducers/campusReducer';

class EditStudent extends Component {
  constructor() {
    super()
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      gpa: null,
      campusId: null
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleGPAChange = this.handleGPAChange.bind(this);
    this.handleCampusIdSelect = this.handleCampusIdSelect.bind(this);
  }

  componentDidMount() {
    this.props.loadStudents();
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

  render () {


    // edit button handler func
    const handleFirstNameChange = this.handleFirstNameChange;
    const handleLastNameChange = this.handleLastNameChange;
    const handleEmailChange = this.handleEmailChange;
    const handleGPAChange = this.handleGPAChange;
    const handleCampusIdSelect = this.handleCampusIdSelect;

    // local state
    const {firstName, lastName, email, gpa} = this.state;

    // URL and
    const urlId = Number(this.props.match.params.studentId);
    const student = this.props.students.find(foundStudent => foundStudent.id === urlId);

    if (student === undefined) {
      return null
    }
    if (student !== undefined) {
      const studentId = student.id;

        // original info
    const {campi} = this.props;
    const firstNameStored = student.firstName;
    const lastNameStored = student.lastName;
    const emailStored = student.email;
    const gpaStored = student.gpa;
    const campusIdStored = student.campusId;

    const currentState =

    return (
      <div>
        <form onSubmit={(event) => {
          event.preventDefault();
          this.props.handleSubmit(studentId, this.state)
        }}>
          <fieldset>
            <legend>Update Your Profile!</legend>
              <label>First Name: </label>
                <input
                onChange={handleFirstNameChange}
                type="text"
                name="firstName"
                placeholder={`${firstNameStored}`}
                value={firstName} />
                <div />
              <label>Last Name: </label>
                <input
                onChange={handleLastNameChange}
                type="text"
                name="lastName"
                placeholder={lastNameStored}
                value={lastName} />
                <div />
              <label>Email: </label>
                <input
                onChange={handleEmailChange}
                type="email"
                name="email"
                placeholder={emailStored}
                value={email} />
                <div />
              <label>GPA: </label>
                <input
                onChange={handleGPAChange}
                type="number"
                min="0.0"
                max="4.0"
                step="0.1"
                name="gpa"
                placeholder={gpaStored}
                value={gpa} />
                <div />

                <div>
                  <label>Select a Campus: </label>
                  <select
                  name="campusId"
                  onChange={handleCampusIdSelect}>
                  { campi.map(campus => {
                      if (campus.id === campusIdStored) {
                        return (
                          <option
                          key={campus.id}
                          value={campus.id}
                          disabled selected>{campus.name}
                          </option>)
                      } else {
                        return (
                          <option
                          key={campus.id}
                          value={campus.id}
                          >{campus.name}
                          </option>)
                      }
                    })
                  }
                  </select>
                </div>
              <div>
                <button type="submit">Update</button>
              </div>
          </fieldset>
        </form>
      </div>
    )
  }
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
    loadStudents: () => {dispatch(fetchStudents())},
    loadCampi: () => dispatch(fetchCampi()),
    handleSubmit: (studentId, currentState) => {
      dispatch(updateStudent(studentId, currentState))}
  }
}

const EditStudentContainer = connect(mapStateToProps, mapDispatchToProps)(EditStudent);

export default EditStudentContainer;
