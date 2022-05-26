import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";
import tooth from "../../assets/tooth.jpg";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import styles from "./offers.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,

  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function OffersDraft({ colorStyle, textColor,discountAmount }) {
  console.log(discountAmount);
  return (
    discountAmount===0?
    <Box  style={{display:"none"}}></Box>
    :discountAmount===40?
        <Box >
          <Grid xs={8}>
            <div >
              <div className={styles.offer}>
              <div className={styles.paragraph}>
               
                <h2
                  style={{
                    fontSize: "50px",
                    lineHeight: "55px",
                    borderBottom: "3px solid white",
                  }}
                >
                  {discountAmount}%OFF
                </h2>
              </div>
              </div>
            </div>
          </Grid>
        </Box>
     :discountAmount===30?
     <Box sx={{ flexGrow: 1 }}>
     <Grid xs={8}>
       <div >
         <div className={styles.offer1}>
         <div className={styles.paragraph}>
      
                <h2
                  style={{
                    fontSize: "50px",
                    lineHeight: "55px",
                    borderBottom: "3px solid white",
                  }}
                >
                    {discountAmount}%OFF
                </h2>
              </div>
         </div>
       </div>
     </Grid>
   </Box>:
   discountAmount===13?
   <Box sx={{ flexGrow: 1 }}>
   <Grid xs={8}>
     <div >
       <div className={styles.offer2}>
       <div className={styles.paragraph}>
                <h2 style={{ marginBottom: "20px" }}> Category Sale </h2>
                <h2
                  style={{
                    fontSize: "50px",
                    lineHeight: "55px",
                    borderBottom: "3px solid white",
                  }}
                >
                    {discountAmount}%OFF
                </h2>
              </div>
       </div>
     </div>
   </Grid>
 </Box>:
    <Item>
  
      <Box sx={{ flexGrow: 1 }}>
        <Grid xs={8}>
          <div >
            <div className={styles.cover}>
              <div className={styles.paragraph}>
                <h2 style={{ marginBottom: "20px" }}> Season Sale </h2>
                <h2
                  style={{
                    fontSize: "50px",
                    lineHeight: "55px",
                    borderBottom: "3px solid white",
                  }}
                >
                    {discountAmount}%OFF
                </h2>
              </div>
            </div>
          </div>
        </Grid>
      </Box>
  </Item>
    
  );
}
