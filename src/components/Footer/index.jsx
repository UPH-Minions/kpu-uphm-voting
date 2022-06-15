import { Container, Typography } from "@mui/material";
import customTheme from "../../styles/theme";

const Footer = () => (
  <Container
    maxWidth={false}
    sx={{
      bgcolor: customTheme.palette.primary[900],
      justifyContent: "center",
      display: "flex",
      p: customTheme.spacing(2),
    }}
  >
    <Typography variant="caption" sx={{ color: "white" }}>
      © MPM UPH Medan 2022
    </Typography>
  </Container>
);

export default Footer;
