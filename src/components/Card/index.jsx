import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import customTheme from "../../styles/theme";

const Card = ({ name, imgUrl, shortName }) => {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: customTheme.palette.grey[50],
        py: customTheme.spacing(8),
        borderRadius: customTheme.spacing(2),
        my: customTheme.spacing(4),
        "&:hover": { backgroundColor: customTheme.palette.grey[400] },
      }}
      maxWidth={false}
      onClick={() => navigate(`/${shortName}`)}
    >
      <img
        alt={name}
        src={imgUrl}
        width={50}
        sx={{ pl: customTheme.spacing(4) }}
      />
      <Typography
        variant="h3"
        sx={{
          pl: customTheme.spacing(4),
          fontFamily: "Poppins",
          fontWeight: "500",
        }}
      >
        {name}
      </Typography>
    </Container>
  );
};

export default Card;
