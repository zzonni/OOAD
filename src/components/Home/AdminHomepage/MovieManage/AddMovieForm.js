import React from "react";
import { Input, Label, Button } from 'reactstrap'
import { Form, FormGroup } from 'reactstrap'
import { ModalBody, ModalFooter } from 'reactstrap'


class AddMovieForm extends React.Component {
   state = {
      movieName: '',
      date: '',
      category: '',
      duration: 0,
      rating: '',
      image: '',
   }

   handleAddMovieName = (event) => {
      this.setState({
         movieName: event.target.value
      })

   }
   handleAddMovieDate = (event) => {
      this.setState({
         date: event.target.value
      })
   }
   handleAddCategory = (event) => {
      this.setState({
         category: event.target.value
      })
   }
   handleAddDuration = (event) => {
      this.setState({
         duration: event.target.value
      })
   }
   handleAddRating = (event) => {
      this.setState({
         rate: event.target.value
      })
   }
   handleAddImage = (event) => {
      this.setState({
         image: event.target.files[0].name
      })
   }
   addNewMovie = (data) => {
      this.props.handleAddNewMovie(data)
      this.setState({
         movieName: '',
         date: '',
         category: '',
         duration: 0,
         rating: '',
         image: '',
      })
   }

   render() {
      return (
         <>
            <ModalBody>
               <Form>
                  <FormGroup>
                     <Label for="name">
                        Name
                     </Label>
                     <Input
                        id="movieName"
                        name="movieName"
                        placeholder="Enter the name of the movie"
                        type="text"
                        onChange={(event) => this.handleAddMovieName(event)}
                        value={this.state.movieName}
                     />
                  </FormGroup>
                  <FormGroup>
                     <Label for="date">
                        Datetime
                     </Label>
                     <Input
                        id="date"
                        name="date"
                        type="date"
                        onChange={(event) => this.handleAddMovieDate(event)}
                        value={this.state.date}

                     />
                  </FormGroup>
                  <FormGroup>
                     <Label for="category">
                        Categories
                     </Label>
                     <Input
                        id="category"
                        name="category"
                        type="text"
                        placeholder=""
                        onChange={(event) => this.handleAddCategory(event)}
                        value={this.state.category}

                     />
                  </FormGroup>
                  <FormGroup>
                     <Label for="duration">
                        Duration (.mins)
                     </Label>
                     <Input
                        id="duration"
                        name="duration"
                        type="number"
                        placeholder="Enter duration"
                        onChange={(event) => this.handleAddDuration(event)}
                        value={this.state.duration}

                     />
                  </FormGroup>
                  <FormGroup>
                     <Label for="rate">
                        Rating
                     </Label>
                     <Input
                        id="rate"
                        name="rate"
                        type="select"
                        onChange={(event) => this.handleAddRating(event)}
                        value={this.state.rate}

                     >
                        <option disabled>Rate from 1 to 10</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>

                     </Input>
                  </FormGroup>
                  <FormGroup>
                     <Label for="image">
                        Image
                     </Label>
                     <Input
                        id="image"
                        name="image"
                        type="file"
                        onChange={(event) => this.handleAddImage(event)}
                     />
                  </FormGroup>
               </Form>
            </ModalBody>
            <ModalFooter>
               <Button
                  color="primary"
                  onClick={() => this.addNewMovie(this.state)}
               >
                  Add
               </Button>
               {/* {' '} */}
               <Button onClick={this.props.handleToggleModal}>
                  Cancel
               </Button>
            </ModalFooter>
         </>
      )
   }
}

export default AddMovieForm