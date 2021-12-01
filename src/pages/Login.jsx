import { useState } from 'react'
import styled from 'styled-components'
import {
  InputText,
  InputButton
} from '../components/index'
import Ninja from '../images/ninja.svg'
import Key from '../images/key.svg'
import axios from 'axios'
import { useHistory } from 'react-router'

const Login = (props) => {
  const [userName, setUserName] = useState()
  const [userPassword, setUserPassword] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory()

  const onChangeUserNmae = (e) => {
    setUserName(e.target.value);
  }

  const onChangeUserPassword = (e) => {
    setUserPassword(e.target.value);
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const userData = {
      name: userName,
      password: userPassword,
    }
    console.log(userData);
    
    axios.post('http://localhost:80/api/login', userData)
      .then(res => {
          
      }).catch((error) => {
        setErrorMessage(true)
    })
  }

  return (
    <>
      <LoginSection className="h-screen bg-main flex items-center justify-center">
        <Content className="w-4/5 py-10">
          <Tiltle className="text-center mb-5 text-3xl">ログイン</Tiltle>
          <form onSubmit={ handleSubmit } action="/home" className="login-wrap w-full mx-auto p-10 tracking-widest">
            <div className="flex justify-center mb-2">
              <p className="bg-main w-10 h-10 p-1" >
                <img src={Ninja} alt="アイコン" />
              </p>
              <InputText onChange={ onChangeUserNmae } placeholder={ 'ユーザーネーム' } />
              </div>
            <div className="flex justify-center mb-4">
              <p className="bg-main w-10 h-10 p-1" >
                <img src={Key} alt="アイコン" />
              </p>
              <InputText onChange={ onChangeUserPassword } placeholder={ 'パスワード' } />
              </div>
            <InputButton>ログイン</InputButton>
            <p>{ errorMessage ? "ログイン情報が違います" : "" }</p>
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

const InputIcon = styled.div`
  background: #4E0866;
`

const Tiltle = styled.h2`
  color: #000;
`

export default Login