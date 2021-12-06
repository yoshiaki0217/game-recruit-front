import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LoginButton } from '../components/index'

const Top = (props) => {
  
  return (
    <>
      <TopSection className="h-screen bg-main flex items-center justify-center">
        <div className="container mx-auto">
          <Title className="text-6xl text-center mb-32">Game<br />Recruit</Title>
          <Link to="/login">
            <LoginButton>ログイン</LoginButton>
          </Link>
          <Link to="/register">
            <LoginButton>新規登録</LoginButton>
          </Link>
        </div>
      </TopSection>
    </>
  )
}

const TopSection = styled.section`
`

const Title = styled.h1`
  color: #fff;
`

export default Top

