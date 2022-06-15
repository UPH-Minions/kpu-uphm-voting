import { Container, Typography } from "@mui/material";
import customTheme from "../../styles/theme";

const Mission = ({ missionAbbreviation, mission }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: customTheme.spacing(8),
      }}
      maxWidth={false}
    >
      <Typography
        variant="h2"
        sx={{ fontFamily: "Poppins", fontWeight: "600" }}
      >
        Mission
      </Typography>
      <Typography
        variant="h5"
        sx={{ fontFamily: "Poppins", fontWeight: "500" }}
      >
        {missionAbbreviation}
      </Typography>
      <Container
        sx={{
          borderBottom: 1,
          borderColor: "black",
          my: customTheme.spacing(4),
        }}
        maxWidth={false}
      />
      {mission.map((item) => (
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
    </Container>
  );
};

export default Mission;
