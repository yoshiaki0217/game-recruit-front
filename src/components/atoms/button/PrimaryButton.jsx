import styled from "styled-components"

const PrimaryButton = (props) => {
  const { children,styles,onClick } = props
  return (
    <Button className={styles} onClick={ onClick }>{ children }</Button>
  )
}

const Button = styled.button`
  display: block;
  text-align: center;
`
export default PrimaryButton

