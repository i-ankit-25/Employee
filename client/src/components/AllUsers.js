import { Table, TableRow, TableCell, TableHead, TableBody, Button} from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../Service/Api";
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    table: {
        width: '100%',
        margin: '50px 0 0 0'
    },
    thead: {
        '& > *': {
            background: '#DFF6FF',
            color: '#FFFFFF'
        }
    },
    tabs: {
        color: '#FFFFFF',
        textDecoration: 'none',
        marginRight: 20,
        float: "right"
    }
})

const AllUsers = () => {

    const classes = useStyle();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
        console.log(response.data);
    }

    const deleteUserData = async(id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <div>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow className={classes.thead}>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Date of Birth</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Photo</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users.map(user => (
                                <TableRow>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.age}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.dateOfBirth}</TableCell>
                                    <TableCell>{user.address}</TableCell>
                                    <TableCell>{user.photo}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary" component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="error" onClick={() => deleteUserData(user._id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
                <br/>
                <NavLink className={classes.tabs} to="add">
                    <Button variant="contained">Add User</Button>
                </NavLink>
        </div>
    )
}

export default AllUsers;