import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Title from "../../components/Title";
import Vision from "../../components/Vision";
import Mission from "../../components/Mission";
import customTheme from "../../styles/theme";
import VoteNow from "../../components/VoteNow";

const PageHMPSSI = () => {
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
            candidateName="Wilbert Wisely"
            major="Information System"
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
              src="https://www.youtube.com/embed/I33eWZdk4CE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            visionAbbreviation="Nurture"
            vision="Menjadikan HMPSSI sebagai wadah penyalur bakat dan aspirasi mahasiswa/i Sistem Informasi di bidang teknologi melalui pembekalan keterampilan yang diperlukan di era modern ini kepada mahasiswa/i sehingga dapat menghasilkan mahasiswa/i yang berkarakter dan berkualitas di bidang teknologi."
          />
          <Mission
            missionAbbreviation="G.O.A.T."
            mission={[
              "Grow : Memfasilitasi pertumbuhan mahasiswa/i program studi Sistem Informasi dengan menyediakan sarana untuk mengasah keterampilan mahasiswa/i di bidang teknologi",
              "Outstanding : Menjadikan mahasiswa/i program studi Sistem Informasi sebagai individu yang berkualitas dan berkarakter",
              "Active : Meningkatkan keaktifan mahasiswa/i program studi Sistem Informasi di berbagai sektor industri teknologi",
              "Transcend : Menghasilkan mahasiswa/i program studi Sistem Informasi yang siap menghadapi tantangan dalam dunia teknologi",
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
            candidateName="Jian Jeraus Young"
            major="Information System"
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
              src="https://www.youtube.com/embed/VAMdFUgUt7o"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            visionAbbreviation="BETTER TOGETHER"
            vision="Menjadikan HMPSSI sebagai wadah mahasiswa/i berkumpul dan beraspirasi guna meningkatkan potensi mahasiswa/i program studi Sistem Informasi baik dalam bidang akademik maupun non-akademik dengan melaksanakan program kerja yang unggul dan berkualitas."
          />
          <Mission
            missionAbbreviation="FIT"
            mission={[
              "Facilitate 	: Menyediakan wadah bagi mahasiswa/i melalui kesempatan bertumbuh dan berkembang guna menumbuhkan pribadi yang aktif, berkompeten dan berkarakter.",
              "Inspire 	: Menginspirasi mahasiswa/i untuk mencari dan mengembangkan minat dan bakatnya masing-masing melalui program kerja yang membina, eksploratif dan informatif.",
              "Togetherness 	: Menjalin hubungan baik antar organisasi di dalam, di luar UPH maupun antar mahasiswa/i program studi Sistem Informasi.",
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

export default PageHMPSSI;
