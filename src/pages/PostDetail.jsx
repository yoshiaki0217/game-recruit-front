import styled from "styled-components";
import { Post,PrimaryButton } from '../components/index'


export const PostDetail = () => {
  const data = {
      id:1,
      teamName: "FavFavFavFavFavFavFavFavFav",
      gameName: "レインボーシックスレインボーシックスレインボーシックスレインボーシックスレインボーシックスレインボーシックステキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      teamMenber: 3,
      teamStyle: "エンジョイ",
      recruitmentMenber: 8,
      teamDetail:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
    }
  return (
    <PostDetailWrap className="bg-sub py-20">
      <Post
        teamName={ data.teamName }
        gameName={ data.gameName }
        teamMenber={ data.teamMenber }
        teamStyle={ data.teamStyle }
        recruitmentMenber={data.recruitmentMenber}
        teamDetail={ data.teamDetail }
        detailStyle={ "post-detail" }
        btnText={"応募する"}
        favoriteBtnStyle={"absolute -top-4 -right-4"}
        primaryButtonStyle={"bg-sub py-1 px-6 text-sm m-auto"}
      />
    </PostDetailWrap>
  )
}

const PostDetailWrap = styled.section`
  
`