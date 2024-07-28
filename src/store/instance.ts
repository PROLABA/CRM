import axios from 'axios'

export const AuthToken = () => window.localStorage.getItem('auth_token')
export default (tkn = AuthToken()) =>
    axios.create({
        baseURL: import.meta.env.VITE_API_HOST + import.meta.env.VITE_API_URL,
        headers: {
            "xxx-access-token": import.meta.env.VITE_API_ACCESS_TOKEN,
            "xxx-auth-token": tkn,
            Accept: "*/*",
            "Content-Type": "application/json"
        }
    })