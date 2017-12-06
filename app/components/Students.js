import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchStudents} from '../reducers/studentReducer';

class Students extends Component {

  componentDidMount() {
    this.props.loadStudents();
  }

  render() {
    return (
      <div>
        <ul>
        {this.props.students.map(student => {
          return (
            <li key={student.id}>
              {student.firstName}
            </li>
          )
        })}
        </ul>
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
    loadStudents: () => {
      dispatch(fetchStudents())
      }
    }
  }


const StudentsContainer = connect(mapStateToProps, mapDispatchToProps)(Students);

export default StudentsContainer;
