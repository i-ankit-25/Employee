import { AppBar, Toolbar} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    header: {
        background: '#5D8BF4'
    },
    tabs: {
        color: '#FFFFFF',
        textDecoration: 'none',
        marginRight: 20
    }
})

const Header = () => {

    const classes = useStyle();
    
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <NavLink component="h2" to="./" className={classes.tabs}>
                    Employee Details
                </NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default Header;