import { useState } from "react";
import styled from "styled-components";
import { PrimaryButton,FavoriteButton,} from './index'


const Post = (props) => {
  const { teamName,teamMenber,teamStyle,recruitmentMenber,gameName, index } = props
  return (
    <PostList key={index} className="psot-item w-80 bg-white px-5 py-2">
      <div className="Favorite-button">
        <FavoriteButton />
      </div>
      <div>
        <p>アイコン</p>
        <h3>{ teamName }</h3>
      </div>
      <p className="post-list-item">{ gameName }</p>
      <p className="post-list-item">ランク帯:<span>{teamStyle}</span></p>
      <p className="post-list-item">募集人数:<span>{recruitmentMenber}</span></p>
      <div className="flex justify-between">
        <p className="post-list-item">参加人数:<span>{teamMenber}</span></p>
        <PrimaryButton>メンバー一覧</PrimaryButton>
      </div>
      <p>グループ詳細</p>
      <textarea name="" id="" cols="30" rows="10" className="w-full"></textarea>
      <PrimaryButton>詳細を見る</PrimaryButton>
    </PostList>
  )
}

const PostList = styled.li`
  position: relative;
  .Favorite-button{
    position: absolute;
    right: 0;
  }
  .post-list-item span{
    margin:0 0 0 10px;
  }
  textarea{
    border:solid 1px #000;
  }
  .primary-button{
    background:linear-gradient(to top, #09203f 0%, #537895 0%);
    color:#fff;
  }
`

export default Post