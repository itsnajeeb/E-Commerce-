import { API_BASE_URL } from "../../config/apiConfig"
import axios from 'axios'
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGOUT } from './ActionType.js'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './ActionType.js'
import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } from './ActionType.js'
const registerRequest = () => ({ type: REGISTER_REQUEST })
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user })
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error })


export const register = userdData => async (dispatch) => {
    dispatch(registerRequest())
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userdData)
        const user = response.data;

        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt)
        }
        // console.log("USERS ", user);
        dispatch(registerSuccess(user.jwt))
    } catch (error) {
        dispatch(registerFailure(error.message))
    }
}



const loginRequest = () => ({ type: LOGIN_REQUEST })
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user })
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error })


export const login = userdData => async (dispatch) => {
    dispatch(loginRequest())
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/sigin`, userdData)
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt)
        }
        // console.log("USERS ", user);
        dispatch(loginSuccess(user.jwt))
    } catch (error) {
        dispatch(loginFailure(error.message))
    }
}


const getUserRequest = () => ({ type: GET_USER_REQUEST })
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user })
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error })

export const getUser = (jwt) => async (dispatch) => {
    dispatch(getUserRequest())
    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        const user = response.data
        // console.log("USERS ", user);

        dispatch(getUserSuccess(user))

    } catch (error) {
        dispatch(getUserFailure(error.message))
    }
}

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT, payload: null })
    localStorage.clear();
}