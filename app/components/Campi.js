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
        <ul>
          {
            this.props.campi.map(campus => {
              return (
                <li key={campus.id}>{campus.name}</li>
              )
            })
          }
        </ul>
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

const CampiContainer = connect(mapStateToProps, mapDispatchToProps)(Campi)

export default CampiContainer;
