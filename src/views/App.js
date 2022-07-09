import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../components/LoginForm/LoginForm';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../components/Home/Home';
import AdminHomepage from '../components/Home/AdminHomepage/AdminHomepage';
import UserManage from '../components/Home/AdminHomepage/UserManage/UserManage';
import MovieManage from '../components/Home/AdminHomepage/MovieManage/MovieManage';
import ShowtimeManage from '../components/Home/AdminHomepage/ShowtimeManage/ShowtimeManage';
import ProtectedRoute from '../components/ProtectedRoute';


function App() {
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
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/admin" exact>
            <AdminHomepage />
          </Route>
          {/* <ProtectedRoute path="/admin" exact component={<AdminHomepage />} /> */}
          <ProtectedRoute path="/admin/usermanage" exact component={<UserManage />} />
          <ProtectedRoute path="/admin/moviemanage" exact component={<MovieManage />} />
          <ProtectedRoute path="/admin/showtimemanage" exact component={<ShowtimeManage />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
