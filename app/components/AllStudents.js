import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchStudents, deleteStudent } from '../reducers/studentReducer';

class Students extends Component {

  componentDidMount() {
    this.props.loadStudents();
  }

  render() {
    return (
      <div>
        <h1>All Students</h1>
        <button>
          <Link to="/students/addStudent"
            > Add A Student </Link>
        </button>
        <div>
        {this.props.students.map(student => {
          const studentId = student.id
          return (
            <div key={student.id}>
              <Link to={`/students/${studentId}`}> {student.fullName}  </Link>
              <button>
                <Link to={`/students/editStudent/${studentId}`}
                > Edit Profile </Link>
              </button>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

// Connect configuration

const mapStateToProps = (storeState) => {
  return {
    students: storeState.students
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadStudents: () => dispatch(fetchStudents()),
    handleClick: studentId => dispatch(deleteStudent(studentId))
    }
}


const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(Students);

export default AllStudentsContainer;
