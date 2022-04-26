import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Stack } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import Favourite from "../favourite/favourite";
import { useLocation, useNavigate } from "react-router-dom";
import { getUsers, logout, reset } from "../../store/auth/authSlice";
import { getTotals } from "../../store/cart/cartSlice";
import Receipt from "../receipts/receipt";
import ProfileReceipt from "../receipts/profileUpdate";
import ProfileOrdersDetails from "../receipts/profileOrderDetails";
import CustomizedAccordions from "../../components/Collaps/collaps"

import Example from "../../components/Collaps/collaps";




function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Profile() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  React.useEffect(() => {
    dispatch(getTotals());
    if (user) {
      dispatch(getUsers(user.customer._id));
      console.log(user.customer.Orders);
    }
  }, []);



  const user = useSelector((state) => state.auth.user);
  const orderContent = user.customer.Orders.map((item, index) => {
    return (
     <>
   <CustomizedAccordions order={item} index={index}></CustomizedAccordions>
     </>
    );
  });

  const location = useLocation();
  console.log(location.state);

  const [value, setValue] = React.useState(
    location.state ? location.state.index : 0
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(getUsers(user.customer._id));

    navigate("/profile");
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          paddingTop: "1%",
          paddingBottom: "1%",
          backgroundColor: "white",
          marginTop: "7%",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        <Box sx={{ justifyContent: "center" }}>
          <Avatar
            style={{ display: "inline-block", width: "7%", height: "7%" }}
            alt="Remy Sharp"
            src={user.customer.image !== " " ? user.customer.image : " "}
          />
          <div>
            <h1>{user.customer.fullName}</h1>
            <p>Home / Your account</p>
          </div>
        </Box>
      </div>
      <Container sx={{ marginY: "2%", minWidth: "1400px" }}>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: "100%",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="icon position tabs example"
            sx={{ borderRight: 1, borderColor: "divider", minWidth: "250px" }}
          >
            <Tab
              icon={
                <AccountCircleOutlinedIcon style={{ marginLeft: "1  %" }} />
              }
              iconPosition="start"
              label="Information"
            />
            <Tab
              icon={<EventNoteOutlinedIcon style={{ marginLeft: "10%" }} />}
              iconPosition="start"
              label="Orders History"
            />
            <Tab
              icon={<CreditCardOutlinedIcon />}
              iconPosition="start"
              style={{ marginRight: "9%" }}
              label="Vouchers"
            />
            <Tab
              icon={<FavoriteBorderOutlinedIcon />}
              style={{ marginRight: "2%" }}
              iconPosition="start"
              label="My Wishlist"
            />
            <Tab
              icon={<PointOfSaleOutlinedIcon style={{ marginLeft: "5%" }} />}
              iconPosition="start"
              label="Transactions"
            />
            <Tab
              onClick={onLogout}
              icon={<ExitToAppOutlinedIcon />}
              iconPosition="start"
              style={{ marginRight: "13%" }}
              label=" Sign Out"
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <ProfileReceipt />
          </TabPanel>
          <TabPanel value={value} index={1}>
            {orderContent}
          </TabPanel>
          <TabPanel value={value} index={2}>
            Vouchers
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Favourite />
          </TabPanel>
          <TabPanel value={value} index={4}>
            Sign Out
          </TabPanel>
          <TabPanel value={value} index={5}>
            Transactions
          </TabPanel>
        </Box>
      </Container>
    </>
  );
}
