import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import {
  Top,
  Login,
  Register,
  Home,
  PostIndx,
  PostDetail,
  PostCreate,
  PostFavorite,
  GroupDetail,
  GroupEdit,
  Chat,
  MyPage,
  MyPageEdit,
  Notification,
  NotificationDetail
} from './pages/index'

function App() {
  return (
    <div className="font-serif">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={ Top } />
          <Route path='/register' exact component={ Register } />
          <Route path='/login' exact component={ Login } />
          <Route path='/home' exact component={Home} />
          
          {/* 投稿 */}
          <Route path='/post/index' exact component={ PostIndx } />
          <Route path='/post/detail' exact component={ PostDetail } />
          <Route path='/post/create' exact component={ PostCreate } />
          <Route path='/post/favorite' exact component={PostFavorite} />
          
          {/* グループ */}
          <Route path='/group/detail' exact component={ GroupDetail } />
          <Route path='/group/edit' exact component={GroupEdit} />
          
          {/* チャット */}
          <Route path='/home/chat' exact component={Chat} />

          {/* マイページ */}
          <Route path='/mypage' exact component={MyPage} />
          <Route path='/mypage/edit' exact component={MyPageEdit} />
          
          {/* 通知 */}
          <Route path='/notification' exact component={ Notification } />
          <Route path='/notification/detail' exact component={ NotificationDetail } />
      </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
