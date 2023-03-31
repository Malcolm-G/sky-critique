//import ".view/landingPage.css"
import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
///import Navbar from "./Navbar";
import heroImg from "../media/hero_illustration.jpg";
import CustomButton from "./CustomButton";

function Home(){

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


const Title = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  color: "blue",
  fontWeight: "bold",
  margin: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
  },
}));


    return(
        <div className="landing">
         <Box sx={{ backgroundColor: "#222021", minHeight: "80vh" }}>
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
            <Title variant="h1">
           wwwwwww
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#687690", my: 4 }}
            >
              
              Enjoy our premium quality services when travelling 
            </Typography>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              heroBtn={true}
            />

          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
        </div>
    )

}
export default Home;