import { useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  PrimaryButton,
  Footer,
} from '../components/index'
// import Left from '../images/left-arrow.svg'
import DefaultIcon from '../images/default-icon.png'

const MyPage = (props) => {
  const loginedUserId = Number(localStorage.getItem('userId'));
  const userId = Number(props.match.params.id);
  const [userDetail, setUserDetail] = useState([]);

  useEffect(() => {
    let unmounted = false;
    if(!unmounted) {
      getUseDetail(userId);
      unmounted = true
    }
  },[userId])

  // 友だちのデータ取得
  const getUseDetail = (userId) => {
    let url = 'http://localhost:80';

    axios.get(url + '/api/mypage/' + userId)
    .then((res) => {
      setUserDetail(res.data.results);
    })
    .catch((error) => {
      console.log(error)
    })
  }
  return (
    <>
      <MyPageSection className="h-screen bg-sub">
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
            <div className={loginedUserId === userId ? 'flex justify-center break-words' : 'hidden'}>
              <PrimaryButton styles={ "bg-sub text-sm p-2 m-2 w-4.5/10" }>
                <Link className="inline-block" to={{
                  pathname: '/mypage/info/edit',
                  state: { 
                    userId: userDetail.id
                  }
                }}>
                  編集する
                </Link>
              </PrimaryButton>
            </div>
          </UserDetailItem>
        </div>

        <Footer />
      </MyPageSection>
    </>
  )
}

const MyPageSection = styled.section`
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

export default MyPage

