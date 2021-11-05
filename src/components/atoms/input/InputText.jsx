import styled from "styled-components";

const InputText = (props) => {
  const { styled,placeholder,inputValue,onChange } = props
  return (
    <Input className={styled} type="text"  value={ inputValue }  placeholder={ placeholder } onChange={ onChange } />
  )
}

const Input = styled.input`
  outline: none;
`

export default InputText