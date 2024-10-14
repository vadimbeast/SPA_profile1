import axios from "axios";
import { follow, unfollow } from "../redux/usersReducer";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "259346ec-5265-4d97-9476-5ed8ee02260c"
    },
    withCredentials: true
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(repsonse => {
                return repsonse.data;
            });
    },
    postUser(id) {
        return instance.post(`follow/${id}`, {})
        .then(response => {
            if (response.data.resultCode === 0) {
                follow(id);
            }
        })
    },
    deleteUser(id) {
        return instance.delete(`follow/${id}`)
        .then(response => {
            if (response.data.resultCode === 1) {
                unfollow(id);
            }
        })
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please, use profileAPI object');
        return instance.get(`/profile/` + userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId)
    },

    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },

    updateStatus(status) {
        return instance.put('profile/status', { status: status })
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    }, 
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}