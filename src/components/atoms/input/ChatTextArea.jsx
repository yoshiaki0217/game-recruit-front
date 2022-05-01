import React from 'react';
import styled from 'styled-components'

const ChatTextArea = (props) => {
  const { onChange,rows,onClick } = props

  return (
    <div className="p-2 bg-main flex items-end justify-center h-auto fixed bottom-0 w-full z-50">
      <div className="chat-text-area w-full p-2 mx-1 rounded-lg bg-white flex items-center">
        <TextArea
          className="w-full p-1 bg-white text-base"
          rows={ rows }
          onChange={ onChange }
        />
      </div>
      <button className="w-20 h-12 rounded-lg bg-sub p-2 text-main text-xl" onClick={ onClick }>送信</button>
    </div>
  );
}

const TextArea = styled.textarea`
  resize: none;
`

export default ChatTextArea