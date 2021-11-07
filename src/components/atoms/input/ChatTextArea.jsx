import styled from 'styled-components'

const ChatTextArea = (props) => {
  const MAX_ROWS = 10
  let rows = props.rows
  let beforeRows = ''
  const rowsUpdate = (e) => {
    let value = e.target.value
    let line = value.split("\n").length

    if(rows === MAX_ROWS) {
      if(beforeRows > line) {
        rows = line
        e.target.setAttribute('rows', rows)
        beforeRows = line
      }
      beforeRows = line
    } else {
      rows = line
      e.target.setAttribute('rows', rows)
      beforeRows = line
    }
    return true
  }
  return (
    <TextArea
      className="w-full p-1 bg-white text-base"
      rows={rows}
      onChange={rowsUpdate}
    />
  );
}

const TextArea = styled.textarea`
  resize: none;
`

export default ChatTextArea