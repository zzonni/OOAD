import React from "react";
import { NavLink } from "react-router-dom";
import './AdminHomepage.scss'
import AdminHeader from "./AdminHeader";

class AdminHomepage extends React.Component {
   state = {

   }

   handleLogOut = () => {
      localStorage.clear()
      window.location.pathname = '/api/auth/login'
      // alert(1)
   }
   render() {
      return (
         <div className="admin">
            <AdminHeader handleLogOut={this.handleLogOut} />
            <div className="admin-container">
               <NavLink className="manage-container" to="/admin/moviemanage">
                  MOVIE MANAGEMENT
               </NavLink>
               <NavLink className="manage-container" to="/admin/usermanage">
                  USER MANAGEMENT
               </NavLink>
               <NavLink className="manage-container" to="/admin/showtimemanage">
                  SHOWTIME MANAGEMENT
               </NavLink>
            </div>
         </div>
      )
   }
}

export default AdminHomepage