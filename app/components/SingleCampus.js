// SANDY NOTE : refactoring options 1) should redirect back to campus list
// SANDY NOTE : refactor the UGLYL switch logic in the rendering

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchCampi, deleteCampus } from '../reducers/campusReducer';

class SingleCampus extends Component {
  componentDidMount() {
    this.props.loadCampi()
  }

  render () {
    const urlId = Number(this.props.match.params.campusId);
    const campus = this.props.campi.find(foundCampus => foundCampus.id === urlId)
    if (campus === undefined) {
      return null
    }
    if (campus !== undefined) {
      const campusId = campus.id;
      return (
        <div>
        <img src={campus.imageUrl} style={{width: 300}} />
        <div>SchoolName: {campus.name}</div>
        <div>Description: {campus.description}</div>
        <div>Student Roster: </div>
            <div>
            {(() => {
              switch (campus.students.length) {
                case 0:
                  return (<Link to={`/campi/editCampus/${campusId}`}><div>No students yet...</div></Link>)
                default:
                  return ((<div>{
                  campus.students.map(student => {
                    let studentId = student.id
                    return (
                      <div key={student.id}><Link to={`/students/editStudent/${studentId}`}>{student.fullName}</Link></div>
                    )}
                  )}
                </div>));
              }
            })()}
            </div>
            <button onClick={() => {
              this.props.handleClick(campusId);
              this.props.history.push('/campi')
            }}> Remove </button>
        </div>
      )
    }
  }
}

function mapStateToProps (storeState) {
  return {
    campi: storeState.campi
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadCampi: () => dispatch(fetchCampi()),
    handleClick: campusId => dispatch(deleteCampus(campusId))
  }
}

const SingleCampusContainerWithRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCampus));

export default SingleCampusContainerWithRouter;
