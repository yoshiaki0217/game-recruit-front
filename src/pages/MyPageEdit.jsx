import styled from 'styled-components'
import {
  PrimaryButton,
  Footer
} from '../components/index'
import Left from '../images/left-arrow.svg'
import Siege from '../images/siege_logo.jpg'

const MyPageEdit = (props) => {
  return (
    <>
      <MyPageEditSection className="h-screen bg-sub">
        <div className="bg-main flex justify-between items-center fixed top-0 z-50 px-4 h-12 w-full">
          <button>
            <img src={Left} width="28" height="28" alt="" />
          </button>
        </div>

        <div className="mt-12 mb-20">
          <div className="px-4 flex justify-center items-center">
            <div>
              <img className="rounded-full my-3 mx-auto" src={Siege} width="150" height="150" alt="" />
              <input className="bg-indigo-600 bg-opacity-0 text-center text-xl p-1 border-b border-main" type="text" placeholder="ユーザー名" defaultValue="ユーザー名" />
            </div>
          </div>

          <section className="">
            <div className="psot-item w-80 bg-white p-4 my-5 mx-auto">
              <p className="post-list-item truncate">ゲーム:</p>
              <TextArea className="p-1 w-full" name="" id="" rows="2" placeholder="ゲームの種類"></TextArea>
              <p>自己紹介:</p>
              <TextArea className="p-1 w-full" name="" id="" rows="7" placeholder="自己紹介文"></TextArea>
              <div className="flex justify-center">
                <PrimaryButton styles={"bg-sub text-sm p-2 m-2 w-4.5/10"}>保存する</PrimaryButton>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </MyPageEditSection>
    </>
  )
}

const MyPageEditSection = styled.section`
  overflow-y: scroll;
`

const TextArea = styled.textarea`
  resize: none;
`

export default MyPageEdit

