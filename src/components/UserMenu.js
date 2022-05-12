import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from "redux/auth"
import {Button,Avatar} from '@mui/material';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
   color: "#5C2610"
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div style={styles.container}>
      <Avatar sx={{m:1,backgroundColor:"#5C2610"}} ></Avatar>
      <span style={styles.name}>Welcome, {name}</span>
      <Button type="button" variant="outlined" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </Button>
    </div>
  );
}