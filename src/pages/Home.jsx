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
  // ログイン機能が完了したらログインしているユーザーのIDを取得
  const loginedUserId = localStorage.getItem('userId');
  const [friends, setFriends] = useState([]);
  const [searchFriends, setSearchFriends] = useState([]);
  const [groups, setGroups] = useState([]);
  const [searchGroups, setSearchGroups] = useState([]);
  const [groupDisplayFlag, setGroupDisplayFlag] = useState(true);
  const [friendDisplayFlag, setFriendDisplayFlag] = useState(true);

  useEffect(() => {
    let unmounted = false;
    if(!unmounted) {
      getFriends(loginedUserId);
      getGroups(loginedUserId);
      unmounted = true
    }
  },[loginedUserId])

  // 友だちのデータ取得
  const getFriends = (id) => {
    let url = 'http://localhost:80';

    axios.get(url + '/api/friends/' + id)
    .then((res) => {
      setFriends(res.data.results)
      setSearchFriends(res.data.results)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // グループのデータ取得
  const getGroups = (id) => {
    let url = 'http://localhost:80';

    axios.get(url + '/api/groups/userid/' + id)
    .then((res) => {
      setGroups(res.data.results)
      setSearchGroups(res.data.results)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // グループの表示/非表示
  const changeDisplayGroup = () => {
    setGroupDisplayFlag(groupDisplayFlag ? false : true);
  }

  // 友だちの表示/非表示
  const changeDisplayFriend = () => {
    setFriendDisplayFlag(friendDisplayFlag ? false : true);
  }

  // 検索ワードを取得して、検索結果用に新たな配列を作成
  const searchGroupData = (searchWord) => {
    // グループデータの検索結果を返す
    if(searchWord.target.value) {
      let data = groups.filter((item) => {
        return item.group.group_name.indexOf(searchWord.target.value) > -1;
      })
      setSearchGroups(data);
    } else {
      setSearchGroups(groups);
    }

    // 友だちデータの検索結果を返す
    if(searchWord.target.value) {
      let data = friends.filter((item) => {
        return item.user.user_name.indexOf(searchWord.target.value) > -1;
      })
      setSearchFriends(data);
    } else {
      setSearchFriends(friends);
    }
  }

  return (
    <>
      <HomeSection className="h-screen bg-sub">
        <div className="flex items-center justify-center search-box">
          <input className="m-3 w-56" placeholder="検索" type="search" onChange={searchGroupData} />
        </div>

        <div className="pb-16">
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
            <Link className="inline-block" to="/group/edit">
              <img src={ Add } width="16" height="16" alt="" />
            </Link>
          </div>

          <section className={groupDisplayFlag ? '' : 'hidden'}>
          {
            searchGroups.map((item, index) => {
              return (
                <div className="px-4 flex justify-between items-center bg-sub h-16 border-b-2 border-sub" key={index}>
                  <div className="flex flex-row items-center">
                    <img className="rounded-full m-1" src={ Siege } width="42" height="42" alt="" />
                    <p className="text-black w-40 truncate">{item.group.group_name}</p>
                  </div>
                  <div>
                    <Link className="m-2 inline-block" to={{
                        pathname: '/chat/group/' + item.group.id,
                        state: { 
                          groupName: item.group.group_name,
                          groupId: item.group.id
                        }
                      }}>
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
              searchFriends.map((item, index) => {
                return (
                  <div className="px-4 flex justify-between items-center bg-sub h-16 border-b-2 border-sub" key={index}>
                    <div className="flex flex-row items-center">
                      <img className="rounded-full m-1" src={ Siege } width="42" height="42" alt="" />
                      <p className="text-black w-40 truncate">{item.user.user_name}</p>
                    </div>
                    <div>
                      <Link className="m-2 inline-block" to={{
                        pathname: '/chat/private/' + item.private_room_id,
                        state: { 
                          friendName: item.user.user_name,
                          friendId: item.user.id
                        }
                      }}>
                        <img src={ Chat } width="28" height="28" alt="" />
                      </Link>
                      {/* <Link className="m-2 inline-block" to={'/home/chat/' + item.private_room_id}>
                        <img src={ Chat } width="28" height="28" alt="" />
                      </Link> */}
                      <Link className="m-2 inline-block" to={'/mypage/' + item.user.id}>
                        <img src={ Detail } width="28" height="28" alt="" />
                      </Link>
                    </div>
                  </div>
                );
              })
            }
          </section>
        </div>

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



