import styled from "styled-components"

const LoginButton = (props) => {
  const { children } = props
  return (
    <Button className="primary-button w-36 py-2 text-center block mx-auto my-4">{ children }</Button>
  )
}

const Button = styled.button`
  background:#E8D1F0;
  color:#000;
`
export default LoginButton

