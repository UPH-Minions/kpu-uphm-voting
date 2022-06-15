import { Container } from "@mui/material";

const LandingPages = ({ imgUrl, name }) => {
  return (
    <Container
      sx={{
        backgroundImage:
          "https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <img src={imgUrl} size={150} alt={name} />
    </Container>
  );
};

export default LandingPages;
