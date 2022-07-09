import React from 'react'
import './LoginForm.scss'
import { Button } from 'reactstrap'
import { loginUserApi } from '../../services/userService'


class LoginForm extends React.Component {
   state = {
      username: '',
      password: '',
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

   handleLoginUser = async (username, password) => {
      let res = await loginUserApi(username, password)
      console.log(res)
   }

   render() {
      let { username, password, roleId } = this.state
      return (
         <>
            <div className="form">
               <form>
                  <h1>Login</h1>
                  <div className="content">
                     <div className="input-field">
                        <input
                           type="text"
                           placeholder="Username"
                           id="username"
                           name="username"
                           value={this.state.value}
                           onChange={(event) => this.handleOnChangeUsername(event)} />
                     </div>
                     <div className="input-field">
                        <input
                           type="password"
                           placeholder="Password"
                           id="password"
                           name="password"
                           value={this.state.value}
                           onChange={(event) => this.handleOnChangePassword(event)} />
                     </div>
                  </div>
                  <div className="action">
                     <Button
                        type="button"
                        className="btn btn-register"
                        onClick={() => this.handleLoginUser(username, password)}
                     >
                        Sign In
                     </Button>
                     <Button
                        className="btn btn-signin"
                     >
                        Register
                     </Button>
                  </div>
               </form>
            </div>
         </>
      )
   }
}

export default LoginForm