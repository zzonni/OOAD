import React from "react";
import { Input, Label } from 'reactstrap'
import { Form, FormGroup } from 'reactstrap'


class AddMovieForm extends React.Component {
   render() {
      return (
         <Form>
            <FormGroup>
               <Label for="exampleEmail">
                  Name
               </Label>
               <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter the name of the movie"
                  type="email"
               />
            </FormGroup>
            <FormGroup>
               <Label for="examplePassword">
                  Datetime
               </Label>
               <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="date"
               />
            </FormGroup>
            <FormGroup>
               <Label for="exampleText">
                  Duration
               </Label>
               <Input
                  id="exampleText"
                  name="duration"
                  type="number"
                  placeholder="Enter duration"
               />
            </FormGroup>
            <FormGroup>
               <Label for="exampleSelect">
                  Rating
               </Label>
               <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
               >
                  <option selected disabled>Rate from 1 to 10</option>
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
               <Label for="exampleFile">
                  Image
               </Label>
               <Input
                  id="exampleFile"
                  name="file"
                  type="file"
               />
            </FormGroup>
         </Form>
      )
   }
}

export default AddMovieForm