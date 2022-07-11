import React from 'react'
import './LoginForm.scss'
import { Button } from 'reactstrap'
import { loginUserApi } from '../../services/userService'
import { withRouter } from 'react-router-dom'


class LoginForm extends React.Component {
   state = {
      id: 0,
      username: '',
      password: '',
      role: 'customer',
      errCode: 0,
      errMessage: '',
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
      try {
         let res = await loginUserApi(username, password)
         if (res) {
            this.setState({
               id: res.data.user.id,
               role: res.data.user.role,
               errCode: res.data.errCode,
               errMessage: res.data.errMessage
            })
         }

         if (res && res.data.user.role === 'admin' && res.data.accessToken) {
            localStorage.setItem('is_authenticated', true)
            window.location.pathname = '/admin'
         } else {
            localStorage.setItem('userID', res.data.user.id)
            window.location.pathname = '/movie/now'
         }
      } catch (e) {
         console.log(e.message)
      }
   }


   handleMoveToRegisterPage = () => {
      this.props.history.push('/api/auth/register')
   }

   render() {
      let { username, password } = this.state
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
                        onClick={(e) => this.handleLoginUser(username, password, e)}
                     >
                        Sign In
                     </Button>
                     <Button
                        className="btn btn-signin"
                        onClick={() => this.handleMoveToRegisterPage()}
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

export default withRouter(LoginForm)