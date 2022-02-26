import { FormGroup, FormControl, Input, InputLabel, Typography, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useState } from "react";
import { addUser } from "../Service/Api";
import { useNavigate } from 'react-router-dom';

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

const AddUser = () => {
    const [user, setUser] = useState(initialValues);
    const [error, setError] = useState({
        name: false,
        email: false
    })

    const history = useNavigate();
    
    const classes = useStyle();
    
    const handleChange = (e) => {
        if(e.target.name === "name"){
            if(!(/^[A-Za-z\s]*$/.test(e.target.value))){
                setError({...error, name: true});
            } else {
                setError({...error, name: false});
            }
        } else if (e.target.name === "email"){
            if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value))){ 
                setError({...error, email: true});
            } else {
            setError({...error, email: false});
            }
        }
        if(!error.name && !error.email){
            setUser({...user, [e.target.name]: e.target.value});
        }
    }

    const addUserDetails = async() => {
        if(!error.name && !error.email && user.name && user.email){
            await addUser(user);
            history('/');
        }
    }

    return (
        <FormGroup className={classes.container}> 
            <Typography variant="h4">Add User</Typography>
            <br/>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input error={error.name} helpertext="Only alphabets and space allowed" onChange={(e)=>handleChange(e)} name="name"/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>Age</InputLabel>
                <Input onChange={(e)=>handleChange(e)} name="age"/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input error={error.email} helpertext="Enter valid email address" onChange={(e)=>handleChange(e)} name="email"/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>Date Of Birth</InputLabel>
                <Input onChange={(e)=>handleChange(e)} name="dateOfBirth"/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>Address</InputLabel>
                <Input onChange={(e)=>handleChange(e)} name="address"/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>Photo</InputLabel>
                <Input onChange={(e)=>handleChange(e)} name="photo"/>
            </FormControl>
            <br/>
            <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
        </FormGroup>
    )
}

export default AddUser;