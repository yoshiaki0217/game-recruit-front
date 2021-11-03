import { useState } from 'react'
import styled from 'styled-components'
import { PrimaryInput, PrimaryButton } from '../components/index'

export const Register = (props) => {
  const [nameText, setNameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [nameCheckText, setNameCheckText] = useState(false)
  const [passwordCheckText, setPasswordCheckText] = useState(false)
  
  const changeNameText = (e) => {
    setNameText(e.target.value);
    const inputNameText = nameText.trim();
    const nameTextLength = inputNameText.length;
    console.log(nameTextLength);
    if (nameTextLength < 5) {
      setNameCheckText(true)
    } else {
      setNameCheckText(false)
    }
  }
  const changePasswordText = (e) => {
    setPasswordText(e.target.value);
    const passwordTextLength = passwordText.length;
    console.log(passwordTextLength);
    if (passwordTextLength < 5) {
      setPasswordCheckText(true)
    } else {
      setPasswordCheckText(false)
    }
  }

  return (
    <>
      <RegisterSection className="h-screen flex items-center justify-center">
        <form action="" className="login-wrap w-4/10 mx-auto p-10 tracking-widest">
          <Tiltle className="text-center mb-5 text-4xl font-light ">Welcom</Tiltle>
            <PrimaryInput placeholder={'UserNmae'} />
            <PrimaryInput placeholder={'Password'} />
          <PrimaryButton>新規登録</PrimaryButton>
        </form>
      </RegisterSection>
    </>
  )
}

const RegisterSection = styled.section`
  background: linear-gradient(to top, #09203f 0%, #537895 100%);
  .primary-input{
    text-align:center;
    margin-bottom: 20px;
  }
`
const Tiltle = styled.h2`
  color:#fff;
`