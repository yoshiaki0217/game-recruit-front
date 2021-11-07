import styled from 'styled-components'
import Left from '../images/left-arrow.svg'
import Siege from '../images/siege_logo.jpg'
import { ChatTextArea } from '../components/index'

const Chat = (props) => {
  return (
    <>
      <ChatSection className="h-screen bg-sub">
        <div className="bg-main flex justify-between items-center fixed top-0 z-50 h-12 w-full px-4">
          <button>
            <img src={ Left } width="28" height="28" alt="" />
          </button>
          <button className="text-white text-xl">
            グループ名
          </button>
          <button className="text-white text-xl">
            詳細
          </button>
        </div>

        <ChatArea>
          <div className="mt-12 mb-16 px-4 py-1 bg-sub line__contents scroll">
            {/* チャット　相手 */}
            <div className="opponent flex items-start py-1">
              <img className="inline rounded-full m-1" src={ Siege } width="35" height="35" alt="" />
              <div className="opponent-text">
                <div className="name">名前</div>
                <p className="text text-sm break-words">test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test</p>
              </div>
            </div>

            {/* チャット　自分自身 */}
            <div className="myself flex flex-row items-center">
              <p className="text text-sm break-words">test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test</p>
              <span className="date">既読<br />0:30</span>
            </div>
          </div>
        </ChatArea>

        <div className="p-2 bg-main flex items-end justify-center h-auto fixed bottom-0 w-full z-50">
          <div className="w-full p-2 mx-1 rounded-lg bg-white flex items-center">
            <ChatTextArea className="" rows="1" />
          </div>
          <button className="w-20 h-12 rounded-lg bg-sub p-2 text-main text-xl">送信</button>
        </div>
      </ChatSection>
    </>
  )
}

const ChatSection = styled.section`

`

const ChatArea = styled.div`
  overflow: hidden;
  font-size: 80%;

/* 会話部分 */
.line__contents {
  // padding: 10px 10px 70px 10px;
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
    margin-bottom: 5px;
    max-width: 83%;
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
    max-width: 80%;
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
  margin-left: 50px;
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
  left: -60px;
  bottom: 0px;
  font-size: 80%;
  color: #000;
}
`

export default Chat




