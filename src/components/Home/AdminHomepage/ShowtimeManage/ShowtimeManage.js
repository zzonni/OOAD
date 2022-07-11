import React from "react";
import { withRouter } from "react-router";
import { Table, Button } from 'reactstrap'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import PaginationComp from "../../PaginationComp";
import AdminHeader from "../AdminHeader";
import './ShowtimeManage.scss'

class ShowtimeManage extends React.Component {
   state = {
      isOpen: false
   }

   handleToggleModal = () => {
      this.setState({
         isOpen: !this.state.isOpen
      })
   }

   handleExportTicket = () => {
      // console.log(this.props)
      this.props.history.push('/admin')
   }

   handleLogOut = () => {
      localStorage.clear()
      window.location.pathname = '/api/auth/login'
      // alert(1)
   }

   render() {
      return (
         <>
            <AdminHeader handleLogOut={this.handleLogOut} />
            {/* <PaginationComp /> */}
            <Table bordered className="user-table">
               <thead>
                  <tr>
                     <th>
                        #
                     </th>
                     <th>
                        Username
                     </th>
                     <th>
                        Fisrt Name
                     </th>
                     <th>
                        Last Name
                     </th>
                     <th>
                        Movie
                     </th>
                     <th>
                        Room
                     </th>
                     <th>
                        Date
                     </th>
                     <th>
                        Showtime
                     </th>
                     <th>
                        Seat(s)
                     </th>
                     <th>
                        Action
                     </th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <th scope="row">
                        1
                     </th>
                     <td>
                        demouser1
                     </td>
                     <td>
                        John
                     </td>
                     <td>
                        Cena
                     </td>
                     <td>
                        Avengers: End Game
                     </td>
                     <td>
                        3
                     </td>
                     <td>
                        10/7/2022
                     </td>
                     <td>
                        9:00
                     </td>
                     <td>
                        H15, H16
                     </td>
                     <td>
                        <div>
                           <Button
                              color="danger"
                              onClick={() => this.handleToggleModal()}
                           >
                              Click Me
                           </Button>
                           <Modal
                              toggle={() => this.handleToggleModal()}
                              isOpen={this.state.isOpen}
                           >
                              <ModalHeader>
                                 Showtime Confirmation
                              </ModalHeader>
                              <ModalBody>
                                 Are you sure? This can't be undone
                              </ModalBody>
                              <ModalFooter>
                                 <Button
                                    color="primary"
                                    onClick={() => this.handleExportTicket()}
                                 >
                                    Do Something
                                 </Button>
                                 {' '}
                                 <Button onClick={() => this.handleToggleModal()}>
                                    Cancel
                                 </Button>
                              </ModalFooter>
                           </Modal>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </Table>
         </>
      )
   }
}

export default withRouter(ShowtimeManage)