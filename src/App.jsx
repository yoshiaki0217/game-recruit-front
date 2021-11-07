import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import { Top } from './pages/Top'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Logout } from './pages/Logout'
import { Register } from './pages/Register'
import { PostIndx } from './pages/PostIndx'
import { PostCreate } from './pages/PostCreate'
import { PostDetail } from './pages/PostDetail'
import { GroupDetail } from './pages/GroupDetail'
import { GroupEdit } from './pages/GroupEdit'
import { Chat } from './pages/Chat'
import { MyPage } from './pages/MyPage'
import { MyPageEdit } from './pages/MyPageEdit'
import { Notification } from './pages/Notification'
import { NotificationDetail } from './pages/NotificationDetail'
import { PostFavorite } from './pages/PostFavorite'

function App() {
  return (
    <div className="font-serif">
      <BrowserRouter>
        <Switch>
        <Route path='/' exact component={Top} />
        <Route path='/home' exact component={ Home } />
        <Route path='/login' exact component={Login} />
        <Route path='/logout' exact component={Logout} />
        <Route path='/register' exact component={Register} />
        <Route path='/post/index' exact component={ PostIndx } />
        <Route path='/post/create' exact component={ PostCreate } />
        <Route path='/post/detail' exact component={ PostDetail } />
        <Route path='/post/favorite' exact component={ PostFavorite } />
        <Route path='/group/detail' exact component={ GroupDetail } />
        <Route path='/group/edit' exact component={ GroupEdit } />
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
