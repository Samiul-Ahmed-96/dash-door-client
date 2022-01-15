
import { Settings } from "@mui/icons-material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {
  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      color: "#fff",
      textDecoration: "none",
    },
    brandIcon: {
      textAlign: "center",
    },
    appbarMain: {
      backgroundColor: "#222",
    },
    userImg : {
      width : '35px',
      borderRadius : '50%',
      marginLeft : '2.5px'
    }
  });
  //Destructure Styles
  const { navItem, brandIcon, navIcon, appbarMain ,userImg  } = useStyle();
  //Drawer content
  const [state, setState] = React.useState(false);

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button>
          <ListItemText>
            <Link to="/home">Home</Link>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className={appbarMain}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              className={navIcon}
              aria-label="menu"
              onClick={() => setState(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={brandIcon}
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Dash Door
            </Typography>
            <Box className='navContainer'>
            <Settings/>
            <AccountCircle/>
            <img className={userImg} src='https://i.ibb.co/n8GJgH1/52779957-2069016613219812-3461297316164534272ff-nggg.jpg' alt="" />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Navbar;
