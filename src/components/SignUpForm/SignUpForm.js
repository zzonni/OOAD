import React from 'react'
import './SignUpForm.scss'

import { NavLink } from 'react-router-dom'
import { registerUserApi } from '../../services/userService'
class SignUpForm extends React.Component {
   state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      gender: '',
      address: '',
      roleId: 'customer',
   }
   handleOnChangeUsername = (event) => {
      this.setState({
         username: event.target.value
      })
   }
   handleOnChangePassword = (event) => {
      this.setState({
         password: event.target.value
      })
   }
   handleOnChangeFirstName = (event) => {
      this.setState({
         firstName: event.target.value
      })
   }
   handleOnChangeLastName = (event) => {
      this.setState({
         lastName: event.target.value
      })
   }
   handleOnChangeAddress = (event) => {
      this.setState({
         address: event.target.value
      })
   }
   handleOnChangeGender = (event) => {
      this.setState({
         gender: event.target.value
      })
      // alert(1)
   }
   // async componentDidMount() {
   handleRegisterUser = async (data) => {
      try {
         let res = await registerUserApi(data)
         console.log("Response create user: ", res)
         this.setState({
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            roleId: 'customer',
         })
      } catch (e) {
         console.log(e)
      }
      // console.log("Check data from React Component: ", data)
   }
   // }

   render() {
      return (
         <>
            <div className="form">
               <form>
                  <h1>Sign Up</h1>
                  <div className="content">
                     <div className="input-field">
                        <input
                           type="text"
                           placeholder="Username"
                           id="username"
                           name="username"
                           value={this.state.username}
                           onChange={(event) => this.handleOnChangeUsername(event)}
                        />
                     </div>
                     <div className="input-field">
                        <input
                           type="password"
                           placeholder="Password"
                           id="password"
                           name="password"
                           value={this.state.password}
                           onChange={(event) => this.handleOnChangePassword(event)} />
                     </div>
                     <div className="input-field">
                        <input
                           type="text"
                           placeholder="First Name"
                           id="firstName"
                           name="firstName"
                           value={this.state.firstName}
                           onChange={(event) => this.handleOnChangeFirstName(event)} />
                     </div>
                     <div className="input-field">
                        <input
                           type="text"
                           placeholder="Last Name"
                           id="lastName"
                           name="lastName"
                           value={this.state.lastName}
                           onChange={(event) => this.handleOnChangeLastName(event)} />
                     </div>
                     <div className="input-field">
                        <input
                           type="text"
                           placeholder="Address"
                           id="address"
                           name="address"
                           value={this.state.address}
                           onChange={(event) => this.handleOnChangeAddress(event)} />
                     </div>
                     <div className="select-field">
                        <label
                           htmlFor="gender"
                           id="gender"
                        />
                        <select
                           name="gender"
                           className="select-option"
                           value={this.state.gender}
                           onChange={(event) => this.handleOnChangeGender(event)}
                        >
                           <option value="" disabled>Choose your gender</option>
                           <option value="1">Male</option>
                           <option value="0">Female</option>
                        </select>
                     </div>
                  </div>
                  <div className="action">
                     <NavLink
                        className="btn btn-login"
                        to="/api/auth/register"
                        onClick={() => this.handleRegisterUser(this.state)}
                     >
                        Sign In
                     </NavLink>
                     <NavLink
                        className="btn btn-back"
                        to="/api/auth/login"
                     >
                        Back
                     </NavLink>
                  </div>
               </form>
            </div>
         </>
      )
   }
}

export default SignUpForm