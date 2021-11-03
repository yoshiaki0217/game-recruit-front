import styled from 'styled-components'
import { PrimaryInput, PrimaryButton } from '../components/index'

export const Logout = (props) => {
  return (
    <>
      <LogoutSection className="font-serif h-screen flex items-center justify-center">
        <form action="" className="login-wrap w-4/10 mx-auto p-10 tracking-widest">
          <Tiltle className="text-center mb-5 text-4xl font-light ">Welcom</Tiltle>
            <PrimaryInput placeholder={'UserNmae'} />
            <PrimaryInput placeholder={'Password'} />
          <PrimaryButton>ログアウト</PrimaryButton>
        </form>
      </LogoutSection>
    </>
  )
}

const LogoutSection = styled.section`
  background: linear-gradient(to top, #09203f 0%, #537895 100%);
  .primary-input{
    text-align:center;
    margin-bottom: 20px;
  }
`
const Tiltle = styled.h2`
  color:#fff;
`
