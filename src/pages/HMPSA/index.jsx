import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Title from "../../components/Title";
import Vision from "../../components/Vision";
import Mission from "../../components/Mission";
import customTheme from "../../styles/theme";
import VoteNow from "../../components/VoteNow";

const PageHMPSA = () => {
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
            candidateName="Angela Irena"
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
              src="https://www.youtube.com/embed/FUZxglEH3qA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            visionAbbreviation="Grow as ONE"
            vision="Menjadikan HMPSA sebagai wadah bagi mahasiswa/i UPH Kampus Medan untuk mengembangkan keterampilan dan pengetahuan di bidang Akuntansi, meningkatkan kemampuan beradaptasi yang baik dengan lingkungan sekitar, serta membangun sikap yang SUPORTIF terhadap sesama."
          />
          <Mission
            missionAbbreviation="UNITE"
            mission={[
              "UNify :membangun komunitas untuk bertumbuh bersama dengan saling berbagi wawasan, dukungan, dan motivasi.",
              "Improve :menghasilkan pribadi yang terampil dan kompeten di bidang Akuntansi melalui program kerja yang dijalankan.",
              "TEnable :membangun dan mempertahankan hubungan harmonis antar mahasiswa/i jurusan Akuntansi dalam jangka panjang.",
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
            candidateName="Angela Giovani"
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
              src="https://www.youtube.com/embed/_jZ91xgxahY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            visionAbbreviation="Steady Growth"
            vision="Menjadikan HMPSA UPH Kampus Medan sebagai wadah yang menjawab kebutuhan mahasiswa/i dalam memfasilitasi dan mendorong perkembangan mahasiswa/i program studi akuntansi dari aspek akademik maupun nonakademik demi terwujudnya individu yang proaktif, berkualitas dan transformatif."
          />
          <Mission
            missionAbbreviation="PROFIT"
            mission={[
              "Proactive – membekali setiap mahasiswa/i dengan karakter proaktif melalui program kerja yang dilaksanakan untuk membentuk individu yang aktif dan berkualitas.",
              "FlourIsh – menggali dan mengembangkan potensi diri mahasiswa/i dalam bidang akademik maupun nonakademik sebagai bekal untuk menjadi pribadi yang unggul di dalam masyarakat.",
              "Transform – membentuk mahasiswa/i menjadi agent of changes yang memberikan perubahan positif dan transformatif bagi diri sendiri dan orang di sekitarnya.",
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
            candidateName="Kenrix Tanvanno"
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
              src="https://www.youtube.com/embed/cfeGiRXCsus"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            visionAbbreviation="Actions Today, Illuminates Tomorrow"
            vision="Menjadikan HMPSA sebagai organisasi yang dapat membekali mahasiswa/i Akuntansi UPH Kampus Medan dengan pengetahuan dan keterampilan yang memadai untuk persiapan menghadapi dunia profesional serta memupuk solidaritas demi terwujudnya pribadi yang mampu memimpin dan dipimpin."
          />
          <Mission
            missionAbbreviation="SPARK"
            mission={[
              "Sharp	:	 Menjadikan HPMSA sebagai sebuah organisasi yang peka dan responsif dalam menampung aspirasi mahasiswa/i Akuntansi UPH Kampus Medan;",
              "Proficient	:	 Mendukung performa akademis maupun non-akademis mahasiswa/i melalui program kerja yang senantiasa menargetkan perkembangan diri menjadi pribadi yang profesional; dan",
              "RemARKable	:	 Memotivasi mahasiswa/i untuk tetap menjaga solidaritas melalui kegiatan yang interaktif dan berarti demi mewujudkan karakter yang luar biasa.",
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

export default PageHMPSA;
