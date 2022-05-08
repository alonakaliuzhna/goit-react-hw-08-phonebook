import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import Navigation from './Navigation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


  export default function AppBarComp() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
       <AppBar position="fixed">
           <Toolbar sx={{display:"flex",justifyContent: 'space-between',backgroundColor:" #ffb3b3",alignItems: 'center'}} >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    );
  }