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
               <NavLink className="manage-container first" to="/admin/moviemanage">
                  MOVIE
               </NavLink>
               <NavLink className="manage-container second" to="/admin/usermanage">
                  USER
               </NavLink>
               <NavLink className="manage-container third" to="/admin/showtimemanage">
                  SHOWTIME
               </NavLink>
            </div>
         </div>
      )
   }
}

export default AdminHomepage