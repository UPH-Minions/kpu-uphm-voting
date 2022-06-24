import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Title from "../../components/Title";
import Vision from "../../components/Vision";
import Mission from "../../components/Mission";
import customTheme from "../../styles/theme";
import VoteNow from "../../components/VoteNow";

const PageHMPTIF = () => {
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
            candidateName="Vincent Cianata"
            major="Informatics"
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
              src="https://www.youtube.com/embed/HJDHmkIYvPY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            vision="Menjadikan HMPTIF sebagai organisasi yang dapat melayani mahasiswa/i informatika UPH
            Medan sehingga dapat meningkatkan kemampuan dan cara berpikir mahasiswa baik dalam
            bidang akademik maupun non-akademik."
          />
          <Mission
            missionAbbreviation="LEAP"
            mission={[
              "Link - Memperkuat relasi dan kepercayaan antara sesama mahasiswa jurusan informatika.",
              "Enhance - Mengadakan program kerja yang dapat meningkatkan ilmu dan kemampuan mahasiswa jurusan informatika.",
              "Active - Mendukung mahasiswa jurusan informatika menjadi lebih aktif dengan berpartisipasi dan berkontribusi dalam berbagai kegiatan.",
              "Potential - Mengadakan program kerja yang dapat mengembangkan potensi mahasiswa jurusan informatika.",
            ]}
          />
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
            candidateName="Irwanto Wijaya"
            major="Informatics"
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
              src="https://www.youtube.com/embed/6p_WRaoh5mU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            visionAbbreviation="H D D (Help - Devote - Develop)"
            vision="Menjadikan HMPTIF sebagai organisasi yang berkomitmen dalam membantu, mempererat hubungan kebersamaan serta mengembangkan potensi yang dimiliki mahasiswa/i program studi Informatika baik dalam bidang akademik maupun non-akademik."
          />
          <Mission
            missionAbbreviation="DREAM"
            mission={[
              "Drive – Menjadi wadah untuk menampung dan menyalur aspirasi serta bakat dari mahasiswa/i program studi informatika.",
              "Relation – Membangun hubungan yang harmonis antara sesama mahasiswa/i program studi informatika.",
              "Educate – Mengadakan program kerja yang dapat menjadi sumber ilmu dan wawasan mahasiswa/i program studi informatika.",
              "Active – Menjadikan mahasiswa/i program studi informatika sebagai mahasiswa/i yang lebih aktif dalam mengekspresikan diri melalui program kerja yang akan dilaksanakan.",
              "Model – Menjadi seorang pemimpin yang dapat memotivasi mahasiswa/i program studi informatika dalam bidang akademik maupun non akademik.",
            ]}
          />
        </Container>
        <VoteNow
          onVoteNow={() =>
            window.location.replace(
              "https://uph365.sharepoint.com/sites/KPUUPHMC2022/SitePages/PEMILU-2022-BEM.aspx"
            )
          }
        />
      </Container>
    </>
  );
};

export default PageHMPTIF;
