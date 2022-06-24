import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Title from "../../components/Title";
import Vision from "../../components/Vision";
import Mission from "../../components/Mission";
import customTheme from "../../styles/theme";
import VoteNow from "../../components/VoteNow";

const PageHMPSH = () => {
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
            candidateName="Rusdinah"
            major="Law"
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
              src="https://www.youtube.com/embed/hFnZLhS7V7Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            visionAbbreviation="GENERATE TO BE EXCELLENT"
            vision="Menjadikan HMPSH sebagai organisasi yang menanggapi aspirasi mahasiswa dan wadah pendukung dalam menghasilkan generasi muda yang unggul berorientasi yuris dalam wujud calon insan hukum yang berkompenten, inklusif, mampu berpikir kritis dan berintegritas tinggi "
          />
          <Mission
            missionAbbreviation="4 M 1 P "
            mission={[
              "Menyediakan program kerja untuk mengembangkan wawasan, pengetahuan dan penalaran mahasiswa agar tercipta mahasiswa hukum yang berdedikasi, solutif dan inspiratif",
              "Membangun persaudaraan melalui kegiatan internal dan eksternal agar terbentuk sinergi yang saling menguntungkan",
              "Memfasilitas kegiatan sosial sebagai wujud kepedulian terhadap keadaan sosial masyarakat",
              "Menjadi jembatan dalam kegiatan yang menjalin hubungan mahasiswa dengan kampus",
              "Penyalur informasi terkait hal-hal yang berhubungan dengan prodi hukum & organisasi",
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
            candidateName="Andy Winardi"
            major="Law"
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
              src="https://www.youtube.com/embed/IcpUCuvxjl8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            visionAbbreviation="T.O.T.A.L"
            vision="Menjadikan Himpunan Mahasiswa Program Studi Hukum sebagai suatu wadah holisTik yang berdedikasi untuk mengembangkan wawasan mahasiswa/i secara prOgresif dan TransformasionAL dengan berlandasakan nilai-nilai Pancasila dalam implementasinya."
          />
          <Mission
            missionAbbreviation="ICENI"
            mission={[
              "Iniative – Menginisiasi perilaku proaktif mahasiswa/i hukum melalui penyediaan program kerja guna menciptakan pribadi yang peduli dan berpengaruh.",
              "Critical – Membahas fenomena hukum yang sedang terjadi agar melatih pemikiran kritis mahasiswa/i hukum Universitas Pelita Harapan Kampus Medan",
              "ENcourage – Mendorong mahasiswa/i hukum untuk menggunakan semua ilmu dan pelatihan mereka.",
              "Integrity – Membangun fundamental dari etika karakter mahasiswa/i hukum Universitas Pelita Harapan Kampus Medan.",
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
            candidateNumber={3}
            candidateName="Yohanes Willy Silitonga"
            major="Law"
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
              src="https://www.youtube.com/embed/u9MqMPV__jA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            visionAbbreviation="P.A.S.T.I"
            vision="Membentuk Mahasiswa/i Program Studi Ilmu Hukum Universitas Pelita Harapan Kampus Medan yang berlandaskan nilai-nilai Pancasila, Act within God, Solidaritas, Toleransi dan berIntergritas."
          />
          <Mission
            missionAbbreviation="S.I.A.P"
            mission={[
              "Mewujudkan Mahasiswa/i Program Studi Ilmu Hukum Universitas Pelita Harapan Medan dan HMPSH yang berSinergis.",
              "Membentuk Mahasiswa/i Program Studi Ilmu Hukum Universitas Pelita harapan Kampus Medan agar memiliki pemikiran Intelektual dan pribadi yang memiliki sifat Inisiatif.",
              "Menciptakan Mahasiswa/i Program Studi Ilmu Hukum Universitas Pelita Harapan Kampus Medan dan HMPSH yang Aktif baik secara internal maupun eksternal.",
              "Menerapkan Pancasila sebagai pandangan hidup dan Pro Justicia kepada Mahasiswa/i Program Studi Ilmu Hukum Universitas Pelita Harapan Kampus Medan agar dapat menumbuhkan daya pikir yang kritis, inovatif dan kreatif.",
            ]}
          />
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

export default PageHMPSH;
