import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import dataBEM from "../../data/bem";
import Title from "../../components/Title";
import Vision from "../../components/Vision";
import Mission from "../../components/Mission";
import customTheme from "../../styles/theme";
import VoteNow from "../../components/VoteNow";

const PageBEM = () => {
  return (
    <>
      <PageHeader />
      <Container maxWidth={false} sx={{ bgcolor: "#ececec" }}>
        <Container
          sx={{ display: "flex", flexDirection: "column" }}
          maxWidth={false}
        >
          <Title
            candidateNumber={1}
            candidateName="#CANDIDATE 1"
            major="Management"
            intake="2021"
          />
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: customTheme.spacing(4),
            }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4yb01kMiY0Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            visionAbbreviation="K.F.C"
            vision="To be a Christ-centered university founded upon and promoting true knowledge, faith in Christ and godly character aiming to develop God-fearing, competent and professional future leaders through excellent, holistic and transformational education."
          />
          <Mission missionAbbreviation="K.F.C" mission={dataBEM.mission1} />
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            pt: customTheme.spacing(4),
          }}
          maxWidth={false}
        >
          <Title
            candidateNumber={2}
            candidateName="#CANDIDATE 2"
            major="Accounting"
            intake="2021"
          />
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: customTheme.spacing(4),
            }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4yb01kMiY0Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            visionAbbreviation="K.F.C"
            vision="To be a Christ-centered university founded upon and promoting true knowledge, faith in Christ and godly character aiming to develop God-fearing, competent and professional future leaders through excellent, holistic and transformational education."
          />
          <Mission missionAbbreviation="K.F.C" mission={dataBEM.mission1} />
          <VoteNow
            onVoteNow={() =>
              window.location.replace(
                "https://uph365.sharepoint.com/sites/KPUUPHMC2022/SitePages/PEMILU-2022-BEM.aspx"
              )
            }
          />
        </Container>
      </Container>
    </>
  );
};

export default PageBEM;
