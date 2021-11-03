import styled from "styled-components";

const InputText = (props) => {
  const { changeInputText, placeholder, inputText } = props
  return (
    <Input className="primary-input w-3/5 border-gray-500 block h-10" type="text" value={ inputText } onChange={ changeInputText }  placeholder={ placeholder } />
  )
}

const Input = styled.input`
  outline: none;
`

export default InputText