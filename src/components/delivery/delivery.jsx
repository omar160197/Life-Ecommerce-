import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import { Card, CardContent, Typography } from "@mui/material";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };



// const location = ["Kafr el-Sheikh", "Cairo"];

// const city = [
//   "Burullus",
//   "alhamul",
//   "bila",
//   "6th of October",
//   "alriyad",
//   "sayidi salim",
//   "qiliyn",
//   "Mutubas",
//   "fuh",
//   "dusuq",
// ];

// function getStyles(name, locationName, theme) {
//   return {
//     fontWeight:
//       locationName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

export default function Delivery() {
  // const theme = useTheme();
  // const [locationName, setlocationName] = React.useState([]);

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setlocationName(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  return (

<Box>
  
      <Card>
      <Typography variant="h5" component="h1" mt={2} textAlign='center' sx={{ p: 1 }}>
       DELIVERY & RETURNS
              </Typography>
         
        <CardContent>
          {/* <FormControl sx={{ l: 1, m: 1, width:"100%" }}>
            <InputLabel id="demo-multiple-name-label">Location</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={locationName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {location.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, locationName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ l: 1, m: 1, width:"100%" }}>
            <InputLabel id="demo-multiple-name-label">city</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={locationName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {city.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, locationName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            padding={1}
          >
            <i className="fa-solid fa-truck mt-2"></i>
            <Box mx={3}>
              <Typography variant="h5" component="h1">
              Door Delivery 
              </Typography>
              <Typography variant="subtitle1" component="p">
                Ready for delivery between 25 April & 26 April when you order within next 10hrs 34mins
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            padding={1}
          >
            <i className="fa-solid fa-handshake-angle mt-2"></i>
            <Box mx={3}>
              <Typography variant="h5" component="h1">
              Pickup Station 
              </Typography>
              <Typography variant="subtitle1" component="p">
                 Ready for delivery between 25 April & 26 April when you order within next 10hrs 34mins
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            padding={1}
          >
           <i className="fa-solid fa-retweet mt-2"></i>
            <Box mx={3}>
              <Typography variant="h5" component="h1">
              Return Policy
              </Typography>
              <Typography variant="subtitle1" component="p">
                14 days free return up to 30 days for defective products with necessity for requesting a return within 24 hours from the delivery date.
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
