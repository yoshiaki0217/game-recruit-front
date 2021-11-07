import styled from 'styled-components'
import {
  PrimaryButton,
  Footer
} from '../components/index'
import Left from '../images/left-arrow.svg'
import Siege from '../images/siege_logo.jpg'

const NotificationDetail = (props) => {
  return (
    <>
      <NotificationDetailSection className="h-screen bg-sub">
        <div className="bg-main flex justify-between items-center fixed top-0 z-50 px-4 h-12 w-full">
          <button>
            <img src={ Left } width="28" height="28" alt="" />
          </button>
        </div>

        <div className="mt-12 mb-20">
          <div className="px-4 flex justify-center items-center">
            <div>
              <img className="rounded-full m-3" src={ Siege } width="150" height="150" alt="" />
              <h2 className="text-center text-xl">ユーザー名</h2>
            </div>
          </div>

          <UserDetailItem className="psot-item w-80 bg-white p-4 my-5 mx-auto">
            <p className="post-list-item truncate">ゲーム:</p>
            <p className="post-list-item mx-3">シージ</p>
            <p>自己紹介:</p>
            <div className="h-auto mx-3">
              <p className="break-words">基本R6Sをやってます。夜8~9時ぐらいからやってます。基本R6Sをやってます。夜8~9時ぐらいからやってます。基本R6Sをやってます。夜8~9時ぐらいからやってます。基本R6Sをやってます。夜8~9時ぐらいからやってます。基本R6Sをやってます。夜8~9時ぐらいからやってます。基本R6Sをやってます。夜8~9時ぐらいからやってます。基本R6Sをやってます。夜8~9時ぐらいからやってます。基本R6Sをやってます。夜8~9時ぐらいからやってます。基本R6Sをやってます。夜8~9時ぐらいからやってます。基本R6Sをやってます。夜8~9時ぐらいからやってます。基本R6Sをやってます。夜8~9時ぐらいからやってます。基本R6Sをやってます。夜8~9時ぐらいからやってます。基本R6Sをやってます。夜8~9時ぐらいからやってます。基本R6Sをやってます。夜8~9時ぐらいからやってます。基本R6Sをやってます。夜8~9時ぐらいからやってます。基本R6Sをやってます。夜8~9時ぐらいからやってます。</p>
            </div>
            <div className="flex justify-center">
              <PrimaryButton styles={ "bg-sub text-sm p-2 m-2 w-4.5/10" }>許可する</PrimaryButton>
              <PrimaryButton styles={ "bg-sub text-sm p-2 m-2 w-4.5/10" }>拒否する</PrimaryButton>
            </div>
          </UserDetailItem>
        </div>

        <Footer />
      </NotificationDetailSection>
    </>
  )
}

const NotificationDetailSection = styled.section`
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

export default NotificationDetail


