import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";
import tooth from "../../assets/tooth.jpg";
import CardMedia from "@mui/material/CardMedia";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,

  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function OffersDraft({ colorStyle, textColor }) {
  return (
    <Item>
      <div
        style={{
          backgroundColor: colorStyle,
          color: textColor,
          textAlign: "center",
        }}
      >
        <h5 style={{ padding: "1%" }}>AMAZING DEALS!</h5>
      </div>
      <CardActionArea>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardMedia
                sx={{
                  display: "block",
                  marginTop: "1%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%",
                }}
                component="img"
                height="120"
                image={tooth}
                alt="green iguana"
              />
            </Grid>
            <Grid item xs={4}>
              <CardMedia
                sx={{
                  display: "block",
                  marginTop: "1%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%",
                }}
                component="img"
                height="120"
                image={tooth}
                alt="green iguana"
              />
            </Grid>
            <Grid item xs={4}>
              <CardMedia
                sx={{
                  display: "block",
                  marginTop: "1%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%",
                }}
                component="img"
                height="120"
                image={tooth}
                alt="green iguana"
              />
            </Grid>
            <Grid item xs={8}>
              <CardMedia
                sx={{
                  display: "block",
                  marginTop: "1%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%",
                }}
                component="img"
                height="120"
                image={tooth}
                alt="green iguana"
              />
            </Grid>
          </Grid>
        </Box>
      </CardActionArea>
    </Item>
  );
}
