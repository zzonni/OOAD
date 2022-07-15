import React from 'react'
import UserHeader from './UserHeader'
import { Button, Input, InputGroup } from 'reactstrap'
import { withRouter } from 'react-router-dom';
import UserBooking from './UserBooking';

class UserSelect extends React.Component {
   state = {
   }

   handleLogOut = () => {
      localStorage.clear()
      window.location.pathname = '/api/auth/login'
   }
   render() {
      // movie.date = movie.date.slice(0, 10)
      // console.log(movie.date.slice(0, 10))
      return (
         <div className="user">
            <UserHeader handleLogOut={this.handleLogOut} />
            <InputGroup className="search-bar" size="lg">
               <Input />
               <Button className="btn btn-secondary">
                  Search
               </Button>
            </InputGroup>
            <UserBooking />
         </div>
      )
   }
}
export default withRouter(UserSelect)