import { useEffect, useState, type ElementType } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  ChartPie,
  Check,
  ChevronDown,
  Database,
  Eraser,
  FileSpreadsheet,
  GraduationCap,
  HeartPulse,
  House,
  ListChecks,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Phone,
  Pill,
  ShieldCheck,
  ShieldPlus,
  Sparkles,
  Sprout,
  Stethoscope,
  UserRound,
  X,
} from "lucide-react";
import {
  SiGooglesheets,
  SiLinkedin,
  SiMicrosoftpowerpoint,
  SiMicrosoftexcel,
  SiMicrosoftword,
  SiPostgresql,
  SiPowerbi,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "./Reveal";
import { ScrollVideoHero } from "./ScrollVideoHero";

const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Certificates", id: "certificates" },
  { label: "Contact", id: "contact" },
];

type Skill = {
  name: string;
  status: "Skilled" | "Learning";
  icon: ElementType;
  tone: string;
};

const technicalSkills: Skill[] = [
  { name: "MS Excel", status: "Skilled", icon: SiMicrosoftexcel, tone: "mint" },
  { name: "Data Analysis", status: "Skilled", icon: ChartNoAxesColumnIncreasing, tone: "blue" },
  { name: "Data Interpretation", status: "Skilled", icon: Sparkles, tone: "lilac" },
  { name: "Google Sheets", status: "Skilled", icon: SiGooglesheets, tone: "mint" },
  { name: "Power BI", status: "Learning", icon: SiPowerbi, tone: "amber" },
  { name: "SQL", status: "Learning", icon: Database, tone: "blue" },
  { name: "PostgreSQL (Basic)", status: "Learning", icon: SiPostgresql, tone: "sky" },
  { name: "Data Visualization", status: "Learning", icon: ChartPie, tone: "rose" },
  { name: "Data Cleaning", status: "Learning", icon: Eraser, tone: "lilac" },
];

const otherSkills: Skill[] = [
  { name: "Data Entry & Validation", status: "Skilled", icon: ListChecks, tone: "blue" },
  { name: "MS Word", status: "Skilled", icon: SiMicrosoftword, tone: "sky" },
  { name: "MS PowerPoint", status: "Skilled", icon: SiMicrosoftpowerpoint, tone: "rose" },
  { name: "Medical Terminology", status: "Skilled", icon: Stethoscope, tone: "mint" },
  { name: "Pharmacovigilance", status: "Skilled", icon: ShieldPlus, tone: "amber" },
];

type Project = {
  title: string;
  tag: string;
  description: string;
  bullets: string[];
  icon: ElementType;
  detailIcon: ElementType;
  artLabel: string;
};

const projects: Project[] = [
  {
    title: "Formulation and Evaluation of Herbal Soap Using Medicinal Plants",
    tag: "Pharmaceutical Research Project",
    description:
      "An academic research project focused on the formulation and evaluation of herbal soap using medicinal plant ingredients.",
    bullets: [
      "Studied medicinal plant ingredients.",
      "Explored herbal formulation development.",
      "Evaluated physical and quality parameters.",
      "Studied pharmaceutical applications of herbal ingredients.",
    ],
    icon: Sprout,
    detailIcon: Microscope,
    artLabel: "Herbal formulation",
  },
  {
    title: "Drug Information and Pharmacovigilance Awareness Project",
    tag: "Healthcare & Pharmaceutical Project",
    description:
      "An academic project focused on drug safety, adverse drug reactions, and the importance of pharmacovigilance awareness.",
    bullets: [
      "Studied adverse drug reactions.",
      "Explored drug safety information.",
      "Studied medication safety awareness.",
      "Explored the importance of ADR reporting.",
    ],
    icon: ShieldCheck,
    detailIcon: Pill,
    artLabel: "Medication safety",
  },
];

const education = [
  {
    qualification: "Bachelor of Pharmacy (B.Pharm)",
    institute: "Kasturi Shikshan Sanstha College of Pharmacy, Pune",
    years: "2025–2026",
    score: "CGPA 7.38/10",
  },
  {
    qualification: "Diploma in Pharmacy (D.Pharm)",
    institute: "Adv. V.R. Manohar Institute of Diploma in Pharmacy, Nagpur",
    years: "2022–2023",
    score: "70.64%",
  },
  {
    qualification: "Higher Secondary Certificate (HSC)",
    years: "2020–2021",
    score: "90.50%",
  },
  {
    qualification: "Secondary School Certificate (SSC)",
    years: "2018–2019",
    score: "79.80%",
  },
];

const research = [
  "Review on Gut Microbiota and Its Role in Drug Metabolism",
  "Evaluation and Formulation of Herbal Soap Using Medicinal Plants",
];

const professionalAreas = [
  {
    title: "Pharmacy Operations",
    icon: Pill,
    details: [
      "Prescription verification",
      "Medicine dispensing",
      "Pharmaceutical documentation",
      "Patient information management",
    ],
  },
  {
    title: "Healthcare Documentation",
    icon: FileSpreadsheet,
    details: ["Patient records", "Prescription details", "Data entry", "Information verification"],
  },
  {
    title: "Inventory Management",
    icon: ListChecks,
    details: ["Medicine stock records", "Expiry monitoring", "Inventory documentation"],
  },
  {
    title: "Patient Support",
    icon: HeartPulse,
    details: ["Patient counselling", "Medication information", "Healthcare awareness activities"],
  },
];

const contactDetails = [
  { label: "Name", value: "Darshan Dilipsing Rajput", icon: UserRound },
  { label: "Email", value: "dr9325958877@gmail.com", href: "mailto:dr9325958877@gmail.com", icon: Mail },
  { label: "Location", value: "Buldhana, Maharashtra, India", icon: MapPin },
  { label: "Phone", value: "+91 9356800181", href: "tel:+919356800181", icon: Phone },
  { label: "Education", value: "Bachelor of Pharmacy (B.Pharm)", icon: GraduationCap },
  { label: "CGPA", value: "7.38/10", icon: Award },
];

type SectionHeadingProps = {
  eyebrow: string;
  before: string;
  highlight: string;
  after?: string;
  description?: string;
  align?: "left" | "center";
};

function SectionHeading({
  eyebrow,
  before,
  highlight,
  after = "",
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="section-title">
          {before} <span className="heading-accent">{highlight}</span>{after ? ` ${after}` : ""}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={160}>
          <p className="section-description">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

type NavbarProps = {
  linkedinUrl?: string;
  resumeUrl?: string;
};

function Navbar({ linkedinUrl, resumeUrl }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const targets = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { rootMargin: "-26% 0px -62% 0px", threshold: 0 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-inner portfolio-container">
        <a className="brand-mark" href="#home" onClick={closeMenu} aria-label="Darshan Rajput, home">
          <span>DARSHAN RAJPUT</span>
          <span className="brand-dot" aria-hidden="true" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "nav-link is-active" : "nav-link"}
              aria-current={activeSection === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          {resumeUrl ? (
            <Button asChild size="sm" className="site-button button-primary nav-cv-button">
              <a href={resumeUrl} download="Darshan-Rajput-CV.pdf" aria-label="Download CV">
                <ArrowDownRight aria-hidden="true" /> Download CV
              </a>
            </Button>
          ) : null}
          {linkedinUrl ? (
            <a
              className="nav-linkedin-icon icon-link"
              href={linkedinUrl}
              aria-label="Open Darshan Rajput’s LinkedIn profile"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin aria-hidden="true" />
            </a>
          ) : null}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="mobile-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            title={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "nav-link is-active" : "nav-link"}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            {item.label}
          </a>
        ))}
        {resumeUrl ? (
          <a className="mobile-download" href={resumeUrl} download="Darshan-Rajput-CV.pdf" onClick={closeMenu}>
            Download CV <ArrowDownRight aria-hidden="true" />
          </a>
        ) : null}
      </nav>
    </header>
  );
}

function IntroCards() {
  return (
    <section className="intro-section" aria-label="Approach">
      <div className="portfolio-container intro-grid">
        <Reveal className="intro-card intro-card--statement">
          <div className="icon-tile tone-amber"><ChartNoAxesColumnIncreasing aria-hidden="true" /></div>
          <div>
            <p className="eyebrow">A thoughtful approach</p>
            <h2>Turning Data into Meaningful Insights</h2>
          </div>
          <ArrowUpRight className="intro-arrow" aria-hidden="true" />
        </Reveal>
        <Reveal className="intro-card intro-card--process" delay={100}>
          <div className="icon-tile tone-blue"><ChartPie aria-hidden="true" /></div>
          <div className="process-content">
            <p className="eyebrow">A clear process</p>
            <ol className="process-list">
              {["Learn", "Analyze", "Visualize", "Improve"].map((step, index) => (
                <li key={step}>
                  <span className="process-number">0{index + 1}</span>{step}
                  {index < 3 ? <ArrowRight className="process-arrow" aria-hidden="true" /> : null}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="page-section about-section">
      <div className="portfolio-container about-grid">
        <div className="about-copy">
          <SectionHeading eyebrow="About me" before="Get to" highlight="Know" after="Me" />
          <Reveal delay={180}>
            <p className="about-description">
              I am a Bachelor of Pharmacy graduate interested in combining pharmaceutical knowledge with modern data analytics. As a fresher in Data Analytics, I am developing my knowledge of MS Excel, SQL, Power BI, PostgreSQL, and data visualization. My academic background and practical pharmacy experience have helped me understand healthcare documentation, prescription verification, patient information management, and pharmaceutical operations. My goal is to build a career in Data Analytics and contribute to data-driven decision-making across healthcare and pharmaceutical industries.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Button asChild className="site-button button-primary">
              <a href="#background">More About Me <ArrowRight aria-hidden="true" /></a>
            </Button>
          </Reveal>
        </div>
        <Reveal className="info-panel" delay={120}>
          <div className="info-panel-top">
            <div>
              <p className="eyebrow">A little about me</p>
              <h3>Personal Details</h3>
            </div>
            <div className="info-panel-mark" aria-hidden="true"><UserRound /></div>
          </div>
          <div className="info-grid">
            {contactDetails.map((item) => {
              const Icon = item.icon;
              return (
                <div className="info-item" key={item.label}>
                  <span className="icon-tile icon-tile--small tone-amber"><Icon aria-hidden="true" /></span>
                  <div className="info-item-copy">
                    <span className="info-label">{item.label}</span>
                    {"href" in item ? (
                      <a className="info-value info-value-link" href={item.href}>{item.value}</a>
                    ) : (
                      <span className="info-value">{item.value}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <article className="skill-card">
      <span className={`icon-tile skill-icon tone-${skill.tone}`}><Icon size={23} aria-hidden="true" /></span>
      <span className="skill-name">{skill.name}</span>
      <span className={`skill-status ${skill.status === "Learning" ? "is-learning" : ""}`}>{skill.status}</span>
    </article>
  );
}

function SkillMarquee({ skills, direction }: { skills: Skill[]; direction: "left" | "right" }) {
  return (
    <div className={`skill-marquee marquee-${direction}`}>
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={`skill-copy-${copy}`} aria-hidden={copy === 1}>
            {skills.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="page-section skills-section">
      <div className="portfolio-container">
        <SectionHeading
          eyebrow="My skills"
          before="Technical"
          highlight="Skills"
          description="Developing technical and analytical skills to understand, organize, analyze, and visualize data, with an interest in healthcare and pharmaceutical applications."
          align="center"
        />
        <Reveal delay={180}>
          <div className="skill-row">
            <h3 className="skill-row-label">Technical Skills</h3>
            <SkillMarquee skills={technicalSkills} direction="left" />
          </div>
        </Reveal>
        <Reveal delay={280}>
          <div className="skill-row">
            <h3 className="skill-row-label">Other Skills</h3>
            <SkillMarquee skills={otherSkills} direction="right" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectArtwork({ project }: { project: Project }) {
  const MainIcon = project.icon;
  const SecondaryIcon = project.detailIcon;
  return (
    <div className="project-artwork" aria-label={`${project.artLabel} illustration`} role="img">
      <div className="artwork-arc artwork-arc--one" />
      <div className="artwork-arc artwork-arc--two" />
      <div className="artwork-center">
        <span className="artwork-center-icon"><MainIcon aria-hidden="true" /></span>
        <span className="artwork-detail-icon"><SecondaryIcon aria-hidden="true" /></span>
      </div>
      <div className="artwork-label artwork-label--top"><Check aria-hidden="true" /> {project.artLabel}</div>
      <div className="artwork-label artwork-label--bottom"><Sparkles aria-hidden="true" /> Academic project</div>
    </div>
  );
}

function ProjectCard({ project, index, onView }: { project: Project; index: number; onView: (project: Project) => void }) {
  return (
    <Reveal className="project-card-reveal" delay={index * 100}>
      <article className="project-card">
        <Reveal className="project-art-reveal" delay={80}>
          <ProjectArtwork project={project} />
        </Reveal>
        <div className="project-card-content">
          <Reveal delay={120}>
            <span className="project-tag">{project.tag}</span>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </Reveal>
          <Reveal delay={200}>
            <ul className="project-highlights">
              {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={280}>
            <Button type="button" className="site-button button-primary project-view-button" onClick={() => onView(project)}>
              View Details <ArrowUpRight aria-hidden="true" />
            </Button>
          </Reveal>
        </div>
      </article>
    </Reveal>
  );
}

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="page-section projects-section">
      <div className="portfolio-container">
        <SectionHeading
          eyebrow="My projects"
          before="Featured"
          highlight="Projects"
          description="Explore my academic projects demonstrating my pharmaceutical knowledge, research understanding, and interest in healthcare data."
          align="center"
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} onView={setSelectedProject} />
          ))}
        </div>
      </div>
      <Dialog open={selectedProject !== null} onOpenChange={(open) => { if (!open) setSelectedProject(null); }}>
        <DialogContent className="portfolio-dialog">
          {selectedProject ? (
            <>
              <DialogHeader className="portfolio-dialog-header">
                <span className="project-tag">{selectedProject.tag}</span>
                <DialogTitle className="portfolio-dialog-title">{selectedProject.title}</DialogTitle>
                <DialogDescription className="portfolio-dialog-description">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              <ul className="project-highlights dialog-highlights">
                {selectedProject.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="page-section education-section">
      <div className="portfolio-container education-grid">
        <div className="education-column">
          <SectionHeading eyebrow="Education" before="My" highlight="Education" />
          <div className="education-list">
            {education.map((item, index) => (
              <Reveal key={item.qualification} delay={index * 90}>
                <article className="education-card">
                  <span className="icon-tile tone-amber education-icon"><GraduationCap aria-hidden="true" /></span>
                  <div className="education-main">
                    <h3>{item.qualification}</h3>
                    {"institute" in item ? <p className="education-institute">{item.institute}</p> : null}
                    <span className="education-score">{item.score}</span>
                  </div>
                  <span className="education-years">{item.years}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <div id="certificates" className="research-column">
          <SectionHeading eyebrow="Certifications" before="Certifications &" highlight="Research" />
          <Reveal delay={100}>
            <p className="research-note">Research &amp; Publications</p>
          </Reveal>
          <div className="research-list">
            {research.map((title, index) => (
              <Reveal key={title} delay={150 + index * 100}>
                <article className="research-card">
                  <span className="icon-tile tone-blue research-icon"><Microscope aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <ArrowUpRight className="research-arrow" aria-hidden="true" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfessionalBackgroundSection() {
  return (
    <section id="background" className="page-section background-section">
      <div className="portfolio-container">
        <div className="background-section-head">
          <SectionHeading eyebrow="Pharmacy domain experience" before="My Professional" highlight="Background" align="center" />
          <Reveal delay={180}>
            <span className="domain-experience-note"><BriefcaseBusiness aria-hidden="true" /> Pharmacy domain experience</span>
          </Reveal>
        </div>
        <div className="background-grid">
          {professionalAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.title} delay={index * 90}>
                <article className="background-card">
                  <span className="icon-tile tone-amber background-icon"><Icon aria-hidden="true" /></span>
                  <h3>{area.title}</h3>
                  <ul>
                    {area.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ linkedinUrl }: { linkedinUrl?: string }) {
  return (
    <section id="contact" className="contact-section">
      <div className="portfolio-container">
        <Reveal className="contact-band">
          <div className="contact-copy">
            <p className="eyebrow">Open to opportunities</p>
            <h2>Let’s Work <span className="contact-accent">Together</span></h2>
            <p>
              I am actively looking for entry-level opportunities in Data Analytics, Healthcare Analytics, Pharmaceutical Data Management, and Healthcare Technology.
            </p>
          </div>
          <div className="contact-actions">
            <Button asChild className="site-button button-primary">
              <a href="mailto:dr9325958877@gmail.com">Send Email <ArrowUpRight aria-hidden="true" /></a>
            </Button>
            {linkedinUrl ? (
              <Button asChild variant="outline" className="site-button button-outline">
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn <SiLinkedin aria-hidden="true" />
                </a>
              </Button>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer({ linkedinUrl }: { linkedinUrl?: string }) {
  return (
    <footer className="site-footer">
      <div className="portfolio-container footer-inner">
        <div className="footer-brand">
          <a className="brand-mark brand-mark--footer" href="#home">
            <span>DARSHAN RAJPUT</span><span className="brand-dot" aria-hidden="true" />
          </a>
          <p>Aspiring Data Analyst <span aria-hidden="true">|</span> B.Pharm Graduate</p>
        </div>
        <div className="footer-socials" aria-label="Contact links">
          {linkedinUrl ? (
            <a className="social-link" href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <SiLinkedin aria-hidden="true" />
            </a>
          ) : null}
          <a className="social-link" href="mailto:dr9325958877@gmail.com" aria-label="Email Darshan" title="Email">
            <Mail aria-hidden="true" />
          </a>
          <a className="social-link" href="tel:+919356800181" aria-label="Call Darshan" title="Phone">
            <Phone aria-hidden="true" />
          </a>
        </div>
        <p className="footer-copyright">© 2026 Darshan Rajput. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

type PortfolioProps = {
  linkedinUrl?: string;
  resumeUrl?: string;
  videoSrc: string;
};

export function Portfolio({ linkedinUrl, resumeUrl, videoSrc }: PortfolioProps) {
  return (
    <div className="portfolio-shell">
      <Navbar linkedinUrl={linkedinUrl} resumeUrl={resumeUrl} />
      <main>
        <ScrollVideoHero videoSrc={videoSrc} />
        <IntroCards />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ProfessionalBackgroundSection />
        <ContactSection linkedinUrl={linkedinUrl} />
      </main>
      <Footer linkedinUrl={linkedinUrl} />
    </div>
  );
}