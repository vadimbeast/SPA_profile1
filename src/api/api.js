import axios from "axios";
import { follow, unfollow } from "../redux/usersReducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "259346ec-5265-4d97-9476-5ed8ee02260c"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, 
            {
                withCredentials: true
            })
            .then(repsonse => {
                return repsonse.data;
            });
    },
    postUser(id) {
        return instance.post(`follow/${id}`, {},
        {
            withCredentials: true
        })
        .then(response => {
            if (response.data.resultCode === 0) {
                follow(id);
            }
        })
    },
    deleteUser(id) {
        return instance.delete(`follow/${id}`,
        {
            withCredentials: true
        })
        .then(response => {
            if (response.data.resultCode === 1) {
                unfollow(id);
            }
        })
    }
}