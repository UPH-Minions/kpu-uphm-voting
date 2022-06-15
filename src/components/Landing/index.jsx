import { Container, Typography } from "@mui/material";
import OK from "../../data/OK";
import customTheme from "../../styles/theme";
import Card from "../Card";
import Header from "../Header";
import Image from "./styles";

const Landing = () => (
  <>
    <Header />
    <Container
      sx={{
        bgcolor: customTheme.palette.primary[100],
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      maxWidth={false}
    >
      <Typography
        variant="h1"
        sx={{
          color: "white",
          pt: customTheme.spacing(25),
          fontFamily: "Poppins",
          fontWeight: "600",
        }}
      >
        Welcome to KPU UPH Medan 2022
      </Typography>
      <Image
        src="https://aou-voting.s3.ap-southeast-1.amazonaws.com/assets/Mascot_KPU.PNG"
        alt="maskot_kpu"
      />
      {OK.map((item) => (
        <Card
          name={item.name}
          imgUrl={item.imgUrl}
          key={item.id}
          shortName={item.shortName}
        />
      ))}
    </Container>
  </>
);

export default Landing;
