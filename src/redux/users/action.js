export const SIGN_IN = "SIGN_IN";

export const signInAction = (userState) => {
  // ただのデータを返すようにする
  // 引数に渡されたuserStateの中にあるuserIdとuserName
  return {
    type: 'SIGN_IN',
    payload: {
      userId: userState.id,
      userName: userState.user_name,
    }
  }
}

export const SIGN_OUT = "SIGN_OUT";

export const isSignOutAction = () => {
  return {
    type: 'SIGN_OUT',
    payload: {
      userId: "",
      userName:"",
    }
  }
}