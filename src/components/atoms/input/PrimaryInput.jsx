import React from 'react';
import styled from "styled-components";

const PrimaryInput = (props) => {
  const { changeInputText, placeholder, inputText } = props
  return (
    <Input className="primary-input mx-auto w-7/12 border-gray-500 block h-10" type="text" value={ inputText } onChange={ changeInputText }  placeholder={ placeholder } />
  )
}

const Input = styled.input`
  outline: none;
`

export default PrimaryInput