import axios from "axios";
import { follow, unfollow } from "../redux/usersReducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3f57cd8a-5ddd-4707-8706-40d725dbe63a"
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
    }
}

export const followAPI = {
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
    }
}

export const unfollowAPI = {
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