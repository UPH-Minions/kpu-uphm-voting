import { Container, Typography } from "@mui/material";

const Title = ({ candidateNumber, candidateName, major, intake }) => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      maxWidth={false}
    >
      <Typography
        variant="h1"
        sx={{ fontWeight: "400", fontFamily: "Poppins" }}
      >
        {`#${candidateNumber}`}
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontWeight: "700", fontFamily: "Poppins" }}
      >
        {candidateName}
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontFamily: "Poppins", fontWeight: "400" }}
      >
        {`${major} ${intake}`}
      </Typography>
    </Container>
  );
};

export default Title;
