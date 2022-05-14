import React, { useState, useEffect } from 'react'
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

const GroupCreate = (props) => {
  const loginedUserId = Number(localStorage.getItem('userId'));
  const [gameStyles, setGameStyles] = useState([]);
  const [gameNames, setGameNames] = useState([]);
  const [thumbnail, setThumbnail] = useState(DefaultIcon);
  const history = useHistory();
  const [errorMessages, setValidationMessages] = useState([])
  const [formData, setFormData] = useState({
    'group_name' : '',
    'leader_id' : loginedUserId,
    'icon' : '',
    'style_id' : '',
    'game_id' : '',
    'recruitment' : '',
    'description' : '',
  })

  useEffect(() => {
    let unmounted = false;
    if(!unmounted) {
      getGameStyle();
      getGameNames();
      unmounted = true
    }
  },[])

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

  const getGameNames = () => {
    let url = process.env.REACT_APP_BACKEND_PATH;

    axios.get(url + '/api/game/names')
    .then((res) => {
      setGameNames(res.data.results);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const schema = Joi.object({
    leader_id: Joi.number()
      .required(),
  
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
  
    icon: Joi,
  
    game_id: Joi.number()
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "＊ゲーム名は必須です";
              break;
            case "number.base":
              err.message = `＊ゲームは選択肢から選んでください`;
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
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "＊詳細は必須です";
              break;
            default:
              break;
          }
        });
        return new Error(errors);
      }),
  })
  
  const onChangeEvent = (e) => {
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: e.target.value
    });
  }

  const onClickCreateGroupData = () => {
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

    formDatas.append("group_name", formData.group_name)
    formDatas.append("leader_id", loginedUserId)
    formDatas.append("icon", formData.icon)
    formDatas.append("recruitment", formData.recruitment)
    formDatas.append("description", formData.description)
    formDatas.append("style_id", formData.style_id)
    formDatas.append("game_id", formData.game_id)

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    }

    if(validationCheckFlag) {
      axios.post(url + '/api/group/create', formDatas, config)
      .then((res) => {
        history.push(`/group/detail/${res.data.results.id}`);
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
      <PostItem className="psot-item w-80 bg-white px-5 pb-2 pt-6 mb-10 m-auto">
        <div className="flex mb-5 items-center">
          <p className="profile-logo"><img className="rounded-full" src={ thumbnail } alt="プロフィール画像" onClick={ changeIcon } /></p>
          <input style={{display: 'none'}} name="icon" id="icon" type="file" onChange={setImage} />
          <InputText type="text" name="group_name" styled={ "ml-4 w-7/10" } placeholder={ "グループ名" } onChange={ onChangeEvent } />
        </div>
        <p className="post-list-item">ゲーム名：
          <select name="game_id" className="w-7/10" onChange={ onChangeEvent }>
            <option>ゲームを選択してください</option>
            {
              gameNames.map((data, index) => {
                return (
                  <option key={ index } value={ data.id }>{ data.game_name }</option>
                );
              })
            }
          </select>
        </p>
        <p className="post-list-item">スタイル：
          <select name="style_id" className="w-7/10" onChange={ onChangeEvent }>
            <option>スタイルを選択してください</option>
            {
              gameStyles.map((data, index) => {
                return (
                  <option key={ index } value={ data.id }>{ data.style_name }</option>
                );
              })
            }
          </select>
        </p>
        <p className="post-list-item">募集人数：
          <select name="recruitment" className="w-7/10" onChange={ onChangeEvent }>
            <option>人数を選択してください</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
          </select>
        </p>
        <p>グループ詳細</p>
        <textarea name="description" style={{ overflow:'auto', resize: 'none'}} cols="30" rows="13"　className="post-detail" onChange={ onChangeEvent }></textarea>
        <PrimaryButton styles={ "bg-sub py-1 px-7 py-2 text-sm m-auto" } onClick={ onClickCreateGroupData }>作成する</PrimaryButton>
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

export default GroupCreate