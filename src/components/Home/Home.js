import React from 'react'
import SignUpForm from '../SignUpForm/SignUpForm'
import './Home.scss'

class Home extends React.Component {
   state = {
      active: true,
   }

   render() {
      let { active } = this.state
      return (
         <>
            <SignUpForm />
         </>
      )
   }
}

export default Home