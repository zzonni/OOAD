import React from 'react'
import LoginForm from '../LoginForm/LoginForm'
import UserHomepage from './UserHomepage/UserHomepage'

class Home extends React.Component {
   state = {
      id: 0,
      username: ''
   }

   handleSendUserID = async (data) => {
      console.log(data)
      this.setState({
         id: data.id,
         username: data.username
      })
   }
   render() {
      return (
         <>
            <LoginForm handleSendUserID={this.handleSendUserID} />
            <UserHomepage userID={this.state.id} />
         </>
      )
   }
}

export default Home