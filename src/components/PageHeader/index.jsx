import { Container, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import OK from "../../data/OK";
import customTheme from "../../styles/theme";

const PageHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container
      sx={{
        bgcolor: customTheme.palette.primary[900],
        py: customTheme.spacing(4),
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
      }}
      maxWidth={false}
    >
      {OK.map((item) => (
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => navigate(`/${item.shortName}`)}
        >
          <img src={item.imgUrl} alt={item.shortName} width={40} />
          <Typography
            variant="body1"
            sx={{
              color:
                location.pathname === `/${item.shortName}`
                  ? customTheme.palette.yellow[100]
                  : "white",
              pl: customTheme.spacing(1),
              "&:hover": { color: customTheme.palette.yellow[100] },
            }}
          >
            {item.shortName}
          </Typography>
        </Container>
      ))}
    </Container>
  );
};

export default PageHeader;
