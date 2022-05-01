import React from 'react';
import styled from "styled-components";

const InputText = (props) => {
  const { styled,placeholder,inputValue,onChange,name,type } = props
  return (
    <Input name={name} className={styled} type={type} defaultValue={ inputValue } placeholder={ placeholder } onChange={ onChange } />
  )
}

const Input = styled.input`
  outline: none;
`

export default InputText