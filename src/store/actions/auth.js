import * as actionTypes from './actionTypes'
import axios from 'axios'
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START // this action is used to set a loading state and spinner
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,// userId and token passed on which are extracted in the reducer
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        },expirationTime * 1000)
    }
}

export const auth = (email, password, isSignup) => { //function which get dispatch as arugment by redux-thunk
    return dispatch => {
        dispatch(authStart())
        const authData ={ //as per firebase docs
            email :email,
            password: password,
            returnSecureToken : true
        }
        let url ='https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyD0zVZActbTiOS_xBmj5J5lpdXqi9ca0SA'
        if( !isSignup ) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD0zVZActbTiOS_xBmj5J5lpdXqi9ca0SA'
        }
        axios.post(url, authData)
        .then(response => {
            console.log(response)
            dispatch(authSuccess(response.data.idToken, response.data.localId))
            dispatch(checkAuthTimeout(response.data.expiresIn))
        })
        .catch(err => {
            dispatch(authFail(err.response.data.error)) // response is from axios
        })
    }
}