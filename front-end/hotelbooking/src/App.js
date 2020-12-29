import { Switch, Route } from "react-router-dom";
import './App.css';
import adminDefaultLayout from "./pages/adminDefaultLayout";
import DefaultLayout from "./pages/defaultLayout";
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Switch>
      <PrivateRoute path='/admin' component={adminDefaultLayout} />
      <Route path='/' component={DefaultLayout} />
    </Switch>
  );
}

export default App;
