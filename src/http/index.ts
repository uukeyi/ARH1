import axios from "axios";

const $host = axios.create({
    baseURL : 'here should be server',
    // headers : "here should be auth token"
}) 
//  TODO : also need to write interceptors for auth check every time in axios