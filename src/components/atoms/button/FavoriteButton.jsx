import { useState } from "react"
import styled from "styled-components"


const FavoriteButton = () => {
  const [changeIcon, setChangeIcon] = useState(false);

  const changeFavoriteButton = () => {
    const changeFavoriteIcon = !changeIcon
    setChangeIcon(changeFavoriteIcon);
  }

  return (
    <FavoriteIcon className={ changeIcon ? "active" : "" }>
      <p className="h-6 w-6 mt-4 cursor-pointer" onClick={changeFavoriteButton}></p>
    </FavoriteIcon>
  )
}

const FavoriteIcon = styled.div`
  width: 100px;
  height: 90px;
  background: url(https://nelog.jp/wp-content/uploads/2016/03/heart_animation.png) no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: 0 0;
  margin-left: auto;
  &.active{
    background-position: -2800px 0;
  -webkit-transition: background 1s steps(28);
  transition: background 1s steps(28);
  }
`

export default FavoriteButton