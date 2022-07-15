import React from "react";
import { Button } from 'reactstrap'
import { Modal, ModalHeader } from 'reactstrap'
import EditMovieForm from "./EditMovieForm";

class EditModal extends React.Component {
   state = {
      isOpen: true

   }

   handleToggleModal = () => {
      this.setState({
         isOpen: !this.state.isOpen
      })
      console.log(this.props.editMovieID)
   }

   render() {
      // console.log(this.props.editMovieID)
      return (
         <div>
            <Button
               color="primary"
               onClick={() => this.handleToggleModal()}
            >
               Edit
            </Button>
            <Modal
               isOpen={!this.state.isOpen}
               centered={true}
               className="movie-modal"
            >
               <ModalHeader>
                  Edit movie
               </ModalHeader>
               <EditMovieForm
                  handleToggleModal={this.handleToggleModal}
                  handleEditMovie={this.props.handleEditMovie}
                  editMovieID={this.props.editMovieID}
               />
            </Modal>
         </div>
      )
   }
}

export default EditModal