import styled from "styled-components"

const PrimaryButton = (props) => {
  const { children,styles } = props
  return (
    <Button className={styles}>{ children }</Button>
  )
}

const Button = styled.button`
  display: block;
  text-align: center;
`
export default PrimaryButton

