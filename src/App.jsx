import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import { Top } from './pages/Top'
import { Login } from './pages/Login'
import { Logout } from './pages/Logout';
import { Register } from './pages/Register'
import { PostIndx } from './pages/PostIndx'
import { Home } from './pages/Home'
import { Chat } from './pages/Chat'
import { MyPage } from './pages/MyPage'
import { MyPageEdit } from './pages/MyPageEdit'
import { Notification } from './pages/Notification'
import { NotificationDetail } from './pages/NotificationDetail'

function App() {
  return (
    <div className="font-serif">
      <BrowserRouter>
        <Switch>
        <Route path='/' exact component={Top} />
        <Route path='/login' exact component={Login} />
        <Route path='/logout' exact component={Logout} />
        <Route path='/register' exact component={Register} />
        <Route path='/post/index' exact component={ PostIndx } />
        <Route path='/home' exact component={ Home } />
        <Route path='/home/chat' exact component={ Chat } />
        <Route path='/mypage' exact component={ MyPage } />
        <Route path='/mypage/edit' exact component={ MyPageEdit } />
        <Route path='/notification' exact component={ Notification } />
        <Route path='/notification/detail' exact component={ NotificationDetail } />
      </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
