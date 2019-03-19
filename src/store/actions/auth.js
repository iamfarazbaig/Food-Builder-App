import * as actionTypes from './actionTypes'
import axios from 'axios'
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START // this action is used to set a loading state and spinner
    }
}

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData : authData
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
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
            dispatch(authSuccess(response.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(authFail())
        })
    }
}