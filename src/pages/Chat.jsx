import styled from 'styled-components'
import Search from '../images/search.svg'
import Left from '../images/left-arrow.svg'
import Siege from '../images/siege_logo.jpg'
import ChatTextArea from '../components/atoms/input/ChatTextArea'

export const Chat = (props) => {
  // let rows = 1
  // const rowsUpdate = (e) => {
  //   console.log('log')
  //   console.log(e.target.value)
  //   console.log(rows)
  //   rows++
  //   e.target.setAttribute('rows', rows)
  //   return true
  // }
  return (
    <>
      <ChatSection className="h-screen">
        <div className="px-4 flex justify-between items-center bg-main h-12 border-b-2 border-sub">
          <button>
            <img src={Left} width="28" height="28" alt="" />
          </button>
          <button className="text-white text-xl">
            グループ名
          </button>
          <button className="text-white text-xl">
            詳細
          </button>
        </div>

        <ChatArea>
          <div className="px-4 bg-sub h-16 border-b-2 border-sub line__contents scroll">
            {/* チャット　相手 */}
            <div className="opponent flex items-start py-1">
              <img className="inline rounded-full m-1" src={Siege} width="35" height="35" alt="" />
              <div className="opponent-text">
                <div className="name">名前</div>
                <div className="text text-sm">テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト</div>
              </div>
            </div>

            {/* チャット　自分自身 */}
            <div className="myself flex flex-row items-center myself">
              <div className="text text-sm">テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト</div>
              <span className="date">既読<br />0:30</span>
            </div>
          </div>
        </ChatArea>

        <div className="p-2 bg-main flex items-end justify-center h-auto fixed bottom-0 w-full z-50">
          <div className="w-full p-2 mx-1 rounded-lg bg-white flex items-center">
            <ChatTextArea className="" rows="1" />
          </div>
          <button className="w-20 h-12 rounded-lg bg-sub p-2 text-white text-xl">送信</button>
        </div>
      </ChatSection>
    </>
  )
}

const ChatSection = styled.section`
  background: #E8D1F0;

  .search-box {
    position: relative;
  }

  .search-box::before {
    content: "";
    width: 16px;
    height: 16px;
    background: url(${Search}) no-repeat center center / auto 100%;
    display: inline-block;
    position: absolute;
    top: 35%;
    transform: translateY(-50%);
    transform: translateX(-600%);
  }
`

const ChatArea = styled.div`
  // overflow: hidden;
  font-size: 80%;

/* 会話部分 */
.line__contents {
  padding: 10px;
  overflow: hidden;
  line-height: 135%;
}

.scroll {
  height: auto;
  overflow-y: scroll;
}


/* 相手の会話 */
.opponent {
    width: 100%;
    position: relative;
    // display: block;
    margin-bottom: 5px;
    max-width: 80%;
    clear: both;
}

.opponent .opponent-text {
  margin-left: 10px;
}

.opponent .opponent-text .name {
  color: #000;
  font-size: 80%;
}

/* コメントエリア */
.opponent .text {
  margin: 0;
  position: relative;
  padding: 10px;
  border-radius: 20px;
  background-color: #ffffff;
}

/* 吹き出し */
.opponent .text::after {
  content: '';
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  left: -10px;
  top: 5px;
  border-right: 20px solid #ffffff;
  // border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

/* 自分の会話 */
.myself {
    position: relative;
    display: block;
    margin: 5px 0;
    max-width: 75%;
    float: right;
    margin-right: 15px;
    clear: both;
}

/* コメントエリア */
.myself .text {
  padding: 10px;
  border-radius: 20px;
  background-color: #8de055;
  margin: 0;
  margin-left: 80px;
}

/* 吹き出し */
.myself .text::after {
  content: '';
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  right: -10px;
  top: 10px;
  border-left: 20px solid #8de055;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

/* 既読エリア */
.myself .date {
  content: '';
  position: absolute;
  display: block;
  width: 100px;
  text-align: right;
  left: -30px;
  bottom: 0px;
  font-size: 80%;
  color: #000;
}

`



