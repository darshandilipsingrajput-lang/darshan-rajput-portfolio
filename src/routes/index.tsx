import { createFileRoute } from "@tanstack/react-router";
import heroVideo from "@/assets/darshan-hero.mp4.asset.json";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Darshan Rajput | Aspiring Data Analyst | B.Pharm Graduate" },
      {
        name: "description",
        content:
          "Darshan Rajput is a B.Pharm graduate and aspiring data analyst building skills in analytics, healthcare data, and pharmaceutical data management.",
      },
      { property: "og:title", content: "Darshan Rajput | Aspiring Data Analyst | B.Pharm Graduate" },
      {
        property: "og:description",
        content:
          "A B.Pharm graduate building a career in data analytics, healthcare analytics, and pharmaceutical data management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Portfolio videoSrc={heroVideo.url} />;
}
