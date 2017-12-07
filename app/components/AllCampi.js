// imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampus } from '../reducers/campusReducer'

// create presentational component
class Campi extends Component {

  componentDidMount() {
    this.props.loadCampi();
  }

  render() {
    return (
      <div>
          {
            this.props.campi.map(campus => {
              return (
                  <div>{campus.name}</div>
              )
            })
          }
      </div>
    )
  }
}

const mapStateToProps = storeState => {
  return {
    campi: storeState.campi
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCampi: () => {dispatch(fetchCampus())}
  }
}

const AllCampiContainer = connect(mapStateToProps, mapDispatchToProps)(Campi)

export default AllCampiContainer;
