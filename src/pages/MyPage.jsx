import styled from 'styled-components'
import Left from '../images/left-arrow.svg'
import Siege from '../images/siege_logo.jpg'
import Footer from '../components/Footer'
import { PrimaryButton } from '../components/index'

export const MyPage = (props) => {
  return (
    <>
      <MyPageSection className="h-screen bg-sub">
        <div className="bg-main flex justify-between items-center fixed top-0 z-50 px-4 h-12 w-full">
          <button>
            <img src={Left} width="28" height="28" alt="" />
          </button>
        </div>

        <div className="mt-12 mb-20">
          <div className="px-4 flex justify-center items-center">
            <div>
              <img className="rounded-full m-3" src={Siege} width="150" height="150" alt="" />
              <h2 className="text-center text-xl">ユーザー名</h2>
            </div>
          </div>

          <UserDetailItem className="psot-item w-80 bg-white p-4 my-5 mx-auto">
            <p className="post-list-item truncate">ゲーム:</p>
            <p className="post-list-item mx-3">シージ</p>
            <p>自己紹介:</p>
            <div className="h-auto mx-3">
              <p className="break-words">テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト</p>
            </div>
            <div className="flex justify-center break-words">
              <PrimaryButton styles={"bg-sub text-sm p-2 m-2 w-4.5/10"}>編集する</PrimaryButton>
            </div>
          </UserDetailItem>
        </div>

        <Footer />
      </MyPageSection>
    </>
  )
}

const MyPageSection = styled.section`
  overflow-y: scroll;
`

const UserDetailItem = styled.div`
  position: relative;
  .profile-logo img{
    width: 65px;
    height: 65px;
  }

  .primary-button{
    color:#fff;
  }
`



