import { useState, useEffect} from 'react';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {
  PrimaryButton,
  Footer
} from '../components/index'
import Left from '../images/left-arrow.svg'
import DefaultIcon from '../images/default-icon.png'

const MyPageEdit = (props) => {
  const userId = props.location.state.userId;
  const [userDetail, setUserDetail] = useState([]);
  const [thumbnail, setThumbnail] = useState(DefaultIcon);
  const history = useHistory();

  useEffect(() => {
    let unmounted = false;
    if(!unmounted) {
      getUserDetail(userId);
      unmounted = true
    }
  },[userId])

  const onChangeEvent = (e) => {
    const name = e.target.name;
    setUserDetail({
      ...userDetail,
      [name]: e.target.value
    });
  }

  // 友だちのデータ取得
  const getUserDetail = (userId) => {
    let url = 'http://localhost:80';

    axios.get(url + '/api/mypage/' + userId)
    .then((res) => {
      setUserDetail(res.data.results);
      setThumbnail(res.data.results.icon === null ? DefaultIcon : res.data.results.icon);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const changeIcon = () => {
    let icon = document.getElementById('icon');
    icon.click();
  }


  const setImage = (e) => {
    const name = e.target.name;
    const files = e.target;

    if (files.files[0] !== undefined) {
      const file = files.files[0]
      const type = file.type
      if (
          type !== "image/jpeg" &&
          type !== "image/png" &&
          type !== "image/webp"
      ) {
          alert("選択されたファイルはアップロードできません")
          return false
      }
      setUserDetail({
        ...userDetail,
        [name]: file
      });
      if (type.startsWith("image/")) {
        setThumbnail(window.URL.createObjectURL(file))
      }
    }
  }

  const sendUserDetail = () => {
    let url = 'http://localhost:80';

    let formDatas = new FormData();
    formDatas.append("id", userId)
    formDatas.append("user_name", userDetail.user_name)
    formDatas.append("icon", userDetail.icon)
    formDatas.append("game", userDetail.game)
    formDatas.append("introduction", userDetail.introduction)

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    }

    axios.post(url + '/api/mypage/edit', formDatas, config)
    .then((res) => {
      setUserDetail(res.data.results);
      history.push('/mypage/' + userId);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      <MyPageEditSection className="h-screen bg-sub">
        <div className="bg-main flex justify-between items-center fixed top-0 z-50 px-4 h-12 w-full">
          <Link className="inline-block" to={'/mypage/' + userDetail.id }>
            <img src={ Left } width="28" height="28" alt="" />
          </Link>
        </div>

        <div className="mt-12 mb-20">
          <div className="px-4 flex justify-center items-center">
            <div>
              <img className="rounded-full my-3 mx-auto" src={ thumbnail } onClick={ changeIcon } width="150" height="150" alt="" />
              <input style={{display: 'none'}} name="icon" id="icon" type="file" onChange={setImage} />
              <input className="bg-indigo-600 bg-opacity-0 text-center text-xl p-1 border-b border-main" type="text" name="user_name" placeholder="ユーザー名" defaultValue={ userDetail.user_name } onChange={ onChangeEvent } />
            </div>
          </div>

          <section className="">
            <div className="psot-item w-80 bg-white p-4 my-5 mx-auto">
              <p className="post-list-item truncate">ゲーム:</p>
              <TextArea className="p-1 w-full" rows="2" name="game" placeholder="ゲームの種類" defaultValue={ userDetail.game } onChange={ onChangeEvent }></TextArea>
              <p>自己紹介:</p>
              <TextArea className="p-1 w-full" rows="7" name="introduction" placeholder="自己紹介文" defaultValue={ userDetail.introduction } onChange={ onChangeEvent }></TextArea>
              <div className="flex justify-center">
                <PrimaryButton styles={ "bg-sub text-sm p-2 m-2 w-4.5/10" } onClick={ sendUserDetail }>保存する</PrimaryButton>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </MyPageEditSection>
    </>
  )
}

const MyPageEditSection = styled.section`
  overflow-y: scroll;
`

const TextArea = styled.textarea`
  resize: none;
`

export default MyPageEdit

