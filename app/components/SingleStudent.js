import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents, deleteStudent } from '../reducers/studentReducer';

class SingleStudent extends Component {
  componentDidMount() {
    this.props.loadStudents()
  }

  render () {
    // URL and
    const urlId = Number(this.props.match.params.studentId);
    const student = this.props.students.find(foundStudent => foundStudent.id === urlId);

    if (student === undefined) {
      return null
    }
    if (student !== undefined) {
      const schoolName = student.campus ? student.campus.name : 'Waiting for acceptance...'
      const studentId = student.id;

      return (
        <div>
          <div>FirstName: {student.firstName}</div>
          <div>LastName: {student.lastName}</div>
          <div>Email: {student.email}</div>
          <div>GPA: {student.gpa}</div>
          <div>SchoolName: {`${schoolName}`}</div>
        <button onClick={() => this.props.handleClick(studentId)}>Remove</button>
        </div>
      )
    }
  }
}

function mapStateToProps (storeState) {
  return {
    students: storeState.students
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadStudents: () => {dispatch(fetchStudents())},
    handleClick: studentId => dispatch(deleteStudent(studentId))
  }
}

const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent);

export default SingleStudentContainer;
