import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCampi, updatedCampus } from '../reducers/campusReducer';
import { fetchStudents } from '../reducers/studentReducer';

class EditCampus extends Component {
 constructor() {
   super()
   this.state = {
     name: '',
     description: '',
     imageUrl: ''
   };

   this.handleNameChange = this.handleNameChange.bind(this);
   this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
   this.handleImageUrlChange = this.handleImageUrlChange.bind(this);

 }

 componentDidMount() {
   this.props.loadStudents();
   this.props.loadCampi();
 }

 handleNameChange (event) {
   this.setState({name: event.target.value})
 }
 handleDescriptionChange (event) {
   this.setState({description: event.target.value})
 }
 handleImageUrlChange (event) {
   this.setState({imageUrl: event.target.value})
 }

 render() {
   const handleNameChange = this.handleNameChange;
   const handleDescriptionChange = this.handleDescriptionChange;
   const handleImageUrlChange = this.handleImageUrlChange;

   const {name, description, imageUrl} = this.state;

   const urlId = Number(this.props.match.params.campusId);
   const campus = this.props.campi.find(foundCampus => foundCampus.id === urlId);


   if (campus === undefined) {
    return null
  }
  if (campus !== undefined) {
    const campusId = campus.id;
    const nameStored = campus.name;
    const descriptionStored = campus.description;
    const imageUrlStored = campus.imageUrl;

    const currentState = {
      name: name ? name : nameStored,
      description: description ? description : descriptionStored,
      imageUrl: imageUrl ? imageUrl : imageUrlStored
    }

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        this.props.handleSubmit(campusId, currentState);
        this.props.history.push('/campi');
      }}>
        <fieldset>
          <legend>Update Your Campus Profile!</legend>
            <label>Name: </label>
                <input
                onChange={handleNameChange}
              type="text"
              name="name"
              placeholder={`${nameStored}`}
              value={name} />
              <div />
            <label>Description: </label>
              <div>
                <textarea
                rows="20"
                cols="100"
                onChange={handleDescriptionChange}
                type="text"
                name="description"
                placeholder={descriptionStored}
                value={description} />
              </div>
              <div />
            <label>Campus Photo: </label>
              <input
              onChange={handleImageUrlChange}
              type="url"
              name="imageUrl"
              placeholder={imageUrlStored}
              value={imageUrl} />
              <div />
            <div>
              <button type="submit">Update</button>
            </div>
        </fieldset>
      </form>
    </div>
  )
 }
}
}

function mapStateToProps (storeState) {
  return {
    campi: storeState.campi,
    students: storeState.students
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadCampi: () => dispatch(fetchCampi()),
    loadStudents: () => dispatch(fetchStudents()),
    handleSubmit: (campusId, currentState) => dispatch(updatedCampus(campusId, currentState))
  }
}

const EditCampusContainerWithRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCampus))

export default EditCampusContainerWithRouter;

