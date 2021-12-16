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
  PostIndex,
  PostDetail,
  PostCreate,
  PostFavorite,
  GroupDetail,
  GroupEdit,
  GroupCreate,
  GroupChat,
  PrivateChat,
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
          <Route path='/post/index' exact component={ PostIndex } />
          <Route path='/post/detail' exact component={ PostDetail } />
          <Route path='/post/create' exact component={ PostCreate } />
          <Route path='/post/favorite' exact component={PostFavorite} />
          
          {/* グループ */}
          <Route path='/group/detail/:id' exact component={ GroupDetail } />
          <Route path='/group/edit/:id' exact component={ GroupEdit } />
          <Route path='/group/create' exact component={ GroupCreate } />
          
          {/* チャット */}
          <Route path='/chat/group/:id' exact component={ GroupChat } />
          <Route path='/chat/private/:id' exact component={ PrivateChat } />

          {/* マイページ */}
          <Route path='/mypage/:id' exact component={MyPage} />
          <Route path='/mypage/info/edit' exact component={MyPageEdit} />
          
          {/* 通知 */}
          <Route path='/notification' exact component={ Notification } />
          <Route path='/notification/detail' exact component={ NotificationDetail } />
      </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
