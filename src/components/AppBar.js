import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import Navigation from './Navigation';

const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #2A363B',
    },
  };
  
  export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
      <header style={styles.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    );
  }