import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/studentReducer';

// <div>{student.campus.name}</div>

class SingleStudent extends Component {
  componentDidMount() {
    this.props.loadStudents()
  }


  render () {
    const urlId = Number(this.props.match.params.studentId);
    const student = this.props.students.find(foundStudent => foundStudent.id === urlId)
    if (student === undefined) {
      console.log('=========== did this render??????' )
      return null
    }
    if (student !== undefined) {
      const schoolName = student.campus ? student.campus.name : 'Waiting for acceptance...'
      console.log('========== whcat is schoolName?', schoolName)
      return (ç
        <div>
          <div>FirstName: {student.firstName}</div>
          <div>LastName: {student.lastName}</div>
          <div>Email: {student.email}</div>
          <div>GPA: {student.gpa}</div>
          <div>SchoolName: {`${schoolName}`}</div>
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
    loadStudents: () => {dispatch(fetchStudents())}
  }
}

const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent);

export default SingleStudentContainer;
