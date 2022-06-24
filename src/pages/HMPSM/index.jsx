import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Title from "../../components/Title";
import Vision from "../../components/Vision";
import Mission from "../../components/Mission";
import customTheme from "../../styles/theme";
import VoteNow from "../../components/VoteNow";

const PageHMPSM = () => {
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
            candidateName="Timothy Robin Pasaribu"
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
              src="https://www.youtube.com/embed/ec8fH7Omm0w"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            visionAbbreviation="Star"
            vision="Menjadikan HMPSM sebagai organisasi yang aktif melayani mahasiswa/i Program Studi manajemen dan manajemen perhotelan dalam menerapkan asas: "
            visionlist={[
              "Solidarity: Menjalin hubungan yang baik antar sesama organisasi kemahasiswaan maupun antar mahasiswa/i dengan organisasi program studi.",
              "Talented: Mewujudkan mahasiswa/i yang kreatif, inovatif, berkarakter sekaligus memberi kontribusi serta dampak yang positif di dalam dan di luar UPH Medan.",
              "Action: Aktif membangun dan mengembangkan potensi, bakat dan minat mahasiswa/i manajemen dan manajemen perhotelan.",
              "Responsibility: Bertanggung jawab atas kewajiban dan kegiatan yang dilaksanakan serta konsisten dalam menyediakan program kerja yang dapat menjawab keperluan  mahasiswa/i.",
            ]}
          />
          <Mission
            missionAbbreviation="Ship"
            mission={[
              "SHarpen: Mengasah dan menambah ilmu, karakter, dan kreativitas mahasiswa/i melalui pembinaan, pelatihan dan kompetisi yang diberikan.",
              "FacIlitate: Membekali mahasiswa/i dalam meningkatkan ketelitian, kecermatan dan wawasan mahasiswa/i akan dunia bisnis saat ini melalui edukasi dan informasi yang akan disalurkan dari program kerja.",
              "Progressive: Memberi kesempatan dan mendorong mahasiswa/i untuk menyalurkan bakat dan minat mereka untuk mengembangkan potensi diri, kelebihan serta kemampuan analitikal mereka.",
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
            candidateName="Agnes Tiffany"
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
              src="https://www.youtube.com/embed/PCMUUdX06rg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            visionAbbreviation="Lead to Serve"
            vision="Menjadikan HMPSM sebagai organisasi yang kooperatif, kreatif, adaptif, dan aktif dalam melayani dan memenuhi kebutuhan mahasiswa/i program studi Manajemen dan Perhotelan UPH Medan serta menyediakan program kerja yang dapat mengembangkan potensi diri mahasiswa/i sehingga dapat menjadi pribadi yang berprestasi dan berkualitas."
          />
          <Mission
            missionAbbreviation="MAP"
            mission={[
              "Motivate - Memotivasi dan mendorong mahasiswa/i untuk meningkatkan dan mengimplementasikan ilmu pengetahuan yang dimiliki dengan mengikuti pelatihan dan program kerja yang diadakan.",
              "Assist - Menuntun dan menjadi jembatan penghubung antara mahasiswa/i dengan kesempatan-kesempatan yang dapat meningkatkan potensi diri yang dimiliki mahasiswa/i.",
              "Provide - Menyelenggarakan program kerja yang dapat meningkatkan pengetahuan, ilmu, dan pengalaman mahasiswa/i sehingga dapat berdampak positif untuk pengembangan diri mahasiswa/i.",
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
            candidateName="Gabriella Oktaviana Lumban Toruan"
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
              src="https://www.youtube.com/embed/FNOGidaEQR8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
          <Vision
            visionAbbreviation="MAKE"
            vision="Menjadikan HMPSM sebagai organisasi yang mampu mendorong mahasiswa/i program studi manajemen dan manajemen perhotelan dalam mengembangkan potensi mereka yang menganut nilai:"
            visionlist={[
              "Mill			: Menyediakan program kerja yang sesuai dengan kebutuhan mahasiswa/i.",
              "Accomplish		: Melakukan upaya perbaikan yang terus – menerus dalam program kerja untuk mengasah potensi mahasiswa/i.",
              "Knowledge		: Menjadi wadah bagi mahasiswa/i untuk meningkatkan pengetahuan dengan  memberikan informasi yang penting, faktual, dan relevan. ",
              "Eager		: Aktif dalam melayani keperluan mahasiswa.",
            ]}
          />
          <Mission
            missionAbbreviation="SENSE"
            mission={[
              "SanguinEly 		: Membekali mahasiswa/i dengan keterampilan baik umum maupun spesifik yang akan mendorong mereka untuk memiliki sifat yang proaktif dan inovatif.",
              "Nimble minded 	: Mendengarkan aspirasi serta memberikan solusi terhadap masalah yang dialami oleh mahasiswa/i.",
              "StEady		: Konsisten dalam melayani dan memfasilitasi keperluan mahasiswa/i dengan memberikan program kerja yang bermanfaat dan inovatif.",
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

export default PageHMPSM;
