import React from 'react';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './Registration.module.css'
import Login from './../../components/Login/Login';
import SignUP from './../../components/Sign-up/Sign-up';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const paperStyle = { 
  width: "60vw", 
  margin: "auto",
  backgroundColor:"#ffffffb3",
  borderRadius: "10px 10px",
  marginTop: "150px",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"
   }
  
const Registration = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
  <>
    <div className={styles.paper} >
      <Paper elvation={20}  style={paperStyle} >
        <Box>
          <Box  sx={{display:"flex",justifyContent:"center",marginBottom:"20px" }} >
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="SignIn" sx={{ color: '#212529' }} {...a11yProps(0)} />
              <Tab label="SignUP" sx={{ color: '#212529' }} {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Login handleChange={handleChange} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SignUP />
          </TabPanel>
        </Box>
      </Paper>
    <div className='toolheight'></div>
    </div>

  </>);
}

export default Registration;