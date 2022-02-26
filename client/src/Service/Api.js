import axios from 'axios';

const url = 'http://localhost:5001/users';

export const getUsers = async(id) => {
    try{
        id = id || '';
        return await axios.get(`${url}/${id}`);
    } catch(error){
        console.log(error.message);
    }
}

export const addUser = async(user) =>{
    try{
        return axios.post(`${url}/add`, user);
    } catch(error){
        console.log(error.message);
    }
}

export const updateUser = async(id, user) =>{
    try{
        return axios.put(`${url}/${id}`, user);
    } catch(error){
        console.log(error.message);
    }
}

export const deleteUser = async(id) => {
    try{
        return axios.delete(`${url}/${id}`);
    } catch(error){
        console.log(error.message);
    }
}