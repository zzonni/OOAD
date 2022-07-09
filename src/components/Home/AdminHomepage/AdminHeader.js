import React from "react";
import { Button } from 'reactstrap'
import { withRouter } from "react-router-dom";

class AdminHeader extends React.Component {
   state = {

   }

   goBack = () => {
      this.props.history.goBack()
   }
   render() {
      return (
         <div className="admin-header">
            <div className="admin-title">ADMIN HOMEPAGE</div>
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
      )
   }
}

export default withRouter(AdminHeader)