import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
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
            candidateName="Irene Andrayani"
            major="Hospitality Management"
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
              src="https://www.youtube.com/embed/douQVrCYIT4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            visionAbbreviation="ESCALATE"
            vision="Menjadikan BEM sebagai organisasi yang progresif dalam melayani kebutuhan mahasiswa/i serta berperan aktif dalam mewadahi pengembangan diri mahasiwa/i di berbagai aspek demi terwujudnya mahasiswa/i yang PASTI (Proaktif, berkuAlitas, poSitif, kolaboraTif, dan beranI)."
          />
          <Mission
            missionAbbreviation="HOPE"
            mission={[
              "tHrive	:	Mendorong dan menginspirasi mahasiswa/i untuk berani dan proaktif dalam bereksplorasi dan mengembangkan diri, baik dengan kegiatan di dalam maupun di luar universitas.",
              "Optimize	:	Mengoptimalkan perkembangan mahasiswa/i melalui kegiatan yang disediakan demi terbentuknya mahasiswa/i yang kolaboratif serta mampu memberikan dampak positif baik di dalam maupun di luar universitas.",
              "PErform	:	Menyediakan dan menjalankan berbagai kegiatan sesuai dengan kebutuhan pengembangan diri mahasiswa/i guna terbentuknya mahasiswa/i yang berkualitas.",
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
            candidateName="Richard Valentino"
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
              src="https://www.youtube.com/embed/wJt949fN6Ek"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            visionAbbreviation="ACT - Active, Contribute, Transformational"
            vision="Menjadikan BEM sebagai organisasi yang aktif, kontributif dan transformasional
            dalam melayani mahasiswa/i UPH Medan yang menganut nilai:"
            visionlist={[
              "Active – Aktif dalam mewujudkan BEM sebagai organisasi yang mendukung mahasiswa/i untuk mengembangkan kemampuan mereka melalui berbagai kegiatan dan kesempatan, dan juga berkompeten dalam meningkatkan kualitas hidup mahasiswa/i secara non-akademis.",
              "Contribute – Membekali mahasiswa/i dengan edukasi dan skill agar menjadi mahasiswa/i yang cerdas dan bermutu serta menyediakan wadah untuk menyalurkan bakat mahasiswa/i.",
              "Transformational – Mentransformasi mahasiswa/i UPH Medan menjadi individual yang aktif, berkualitas dan berakhlak mulia dalam ruang lingkup masyarakat maupun di dalam kampus melalui program kerja yang dirancang.",
            ]}
          />
          <Mission
            missionAbbreviation="FAST - Facilitate, Attentive, Support, Teamwork"
            mission={[
              "Facilitate: Mewadahi mahasiswa/i berbagai kesempatan agar dapat berkembang secara menyeluruh guna untuk menjadi pribadi yang berkualitas dan aktif, serta memberi kesempatan bagi mahasiswa/i guna untuk mengenali potensi diri.",
              "Attentive: Menjadi organisasi yang peduli dan mengamati secara aktif terhadap kebutuhan anggota mahasiswa/i yang relevan, baik di dalam maupun di luar kampus.",
              "Support: Memberikan dorongan dan dukungan dalam aspek pengembangkan diri mahasiswa/i agar menjadi individual yang berkarakter, berakhlak mulia, dan berkualitas.",
              "Teamwork: Merencanakan dan mengeksekusi program kerja yang berasaskan solidaritas dan kerja sama antar mahasiswa/i.",
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
            candidateName="Anjelia Debra D."
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
              src="https://www.youtube.com/embed/r4FWqWMOjQg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            visionAbbreviation="EVOLVE CHANGE"
            vision="Menjadi organisasi yang mampu MENGEMBANGKAN kreativitas yang INOVATIF, serta BERINTEGRITAS demi terwujudnya mahasiswa/i yang BERKUALITAS."
          />
          <Mission
            missionAbbreviation="OUR"
            mission={[
              "InOvatif : Untuk mengembangkan pengetahuan, keterampilan dan juga pengalaman agar terciptanya kreativitas yang baru guna memberikan hasil yang signifikan bagi mahasiswa/i UPH Medan Campus.",
              "KUalitas  :  Menjadi organisasi yang dapat dipercaya dalam berkontribusi bagi pengembangan diri mahasiswa/i agar dapat menjadi pribadi yang berkompeten.",
              "IntegRitas: Untuk menjadi organisasi yang bertindak secara konsisten dan berjalan sesuai dengan nilai-nilai kebenaran.",
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

export default PageBEM;
