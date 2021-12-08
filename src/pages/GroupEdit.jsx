import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import {
  PrimaryButton,
  InputText,
  Footer
} from '../components/index'
import ProfileLogo from '../images/profileLogo.jpeg'

const GroupEdit = (props) => {
  const [gameStyles, setGameStyles] = useState([]);
  const [groupData, setGroupData] = useState([]);
  // オブジェクトになっているせいなのか、groupDataからmst_gameのゲーム名が取得できず、仕方なくゲーム名用の変数作成
  // API呼び出し時にresponseから直接参照すると取得できるので、その際にこのgameNameにセットしている
  // よく分からないので、とりあえずこの方法で対応
  const [gameName, setGameName] = useState('');
  const [groupMember, setGroupMember] = useState([]);
  const groupId = props.match.params.id;
  const history = useHistory();

  useEffect(() => {
    getGroup(groupId);
    getGroupMember(groupId);
    getGameStyle();
  },[groupId])

  const getGameStyle = () => {
    let url = 'http://localhost:80';

    axios.get(url + '/api/game/styles')
    .then((res) => {
      setGameStyles(res.data.results);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const getGroup = (id) => {
    let url = 'http://localhost:80';

    axios.get(url + '/api/groups/groupid/' + id)
    .then((res) => {
      setGroupData(res.data.results);
      setGameName(res.data.results.mst_game.game_name);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const getGroupMember = (id) => {
    let url = 'http://localhost:80';

    axios.get(url + '/api/group/member/' + id)
    .then((res) => {
      setGroupMember(res.data.results);
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  const [styledHidden, setStyledHidden] = useState("hidden")
  
  const onChangeEvent = (e) => {
    const name = e.target.name;
    setGroupData({
      ...groupData,
      [name]: e.target.value
    });
  }

  // const onChangeGameNameEvent = (e) => {
  //   setGameName(e.target.value);
  // }

  const onClickToggle = () => {
    setStyledHidden(!styledHidden　? "hidden" : "" );
  }

  const onClickSaveGroupData = () => {
    let url = 'http://localhost:80';

    axios.post(url + '/api/group/edit', groupData)
    .then((res) => {
      history.push('/group/detail/' + res.data.results.id);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <GroupDetailWrap className="h-screen bg-sub py-20">
      <PostItem className="psot-item w-80 bg-white px-5 pb-2 pt-6 mb-10 m-auto text-sm">
        <div className="flex mb-5 items-center">
          <p className="profile-logo"><img className="rounded-full" src={ ProfileLogo } alt="プロフィール画像" /></p>
          {/* <InputText name="group_name" styled={ "ml-4 w-7/10" } inputValue={ groupData.group_name } onChange={ onChangeEvent } /> */}
          <input type="text" name="group_name" className="ml-4 w-7/10" defaultValue={ groupData.group_name } onChange={ onChangeEvent } />
        </div>
        <p className="post-list-item truncate">{ gameName }</p>
        {/* <p className="post-list-item truncate ">ゲーム名:<InputText name="game_name" styled={ "ml-4 w-7/10" } inputValue={ gameName } onChange={ onChangeGameNameEvent } /></p> */}
        <p className="post-list-item">スタイル:
          <select name="style_id" className="ml-4 w-7/10" value={ groupData.style_id } onChange={ onChangeEvent }>
            {
              gameStyles.map((data, index) => {
                return (
                  <option key={ index } value={ data.id }>{ data.style_name }</option>
                );
              })
            }
          </select>
        </p>
        <p className="post-list-item">募集人数:<InputText name="recruitment" styled={"ml-4 w-7/10"} inputValue={ groupData.recruitment } onChange={ onChangeEvent } /></p>
        <div className="flex justify-between mb-4">
          <p className="post-list-item">参加人数:<span className="ml-2">{ groupData.capacity }</span></p>
          <div onClick={ onClickToggle } className={ groupMember[0] ? "" : "hidden" }>
            <PrimaryButton styles={"bg-sub tex p-1 text-xs"}>メンバー一覧</PrimaryButton>
          </div>
        </div>
        <div className={ styledHidden }>
          <ul className="friend-list mb-8">
            {
              groupMember.map((data, index) => {
                return (
                  <li key={index} className="flex items-center mb-3">
                    <p className="firend-logo"><img className="rounded-full" src={ ProfileLogo } alt="プロフィール画像" /></p>
                    <p className="ml-2">{ data.user.user_name }</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <p>グループ詳細</p>
        <textarea name="description" id="" cols="30" rows="10"　className="post-detail" defaultValue={ groupData.description } onChange={ onChangeEvent }></textarea>
        <PrimaryButton styles={ "bg-sub py-1 px-7 py-2 text-sm m-auto" } onClick={ onClickSaveGroupData }>保存する</PrimaryButton>
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