import React from "react";
import { Button } from 'reactstrap'
import { Modal, ModalHeader } from 'reactstrap'
import AddMovieForm from "./AddMovieForm";
import './MovieModal.scss'

class MovieModal extends React.Component {
   state = {
      isOpen: true
   }

   handleToggleModal = () => {
      this.setState({
         isOpen: !this.state.isOpen
      })
   }

   render() {
      return (
         <div>
            <Button
               color="primary"
               onClick={() => this.handleToggleModal()}
            >
               + ADD NEW
            </Button>
            <Modal
               isOpen={!this.state.isOpen}
               centered={true}
               className="movie-modal"
            >
               <ModalHeader>
                  Add a new movie
               </ModalHeader>
               <AddMovieForm
                  handleToggleModal={this.handleToggleModal}
                  handleAddNewMovie={this.props.handleAddNewMovie}
               />
            </Modal>
         </div>
      )
   }
}

export default MovieModal