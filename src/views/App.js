import React from 'react'

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from '../components/LoginForm/LoginForm';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AdminHomepage from '../components/Home/AdminHomepage/AdminHomepage';
import UserManage from '../components/Home/AdminHomepage/UserManage/UserManage';
import MovieManage from '../components/Home/AdminHomepage/MovieManage/MovieManage';
import ShowtimeManage from '../components/Home/AdminHomepage/ShowtimeManage/ShowtimeManage';
import ProtectedRoute from '../components/ProtectedRoute';
import UserHomepage from '../components/Home/UserHomepage/UserHomepage';
import UserSelect from '../components/Home/UserHomepage/UserSelect';
import UserConfirm from '../components/Home/UserHomepage/UserConfirm';
import UserRoute from '../components/UserRoute';




class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/api/auth/login">
              <LoginForm />
            </Route>
            <Route path="/api/auth/register">
              <SignUpForm />
            </Route>
            <Route path="/admin" exact>
              <ProtectedRoute>
                <AdminHomepage />
              </ProtectedRoute>
            </Route>
            <Route path="/admin/usermanage">
              <ProtectedRoute>
                <UserManage />
              </ProtectedRoute>
            </Route>
            <Route path="/admin/moviemanage">
              <ProtectedRoute>
                <MovieManage />
              </ProtectedRoute>
            </Route>
            <Route path="/admin/showtimemanage">
              <ProtectedRoute>
                <ShowtimeManage />
              </ProtectedRoute>
            </Route>
            <Route path="/movie/now">
              <UserRoute>
                <UserHomepage />
              </UserRoute>
            </Route>
            <Route path="/movie/booking" exact>
              <UserRoute>
                <UserSelect />
              </UserRoute>
            </Route>
            <Route path="/movie/booking/confirm">
              <UserRoute>
                <UserConfirm />
              </UserRoute>
            </Route>
          </Switch>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </BrowserRouter>
    );
  }
}
// function App() {

//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Switch>
//           <Route path="/api/auth/login">
//             <LoginForm />
//           </Route>
//           <Route path="/api/auth/register">
//             <SignUpForm />
//           </Route>
//           <Route path="/admin" exact>
//             <ProtectedRoute>
//               <AdminHomepage />
//             </ProtectedRoute>
//           </Route>
//           <Route path="/admin/usermanage">
//             <ProtectedRoute>
//               <UserManage />
//             </ProtectedRoute>
//           </Route>
//           <Route path="/admin/moviemanage">
//             <ProtectedRoute>
//               <MovieManage />
//             </ProtectedRoute>
//           </Route>
//           <Route path="/admin/showtimemanage">
//             <ProtectedRoute>
//               <ShowtimeManage />
//             </ProtectedRoute>
//           </Route>
//           <Route path="/movie/now">
//             <UserHomepage />
//           </Route>
//           <Route path="/movie/booking">
//             <UserSelect />
//           </Route>
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

export default App;
