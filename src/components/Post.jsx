import styled from "styled-components";
import { PrimaryButton, FavoriteButton, } from './index'
import ProfileLogo from '../images/profileLogo.jpeg'


const Post = (props) => {
  const { teamName,teamMenber,teamStyle,recruitmentMenber,gameName,teamDetail,btnText,detailStyle,favoriteBtnStyle} = props
  return (
    <PostItem className="psot-item w-80 bg-white px-5 py-2 mb-10 m-auto">
      <div className={ favoriteBtnStyle }>
        <FavoriteButton />
      </div>
      <div className="flex items-center mb-5">
        <p className="profile-logo"><img className="rounded-full" src={ProfileLogo} alt="プロフィール画像" /></p>
        <h3 className="post-team-name text-2xl ml-3 truncate w-6/10">{ teamName }</h3>
      </div>
      <p className="post-list-item truncate">{ gameName }</p>
      <p className="post-list-item">ランク帯:<span>{ teamStyle }</span></p>
      <p className="post-list-item">募集人数:<span>{ recruitmentMenber }</span></p>
      <div className="flex justify-between mb-2">
        <p className="post-list-item">参加人数:<span>{ teamMenber }</span></p>
        <PrimaryButton styles={"bg-sub tex p-1 text-xs"}>メンバー一覧</PrimaryButton>
      </div>
      <p>グループ詳細</p>
      <div className={ detailStyle }>
        <p>
          { teamDetail }
        </p>
      </div>
      {/* <textarea name="" id="" cols="30" rows="10" className="w-full mb-3"></textarea> */}
      <PrimaryButton styles={"bg-sub text-sm px-2 py-1 w-4.5/10"}>{ btnText }</PrimaryButton>
    </PostItem>
  )
}

const PostItem = styled.div`
  position: relative;
  .profile-logo img{
    width: 65px;
    height: 65px;
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