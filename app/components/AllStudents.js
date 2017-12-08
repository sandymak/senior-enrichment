import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchStudents} from '../reducers/studentReducer';

class Students extends Component {

  componentDidMount() {
    this.props.loadStudents();
  }

  render() {
    return (
      <div>
        <div>
        {this.props.students.map(student => {
          return (
            <div key={student.id}>
              <Link to={`/students/${student.id}`}>{student.fullName}</Link>

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
    loadStudents: () => {
      dispatch(fetchStudents())
      }
    }
  }


const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(Students);

export default AllStudentsContainer;
