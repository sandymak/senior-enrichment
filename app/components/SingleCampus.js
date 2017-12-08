import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampi } from '../reducers/campusReducer';


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
      return (
        <div>
        <img src={campus.imageUrl} style={{width: 50}} />
        <div>SchoolName: {campus.name}</div>
        <div>Description: {campus.description}</div>
        <div>Student Roster</div>
          <div>
          {(() => {
            switch (campus.students.length) {
              case 0:   return (<div>No students yet...</div>)
              default:      return ((<div>{
                campus.students.map(student => {
                  return (
                    <div key={student.id}>{student.fullName}</div>
                  )}
                )}
              </div>));
            }
          })()}
          </div>
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
    loadCampi: () => dispatch(fetchCampi())
  }
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus);

export default SingleCampusContainer;
