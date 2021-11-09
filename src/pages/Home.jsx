import { useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import Search from '../images/search.svg'
import Down from '../images/down-arrow.svg'
import Right from '../images/right-arrow.svg'
import Add from '../images/add.svg'
import Chat from '../images/chat.svg'
import Detail from '../images/detail.svg'
import Siege from '../images/siege_logo.jpg'
import Footer from '../components/Footer'


const Home = (props) => {
  let [friends, setFriends] = useState([]);
  let [groups, setGroups] = useState([]);
  let [groupDisplayFlag, setGroupDisplayFlag] = useState(true);
  let [friendDisplayFlag, setFriendDisplayFlag] = useState(true);

  useEffect(() => {
    getFriends(1);
    getGroups(1);
  },[])

  const getFriends = (id) => {
    let url = 'http://localhost:80';

    axios.get(url + '/api/friends/' + id)
    .then((res) => {
      console.log(res.data.results)
      setFriends(res.data.results)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const getGroups = (id) => {
    let url = 'http://localhost:80';

    axios.get(url + '/api/groups/' + id)
    .then((res) => {
      console.log(res.data.results)
      setGroups(res.data.results)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const changeDisplayGroup = () => {
    if (groupDisplayFlag === true) {
      setGroupDisplayFlag(false);
    } else if(groupDisplayFlag === false) {
      setGroupDisplayFlag(true);
    }
  }

  const changeDisplayFriend = () => {
    if (friendDisplayFlag === true) {
      setFriendDisplayFlag(false);
    } else if(friendDisplayFlag === false) {
      setFriendDisplayFlag(true);
    }
  }

  return (
    <>
      <HomeSection className="h-screen bg-sub">
        <div className="flex items-center justify-center search-box">
          <input className="m-3 w-56" placeholder="検索" type="search" />
        </div>

        <div className="px-4 flex justify-between items-center bg-main h-8 border-b-2 border-sub">
          <div className="flex flex-row items-center">
            <h2 className="text-white w-20">グループ</h2>
            <button onClick={changeDisplayGroup} className={groupDisplayFlag ? '' : 'hidden'}>
              <img src={ Down } width="16" height="16" alt="" />
            </button>
            <button onClick={changeDisplayGroup} className={groupDisplayFlag ? 'hidden' : ''}>
              <img src={ Right } width="16" height="16" alt="" />
            </button>
          </div>
          <button className="">
            <img src={ Add } width="16" height="16" alt="" />
          </button>
        </div>

        <section className={groupDisplayFlag ? '' : 'hidden'}>
        {
          groups.map((item, index) => {
            return (
              <div className="px-4 flex justify-between items-center bg-sub h-16 border-b-2 border-sub" key={index}>
                <div className="flex flex-row items-center">
                  <img className="rounded-full m-1" src={ Siege } width="42" height="42" alt="" />
                  <p className="text-black w-20">{item.group.group_name}</p>
                </div>
                <div>
                  <Link className="m-2 inline-block" to={'/home/chat/' + item.group.id}>
                    <img src={ Chat } width="28" height="28" alt="" />
                  </Link>
                  <Link className="m-2 inline-block" to={'/group/detail/' + item.group.id}>
                    <img src={ Detail } width="28" height="28" alt="" />
                  </Link>
                </div>
              </div>
            );
          })
        }
        </section>

        <div className="px-4 flex justify-between items-center bg-main h-8 border-b-2 border-sub">
          <div className="flex flex-row items-center">
            <h2 className="text-white w-20">友だち</h2>
            <button onClick={changeDisplayFriend} className={friendDisplayFlag ? '' : 'hidden'}>
              <img src={ Down } width="16" height="16" alt="" />
            </button>
            <button onClick={changeDisplayFriend} className={friendDisplayFlag ? 'hidden' : ''}>
              <img src={ Right } width="16" height="16" alt="" />
            </button>
          </div>
        </div>

        <section className={friendDisplayFlag ? '' : 'hidden'}>
          {
            friends.map((item, index) => {
              return (
                <div className="px-4 flex justify-between items-center bg-sub h-16 border-b-2 border-sub" key={index}>
                  <div className="flex flex-row items-center">
                    <img className="rounded-full m-1" src={ Siege } width="42" height="42" alt="" />
                    <p className="text-black w-auto">{item.user.user_name}</p>
                  </div>
                  <div>
                    <Link className="m-2 inline-block" to={'/home/chat/' + item.id}>
                      <img src={ Chat } width="28" height="28" alt="" />
                    </Link>
                    <Link className="m-2 inline-block" to={'/mypage/' + item.user.id}>
                      <img src={ Detail } width="28" height="28" alt="" />
                    </Link>
                  </div>
                </div>
              );
            })
          }
        </section>

        <Footer />
      </HomeSection>
    </>
  )
}

const HomeSection = styled.section`
  .search-box {
    position: relative;
  }

  .search-box::before {
    content: "";
    width: 16px;
    height: 16px;
    background: url(${Search}) no-repeat center center / auto 100%;
    display: inline-block;
    position: absolute;
    top: 35%;
    transform: translateY(-50%);
    transform: translateX(-600%);
  }

  .search-box input {
    padding: 3px 0 3px 2em;
  }

  .add-button {
    position: relative;
    top: 0%;
    right: 0;

  }
`

export default Home



