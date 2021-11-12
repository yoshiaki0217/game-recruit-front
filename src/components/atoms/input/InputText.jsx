import styled from "styled-components";

const InputText = (props) => {
  const { styled,placeholder,inputValue,onChange,name } = props
  return (
    <Input name={name} className={styled} type="text" defaultValue={ inputValue }  placeholder={ placeholder } onChange={ onChange } />
    // <Input className="primary-input w-3/5 border-gray-500 block h-10 p-1" type="text" value={ inputText } onChange={ changeInputText }  placeholder={ placeholder } />
  )
}

const Input = styled.input`
  outline: none;
`

export default InputText