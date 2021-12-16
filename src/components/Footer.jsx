import { Link } from 'react-router-dom'
import Home from '../images/home.svg'
import List from '../images/list.svg'
import Notification from '../images/notification.svg'
import Favorite from '../images/favorite.svg'
import Ninja from '../images/ninja.svg'

const Footer = (props) => {
  const loginedUserId = Number(localStorage.getItem('userId'));
  return (
    <section className="bg-main flex items-center justify-center h-16 fixed bottom-0 w-full z-50">
      <Link className="flex items-center justify-center w-1/5 inline-block" to="/home">
        <img src={Home} width="32" height="32" alt="" />
      </Link>
      <Link className="flex items-center justify-center w-1/5 inline-block" to="/post/index">
        <img src={List} width="32" height="32" alt="" />
      </Link>
      <Link className="flex items-center justify-center w-1/5 inline-block" to="/notification">
        <img src={Notification} width="32" height="32" alt="" />
      </Link>
      <Link className="flex items-center justify-center w-1/5 inline-block" to="/post/favorite">
        <img src={Favorite} width="32" height="32" alt="" />
      </Link>
      <Link className="flex items-center justify-center w-1/5 inline-block" to={ '/mypage/' + loginedUserId }>
        <img src={Ninja} width="32" height="32" alt="" />
      </Link>
    </section>
  )
}

export default Footer