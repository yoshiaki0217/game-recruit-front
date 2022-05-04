import React, { useState } from 'react'
import styled from 'styled-components'
import {
  InputText,
  InputButton
} from '../components/index'
import Ninja from '../images/ninja.svg'
import Key from '../images/key.svg'
import axios from 'axios'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Left from '../images/left-arrow.svg';
import Joi from 'joi-browser';

const Login = (props) => {
  const [formData, setFormData] = useState({
    'user_name' : '',
    'password' : '',
  })
  const [errorMessages, setValidationMessages] = useState([])
  const history = useHistory()
  const dispatch = useDispatch();

  const schema = Joi.object({
    user_name: Joi.string()
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "＊ユーザー名を入力してください";
              break;
            default:
              break;
          }
        });
        return new Error(errors);
      }),
  
    password: Joi.string()
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "＊パスワードを入力してください";
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

  const handleSubmit = (e) => {
    let validationCheckFlag = false;

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
      axios.post('http://localhost:80/api/login', formData)
        .then(res => {
          let payloadData = {
            'userId' : res.data.results.id,
            'userName' : res.data.results.user_name,
          }
          dispatch({
            type: 'SIGN_IN',
            payload: payloadData,
          });
          localStorage.setItem('userId', res.data.results.id);
          history.push('/home');
        }).catch((error) => {
          // エラーメッセージの配列を用意
          let messages = [];

          if(error.response.data.errors) {
            // ユーザー名またはパスワードが入力されていなかった際の処理
            // レスポンスをオブジェクトから配列に変換
            let arr = Object.entries(error.response.data.errors);
            // レスポンスの配列からメッセージだけを取り出し、エラーメッセージの配列にセット
            arr.forEach(function (value) {
              messages.push(value[1][0]);
            })
          } else {
            // ユーザー情報が見つからなかった際の処理
            messages.push(error.response.data.message);
          }
          // 表示用の配列にセット
          setValidationMessages(messages);
        })
    }
  }

  return (
    <>
      <LoginSection className="h-screen bg-main flex items-center justify-center">
        <div className="bg-main flex justify-between items-center fixed top-0 z-50 h-12 w-full px-4">
          <Link className="inline-block" to="/">
            <img src={ Left } width="28" height="28" alt="" />
          </Link>
        </div>
        <Content className="w-80 py-10">
          <Tiltle className="text-center mb-5 text-3xl">ログイン</Tiltle>
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
                <img src={Ninja} alt="アイコン" />
              </p>
              <InputText name={ 'user_name' } styled={ 'w-9/12 p-1' } type={ 'text' } onChange={ onChangeEvent } placeholder={ 'ユーザー名' } />
              </div>
            <div className="flex justify-center mb-4">
              <p className="bg-main w-10 h-10 p-1" >
                <img src={Key} alt="アイコン" />
              </p>
              <InputText name={ 'password' } styled={ 'w-9/12 p-1' } type={ 'password' } onChange={ onChangeEvent } placeholder={ 'パスワード' } />
              </div>
            <InputButton>ログイン</InputButton>
          </form>
        </Content>
      </LoginSection>
    </>
  )
}

const LoginSection = styled.section`
  .primary-input{
    text-align:left;
  }
`
const Content = styled.div`
  background: #E8D1F0;
`

// const InputIcon = styled.div`
//   background: #4E0866;
// `

const Tiltle = styled.h2`
  color: #000;
`

export default Login