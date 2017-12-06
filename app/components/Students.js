import react, { Component } from 'react';
import { connect } from 'react-redux';
import {getStudents, fetchStudents} from '../reducers/studentReducer';

class Students extends Component {
  componentDidMount() {
    this.props.fetchStudents
  }

  render() {
    const students = this.props.students;
    return (
      <div>
        <ul>
        {students.map(student => {
          return (
            <li key={student.id}>
              {student.name}
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

// Connect configuration

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
};

const mapDispatchToProps = (dispatch) => {
  return { studentLoader: () => dispatch(fetchStudents) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);
