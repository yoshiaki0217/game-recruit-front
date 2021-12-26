import styled from 'styled-components'
import { useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  PrimaryButton,
  Footer,
  HeaderBackButton
} from '../components/index'
import DefaultIcon from '../images/default-icon.png'

const NotificationDetail = (props) => {
  const { userId, notificationsId } = props.location.state;
  const [userDetail, setUserDetail] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let unmounted = false;
    if(!unmounted) {
      getUserDetail(userId);
      unmounted = true
    }
  },[userId])

  const getUserDetail = (userId) => {
    let url = 'http://localhost:80';

    axios.get(url + '/api/mypage/' + userId)
    .then((res) => {
      setUserDetail(res.data.results);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const sendReply = (e) => {
    let url = 'http://localhost:80';
    let reply = e.target.name;

    axios.post(url + '/api/notification/reply', {
      notifications_id : notificationsId,
      reply : reply,
    })
    .then((res) => {
      history.push('/notification');
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      <NotificationDetailSection className="h-screen bg-sub">
        <div className="mt-3 mb-20">
          <HeaderBackButton />

          <div className="mt-12 mb-20">
            <div className="px-4 flex justify-center items-center">
              <div>
                <img className="rounded-full m-3" src={ userDetail.icon === null ? DefaultIcon : userDetail.icon } width="150" height="150" alt="" />
                <h2 className="text-center text-xl">{ userDetail.user_name }</h2>
              </div>
            </div>

            <UserDetailItem className="psot-item w-80 bg-white p-4 my-5 mx-auto">
              <p className="post-list-item truncate">ゲーム:</p>
              <p className="post-list-item mx-3">{ userDetail.game }</p>
              <p>自己紹介:</p>
              <div className="h-auto mx-3">
                <p className="break-words">{ userDetail.introduction }</p>
              </div>
              <div className="flex justify-center">
                <PrimaryButton styles={ "bg-sub text-sm p-2 m-2 w-4.5/10" } name={ 'permission' } onClick={ sendReply }>許可する</PrimaryButton>
                <PrimaryButton styles={ "bg-sub text-sm p-2 m-2 w-4.5/10" } name={ 'rejection' } onClick={ sendReply }>拒否する</PrimaryButton>
              </div>
            </UserDetailItem>
          </div>

          <Footer />
        </div>
      </NotificationDetailSection>
    </>
  )
}

const NotificationDetailSection = styled.section`
  overflow-y: scroll;
`

const UserDetailItem = styled.div`
  position: relative;
  .profile-logo img{
    width: 65px;
    height: 65px;
  }

  .primary-button{
    color:#fff;
  }
`

export default NotificationDetail


