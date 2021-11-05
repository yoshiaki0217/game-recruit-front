import Home from '../images/home.svg'
import List from '../images/list.svg'
import Notification from '../images/notification.svg'
import Favorite from '../images/favorite.svg'
import Ninja from '../images/ninja.svg'

const Footer = () => {
  return (
    <section className="bg-main flex items-center justify-center h-16 fixed bottom-0 w-full z-50">
      <button className="flex items-center justify-center w-1/5">
        <img src={Home} width="32" height="32" alt="" />
      </button>
      <button className="flex items-center justify-center w-1/5">
        <img src={List} width="32" height="32" alt="" />
      </button>
      <button className="flex items-center justify-center w-1/5">
        <img src={Notification} width="32" height="32" alt="" />
      </button>
      <button className="flex items-center justify-center w-1/5">
        <img src={Favorite} width="32" height="32" alt="" />
      </button>
      <button className="flex items-center justify-center w-1/5">
        <img src={Ninja} width="32" height="32" alt="" />
      </button>
    </section>
  )
}

export default Footer