import React from 'react';
import styled from "styled-components";
import {
  PrimaryButton,
  InputText,
  Footer
} from '../components/index'
import ProfileLogo from '../images/profileLogo.jpeg'

const PostCreate = () => {
  return (
    <GroupDetailWrap className="bg-sub py-20">
      <PostItem className="psot-item w-80 bg-white px-5 pb-2 pt-6 mb-10 m-auto text-sm">
        <div className="flex mb-5 items-center">
          <p className="profile-logo"><img className="rounded-full" src={ ProfileLogo } alt="プロフィール画像" /></p>
          <InputText placeholder={ "チーム名を入力してください" } styled={ "ml-4 w-7/10" } />
        </div>
        <p className="post-list-item truncate ">ゲーム名:<InputText placeholder={ "ジャンルを入力してください" } styled={ "ml-4 w-7/10" }  /></p>
        <p className="post-list-item">ランク帯:<InputText placeholder={ "ランク帯を入力してくだい" } styled={ "ml-4 w-7/10" }  /></p>
        <p className="post-list-item">募集人数:<InputText placeholder={ "募集人数を入力してください" } styled={ "ml-4 w-7/10" }  /></p>
        <p>グループ詳細</p>
        <textarea name="" id="" cols="30" rows="10"　className="post-detail">
          グループの説明グループの説明グループの説明グループの説明グループの説明
        </textarea>
        <PrimaryButton styles={ "bg-sub py-1 px-7 py-2 text-sm m-auto" }>作成</PrimaryButton>
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

export default PostCreate