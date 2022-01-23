import {
  AddCircleOutlineOutlined,
  AutoGraphOutlined,
  DynamicFeedOutlined,
  ExitToAppOutlined,
  HomeOutlined,
  ListAltOutlined,
  MailOutlineOutlined,
  NotificationsNoneOutlined,
  PaidOutlined,
  ProductionQuantityLimitsOutlined,
  ReportOutlined,
  Settings,
  SupervisedUserCircleSharp
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Switch, useTheme } from "@mui/material";
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
import { HashLink } from "react-router-hash-link";
import "./Navbar.scss";

const Navbar = ({darkMode,setDarkMode}) => {
  const theme = useTheme();

  const useStyle = makeStyles({
    navItem: {
      color: "#fff",
      textDecoration: "none",
    },
    brandIcon: {
      textAlign: "left",
    },
    appbarMain: {
      background: " rgb(110,71,251)",
      background:
        "linear-gradient(186deg, rgba(110,71,251,1) 0%, rgba(6,0,47,1) 100%)",
    },
    userImg: {
      width: "35px",
      borderRadius: "50%",
      marginLeft: "2.5px",
    },
  });
  //Destructure Styles
  const { brandIcon, navIcon, appbarMain, userImg } = useStyle();
  //Drawer content
  const [state, setState] = React.useState(false);

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button>
          <Box>
            <h4>Dashboard</h4>
            <ListItemText>
              <HomeOutlined /> <Link to="/home"> Home</Link>
            </ListItemText>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button>
          <Box>
            <h4>Users</h4>
            <ListItemText>
              <SupervisedUserCircleSharp /> <Link to="/members">All Users</Link>
            </ListItemText>
            <ListItemText>
              <PaidOutlined />
              <HashLink to="/transaction">User Transaction</HashLink>
            </ListItemText>
            <ListItemText>
              <DynamicFeedOutlined />{" "}
              <Link to="/userFeedback">User Feedback</Link>
            </ListItemText>
            <ListItemText>
              <AutoGraphOutlined />{" "}
              <HashLink to="/home#userAnalytics">User Analytics</HashLink>
            </ListItemText>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button>
          <Box>
            <h4>Products</h4>
            <ListItemText>
              <ProductionQuantityLimitsOutlined />
              <Link to="/manageProducts">Manage Products</Link>
            </ListItemText>

            <ListItemText>
              <AddCircleOutlineOutlined />{" "}
              <Link to="/addNewProduct">Add A Product</Link>
            </ListItemText>
            <ListItemText>
              <ReportOutlined /> <Link to="/salesReport">Sales Report</Link>
            </ListItemText>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button>
          <Box>
            <h4>Orders</h4>
            <ListItemText>
              <ListAltOutlined /> <Link to="/OrderList">Order List</Link>
            </ListItemText>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
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
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Dash Door
            </Typography>
            <Box className="navContainer">
            <Switch checked={darkMode} onChange={()=>setDarkMode(!darkMode)} />
              <img
                className={userImg}
                src="https://i.ibb.co/n8GJgH1/52779957-2069016613219812-3461297316164534272ff-nggg.jpg"
                alt=""
              />
              <MailOutlineOutlined />
              <NotificationsNoneOutlined />
              <Settings />
              <ExitToAppOutlined />
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
