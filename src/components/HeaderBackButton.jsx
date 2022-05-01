import React from 'react';
import { useHistory } from 'react-router-dom';
import Left from '../images/left-arrow.svg'

const HeaderBackButton = (props) => {
  const history = useHistory();

  const onClickBrowserBack = () => {
    history.goBack()
  }
  
  return (
    <div className="bg-main flex justify-between items-center fixed top-0 z-50 px-4 h-12 w-full">
      <button onClick={ onClickBrowserBack }>
        <img src={ Left } width="28" height="28" alt="" />
      </button>
    </div>
  )
}

export default HeaderBackButton