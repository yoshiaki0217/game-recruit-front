import { useState, useEffect} from 'react';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {
  PrimaryButton,
  Footer
} from '../components/index'
import Left from '../images/left-arrow.svg'
import DefaultIcon from '../images/default-icon.png'
import Joi from 'joi-browser';

const validate = (formData) => {
  const schema = Joi.object({
    id: Joi.number()
      .required(),

    icon: Joi,

    // エラー内容を一気に出すやり方（メッセージをオーバーライドする方法がわからないため保留）
    // user_name: Joi.string()
    //   .max(256)
    //   .required(),

    // game: Joi.string()
    // .max(256)
    // .required(),
    
    // introduction: Joi.string()
    // .max(5000)
    // .required(),

    // エラー内容を一つ一つ出すやり方
    user_name: Joi.string()
      .max(256)
      .allow('')
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "＊ユーザー名は必須です";
              break;
            case "string.max":
              err.message = `＊ユーザー名は${err.context.limit}文字以内で設定してください`;
              break;
            default:
              break;
          }
        });
        return new Error(errors);
      }),

    game: Joi.string()
      .max(5000)
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "string.base":
              err.message = "＊ゲーム名は文字列を入力してください";
              break;
            case "string.max":
              err.message = `＊ゲーム名は${err.context.limit}文字以内で設定してください`;
              break;
            default:
              break;
          }
        });
        return new Error(errors);
      }),

    introduction: Joi.string()
      .max(5000)
      .allow('')
      .error(errors => {
        errors.forEach(err => {
          console.log(err.type);
          switch (err.type) {
            case "string.base":
              err.message = "＊自己紹介は文字列を入力してください";
              break;
            case "string.max":
              err.message = `＊自己紹介は${err.context.limit}文字以内で設定してください`;
              break;
            default:
              break;
          }
        });
        return new Error(errors);
      }),
  })

  // バリデーション実行
  const result = schema.validate(formData, {abortEarly: false});
  let errors = [];
  
  // エラー内容を一気に出すやり方（メッセージをオーバーライドする方法がわからないため保留）
  // if(!result.error) return null;
  // for(let item of result.error.details) {
  //   errors.push(item.message);
  // }

  // エラー内容を一つ一つ出すやり方
  if(result.error) {
    errors = result.error.message.split(',');
  } else {
    errors = null;
  }

  return errors;
}

const MyPageEdit = (props) => {
  const userId = props.location.state.userId;
  const [userDetail, setUserDetail] = useState([]);
  const [thumbnail, setThumbnail] = useState(DefaultIcon);
  const history = useHistory();
  const [errorMessages, setErrorMessages] = useState([])
  const [formData, setFormData] = useState([])

  useEffect(() => {
    let unmounted = false;
    if(!unmounted) {
      getUserDetail(userId);
      unmounted = true
    }
  },[userId])

  const onChangeEvent = (e) => {
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: e.target.value
    });
  }

  // 友だちのデータ取得
  const getUserDetail = (userId) => {
    let url = 'http://localhost:80';

    axios.get(url + '/api/mypage/' + userId)
    .then((res) => {
      const { id, icon, user_name, game, introduction } = res.data.results;
      setUserDetail(res.data.results);
      setThumbnail(res.data.results.icon === null ? DefaultIcon : res.data.results.icon);
      setFormData({
        'id' : id,
        'icon' : icon ? icon : '',
        'user_name' : user_name,
        'game' : game ? game : '',
        'introduction' : introduction ? introduction : '',
      });
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const changeIcon = () => {
    let icon = document.getElementById('icon');
    icon.click();
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
    }
  }

  const sendUserDetail = () => {
    let url = 'http://localhost:80';
    let formDatas = new FormData();

    const errors = validate(formData);

    if(errors) {
      setErrorMessages(errors);
      return false;
    }

    formDatas.append("id", formData.id)
    formDatas.append("user_name", formData.user_name)
    formDatas.append("icon", formData.icon)
    formDatas.append("game", formData.game)
    formDatas.append("introduction", formData.introduction)

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    }

    if(!errors) {
      axios.post(url + '/api/mypage/edit', formDatas, config)
      .then((res) => {
        setUserDetail(res.data.results);
        history.push('/mypage/' + userId);
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
        setErrorMessages(messages);
      })
    }
  }

  return (
    <>
      <MyPageEditSection className="h-screen bg-sub">
        <div className="bg-main flex justify-between items-center fixed top-0 z-50 px-4 h-12 w-full">
          <Link className="inline-block" to={'/mypage/' + userDetail.id }>
            <img src={ Left } width="28" height="28" alt="" />
          </Link>
        </div>

        <div className="mt-12 mb-20">
          {
          errorMessages.map((item, index) => {
            return (
              <p key={ index }>{ item }</p>
            )
          })
          }
          <div className="px-4 flex justify-center items-center">
            <div>
              <img className="rounded-full my-3 mx-auto" src={ thumbnail } onClick={ changeIcon } width="150" height="150" alt="" />
              <input style={{display: 'none'}} name="icon" id="icon" type="file" onChange={setImage} />
              <input className="bg-indigo-600 bg-opacity-0 text-center text-xl p-1 border-b border-main" type="text" name="user_name" placeholder="ユーザー名" defaultValue={ userDetail.user_name } onChange={ onChangeEvent } />
            </div>
          </div>

          <section className="">
            <div className="psot-item w-80 bg-white p-4 my-5 mx-auto">
              <p className="post-list-item truncate">ゲーム:</p>
              <TextArea className="p-1 w-full" rows="2" name="game" placeholder="ゲームの種類" defaultValue={ userDetail.game } onChange={ onChangeEvent }></TextArea>
              <p>自己紹介:</p>
              <TextArea className="p-1 w-full" rows="7" name="introduction" placeholder="自己紹介文" defaultValue={ userDetail.introduction } onChange={ onChangeEvent }></TextArea>
              <div className="flex justify-center">
                <PrimaryButton styles={ "bg-sub text-sm p-2 m-2 w-4.5/10" } onClick={ sendUserDetail }>保存する</PrimaryButton>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </MyPageEditSection>
    </>
  )
}

const MyPageEditSection = styled.section`
  overflow-y: scroll;
`

const TextArea = styled.textarea`
  resize: none;
`

export default MyPageEdit

