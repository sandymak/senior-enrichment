import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampi, postCampus } from '../reducers/campusReducer';

class AddCampus extends Component {
  constructor() {
    super()
    this.state = {
      name:  '',
      description: '',
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

  }

  componentDidMount() {
    this.props.loadCampi()

  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value})
  }

  render() {
    const {name, description} = this.state;
    const handleNameChange = this.handleNameChange;
    const handleDescriptionChange = this.handleDescriptionChange;

    return (
      <div>
        <form>
          <fieldset>
            <legend>Hello! Join Our Academy</legend>
              <label>Name: </label>
                <input
                onChange={handleNameChange}
                required
                type="text"
                name="name"
                placeholder="Enter Campus Name"
                value={name} />
                <div />
              <label>Description: </label>
                <textarea
                onChange={handleDescriptionChange}
                name="description"
                placeholder="Tell us about your campus..."
                value={description} />
                <div />
              <label />
          </fieldset>
        </form>
      </div>
    )
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

const AddCampusContainer = connect(mapStateToProps, mapDispatchToProps)(AddCampus)

export default AddCampusContainer;

