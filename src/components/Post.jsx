import styled from "styled-components";
import { PrimaryButton,FavoriteButton } from './index'


const Post = (props) => {
  const {teamName, teamMenber, teamLank, index } = props
  return (
    <PostItem key={ index } className="psot-item h-80 text-center text-gray-600 border-solid border border-gray-200 rounded-lg">
      <FavoriteButton />
      <h3 className="text-2xl">{ teamName }</h3>
      <p>{ teamMenber }</p>
      <p>{teamLank}</p>
      <PrimaryButton>詳細を見る</PrimaryButton>
    </PostItem>
  )
}

const PostItem = styled.li`
  width: 300px;
  background:#fff;
  .primary-button{
    background:linear-gradient(to top, #09203f 0%, #537895 0%);
    color:#fff;
  }
`

export default Post