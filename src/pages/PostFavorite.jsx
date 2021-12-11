// import { useState,} from 'react';
// // import axios from 'axios';
// import styled from "styled-components"
// import {
//   FavoriteButton,
//   PrimaryButton,
//   // SearchModal,
//   // SearchButton,
//   Footer
// } from '../components/index'
// import ProfileLogo from '../images/profileLogo.jpeg'
// // import AddIcom from '../images/post-add.svg'


// const PostFavorite = () => {
//   const data = 
//     [
//       {
//         id:1,
//         teamName: "FavFavFavFavFavFavFavFavFav",
//         gameName: "レインボーシックスレインボーシックスレインボーシックスレインボーシックスレインボーシックスレインボーシックス",
//         teamMenber: 3,
//         teamStyle: "エンジョイ",
//         recruitmentMenber: 8,
//         teamDetail:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
//       },
//       {
//         id:2,
//         teamName: "戦国ゲーミング",
//         gameName: "ストリートファイター",
//         teamMenber: 6,
//         teamStyle: "ガチ勢",
//         recruitmentMenber: 1,
//         teamDetail:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
//       },
//       {
//         id:3,
//         teamName: "Fav",
//         gameName: "マリオカート",
//         teamMenber: 4,
//         teamStyle: "エンジョイ",
//         recruitmentMenber: 2,
//         teamDetail:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
//       }
//     ];
  
//   const [styledHidden, setStyledHidden] = useState("hidden")
//   // const [styledNone, setStyledNone] = useState("search-modal-close")
  
  
//   const onClickToggle = () => {
//     setStyledHidden(!styledHidden　? "hidden" : "" );
//   }

//   // const onClickSearch = () => {
//   //   setStyledNone(!styledNone);
//   // }

//     // useEffect(
//     //   () => {
//     //     axios
//     //       .get( 'http://localhost/api/test' )
//     //       .then( (res) => {
//     //           setData(res.data);
//     //       })
//     //       .catch( (e) => {
//     //         console.log(e);
//     //       })
//     //     },
//     //   []
//     // );
//   return (
//     <section className="bg-sub pb-16">
//       <PostWrap className="relative">
//         {/* {!styledNone && (  
//           <div className="cover"></div>
//         )} */}
//           {/* <SearchModal
//             onClickSearch={ onClickSearch }
//             styledNone={ styledNone }
//           />
//         <div className="flex items-center justify-end  px-11 mb-3">
//           <div onClick={ onClickSearch }>
//             <SearchButton />
//           </div>
//           <p className="ml-3"><img className="w-7 h-7" src={ AddIcom } alt="投稿追加ボタン" /></p>
//         </div> */}
//         <ul className="">
//           {data.map((data) => {
//             return (
//               <li key={ data.id }>
//                 <PostItem className="psot-item w-80 bg-white px-5 py-2 mb-10 m-auto">
//                   <div className="absolute -top-4 -right-4">
//                     <FavoriteButton
//                       status = { true }
//                     />
//                   </div>
//                   <div className="flex items-center mb-5">
//                     <p className="profile-logo"><img className="rounded-full" src={ ProfileLogo } alt="プロフィール画像" /></p>
//                     <h3 className="post-team-name text-2xl ml-3 truncate w-6/10">{ data.teamName }</h3>
//                   </div>
//                   <p className="post-list-item truncate">{ data.gameName }</p>
//                   <p className="post-list-item">ランク帯:<span>{ data.teamStyle }</span></p>
//                   <p className="post-list-item">募集人数:<span>{ data.recruitmentMenber }</span></p>
//                   <div className="flex justify-between mb-4">
//                     <p className="post-list-item">参加人数:<span>{ data.teamMenber }</span></p>
//                     <div onClick={ onClickToggle }>
//                       <PrimaryButton styles={"bg-sub tex p-1 text-xs"}>メンバー一覧</PrimaryButton>
//                     </div>
//                   </div>
//                   <div className={ styledHidden }>
//                     <ul className="friend-list mb-8">
//                       <li　className="flex items-center mb-3">
//                         <p className="firend-logo"><img className="rounded-full" src={ ProfileLogo } alt="プロフィール画像" /></p>
//                         <p className="ml-2">フレンド名</p>
//                       </li>
//                       <li　className="flex items-center">
//                         <p className="firend-logo"><img className="rounded-full" src={ ProfileLogo } alt="プロフィール画像" /></p>
//                         <p className="ml-2">フレンド名</p>
//                       </li>
//                     </ul>
//                   </div>
//                   <p>グループ詳細</p>
//                   <div className="post-detail overflow-hidden max-h-24">
//                     <p>
//                       { data.teamDetail }
//                     </p>
//                   </div>
//                   <PrimaryButton styles={ "bg-sub py-1 px-6 text-sm m-auto" }>応募する</PrimaryButton>
//                 </PostItem>
//               </li>
//             )
//           }) }
//         </ul>
//       </PostWrap>
//       <Footer />
//     </section>
//   )
// }

// const PostWrap = styled.div`
//   margin:0 auto;
//   .cover{
//     height: 100%;
//     width: 100%;
//     background: #000;
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 90;
//     opacity: 0.4;
//   }
// `
// const PostItem = styled.div`
//   position: relative;
//   .profile-logo img{
//     width: 65px;
//     height: 65px;
//   }
//   .firend-logo img{
//     width: 40px;
//     height: 40px;
//   }
//   .post-list-item span{
//     margin:0 0 0 10px;
//   }
//   .post-detail{
//     width: 100%;
//     margin: 0 0 18px 0;
//     padding: 0 3px;
//     border:solid 1px #000;
//     overflow: hidden;
//   }
//   .primary-button{
//     color:#fff;
//   }
// `

// export default PostFavorite











import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components"
import {
  FavoriteButton,
  PrimaryButton,
  Footer
} from '../components/index'
import DefaultIcon from '../images/default-icon.png'
import { Link } from 'react-router-dom';

export const Post = React.createContext();

const PostFavorite = () => {
  const loginedUserId = Number(localStorage.getItem('userId'));
  const [styledHidden, setStyledHidden] = useState("hidden")
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    let unmounted = false;
    if(!unmounted) {
      getfavoriteList(loginedUserId);
      unmounted = true
    }
  },[loginedUserId])

  const getfavoriteList = (userId) => {
    let url = 'http://localhost:80';

    axios.get(url + '/api/post/favorite/' + userId)
    .then((res) => {
      setFavoriteList(res.data.results);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
  
  const onClickToggle = () => {
    setStyledHidden(!styledHidden　? "hidden" : "" );
  }

  return (
    <section className="h-full bg-sub pt-10 pb-16">
      <PostWrap className="relative">
        <ul className="">
          {favoriteList.map((data, index) => {
            return (
              <li key={ index }>
                <PostItem className="psot-item w-80 bg-white px-5 py-2 mb-10 m-auto">
                  <div className="absolute -top-4 -right-4">
                    <FavoriteButton
                      status = { true }
                      postId = { data.post_id }
                      userId = { loginedUserId }
                    />
                  </div>
                  <div className="flex items-center mb-5">
                    <p className="profile-logo"><img className="rounded-full" src={ data.post.group_detail.icon === null ? DefaultIcon : data.post.group_detail.icon } alt="プロフィール画像" /></p>
                    <h3 className="post-team-name text-2xl ml-3 truncate w-6/10">{ data.post.group_detail.group_name }</h3>
                  </div>
                  <p className="post-list-item truncate">{ data.post.group_detail.mst_game.game_name }</p>
                  <p className="post-list-item">スタイル:<span>{ data.post.group_detail.mst_style.style_name }</span></p>
                  <p className="post-list-item">募集人数:<span>{ data.post.group_detail.recruitment }</span></p>
                  <div className="flex justify-between mb-4">
                    <p className="post-list-item">参加人数:<span>{ data.post.group_detail.participants }</span></p>
                    <div onClick={ onClickToggle }>
                      <PrimaryButton styles={ "bg-sub tex p-1 text-xs" }>メンバー一覧</PrimaryButton>
                    </div>
                  </div>
                  <div className={ styledHidden }>
                    <ul className="friend-list mb-8">
                      {
                        data.post.group_detail.group_member.map((data, index) => {
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
                      { data.post.group_detail.description }
                    </p>
                  </div>
                  <Link className="inline-block bg-sub py-1 px-6 text-sm mx-20" to={'/group/detail/' + data.post.group_detail.id}>
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

export default PostFavorite