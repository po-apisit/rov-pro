import axios from "axios";

export const HttpClientCookie = axios.create({
    baseURL: "http://localhost:4000/",
    withCredentials: true,
})

export const HttpClientUpload = axios.create({
    baseURL: "http://localhost:4000/",
    headers:{
        "Content-Type":"multipart/form-data",
    }
})