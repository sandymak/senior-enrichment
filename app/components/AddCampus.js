import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchCampi, postCampus } from '../reducers/campusReducer';

class AddCampus extends Component {
  constructor() {
    super()
    this.state = {
      name:  '',
      description: '',
      imageUrl: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleImageUrlChange = this.handleImageUrlChange.bind(this);

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

  handleImageUrlChange(event) {
    this.setState({imageUrl: event.target.value})
  }

  render() {
    const {name, description, imageUrl} = this.state;
    const handleNameChange = this.handleNameChange;
    const handleDescriptionChange = this.handleDescriptionChange;
    const handleImageUrlChange = this.handleImageUrlChange;

    const currentState = {
      name: name,
      description: description ? description : null,
      imageUrl: imageUrl ? imageUrl : null
    }

    return (
      <div>
        <form onSubmit={(event) => {
          event.preventDefault();
          this.props.handleSubmit(currentState);
          this.props.history.push('/campi')
        }}>
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
                <div>
                  <textarea
                  rows="20"
                  cols="100"
                  onChange={handleDescriptionChange}
                  name="description"
                  placeholder="Tell us about your campus..."
                  value={description} />
                </div>
                <div />
              <label>Campus Photo: </label>
                <input
                onChange={handleImageUrlChange}
                type="url"
                name="imageUrl"
                placeholder="Add Photo URL"
                value={imageUrl} />
                <div />
            <div>
              <button type="submit"> Add Campus </button>
            </div>
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
    loadCampi: () => dispatch(fetchCampi()),
    handleSubmit: (currentState) => dispatch(postCampus(currentState))
  }
}

const AddCampusContainerWithRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(AddCampus))

export default AddCampusContainerWithRouter;

