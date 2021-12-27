import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import {
  PrimaryButton,
  InputText,
  Footer,
  HeaderBackButton
} from '../components/index'
import DefaultIcon from '../images/default-icon.png'
import Joi from 'joi-browser';

const GroupEdit = (props) => {
  const [gameStyles, setGameStyles] = useState([]);
  const [groupData, setGroupData] = useState([]);
  // オブジェクトになっているせいなのか、groupDataからmst_gameのゲーム名が取得できず、仕方なくゲーム名用の変数作成
  // API呼び出し時にresponseから直接参照すると取得できるので、その際にこのgameNameにセットしている
  // よく分からないので、とりあえずこの方法で対応
  const [gameName, setGameName] = useState('');
  const [thumbnail, setThumbnail] = useState(DefaultIcon);
  const [groupMember, setGroupMember] = useState([]);
  const groupId = props.match.params.id;
  const history = useHistory();
  const [errorMessages, setValidationMessages] = useState([])
  const [formData, setFormData] = useState({
    'id' : '',
    'icon' : '',
    'group_name' : '',
    'style_id' : '',
    'recruitment' : '',
    'description' : '',
  })

  useEffect(() => {
    let unmounted = false;
    if(!unmounted) {
      getGroup(groupId);
      getGroupMember(groupId);
      getGameStyle();
    }
  },[groupId])

  const getGameStyle = () => {
    let url = process.env.REACT_APP_BACKEND_PATH;

    axios.get(url + '/api/game/styles')
    .then((res) => {
      setGameStyles(res.data.results);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const getGroup = (id) => {
    let url = process.env.REACT_APP_BACKEND_PATH;

    axios.get(url + '/api/groups/groupid/' + id)
    .then((res) => {
      const { id, icon, group_name, style_id, recruitment, description } = res.data.results;
      setGroupData(res.data.results);
      setThumbnail(res.data.results.icon === null ? DefaultIcon : res.data.results.icon);
      setGameName(res.data.results.mst_game.game_name);
      setFormData({
        'id' : id,
        'icon' : icon,
        'group_name' : group_name,
        'style_id' : style_id,
        'recruitment' : recruitment,
        'description' : description,
      });
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const getGroupMember = (id) => {
    let url = process.env.REACT_APP_BACKEND_PATH;

    axios.get(url + '/api/group/member/' + id)
    .then((res) => {
      setGroupMember(res.data.results);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const schema = Joi.object({
    id: Joi.number()
      .required(),
  
    icon: Joi,
  
    group_name: Joi.string()
      .max(256)
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "＊グループ名は必須です";
              break;
            case "string.max":
              err.message = `＊グループ名は${err.context.limit}文字以内で設定してください`;
              break;
            default:
              break;
          }
        });
        return new Error(errors);
      }),
  
    style_id: Joi.number()
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "＊スタイルは必須です";
              break;
            case "number.base":
              err.message = `＊スタイルは選択肢から選んでください`;
              break;
            default:
              break;
          }
        });
        return new Error(errors);
      }),
  
    recruitment: Joi.number()
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "＊募集人数は必須です";
              break;
            case "number.base":
              err.message = `＊募集人数は数字を指定してください`;
              break;
            default:
              break;
          }
        });
        return new Error(errors);
      }),
  
    description: Joi.string()
      .required()
      .max(5000)
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "＊詳細は必須です";
              break;
            case "string.max":
              err.message = `＊詳細は${err.context.limit}文字以内で設定してください`;
              break;
            default:
              break;
          }
        });
        return new Error(errors);
      }),
  })
  
  const [styledHidden, setStyledHidden] = useState("hidden")
  
  const onChangeEvent = (e) => {
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: e.target.value
    });
  }

  const onClickToggle = () => {
    setStyledHidden(!styledHidden　? "hidden" : "" );
  }

  const onClickSaveGroupData = () => {
    let url = process.env.REACT_APP_BACKEND_PATH;
    let formDatas = new FormData();
    let validationCheckFlag = false;

    // バリデーション実行
    const { error } = schema.validate(formData, {abortEarly: false});

    if(error) {
      let messages = error.message.split(',');
      setValidationMessages(messages);
      return false;
    } else {
      validationCheckFlag = true;
    }

    formDatas.append("id", formData.id)
    formDatas.append("icon", formData.icon)
    formDatas.append("group_name", formData.group_name)
    formDatas.append("style_id", formData.style_id)
    formDatas.append("recruitment", formData.recruitment)
    formDatas.append("description", formData.description)

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    }

    if(validationCheckFlag) {
      axios.post(url + '/api/group/edit', formDatas, config)
      .then((res) => {
        history.push('/group/detail/' + res.data.results.id);
      })
      .catch((error) => {
        // エラーメッセージの配列を用意
        let messages = [];
        // レスポンスをオブジェクトから配列に変換
        let arr = Object.entries(error.response.data.errors);
        // レスポンスの配列からメッセージだけを取り出し、エラーメッセージの配列にセット
        arr.forEach(function (value) {
          messages.push(value[1][0]);
        })
        // 表示用の配列にセット
        setValidationMessages(messages);
      })
    }
  }

  const setImage = (e) => {
    const name = e.target.name;
    const files = e.target;

    if (files.files[0] !== undefined) {
      const file = files.files[0]
      const type = file.type
      if (
          type !== "image/jpeg" &&
          type !== "image/png" &&
          type !== "image/webp"
      ) {
          alert("選択されたファイルはアップロードできません")
          return false
      }
      setFormData({
        ...formData,
        [name]: file
      });
      if (type.startsWith("image/")) {
        setThumbnail(window.URL.createObjectURL(file))
      }
    } else {
      setFormData({
        ...formData,
        [name]: ''
      });
    }
  }

  const changeIcon = () => {
    let icon = document.getElementById('icon');
    icon.click();
  }

  return (
    <GroupDetailWrap className="h-screen bg-sub py-16">
      <HeaderBackButton />
      <div className={ errorMessages.length === 0 ? 'hidden' : 'bg-red-100 w-80 mx-auto p-1 mb-2' }>
        <ul className="mx-auto px-3 text-red-600">
          {
          errorMessages.map((item, index) => {
            return (
                <li key={ index }>{ item }</li>
                )
              })
          }
        </ul>
      </div>
      <PostItem className="psot-item w-80 bg-white px-5 pb-2 pt-6 mb-6 m-auto">
        <div className="flex mb-5 items-center">
          <p className="profile-logo"><img className="rounded-full" src={ thumbnail } onClick={ changeIcon } alt="プロフィール画像" /></p>
          <input style={{display: 'none'}} name="icon" id="icon" type="file" onChange={setImage} />
          <input type="text" name="group_name" className="ml-4 w-7/10" defaultValue={ groupData.group_name } onChange={ onChangeEvent } />
        </div>
        <p className="post-list-item truncate">{ gameName }</p>
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
          <p className="post-list-item">参加人数:<span className="ml-2">{ groupData.participants }</span></p>
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
                    <p className="firend-logo"><img className="rounded-full" src={ data.user.icon === null ? DefaultIcon : data.user.icon } alt="プロフィール画像" /></p>
                    <p className="ml-2">{ data.user.user_name }</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <p>グループ詳細</p>
        <textarea name="description" style={{ overflow:'auto', resize: 'none'}} cols="30" rows="13"　className="post-detail" defaultValue={ groupData.description } onChange={ onChangeEvent }></textarea>
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