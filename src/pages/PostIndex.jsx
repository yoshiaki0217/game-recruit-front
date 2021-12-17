import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components"
import {
  FavoriteButton,
  PrimaryButton,
  SearchModal,
  SearchButton,
  Footer
} from '../components/index'
import DefaultIcon from '../images/default-icon.png'
import Add from '../images/post-add.svg'
import { Link } from 'react-router-dom';

export const Post = React.createContext();

const PostIndx = () => {
  const loginedUserId = Number(localStorage.getItem('userId'));
  const [styledHidden, setStyledHidden] = useState("hidden")
  const [styledNone, setStyledNone] = useState("search-modal-close")
  const [postDetail, setPostDetail] = useState([]);
  const [searchedPostDetail, setSearchedPostDetail] = useState([]);
  const value = {
    postDetail,
    setSearchedPostDetail
  };

  useEffect(() => {
    let unmounted = false;
    if(!unmounted) {
      getPostDetail(loginedUserId);
      unmounted = true
    }
  },[loginedUserId])

  const getPostDetail = (userId) => {
    let url = 'http://localhost:80';

    axios.get(url + '/api/post/detail/all/' + userId)
    .then((res) => {
      setPostDetail(res.data.results);
      setSearchedPostDetail(res.data.results);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
  
  const onClickToggle = () => {
    setStyledHidden(!styledHidden　? "hidden" : "" );
  }

  const onClickSearch = () => {
    setStyledNone(!styledNone);
  }

  return (
    <section className="h-full bg-sub pb-16">
      <PostWrap className="relative">
        {!styledNone && (  
          <div className="cover"></div>
        )}

        <Post.Provider value={ value }>
          <SearchModal
            onClickSearch={onClickSearch}
            styledNone={ styledNone }
          />
        </Post.Provider>
        <div className="flex items-center justify-end  px-11 mb-3">
          <div onClick={onClickSearch}>
            <SearchButton />
          </div>
          <Link className="inline-block ml-3" to="/group/create">
            <img src={ Add } className="w-7 h-7" alt="投稿追加ボタン" />
          </Link>
        </div>
        <ul className="">
          {searchedPostDetail.map((data, index) => {
            return (
              <li key={ index }>
                <PostItem className="psot-item w-80 bg-white px-5 py-2 mb-10 m-auto">
                  <div className="absolute -top-4 -right-4">
                    {(() => {
                      let trueFavoriteButton ='';
                      let falseFavoriteButton ='';
                      let flag = 0;
                      if(data.favorite[0]) {
                        data.favorite.forEach(element => {
                          if(element.user_id === Number(loginedUserId) && element.status_flag === 0) {
                            flag = 1;
                            trueFavoriteButton = (
                              <FavoriteButton
                                status = { true }
                                postId = { data.id }
                                userId = { loginedUserId }
                              />
                            )
                          } else {
                            falseFavoriteButton = (
                              <FavoriteButton
                                status = { false }
                                postId = { data.id }
                                userId = { loginedUserId }
                              />
                            )
                          }
                        });
                      } else {
                        flag = 1;
                        trueFavoriteButton = (
                          <FavoriteButton
                            status = { false }
                            postId = { data.id }
                            userId = { loginedUserId }
                          />
                        )
                      }

                      if(flag === 0) {
                        return falseFavoriteButton;
                      } else {
                        return trueFavoriteButton;
                      }

                    })()}
                  </div>
                  <div className="flex items-center mb-5">
                    <p className="profile-logo"><img className="rounded-full" src={ data.group_detail.icon === null ? DefaultIcon : data.group_detail.icon } alt="プロフィール画像" /></p>
                    <h3 className="post-team-name text-2xl ml-3 truncate w-6/10">{ data.group_detail.group_name }</h3>
                  </div>
                  <p className="post-list-item truncate">{ data.group_detail.mst_game.game_name }</p>
                  <p className="post-list-item">スタイル:<span>{ data.group_detail.mst_style.style_name }</span></p>
                  <p className="post-list-item">募集人数:<span>{ data.group_detail.recruitment }</span></p>
                  <div className="flex justify-between mb-4">
                    <p className="post-list-item">参加人数:<span>{ data.group_detail.participants }</span></p>
                    <div onClick={ onClickToggle }>
                      <PrimaryButton styles={ "bg-sub tex p-1 text-xs" }>メンバー一覧</PrimaryButton>
                    </div>
                  </div>
                  <div className={ styledHidden }>
                    <ul className="friend-list mb-8">
                      {
                        data.group_detail.group_member.map((data, index) => {
                          return (
                            <li key={ index } className="flex items-center mb-3">
                              <p className="firend-logo"><img className="rounded-full" src={ data.user.icon === null ? DefaultIcon : data.user.icon } alt="プロフィール画像" /></p>
                              <p className="ml-2">{ data.user.user_name }</p>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                  <p>グループ詳細</p>
                  <div className="post-detail overflow-hidden max-h-24">
                    <p>
                      { data.group_detail.description }
                    </p>
                  </div>
                  <Link className="inline-block bg-sub py-1 px-6 text-sm mx-20" to={'/post/detail/' + data.group_detail.id}>
                  詳細を見る
                  </Link>
                </PostItem>
              </li>
            )
          }) }
        </ul>
      <Footer />
      </PostWrap>
    </section>
  )
}

const PostWrap = styled.div`
  margin:0 auto;
  .cover{
    height: 100%;
    width: 100%;
    background: #000;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 90;
    opacity: 0.4;
  }
`
const PostItem = styled.div`
  position: relative;
  .profile-logo img{
    width: 65px;
    height: 65px;
  }
  .firend-logo img{
    width: 40px;
    height: 40px;
  }
  .post-list-item span{
    margin:0 0 0 10px;
  }
  .post-detail{
    width: 100%;
    margin: 0 0 18px 0;
    padding: 0 3px;
    border:solid 1px #000;
    overflow: hidden;
  }
  .primary-button{
    color:#fff;
  }
`

export default PostIndx