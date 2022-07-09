import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import { Table } from 'reactstrap'
import PaginationComp from "../../PaginationComp";
import AdminHeader from "../AdminHeader";
import './UserManage.scss'
import { getAllUsersApi } from "../../../../services/userService";

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

   render() {
      let listUsers = this.state.listUsers
      return (
         <>
            <AdminHeader handleGetAllUsers={this.handleGetAllUsers} />
            <Button
               color="success"
               onClick={() => this.handleGetAllUsers()}
            >
               REFRESH
            </Button>
            <PaginationComp />
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
                        Gender
                     </th>
                     <th>
                        Address
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
                                 {singleUser.gender ? 'Male' : 'Female'}
                              </td>
                              <td>
                                 {singleUser.address}
                              </td>
                              <td>
                                 <button>Delete</button>
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