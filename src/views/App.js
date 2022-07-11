import React from 'react'

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Home from '../components/Home/Home';




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
              <UserHomepage />
            </Route>
            <Route path="/movie/booking">
              <UserSelect />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
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
