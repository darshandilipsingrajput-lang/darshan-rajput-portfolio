import { useEffect, useState, type CSSProperties, type ElementType, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  ChartPie,
  Database,
  Eraser,
  FileSpreadsheet,
  FileText,
  GraduationCap,
  HeartPulse,
  ListChecks,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Pill,
  Presentation,
  ShieldPlus,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
  learningPercent: number;
};

const technicalSkills: Skill[] = [
  { name: "MS Excel", status: "Skilled", icon: FileSpreadsheet, tone: "mint", learningPercent: 30 },
  { name: "Data Analysis", status: "Skilled", icon: ChartNoAxesColumnIncreasing, tone: "blue", learningPercent: 30 },
  { name: "Data Interpretation", status: "Skilled", icon: Sparkles, tone: "lilac", learningPercent: 30 },
  { name: "Google Sheets", status: "Skilled", icon: FileSpreadsheet, tone: "mint", learningPercent: 30 },
  { name: "Power BI", status: "Learning", icon: ChartNoAxesColumnIncreasing, tone: "amber", learningPercent: 30 },
  { name: "SQL", status: "Learning", icon: Database, tone: "blue", learningPercent: 30 },
  { name: "PostgreSQL (Basic)", status: "Learning", icon: Database, tone: "sky", learningPercent: 30 },
  { name: "Data Visualization", status: "Learning", icon: ChartPie, tone: "rose", learningPercent: 30 },
  { name: "Data Cleaning", status: "Learning", icon: Eraser, tone: "lilac", learningPercent: 30 },
];

const otherSkills: Skill[] = [
  { name: "Data Entry & Validation", status: "Skilled", icon: ListChecks, tone: "blue", learningPercent: 30 },
  { name: "MS Word", status: "Skilled", icon: FileText, tone: "sky", learningPercent: 30 },
  { name: "MS PowerPoint", status: "Skilled", icon: Presentation, tone: "rose", learningPercent: 30 },
  { name: "Medical Terminology", status: "Skilled", icon: Stethoscope, tone: "mint", learningPercent: 30 },
  { name: "Pharmacovigilance", status: "Skilled", icon: ShieldPlus, tone: "amber", learningPercent: 30 },
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
    institute: "J.V.MEHTA JR.COLLAGE KHAMGAON",
    years: "2020–2021",
    score: "90.50%",
  },
  {
    qualification: "Secondary School Certificate (SSC)",
    institute: "C.S.KOTHRI HIGHSCHOOL NANDURA",
    years: "2018–2019",
    score: "79.80%",
  },
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
          {before ? `${before} ` : null}<span className="heading-accent">{highlight}</span>{after ? ` ${after}` : ""}
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
  linkedinUrl?: string | undefined;
  resumeUrl?: string | undefined;
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
              <Linkedin aria-hidden="true" />
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

function BuildStatement() {
  return (
    <section className="build-statement" aria-label="Portfolio approach">
      <div className="portfolio-container build-statement-inner">
        <Reveal className="build-statement-copy">
          <p className="eyebrow">A fresh start</p>
          <h2>BUILD EVERYTHING<br /><span>FROM SCRATCH</span></h2>
        </Reveal>
        <a className="build-statement-link" href="#about" aria-label="Continue to About Me">
          <ArrowRight aria-hidden="true" />
        </a>
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
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  const chartLabel = `${skill.name}: ${skill.learningPercent}%`;

  return (
    <article className="skill-card">
      <span className={`icon-tile skill-icon tone-${skill.tone}`}><Icon size={23} aria-hidden="true" /></span>
      <div className="skill-card-copy">
        <span className="skill-name">{skill.name}</span>
        <span className={`skill-status ${skill.status === "Learning" ? "is-learning" : ""}`}>{skill.status}</span>
      </div>
      <div
        className="skill-chart"
        style={{ "--skill-progress": `${skill.learningPercent ?? 0}%` } as CSSProperties}
        role="img"
        aria-label={chartLabel}
      >
        <span>{skill.learningPercent}%</span>
      </div>
    </article>
  );
}

function SkillGrid({ skills }: { skills: Skill[] }) {
  return (
    <div className="skill-grid">
      {skills.map((skill, index) => (
        <Reveal key={skill.name} delay={index * 45}>
          <SkillCard skill={skill} />
        </Reveal>
      ))}
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
            <SkillGrid skills={technicalSkills} />
          </div>
        </Reveal>
        <Reveal delay={280}>
          <div className="skill-row">
            <h3 className="skill-row-label">Other Skills</h3>
            <SkillGrid skills={otherSkills} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="page-section projects-section">
      <div className="portfolio-container coming-soon-content">
        <SectionHeading eyebrow="My projects" before="" highlight="Coming Soon" align="center" />
      </div>
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
          <SectionHeading eyebrow="Certifications" before="My" highlight="Certificates" />
          <Reveal delay={100}>
            <p className="certificates-empty">No certificates listed yet.</p>
          </Reveal>
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

function ContactSection({ linkedinUrl }: { linkedinUrl?: string | undefined }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const name = String(values.get("name") ?? "").trim();
    const email = String(values.get("email") ?? "").trim();
    const message = String(values.get("message") ?? "").trim();

    if (!name || !email || !message) {
      form.reportValidity();
      return;
    }

    const query = new URLSearchParams({
      subject: `Portfolio message from ${name}`,
      body: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    window.location.href = `mailto:dr9325958877@gmail.com?${query.toString()}`;
  }

  return (
    <section id="contact" className="contact-section">
      <div className="portfolio-container">
        <div className="contact-layout">
          <Reveal className="contact-copy">
            <p className="eyebrow">Open to opportunities</p>
            <h2>Let’s Work <span className="contact-accent">Together</span></h2>
            <p>
              I am actively looking for entry-level opportunities in Data Analytics, Healthcare Analytics, Pharmaceutical Data Management, and Healthcare Technology.
            </p>
            <div className="contact-options" aria-label="Direct contact options">
              <a className="contact-option" href="mailto:dr9325958877@gmail.com">
                <Mail aria-hidden="true" />
                <span><strong>Email</strong><small>dr9325958877@gmail.com</small></span>
              </a>
              <a className="contact-option" href="tel:+919356800181">
                <Phone aria-hidden="true" />
                <span><strong>Phone</strong><small>+91 9356800181</small></span>
              </a>
              {linkedinUrl ? (
                <a className="contact-option" href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Linkedin aria-hidden="true" />
                  <span><strong>LinkedIn</strong><small>View profile</small></span>
                </a>
              ) : null}
            </div>
          </Reveal>
          <Reveal className="contact-form-wrap" delay={100}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="contact-field">
                <span>Your name</span>
                <input name="name" type="text" autoComplete="name" maxLength={100} required />
              </label>
              <label className="contact-field">
                <span>Email address</span>
                <input name="email" type="email" autoComplete="email" maxLength={255} required />
              </label>
              <label className="contact-field contact-message-field">
                <span>Message</span>
                <textarea name="message" rows={5} maxLength={2000} required />
              </label>
              <Button type="submit" className="site-button button-primary contact-submit">
                Send Message <ArrowRight aria-hidden="true" />
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer({ linkedinUrl }: { linkedinUrl?: string | undefined }) {
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
              <Linkedin aria-hidden="true" />
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
  linkedinUrl?: string | undefined;
  resumeUrl?: string | undefined;
  videoSrc: string;
};

export function Portfolio({ linkedinUrl, resumeUrl, videoSrc }: PortfolioProps) {
  return (
    <div className="portfolio-shell">
      <Navbar linkedinUrl={linkedinUrl} resumeUrl={resumeUrl} />
      <main>
        <ScrollVideoHero videoSrc={videoSrc} />
        <BuildStatement />
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