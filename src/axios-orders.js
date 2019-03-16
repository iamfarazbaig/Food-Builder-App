import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://assignment1-fb.firebaseio.com/'
})

export default instance