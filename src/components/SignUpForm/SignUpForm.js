import React from 'react'
import './SignUpForm.scss'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { registerUserApi } from '../../services/userService'
import { Button } from 'reactstrap'
class SignUpForm extends React.Component {
   state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      gender: '',
      address: '',
      phonenumber: '',
      role: 'customer',
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
   handleOnChangePhoneNumber = (event) => {
      this.setState({
         phonenumber: event.target.value
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
            role: 'customer',
         })
         this.props.history.push('/api/auth/login')
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
                     <div className="input-field">
                        <input
                           type="text"
                           placeholder="Phone Number"
                           id="phonenumber"
                           name="phonenumber"
                           value={this.state.phonenumber}
                           onChange={(event) => this.handleOnChangePhoneNumber(event)} />
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
                           <option value="Male">Male</option>
                           <option value="Female">Female</option>
                        </select>
                     </div>
                  </div>
                  <div className="action">
                     <Button
                        className="btn btn-login"
                        onClick={() => this.handleRegisterUser(this.state)}
                     >
                        Sign In
                     </Button>
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

export default withRouter(SignUpForm)