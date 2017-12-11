// imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampi } from '../reducers/campusReducer'

// create presentational component
class Campi extends Component {

  componentDidMount() {
    this.props.loadCampi();
  }

  render() {
    return (
      <div>
        <h1> All Campi </h1>
        <button>
          <Link to="/campi/AddCampus"> Add Campus </Link>
        </button>
          <div>
            {
              this.props.campi.map(campus => {
                const campusId = campus.id;
                return (
                  <div key={campus.id}>
                    <Link to={`/campi/${campus.id}`}> {campus.name} </Link>
                    <button>
                      <Link to={`/campi/editCampus/${campusId}`}> Edit Profile </Link>
                    </button>
                  </div>
                )
              })}
          </div>
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
    loadCampi: () => {dispatch(fetchCampi())}
  }
}

const AllCampiContainer = connect(mapStateToProps, mapDispatchToProps)(Campi)

export default AllCampiContainer;
