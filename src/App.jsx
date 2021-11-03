import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import { Top } from './pages/Top'
import { Login } from './pages/Login'
import { Logout } from './pages/Logout';
import { Register } from './pages/Register'
import { Index } from './pages/Index'
import styled from 'styled-components';

function App() {
  return (
    <div className="font-serif">
      <BrowserRouter>
        <Switch>
        <Route path='/' exact component={Top} />
        <Route path='/login' exact component={Login} />
        <Route path='/logout' exact component={Logout} />
        <Route path='/register' exact component={Register} />
        <Route path='/Index' exact component={ Index } />
      </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
