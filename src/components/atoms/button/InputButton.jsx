import styled from "styled-components"

const InputButton = (props) => {
  const { children } = props
  return (
    <Button type="submit" className="primary-button w-1/2 py-2 text-center block mx-auto">{ children }</Button>
  )
}

const Button = styled.button`
  background:#4E0866;
  color:#fff;
`
export default InputButton


