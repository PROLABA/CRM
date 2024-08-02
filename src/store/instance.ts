import axios from 'axios'

export const AuthToken = (newToken: string | 'del' = '') => {
    if (newToken) window.localStorage.setItem('auth_token', newToken)
    if (newToken === 'del') {
        window.localStorage.removeItem('auth_token')
    } else if (newToken) {
        window.localStorage.setItem('auth_token', newToken)
    }
    return window.localStorage.getItem('auth_token') ?? ''
}
export const AuthUserID = (newUserID: string | 'del' = '') => {
    if (newUserID) window.localStorage.setItem('auth_id', newUserID)
    if (newUserID === 'del') {
        window.localStorage.removeItem('auth_id')
    } else if (newUserID) {
        window.localStorage.setItem('auth_id', newUserID)
    }
    return window.localStorage.getItem('auth_id') ?? ''
}
export default (tkn = AuthToken()) =>
    axios.create({
        baseURL: import.meta.env.VITE_API_HOST + import.meta.env.VITE_API_URL,
        headers: {
            "Authorization": import.meta.env.VITE_API_ACCESS_TOKEN + '::' + tkn,
            "Content-Type": "application/json"
        }
    })