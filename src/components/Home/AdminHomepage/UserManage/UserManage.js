import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import { Table } from 'reactstrap'
import PaginationComp from "../../PaginationComp";
import AdminHeader from "../AdminHeader";
import './UserManage.scss'
import { deleteUserApi, getAllUsersApi } from "../../../../services/userService";

class UserManage extends React.Component {
   state = {
      listUsers: [],
   }

   async componentDidMount() {
      let res = await getAllUsersApi('all')
      this.setState({
         listUsers: res.data.listUsers
      })
   }
   handleGetAllUsers = async () => {
      let res = await getAllUsersApi('all')
      this.setState({
         listUsers: res.data.listUsers
      })
   }

   handleDeleteUser = async (singleUserId) => {
      let res = await deleteUserApi(singleUserId)
      this.setState({
         listUsers: res.data.listUsers
      })
   }

   handleLogOut = () => {
      localStorage.clear()
      window.location.pathname = '/api/auth/login'
      // alert(1)
   }

   async componentDidUpdate() {
      let res = await getAllUsersApi('all')
      this.setState({
         listUsers: res.data.listUsers
      })
   }
   render() {
      let listUsers = this.state.listUsers
      return (
         <>
            <AdminHeader handleLogOut={this.handleLogOut} />
            <Button
               color="success"
               onClick={() => this.handleGetAllUsers()}
            >
               REFRESH
            </Button>
            {/* <PaginationComp /> */}
            <Table bordered className="user-table">
               <thead>
                  <tr>
                     <th>
                        #
                     </th>
                     <th>
                        id
                     </th>
                     <th>
                        First Name
                     </th>
                     <th>
                        Last Name
                     </th>
                     <th>
                        Username
                     </th>
                     <th>
                        Phone Number
                     </th>
                     <th>
                        Address
                     </th>
                     <th>
                        Gender
                     </th>
                     <th>
                        Actions
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {listUsers && listUsers.length &&
                     listUsers.map((singleUser, index) => {
                        return (
                           <tr key={singleUser.id}>
                              <th scope="row">
                                 {index + 1}
                              </th>
                              <td>
                                 {singleUser.id}
                              </td>
                              <td>
                                 {singleUser.firstName}
                              </td>
                              <td>
                                 {singleUser.lastName}
                              </td>
                              <td>
                                 {singleUser.username}
                              </td>
                              <td>
                                 {singleUser.phonenumber}
                              </td>
                              <td>
                                 {singleUser.address}
                              </td>
                              <td>
                                 {singleUser.gender}
                              </td>
                              <td>
                                 <button type="button" onClick={() => this.handleDeleteUser(singleUser.id)}>Delete</button>
                              </td>
                           </tr>
                        )
                     })
                  }
               </tbody>
            </Table>
         </>
      )
   }
}

export default withRouter(UserManage)