export const ACTION_TYPES = {
    LOGIN_USER      : "LOGIN_USER",
    LOGOUT_USER     : "LOGOUT_USER",
}

export const loginUser = (data) => {
    // SET YOUR LOGIN INFO HERE
    localStorage.setItem('isLoggedIn', true)
    return {
        type : ACTION_TYPES.LOGIN_USER,
        ...data
    }
}

export const logOutUser = () => {
    localStorage.clear();
    return {
        type : ACTION_TYPES.LOGOUT_USER,
    }
}