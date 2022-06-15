import { Container } from "@mui/material";
import customTheme from "../../styles/theme";

const Header = () => {
  return (
    <Container
      sx={{
        bgcolor: customTheme.palette.primary[900],
        py: customTheme.spacing(4),
        justifyContent: "center",
      }}
      maxWidth={false}
    >
      <img
        src="https://aou-voting.s3.ap-southeast-1.amazonaws.com/assets/logo_kpu.png"
        alt="logo_kpu"
        width={150}
      />
    </Container>
  );
};

export default Header;
