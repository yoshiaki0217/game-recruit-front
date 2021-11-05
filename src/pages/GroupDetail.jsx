import { useState } from "react";
import styled from "styled-components";
import { PrimaryButton, } from '../components/index'
import ProfileLogo from '../images/profileLogo.jpeg'

export const GroupDetail = (props) => {
  const btnText = props
  const data = {
      id:1,
      teamName: "FavFavFavFavFavFavFavFavFav",
      gameName: "レインボーシックスレインボーシックスレインボーシックスレインボーシックスレインボーシックスレインボーシックステキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      teamMenber: 3,
      teamStyle: "エンジョイ",
      recruitmentMenber: 8,
      teamDetail:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
  }
  const [styledHidden, setStyledHidden] = useState("hidden")
  
  const onClickToggle = () => {
    setStyledHidden(!styledHidden　? "hidden" : "" );
  }

  return (
    <GroupDetailWrap className="bg-sub py-20">
      <PostItem className="psot-item w-80 bg-white px-5 pb-2 pt-6 mb-10 m-auto">
        <PrimaryButton styles={"bg-sub tex p-1 text-xs ml-auto py-1 px-4"}>編集する</PrimaryButton>
        <div className="flex mb-5">
          <p className="profile-logo"><img className="rounded-full" src={ ProfileLogo } alt="プロフィール画像" /></p>
          <h3 className="post-team-name text-2xl ml-3 pt-4 break-all w-6.5/10">{ data.teamName }</h3>
        </div>
        <p className="post-list-item truncate">{ data.gameName }</p>
        <p className="post-list-item">ランク帯:<span>{ data.teamStyle }</span></p>
        <p className="post-list-item">募集人数:<span>{ data.recruitmentMenber }</span></p>
        <div className="flex justify-between mb-4">
          <p className="post-list-item">参加人数:<span>{ data.teamMenber }</span></p>
          <div onClick={ onClickToggle }>
            <PrimaryButton styles={ "bg-sub tex p-1 text-xs" }>メンバー一覧</PrimaryButton>
          </div>
        </div>
        <div className={ styledHidden }>
          <ul className="friend-list mb-8">
            <li　className="flex items-center mb-3">
              <p className="firend-logo"><img className="rounded-full" src={ ProfileLogo } alt="プロフィール画像" /></p>
              <p className="ml-2">フレンド名</p>
            </li>
            <li　className="flex items-center">
              <p className="firend-logo"><img className="rounded-full" src={ ProfileLogo } alt="プロフィール画像" /></p>
              <p className="ml-2">フレンド名</p>
            </li>
          </ul>
        </div>
        <p>グループ詳細</p>
        <div className="post-detail">
          <p>
            { data.teamDetail }
          </p>
        </div>
        <PrimaryButton styles={"bg-sub py-1 px-7 py-2 text-sm m-auto"}>{ btnText ? "募集する" : "募集をやめる" }</PrimaryButton>
      </PostItem>
    </GroupDetailWrap>
  )
}

const GroupDetailWrap = styled.section`
  
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
