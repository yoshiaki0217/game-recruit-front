import React from 'react';
import styled from "styled-components"

const PrimaryButton = (props) => {
  const { children,styles,onClick,type,name } = props
  return (
    <Button name={ name } type={type} className={styles} onClick={ onClick }>{ children }</Button>
  )
}

const Button = styled.button`
  display: block;
  text-align: center;
`
export default PrimaryButton

