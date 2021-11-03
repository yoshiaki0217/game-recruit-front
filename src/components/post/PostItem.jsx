import styled from "styled-components";
import { PrimaryButton } from '../index'


const PostItems = (props) => {
  const { gameName,teamStyle,recruitmentMenber,teamMenber,teamName } = props
  return (
    <>
      <div>
        <p>アイコン</p>
        <h3>{ teamName }</h3>
      </div>
      <PostItem>{ gameName }</PostItem>
      <PostItem>ランク帯:<span>{teamStyle}</span></PostItem>
      <PostItem>募集人数:<span>{recruitmentMenber}</span></PostItem>
      <div>
        <PostItem>参加人数:<span>{teamMenber}</span></PostItem>
        <PrimaryButton>メンバー一覧</PrimaryButton>
      </div>
      <p>グループ詳細</p>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </>
  )
}

const PostItem = styled.p`
  font-size:20px;
`

export default PostItems