import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios'
import {
  InputText,
  InputButton
} from '../components/index'
import Ninja from '../images/ninja.svg'
import Key from '../images/key.svg'
import { Link } from 'react-router-dom'
import Left from '../images/left-arrow.svg'
import Joi from 'joi-browser';

const schema = Joi.object({
  user_name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "any.empty":
            err.message = "＊ユーザー名は必須です";
            break;
          case "string.min":
            err.message = `＊ユーザー名は${err.context.limit}文字以上で設定してください`;
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

  password: Joi.string()
    .min(6)
    .required()
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "any.empty":
            err.message = "＊パスワードは必須です";
            break;
          case "string.min":
            err.message = `＊パスワードは${err.context.limit}文字以上で設定してください`;
            break;
          case "string.max":
            err.message = `＊パスワードは${err.context.limit}文字以内で設定してください`;
            break;
          default:
            break;
        }
      });
      return new Error(errors);
    }),

  confirm_password: Joi.string()
    .required()
    .valid(Joi.ref("password"))
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "any.empty":
            err.message = "＊確認用パスワードは必須です";
            break;
          case "any.allowOnly":
            err.message = `＊確認用パスワードが一致していません`;
            break;
          default:
            break;
        }
      });
      return new Error(errors);
    }),
})

const Register = (props) => {
  const [formData, setFormData] = useState({
    'user_name' : '',
    'password' : '',
    'confirm_password' : '',
  })
  const [errorMessages, setValidationMessages] = useState([])
  const history = useHistory()

  const onChangeEvent = (e) => {
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: e.target.value
    });
  }

  // 送信処理
  const handleSubmit = (e) => {
    let validationCheckFlag = false;
    let url = process.env.REACT_APP_BACKEND_PATH;
    // from入力の動作を制御
    e.preventDefault();

    // バリデーション実行
    const { error } = schema.validate(formData, {abortEarly: false});

    if(error) {
      let messages = error.message.split(',');
      setValidationMessages(messages);
      return false;
    } else {
      validationCheckFlag = true;
    }

    if(validationCheckFlag) {
      axios.post(url + '/api/register', formData)
      .then(res => {
        history.push('/login');
      }).catch((error) => {
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

  return (
    <>
      <RegisterSection className="h-screen bg-main flex items-center justify-center">
        <div className="bg-main flex justify-between items-center fixed top-0 z-50 h-12 w-full px-4">
          <Link className="inline-block" to="/">
            <img src={ Left } width="28" height="28" alt="" />
          </Link>
        </div>
        <Content className="w-80 py-10">
          <Tiltle className="text-center mb-5 text-3xl">新規登録</Tiltle>
          <ul className="mx-auto px-5 text-red-600">
            {
            errorMessages.map((item, index) => {
              return (
                  <li key={ index }>{ item }</li>
                  )
                })
            }
          </ul>
          <form onSubmit={ handleSubmit } className="login-wrap w-full mx-auto py-6 tracking-widest"> 
              <div className="flex justify-center mb-2">
                <p className="bg-main w-10 h-10 p-1" >
                  <img src={ Ninja }  alt="アイコン" />
                </p>
                <InputText name={ 'user_name' } styled={ 'w-9/12 p-1' } type={ 'text' } placeholder={ 'ユーザー名' } onChange={ onChangeEvent } />
              </div>
              <div className="flex justify-center mb-2">
                <p className="bg-main w-10 h-10 p-1" >
                  <img src={ Key }  alt="アイコン" />
                </p>
                <InputText name={ 'password' } styled={ 'w-9/12 p-1' } type={ 'password' } placeholder={ 'パスワード' } onChange={ onChangeEvent } />
              </div>
              <div className="flex justify-center mb-4">
                <p className="bg-main w-10 h-10 p-1" >
                  <img src={ Key }  alt="アイコン" />
                </p>
                <InputText name={ 'confirm_password' } styled={ 'w-9/12 p-1' } type={ 'password' } placeholder={ '確認用パスワード' } onChange={ onChangeEvent } />
              </div>
            <InputButton >登録</InputButton>
          </form>
        </Content>
      </RegisterSection>
    </>
  )
}

const RegisterSection = styled.section`
  .primary-input{
    text-align:left;
  }
`
const Content = styled.div`
  background: #E8D1F0;
`
const Tiltle = styled.h2`
  color: #000;
`

export default Register
