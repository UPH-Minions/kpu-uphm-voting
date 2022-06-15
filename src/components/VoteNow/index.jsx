import { Container, Typography } from "@mui/material";
import voteNow from "../../data/voteNow";
import customTheme from "../../styles/theme";

const VoteNow = ({ onVoteNow }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: customTheme.spacing(2),
        backgroundColor: customTheme.palette.primary[900],
        width: "80%",
        mt: customTheme.spacing(4),
        mb: customTheme.spacing(8),
        py: customTheme.spacing(4),
      }}
      maxWidth={false}
    >
      <Container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          py: customTheme.spacing(4),
        }}
        maxWidth={false}
      >
        <Typography
          variant="h2"
          sx={{
            color: customTheme.palette.grey[50],
            fontWeight: 700,
            fontFamily: "Poppins",
          }}
        >
          VOTING SECTION
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: customTheme.palette.grey[50],
            fontWeight: 500,
            fontFamily: "Poppins",
            py: customTheme.spacing(2),
          }}
        >
          Please read all the instructions below before you vote.
        </Typography>
        <ul style={{ color: "white" }}>
          {voteNow.map((item, index) => (
            <li key={index}>
              <Typography
                variant="body1"
                sx={{
                  color: customTheme.palette.grey[50],
                  fontWeight: 400,
                  fontFamily: "Poppins",
                  py: customTheme.spacing(1),
                }}
              >
                {item}
              </Typography>
            </li>
          ))}
        </ul>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          maxWidth={false}
          onClick={onVoteNow}
        >
          <Typography
            variant="h4"
            sx={{
              color: customTheme.palette.grey[50],
              backgroundColor: customTheme.palette.orange[100],
              fontWeight: 500,
              fontFamily: "Poppins",
              py: customTheme.spacing(4),
              px: customTheme.spacing(8),
              "&:hover": { backgroundColor: customTheme.palette.orange[200] },
              borderRadius: customTheme.spacing(2),
            }}
          >
            Vote Now
          </Typography>
        </Container>
      </Container>
    </Container>
  );
};

export default VoteNow;
