import { Container, Typography } from "@mui/material";
import customTheme from "../../styles/theme";

const Vision = ({ visionAbbreviation, vision, visionlist }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      maxWidth={false}
    >
      <Typography
        variant="h2"
        sx={{ fontFamily: "Poppins", fontWeight: "600" }}
      >
        Vision
      </Typography>
      <Typography
        variant="h5"
        sx={{ fontFamily: "Poppins", fontWeight: "500" }}
      >
        {visionAbbreviation}
      </Typography>
      <Container
        sx={{
          borderBottom: 1,
          borderColor: "black",
          my: customTheme.spacing(4),
        }}
        maxWidth={false}
      />
      <Typography
        variant="body2"
        sx={{ fontFamily: "Poppins", fontWeight: "400" }}
      >
        {vision}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontFamily: "Poppins", fontWeight: "400" }}
      >
        {visionlist &&
          visionlist.map((item) => (
            <ul>
              <li>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Poppins", fontWeight: "400" }}
                >
                  {item}
                </Typography>
              </li>
            </ul>
          ))}
      </Typography>
    </Container>
  );
};

export default Vision;
