import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents, deleteStudent } from '../reducers/studentReducer';

class SingleStudent extends Component {
  componentDidMount() {
    this.props.loadStudents()
  }


  render () {
    const urlId = Number(this.props.match.params.studentId);
    const student = this.props.students.find(foundStudent => foundStudent.id === urlId)
    if (student === undefined) {
      return null
    }
    if (student !== undefined) {
      // const studentId = student.id
      const schoolName = student.campus ? student.campus.name : 'Waiting for acceptance...'
      return (
        <div>
          <div>FirstName: {student.firstName}</div>
          <div>LastName: {student.lastName}</div>
          <div>Email: {student.email}</div>
          <div>GPA: {student.gpa}</div>
          <div>SchoolName: {`${schoolName}`}</div>
          {/*<button onClick={() => this.props.handleClick(studentId)}>Expel</button>*/}
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
    // handleClick: (id) => {dispatch(deleteStudent(id))}
  }
}

const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent);

export default SingleStudentContainer;
