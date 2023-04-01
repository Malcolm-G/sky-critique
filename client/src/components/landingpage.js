//import ".view/landingPage.css"
import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
///import Navbar from "./Navbar";
import heroImg from "../media/hero_illustration.jpg";
import CustomButton from "./CustomButton";

function LandingPage(){

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(5),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));


    return(
        <div className="landing">
         <Box sx={{ backgroundColor: "#1d1e23", minHeight: "100vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to SkyCritique
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "33px", color: "#687690", my: 4 }}
            >
              
              Where We Defy Gravity Together
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "40px", color: "#687690", my: 4 }}
            >
              
             Enjoy our premium quality services when travelling 
            </Typography>
           
           < CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Login"
              heroBtn={true}
            />

              <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Signup"
              heroBtn={true}
              padding="70px"
            />
            </Box>

      
      
          <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "200%", maxHeight:"100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
        </div>
    )

}
export default LandingPage