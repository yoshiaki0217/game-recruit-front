import styled from 'styled-components'
import {
  InputText,
  InputButton
} from '../components/index'
import Ninja from '../images/ninja.svg'
import Key from '../images/key.svg'

const Login = (props) => {
  return (
    <>
      <LoginSection className="h-screen bg-main flex items-center justify-center">
        <Content className="w-4/5 py-10">
          <Tiltle className="text-center mb-5 text-3xl">ログイン</Tiltle>
          <from action="" className="login-wrap w-4/10 mx-auto p-10 tracking-widest"> 
              <div className="flex flex-row justify-center mb-2">
                <InputIcon className="h-10 w-10 flex flex-row justify-center">
                  <img src={ Ninja } width="32" height="32" alt="アイコン" />
                </InputIcon>
                <InputText placeholder={ 'ユーザーネーム' } />
              </div>
              <div className="flex flex-row justify-center mb-4">
                <InputIcon className="h-10 w-10 flex flex-row justify-center">
                  <img src={ Key } width="32" height="32" alt="アイコン" />
                </InputIcon>
                <InputText placeholder={ 'パスワード' } />
              </div>
            <InputButton>ログイン</InputButton>
          </from>
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