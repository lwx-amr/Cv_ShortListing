import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3002/api/v1/workspace',
    withCredentials: true,
});
axiosInstance.interceptors.response.use(
    res => {
        return res;
    },
    error => {
        return Promise.reject(error.response)
    }
);

export const getWorkSpaceList = (id) => {
    return axiosInstance.get('/user/'+id).then(user => {
        return user.data
    })
}

export const createWorkSpace = (name, emails, ownerID) => {
    return axiosInstance.post('/',{
        name,
        ownerID,
    }).then(data => {
        return true;
    })
    .catch(err => {
        return false;
    });
}

export const getWorkSpace = (id) => {
    return axiosInstance.get('/'+id).then(user => {
        return user.data
    })
}

export const changeWorkSpaceName = (name, id) => {
    return axiosInstance.post('/'+id,{name}).then(user => {
        return user.data
    })
}

export const deleteUser = (userID, wsID) => {
    return axiosInstance.post(`/users/${wsID}/${userID}`).then(user => {
        return user.data
    })
}