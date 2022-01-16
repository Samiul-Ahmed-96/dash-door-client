import {
  AutoGraphOutlined,
  DynamicFeedOutlined,
  ExitToAppOutlined,
  HomeOutlined,
  MailOutlineOutlined,
  ManageAccountsOutlined,
  MarkEmailUnreadOutlined,
  MessageOutlined,
  NotificationsNoneOutlined,
  PaidOutlined,
  ProductionQuantityLimitsOutlined,
  ReportOutlined,
  Settings,
  SupervisedUserCircleSharp,
  TrendingDownOutlined
} from "@mui/icons-material";
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
import "./Navbar.scss";

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
      backgroundColor: "#303e67",
    },
    userImg: {
      width: "35px",
      borderRadius: "50%",
      marginLeft: "2.5px",
    },
  });
  //Destructure Styles
  const { navItem, brandIcon, navIcon, appbarMain, userImg } = useStyle();
  //Drawer content
  const [state, setState] = React.useState(false);

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button>
          <Box>
            <h4>Dashboard</h4>
            <ListItemText>
            <HomeOutlined/> <Link to="/home"> Home</Link>
            </ListItemText>
            <ListItemText>
             <AutoGraphOutlined/> <Link to="/home">Analytics</Link>
            </ListItemText>
            <ListItemText>
             <TrendingDownOutlined/> <Link to="/home">Sales</Link>
            </ListItemText>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button>
          <Box>
            <h4>Notifications</h4>
            <ListItemText>
             <MarkEmailUnreadOutlined/> <Link to="/home">Mail</Link>
            </ListItemText>
            <ListItemText>
             <DynamicFeedOutlined
             /> <Link to="/home">Feedback</Link>
            </ListItemText>
            <ListItemText>
            <MessageOutlined/>  <Link to="/home">Messages</Link>
            </ListItemText>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button>
          <Box>
            <h4>Quick Menu</h4>
            <ListItemText>
             <SupervisedUserCircleSharp/> <Link to="/home">Users</Link>
            </ListItemText>
            <ListItemText>
            <ProductionQuantityLimitsOutlined/>  <Link to="/home">Products</Link>
            </ListItemText>
            <ListItemText>
            <PaidOutlined/>  <Link to="/home">Transaction</Link>
            </ListItemText>
            <ListItemText>
            <ReportOutlined/>  <Link to="/home">Reports</Link>
            </ListItemText>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button>
          <Box>
            <h4>Staff</h4>
            <ListItemText>
             <ManageAccountsOutlined/> <Link to="/home">Manage</Link>
            </ListItemText>
          </Box>
        </ListItem>
      </List>
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
            <Box className="navContainer">
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
