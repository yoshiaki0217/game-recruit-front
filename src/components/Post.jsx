import { useState } from 'react'
import styled from "styled-components";
import { PrimaryButton, FavoriteButton, } from './index'
import ProfileLogo from '../images/profileLogo.jpeg'


const Post = (props) => {
  const { teamName, teamMenber, teamStyle, recruitmentMenber, gameName, teamDetail, detailStyle,favoriteBtn,favoriteBtnStyle,btnText,primaryButtonStyle } = props
  
  const [styledHidden, setStyledHidden] = useState("hidden")
  
  const onClickToggle = () => {
    setStyledHidden(!styledHidden　? "hidden" : "" );
  }
  
  return (
    <PostItem className="psot-item w-80 bg-white px-5 py-2 mb-10 m-auto">
      {favoriteBtn && (
        <div className={ favoriteBtnStyle }>
          <FavoriteButton />
        </div>
      )}
      {!favoriteBtn && (
        <p className="bg-sub w-3/10 text-sm text-center flex justify-center ml-auto py-1">
          <PrimaryButton>編集する</PrimaryButton>
        </p>
      )}
      <div className="flex items-center mb-5">
        <p className="profile-logo"><img className="rounded-full" src={ProfileLogo} alt="プロフィール画像" /></p>
        <h3 className="post-team-name text-2xl ml-3 truncate w-6/10">{ teamName }</h3>
      </div>
      <p className="post-list-item truncate">{ gameName }</p>
      <p className="post-list-item">ランク帯:<span>{ teamStyle }</span></p>
      <p className="post-list-item">募集人数:<span>{ recruitmentMenber }</span></p>
      <div className="flex justify-between mb-4">
        <p className="post-list-item">参加人数:<span>{teamMenber}</span></p>
        <div onClick={ onClickToggle }>
          <PrimaryButton styles={"bg-sub tex p-1 text-xs"}>メンバー一覧</PrimaryButton>
        </div>
      </div>
      <div className={ styledHidden }>
        <ul className="friend-list mb-8">
          <li　className="flex items-center mb-3">
            <p className="firend-logo"><img className="rounded-full" src={ProfileLogo} alt="プロフィール画像" /></p>
            <p className="ml-2">フレンド名</p>
          </li>
          <li　className="flex items-center">
            <p className="firend-logo"><img className="rounded-full" src={ProfileLogo} alt="プロフィール画像" /></p>
            <p className="ml-2">フレンド名</p>
          </li>
        </ul>
      </div>
      <p>グループ詳細</p>
      <div className={ detailStyle }>
        <p>
          { teamDetail }
        </p>
      </div>
      <PrimaryButton styles={ primaryButtonStyle } >{ btnText }</PrimaryButton>
    </PostItem>
  )
}

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

export default Post