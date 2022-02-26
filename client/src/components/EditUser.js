import { FormGroup, FormControl, Input, InputLabel, Typography, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from "react";
import { getUsers, updateUser } from "../Service/Api";
import { useNavigate, useParams } from 'react-router-dom';

const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const initialValues = {
    name: '',
    age: 0,
    email: '',
    dateOfBirth: '',
    address: '',
    photo: ''
}

const EditUser = () => {
    const [user, setUser] = useState(initialValues);
    const { name, age, email, dateOfBirth, address, photo} = user;
    const { id } = useParams();

    useEffect(() =>{
        loadUserData();
    }, []);

    const loadUserData = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const history = useNavigate();
    
    const classes = useStyle();
    
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const edituserDetails = async() => {
        await updateUser(id, user);
        history('/');
    }

    return (
        <FormGroup className={classes.container}> 
            <Typography variant="h4">Edit User</Typography>
            <br/>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>handleChange(e)} name="name" value={user.name}/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>Age</InputLabel>
                <Input onChange={(e)=>handleChange(e)} name="age"  value={user.age}/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>handleChange(e)} name="email"  value={user.email}/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>Date Of Birth</InputLabel>
                <Input onChange={(e)=>handleChange(e)} name="dateOfBirth" value={user.dateOfBirth}/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>Address</InputLabel>
                <Input onChange={(e)=>handleChange(e)} name="address" value={user.address}/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>Photo</InputLabel>
                <Input onChange={(e)=>handleChange(e)} name="photo" value={user.photo}/>
            </FormControl>
            <br/>
            <Button variant="contained" color="primary" onClick={() => edituserDetails()}>Update User</Button>
        </FormGroup>
    )
}

export default EditUser;