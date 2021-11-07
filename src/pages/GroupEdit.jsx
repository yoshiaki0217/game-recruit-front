import { useState } from 'react'
import styled from "styled-components";
import {
  PrimaryButton,
  InputText,
  Footer
} from '../components/index'
import ProfileLogo from '../images/profileLogo.jpeg'

const GroupEdit = () => {
  const [gropData, setGropData] = useState(
    {
      id:1,
      teamName: "FavFavFavFavFavFavFavFavFav",
      gameName: "レインボーシックスレインボーシックスレインボーシックスレインボーシックスレインボーシックスレインボーシックステキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      teamMenber: 3,
      teamStyle: "エンジョイ",
      recruitmentMenber: 8,
      teamDetail:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
    }
  );
  const [styledHidden, setStyledHidden] = useState("hidden")
  
  const onChangeEvent = (e) => {
    setGropData(e.target.value);
  }

  const onClickToggle = () => {
    setStyledHidden(!styledHidden　? "hidden" : "" );
  }
  return (
    <GroupDetailWrap className="bg-sub py-20">
      <PostItem className="psot-item w-80 bg-white px-5 pb-2 pt-6 mb-10 m-auto text-sm">
        <div className="flex mb-5 items-center">
          <p className="profile-logo"><img className="rounded-full" src={ ProfileLogo } alt="プロフィール画像" /></p>
          <InputText styled={ "ml-4 w-7/10" } inputValue={ gropData.teamName } onChange={ onChangeEvent } />
        </div>
        <p className="post-list-item truncate ">ゲーム名:<InputText styled={ "ml-4 w-7/10" } inputValue={ gropData.gameName } onChange={ onChangeEvent } /></p>
        <p className="post-list-item">ランク帯:<InputText styled={ "ml-4 w-7/10" } inputValue={ gropData.teamStyle } onChange={ onChangeEvent } /></p>
        <p className="post-list-item">募集人数:<InputText styled={"ml-4 w-7/10"} inputValue={ gropData.recruitmentMenber } onChange={ onChangeEvent } /></p>
        <div className="flex justify-between mb-4">
          <p className="post-list-item">参加人数:<span className="ml-2">{gropData.teamMenber}</span></p>
          <div onClick={ onClickToggle }>
            <PrimaryButton styles={"bg-sub tex p-1 text-xs"}>メンバー一覧</PrimaryButton>
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
        <textarea name="" id="" cols="30" rows="10"　className="post-detail">
          { gropData.teamDetail }
        </textarea>
        <PrimaryButton styles={ "bg-sub py-1 px-7 py-2 text-sm m-auto" }>保存する</PrimaryButton>
      </PostItem>
      <Footer />
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
  .post-list-item{
    margin: 0 0 10px 0;
  }
  .post-list-item input{
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

export default GroupEdit