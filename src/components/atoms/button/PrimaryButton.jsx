import styled from "styled-components"

const PrimaryButton = (props) => {
  const { children } = props
  return (
    <Button className="primary-button">{ children }</Button>
  )
}

const Button = styled.button`
  background:#fff;
  color:#666;
`
export default PrimaryButton

