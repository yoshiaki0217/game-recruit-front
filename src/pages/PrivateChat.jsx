import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Left from '../images/left-arrow.svg'
import Siege from '../images/siege_logo.jpg'
import { ChatTextArea } from '../components/index'

const PrivateChat = (props) => {
  // ログイン機能が完了したらログインしているユーザーのIDを取得
  const loginedUserId = localStorage.getItem('userId');
  const friendData = props.location.state;
  const roomId = props.match.params.id;
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let unmounted = false;
    if(!unmounted) {
      upsertRead(loginedUserId, friendData.friendId, roomId);
      getMessages(roomId);
      // getRead(loginedUserId, friendData.friendId);
      unmounted = true
    }
    window.Echo.channel('chat')
    .listen('MessageCreated', (e) => {
      getMessages(roomId);
    });
    window.Echo.channel('read-private')
    .listen('ReadPrivateCreated', (e) => {
      getMessages(roomId);
    });
  },[roomId, loginedUserId, friendData])

  const getMessages = (roomId) => {
    let url = 'http://localhost:80';

    axios.get(url + '/api/messages/private/' + roomId)
    .then((res) => {
      setMessages(res.data.results.messages);
      let element = document.documentElement;
      let bottom = element.scrollHeight - element.clientHeight;
      window.scroll(0, bottom);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const sendMessage = (e) => {
    if(!message) {
      return false;
    }
    let url = 'http://localhost:80';

    e.target.parentElement.querySelector('textarea').value = '';

    axios.post(url + '/api/private/chat/insert', {
      private_room_id : roomId,
      user_id : loginedUserId,
      message : message,
    })
    .then((res) => {
      // getMessages(loginedUserId, friendId);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const onChangeChatArea = (e) => {
    rowsUpdate(e);
    setMessage(e.target.value);
  }

  const MAX_ROWS = 10;
  let rows = '1';
  let beforeRows = '';
  const rowsUpdate = (e) => {
    let value = e.target.value
    let line = value.split("\n").length

    if(rows === MAX_ROWS) {
      if(beforeRows > line) {
        rows = line
        e.target.setAttribute('rows', rows)
        beforeRows = line
      }
      beforeRows = line
    } else {
      rows = line
      e.target.setAttribute('rows', rows)
      beforeRows = line
    }
    return true
  }

  const upsertRead = (userId, friendId, roomId) => {
    let url = 'http://localhost:80';
    const date = new Date();

    axios.post(url + '/api/read/upsert', {
      user_id : userId,
      friend_user_id : friendId,
      watch_date : date.toLocaleString(),
      room_id : roomId,
    })
    .then((res) => {
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      <ChatSection className="h-screen bg-sub">
        <div className="bg-main flex justify-between items-center fixed top-0 z-50 h-12 w-full px-4">
          <Link className="inline-block" to="/home">
            <img src={ Left } width="28" height="28" alt="" />
          </Link>
          <button className="text-white text-xl">
            { friendData.friendName }
          </button>
          <Link className="text-white text-xl" to={'/mypage/' + friendData.friendId }>
            詳細
          </Link>
        </div>

        <ChatArea>
          <div className="mt-12 px-4 py-1 bg-sub line__contents scroll pb-16">
            {
              messages.map((data, index) => {
                return (
                  <div key={ index }>
                    {/* チャット　相手 */}
                    { data.user.user_name && data.user.id !== loginedUserId &&
                      <div className="opponent flex items-start py-1">
                        <img className="inline rounded-full m-1" src={ Siege } width="35" height="35" alt="" />
                        <div className="opponent-text">
                          <div className="name">{ data.user.user_name }</div>
                          <p className="text text-sm break-words">{ data.message }</p>
                        </div>
                      </div>
                    }
                    {/* チャット　自分自身 */}
                    { data.user.user_name && data.user.id === loginedUserId &&
                      <div　className="myself flex flex-row items-center">
                        <p className="text text-sm break-words">{ data.message }</p>
                        <span className="date">{ data.read_status === 1 ? '既読' : '' }<br />0:30</span>
                      </div>
                    }
                  </div>
                )
              })
            }
          </div>
        </ChatArea>

        <ChatTextArea className="" rows={ rows } onChange={ onChangeChatArea } onClick={ sendMessage } />
      </ChatSection>
    </>
  )
}

const ChatSection = styled.section`

`

const ChatArea = styled.div`
  overflow: hidden;
  font-size: 80%;

/* 会話部分 */
.line__contents {
  // padding: 10px 10px 70px 10px;
  overflow: hidden;
  line-height: 135%;
}

.scroll {
  height: auto;
  overflow-y: scroll;
}


/* 相手の会話 */
.opponent {
    width: 100%;
    position: relative;
    margin-bottom: 5px;
    max-width: 83%;
    clear: both;
}

.opponent .opponent-text {
  margin-left: 10px;
}

.opponent .opponent-text .name {
  color: #000;
  font-size: 80%;
}

/* コメントエリア */
.opponent .text {
  margin: 0;
  position: relative;
  padding: 10px;
  border-radius: 20px;
  background-color: #ffffff;
}

/* 吹き出し */
.opponent .text::after {
  content: '';
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  left: -10px;
  top: 5px;
  border-right: 20px solid #ffffff;
  // border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

/* 自分の会話 */
.myself {
    position: relative;
    display: block;
    margin: 5px 0;
    max-width: 80%;
    float: right;
    margin-right: 15px;
    clear: both;
}

/* コメントエリア */
.myself .text {
  padding: 10px;
  border-radius: 20px;
  background-color: #8de055;
  margin: 0;
  margin-left: 50px;
}

/* 吹き出し */
.myself .text::after {
  content: '';
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  right: -10px;
  top: 10px;
  border-left: 20px solid #8de055;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

/* 既読エリア */
.myself .date {
  content: '';
  position: absolute;
  display: block;
  width: 100px;
  text-align: right;
  left: -60px;
  bottom: 0px;
  font-size: 80%;
  color: #000;
}
`

export default PrivateChat




