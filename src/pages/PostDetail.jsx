import { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";
import {
  PrimaryButton,
  Footer,
  HeaderBackButton
} from '../components/index';
import DefaultIcon from '../images/default-icon.png'
import { Link } from 'react-router-dom';

const PostDetail = (props) => {
  // ログイン機能が完了したらログインしているユーザーのIDを取得
  const loginedUserId = Number(localStorage.getItem('userId'));
  const [groupData, setGroupData] = useState([]);
  // オブジェクトになっているせいなのか、groupDataからmst_gameのゲーム名が取得できず、仕方なくゲーム名用の変数作成
  // API呼び出し時にresponseから直接参照すると取得できるので、その際にこのgameNameにセットしている
  // よく分からないので、とりあえずこの方法で対応
  const [gameName, setGameName] = useState('');
  const [styleName, setStyleName] = useState('');
  const [groupMember, setGroupMember] = useState([]);
  const [postData, setPostData] = useState([]);
  const groupId = props.match.params.id;
  const [groupMemberCheckFlag, setGroupMemberCheckFlag] = useState(false);
  const [joinRequestedFlag, setJoinRequestedFlag] = useState(false);

  useEffect(() => {
    getGroup(groupId);
    getGroupMember(groupId, loginedUserId, checkGroupMember);
    getPost(groupId, loginedUserId, checkJoinRequested);
  },[groupId, loginedUserId])

  const getGroup = (id) => {
    let url = process.env.REACT_APP_BACKEND_PATH;

    axios.get(url + '/api/groups/groupid/' + id)
    .then((res) => {
      setGroupData(res.data.results);
      setGameName(res.data.results.mst_game.game_name);
      setStyleName(res.data.results.mst_style.style_name);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const getGroupMember = (id, userId, checkGroupMember) => {
    let url = process.env.REACT_APP_BACKEND_PATH;

    axios.get(url + '/api/group/member/' + id)
    .then((res) => {
      setGroupMember(res.data.results);
      checkGroupMember(res.data.results, userId);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const [styledHidden, setStyledHidden] = useState("hidden");
  
  const onClickToggle = () => {
    setStyledHidden(!styledHidden　? "hidden" : "" );
  }

  const getPost = (groupId, userId, checkJoinRequested) => {
    let url = process.env.REACT_APP_BACKEND_PATH;

    axios.get(url + '/api/post/' + groupId)
    .then((res) => {
      setPostData(res.data.results);
      checkJoinRequested(userId, res.data.results.id)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const checkGroupMember = (member, usertId) => {
    member.forEach(item => {
      if(Number(item.user_id) === usertId) {
        setGroupMemberCheckFlag(true);
      }
    })
  }

  const sendJoinRequest = () => {
    let url = process.env.REACT_APP_BACKEND_PATH;

    setJoinRequestedFlag(true)

    axios.post(url + '/api/subscriptions', {
      user_id : loginedUserId,
      post_id : postData.id,
      leader_id : groupData.leader_id,
    })
    .then((res) => {
      
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const checkJoinRequested = (userId, postId) => {
    let url = process.env.REACT_APP_BACKEND_PATH;

    axios.get(url + '/api/subscriptions/' + userId + '/' + postId)
    .then((res) => {
      if(res.data.results !== null) {
        setJoinRequestedFlag(true)
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <GroupDetailWrap className="h-screen bg-sub py-16">
      <HeaderBackButton />
      <PostItem className="psot-item w-80 bg-white px-5 pb-2 pt-6 mb-10 m-auto">
        <div className="flex mb-5">
          <p className="profile-logo"><img className="rounded-full" src={ groupData.icon === null ? DefaultIcon : groupData.icon } alt="プロフィール画像" /></p>
          <h3 className="post-team-name text-2xl ml-3 pt-4 break-all w-6.5/10">{ groupData.group_name }</h3>
        </div>
        <p className="post-list-item truncate">{ gameName }</p>
        <p className="post-list-item">スタイル:<span>{ styleName }</span></p>
        <p className="post-list-item">募集人数:<span>{ groupData.recruitment }</span></p>
        <div className="flex justify-between mb-4">
          <p className="post-list-item">参加人数:<span>{ groupData.participants }</span></p>
          <div onClick={ onClickToggle } className={ groupMember[0] ? "" : "hidden" }>
            <PrimaryButton styles={ "bg-sub tex p-1 text-xs" }>メンバー一覧</PrimaryButton>
          </div>
        </div>
        <div className={ styledHidden }>
          <ul className="friend-list mb-8">
            {
              groupMember.map((data, index) => {
                return (
                  <li key={index} className="flex items-center mb-3">
                    <p className="firend-logo"><img className="rounded-full" src={ data.user.icon === null ? DefaultIcon : data.user.icon } alt="プロフィール画像" /></p>
                    <p className="ml-2">{ data.user.user_name }</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <p>グループ詳細</p>
        <div className="post-detail">
          <p>
            { groupData.description }
          </p>
        </div>
        {(
          () => {
            let html = ''
            if(groupMemberCheckFlag) {
              html = (
                <Link to={'/group/detail/' + groupData.id}>            
                  <PrimaryButton styles={"bg-sub py-1 px-7 py-2 text-sm m-auto"}>グループへ</PrimaryButton>
                </Link>
              )
            } else {
              if(joinRequestedFlag) {
                html = (
                  <div className="flex items-center">
                    <p className="inline-block text-black text-opacity-25 bg-sub px-7 py-2 text-sm m-auto">
                      応募する
                    </p>
                  </div>
                )
              } else {
                html = (
                  <PrimaryButton styles={'bg-sub py-1 px-7 py-2 text-sm m-auto'} onClick={ sendJoinRequest }>応募する</PrimaryButton>
                )
              }
            }
            return html;
          }
        )()}
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

export default PostDetail