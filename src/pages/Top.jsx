import styled from 'styled-components'
import { LoginButton } from '../components/index'

export const  Top = (props) => {
  return (
    <>
      <TopSection className="h-screen bg-main flex items-center justify-center">
        <div　className="container mx-auto">
          <Title className="text-6xl text-center mb-32">Game<br />Recruit</Title>
          <LoginButton>ログイン</LoginButton>
          <LoginButton>新規登録</LoginButton>
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

