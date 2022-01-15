import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const theme =  useTheme();
  const useStyle = makeStyles({
    navItem : {
      color : '#fff',
      textDecoration : 'none'
    },
    brandIcon : {
      textAlign : 'center'
    },
    navContainer : {
     
    }
  })  
  //Destructure Styles
  const {navItem,brandIcon,navIcon,navContainer} = useStyle();
  //Drawer content
  const [state, setState] = React.useState(false);

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      
    >
      <List>
          <ListItem button>
            <ListItemText><Link to='/home'>Home</Link></ListItemText>
          </ListItem>
      </List>
      <Divider />
    </Box>
  );
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          className={navIcon}
          aria-label="menu"
          onClick={()=>setState(true)}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={brandIcon} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dash Door
        </Typography>
        <Box className={navContainer}>
          <Link className={navItem}  to='/home'><Button color='inherit' variant="text">Home</Button></Link>
          <Link className={navItem} to='/products'><Button color='inherit' variant="text">Products</Button></Link>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>

  <div>
    <React.Fragment >
      <Drawer

        open={state}
        onClose={()=>setState(false)}
      >
        {list}
      </Drawer>
    </React.Fragment>
</div>
    </>
  );
};

export default Navbar;