import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios'
import {
  InputText,
  InputButton
} from '../components/index'
import Ninja from '../images/ninja.svg'
import Key from '../images/key.svg'

const Register = (props) => {
  const [userName, setUserName] = useState("")
  const [userPassword, setuserPassword] = useState("")
  const history = useHistory()

  // ユーザー名
  const onChangeUserNmae = (e) => {
    setUserName(e.target.value);
  }

  // パスワード
  const onChangeUserPassword = (e) => {
    setuserPassword(e.target.value);
  }

  // 送信処理
  const handleSubmit = (e) => {
    // from入力の動作を制御
    e.preventDefault();

    const userData = {
      name: userName,
      password:userPassword,
    };

    axios.post('http://localhost:80/api/register', userData)
      .then(res => {
        history.push('/');
      }).catch((error) => {
        console.log(error);
      })
    
    }

  return (
    <>
      <RegisterSection className="h-screen bg-main flex items-center justify-center">
          <Content className="w-4/5 py-10">
          <Tiltle className="text-center mb-5 text-3xl">新規登録</Tiltle>
            <form onSubmit={ handleSubmit } action="" className="login-wrap w-full mx-auto p-10 tracking-widest"> 
                <div className="flex justify-center mb-2">
                  <p className="bg-main w-10 h-10 p-1" >
                    <img src={ Ninja }  alt="アイコン" />
                  </p>
                  <InputText placeholder={ 'ユーザーネーム' } onChange={ onChangeUserNmae } inputValue={ userName } />
                </div>
                <div className="flex justify-center mb-4">
                  <p className="bg-main w-10 h-10 p-1" >
                    <img src={ Key }  alt="アイコン" />
                  </p>
                  <InputText placeholder={ 'パスワード' } onChange={ onChangeUserPassword } inputValue={ userPassword } />
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
