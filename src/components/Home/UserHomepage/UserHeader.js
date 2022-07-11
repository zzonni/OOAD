import React from "react";
import { Button } from 'reactstrap'
import { withRouter } from "react-router-dom";
import './UserHomepage.scss'
import { NavLink } from 'react-router-dom'

class UserHeader extends React.Component {
   state = {

   }

   goBack = () => {
      this.props.history.goBack()
   }
   render() {
      return (
         <>
            <div className="admin-header">
               <div className="admin-title">USER HOMEPAGE</div>
               <Button
                  color="danger"
                  onClick={this.props.handleLogOut}
               >
                  LOG OUT
               </Button>

               <Button
                  color="primary"
                  onClick={() => this.goBack()}
               >
                  BACK
               </Button>
            </div>
            {/* <div className="topnav">
               <NavLink to="/movie/now" activeClassName="active">Now Showing</NavLink>
               <NavLink to="/movie/comingsoon" activeClassName="active">Coming Soon</NavLink>
            </div> */}
         </>
      )
   }
}

export default withRouter(UserHeader)