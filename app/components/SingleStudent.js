import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
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
      const studentId = student.id;

      return (
        <div>
          <div>FirstName: {student.firstName}</div>
          <div>LastName: {student.lastName}</div>
          <div>Email: {student.email}</div>
          <div>GPA: {student.gpa}</div>
          <div>
          {(() => {
            let schoolName, campusId;
            switch (student.campus) {
              case null:
                schoolName = 'Waiting for acceptance...'
                return (<div>SchoolName: <Link to={`/students/editStudent/${studentId}`}>{`${schoolName}`}</Link></div>)
              default:
                schoolName = student.campus.name
                campusId = student.campus.id
                return (<div>SchoolName: <Link to={`/campi/${campusId}`}>{`${schoolName}`}</Link></div>)
              }
            })()}
              </div>
        <button onClick={() => {
          this.props.handleClick(studentId);
          this.props.history.push('/students')
        }}>Remove</button>
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

const SingleStudentContainerWithRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudent));

export default SingleStudentContainerWithRouter;
