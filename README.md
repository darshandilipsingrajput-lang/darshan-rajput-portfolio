# Darshan Rajput Portfolio

Create HERO SECTION  a scroll-scrubbed hero section using the uploaded video. Pin the hero stage sticky to the top for 200vh-220vh of scroll distance. As the user scrolls down, scrub the video currentTime smoothly so the subject rotates in sync with scroll, reversing when scrolling up. Overlay a dark gradient on the left so the headline "Darshan Rajput" IN BOLD UNI SANS   and CTA buttons stay crisp and readable, and ensure it adapts cleanly to mobile. ALSO ADD SMOOTH AND EASY ANIMATION IN TEXT AND BUTTONS 


import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

function scrollVideoTime(scroll: number, distance: number, duration: number) {
  if (distance <= 0 || !Number.isFinite(duration) || duration <= 0) return 0;
  return Math.min(1, Math.max(0, scroll / distance)) * Math.max(0, duration - 0.05);
}

export function ScrollVideoHero({ videoSrc, posterSrc }: { videoSrc: string; posterSrc?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let desiredTime = 0;

    const seek = () => {
      if (video.readyState < 1 || video.seeking) return;
      if (Math.abs(video.currentTime - desiredTime) > 0.025) video.currentTime = desiredTime;
    };

    const update = () => {
      frame = 0;
      const top = section.getBoundingClientRect().top;
      const pinned = section.firstElementChild;
      if (!(pinned instanceof HTMLElement)) return;
      desiredTime = reducedMotion.matches ? 0 : scrollVideoTime(
        Number.parseFloat(window.getComputedStyle(pinned).top) - top,
        section.offsetHeight - pinned.offsetHeight,
        video.duration,
      );
      seek();
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    video.pause();
    video.addEventListener("loadedmetadata", schedule);
    video.addEventListener("seeked", seek);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();

    return () => {
      window.cancelAnimationFrame(frame);
      video.removeEventListener("loadedmetadata", schedule);
      video.removeEventListener("seeked", seek);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section ref={sectionRef} className="scroll-hero" aria-label="Introduction">
      <div className="scroll-hero-stage">
        <video ref={videoRef} className="scroll-hero-video" src={videoSrc} poster={posterSrc}
          muted playsInline preload="auto" />
        <div className="scroll-hero-shade" aria-hidden="true" />
        <div className="scroll-hero-content mx-auto w-full max-w-6xl px-5">
          <div className="scroll-hero-copy">
            <p className="label">Video Editor & Content Creator · India</p>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-bold uppercase leading-[0.94]">
              Darshan<br /><span className="text-primary">Rajput</span>
            </h1>
            <p className="mt-6 max-w-sm text-base text-foreground/80 md:text-lg">
              Turning life into visual stories, one edit at a time — mobile to PC workflow.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full"><a href="#work"><Play className="mr-2 h-4 w-4" /> View My Work</a></Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-background/60"><a href="#contact">Let's Collaborate <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button>
            </div>
          </div>
        </div>
        <a href="#about" className="scroll-hero-next label inline-flex items-center gap-3">
          <ArrowDown className="h-4 w-4 text-primary" />01 — About Darshan
        </a>
      </div>
    </section>
  );
}



.scroll-hero { position: relative; height: 220svh; }
.scroll-hero-stage { position: sticky; top: 73px; height: calc(100svh - 96px); min-height: 620px; overflow: hidden; background: var(--background); }
.scroll-hero-video { position: absolute; inset: 0 0 0 20%; width: 80%; height: 100%; object-fit: cover; object-position: center; }
.scroll-hero-shade { position: absolute; inset: 0; background: linear-gradient(90deg, var(--background) 0%, color-mix(in oklab, var(--background) 92%, transparent) 20%, transparent 58%), linear-gradient(0deg, var(--background), transparent 24%); }
.scroll-hero-content { position: relative; height: 100%; display: flex; align-items: center; }
.scroll-hero-copy { width: 45%; }
.scroll-hero-next { position: absolute; bottom: 26px; left: max(20px, calc((100% - 1112px) / 2)); text-decoration: none; }

@media (max-width: 767px) {
  .scroll-hero { height: 200svh; }
  .scroll-hero-stage { top: 60px; min-height: 650px; height: calc(100svh - 80px); }
  .scroll-hero-video { inset: 0; width: 100%; height: 62%; }
  .scroll-hero-shade { background: linear-gradient(0deg, var(--background) 0%, var(--background) 30%, transparent 65%); }
  .scroll-hero-content { align-items: flex-end; }
  .scroll-hero-copy { width: 100%; padding-bottom: 76px; }
}


Use hero section of above and Adjust all things And make Protfolio better and Attractive to look


Create a premium, modern, fully responsive, single-page personal portfolio website for Darshan Dilipsing Rajput, using React.js and Tailwind CSS.

CRITICAL RULES

I am a FRESHER in Data Analytics with a B.Pharm background. Never present me as an experienced Data Analyst.

My pharmacy work is domain experience, NOT Data Analytics experience.

Career goal: Data Analytics, Healthcare Analytics, Pharmaceutical Data Management. Never mention programming or software development as a goal.

I do NOT have GitHub. Do not add any GitHub icon, link, "View Code" button, or fake repositories/demos anywhere.

Do not invent certificates, links, proficiency percentages, or achievements.

Use only the information below. Do not use any other person's details.


DESIGN SYSTEM

Font: Poppins or Plus Jakarta Sans, bold headings, ONE word per major heading highlighted in amber yellow.

Colors: White #FFFFFF, Soft Cream #FFF9E9, Amber #FFC21A, Heading #171717, Body #666666, Border #EEEEEE.

Rounded-2xl cards, soft shadows, yellow gradient blobs, curved background shapes, spacious professional layout.

Eyebrow labels: small uppercase text with a short yellow line before it.

Buttons: primary = solid yellow with dark text and arrow icon; secondary = white with border. All buttons lift slightly on hover.

PREMIUM CLICKABLE ICONS (site-wide)

Use lucide-react for UI icons and react-icons (Simple Icons / Font Awesome brands) for brand logos (Excel, Power BI, PostgreSQL, Word, PowerPoint, Google Sheets, LinkedIn).

Place icons inside rounded yellow-tinted squares or glass circles with a soft gradient and subtle shadow. On hover: lift, glow, slight scale, amber border.

Every icon that points somewhere is a real link with aria-label, tooltip, target="_blank" and rel="noopener noreferrer" for external links.

Social icons: LinkedIn [PASTE MY LINKEDIN URL], Email (mailto:dr9325958877@gmail.com), Phone (tel:+919356800181). NO GitHub.

SCROLL ANIMATION: BLUR-TO-CLEAR (important)

Build a reusable <Reveal> component using IntersectionObserver (threshold about 0.15) that works in BOTH directions.

When a section or element enters the viewport: animate from opacity 0, filter blur(14px), translateY(40px), scale(0.98) to opacity 1, blur(0), translateY(0), scale(1).

When it leaves the viewport (scrolling up or down): return smoothly to the blurred state, so it blurs again and clears again every time it comes back into view.

Transition: about 900ms with cubic-bezier(0.22, 1, 0.36, 1). Stagger child cards by about 100ms.

Wrap every section heading, paragraph, card, and image in <Reveal>. Do not apply it to the sticky navbar.

Enable smooth scrolling for nav links. Respect prefers-reduced-motion (disable blur and movement). Use will-change sparingly for performance.

SECTIONS (in this order)

NAVBAR (sticky, glass blur background)
Logo "DARSHAN RAJPUT" with a small yellow dot. Links: Home, About, Skills, Projects, Education, Certificates, Contact (active link has a yellow underline, highlights based on scroll position). Right side: yellow "Download CV" button with download icon linked to my resume file [I WILL UPLOAD resume.pdf]. Mobile: hamburger menu.


Card 1: analytics icon, "Turning Data into Meaningful Insights"

Card 2: chart icon, vertical list "Learn / Analyze / Visualize / Improve"

ABOUT ME
Eyebrow "ABOUT ME", heading "Get to Know Me". Text: "I am a Bachelor of Pharmacy graduate interested in combining pharmaceutical knowledge with modern data analytics. As a fresher in Data Analytics, I am developing my knowledge of MS Excel, SQL, Power BI, PostgreSQL, and data visualization. My academic background and practical pharmacy experience have helped me understand healthcare documentation, prescription verification, patient information management, and pharmaceutical operations. My goal is to build a career in Data Analytics and contribute to data-driven decision-making across healthcare and pharmaceutical industries." Yellow button "More About Me →".

Right: info card with a 2-column, 3-row grid (icon in yellow-tinted square + label + value). Email is a mailto link and Phone is a tel link:

Name: Darshan Dilipsing Rajput

Email: dr9325958877@gmail.com

Location: Buldhana, Maharashtra, India

Phone: +91 9356800181

Education: Bachelor of Pharmacy (B.Pharm)

CGPA: 7.38/10

TECHNICAL SKILLS (two auto-scrolling rows)
Eyebrow "MY SKILLS", heading "Technical Skills". Description: "Developing technical and analytical skills to understand, organize, analyze, and visualize data, with an interest in healthcare and pharmaceutical applications." Soft cream gradient background band.

Every skill is its own separate RECTANGLE tab/card (rounded-xl, white, soft shadow, about 200x80px), with its own distinct premium icon in a tinted rounded square and the skill name. Each tab uses a different icon and a different soft icon tint.

Small badge on each tab: "Skilled" (solid amber) or "Learning" (outlined amber) so acquired and in-progress skills are clearly distinguished. No percentages.

ROW 1, "Technical Skills", moves RIGHT to LEFT continuously (infinite seamless marquee): MS Excel (Skilled), Data Analysis (Skilled), Data Interpretation (Skilled), Google Sheets (Skilled), Power BI (Learning), SQL (Learning), PostgreSQL (Basic), Data Visualization (Learning), Data Cleaning (Learning).

ROW 2, "Other Skills", moves LEFT to RIGHT continuously (infinite seamless marquee): Data Entry & Validation (Skilled), MS Word (Skilled), MS PowerPoint (Skilled), Medical Terminology (Skilled), Pharmacovigilance (Skilled).

Small row labels above each row: "Technical Skills" and "Other Skills".

Implement with CSS keyframe marquee: duplicate each row's content for a seamless loop, pause on hover, fade-edge mask on left and right, slower speed on mobile. Respect prefers-reduced-motion (stop scrolling and show a wrapped grid instead).

FEATURED PROJECTS
Eyebrow "MY PROJECTS", heading "Featured Projects". Description: "Explore my academic projects demonstrating my pharmaceutical knowledge, research understanding, and interest in healthcare data." Two cards side by side on desktop, stacked on mobile, each with a relevant illustration, yellow tag badge, description, yellow-bullet points, and ONE button "View Details" (yellow, opens a modal with the project summary). No GitHub or demo buttons.

Project 1: "Formulation and Evaluation of Herbal Soap Using Medicinal Plants". Tag: "Pharmaceutical Research Project". Description: "An academic research project focused on the formulation and evaluation of herbal soap using medicinal plant ingredients." Bullets: Studied medicinal plant ingredients. / Explored herbal formulation development. / Evaluated physical and quality parameters. / Studied pharmaceutical applications of herbal ingredients.

Project 2: "Drug Information and Pharmacovigilance Awareness Project". Tag: "Healthcare & Pharmaceutical Project". Description: "An academic project focused on drug safety, adverse drug reactions, and the importance of pharmacovigilance awareness." Bullets: Studied adverse drug reactions. / Explored drug safety information. / Studied medication safety awareness. / Explored the importance of ADR reporting.

EDUCATION and CERTIFICATIONS (two columns)
Left, eyebrow "EDUCATION", heading "My Education". Four stacked cards with graduation-cap icon, qualification, institute, years on the right, and score:

Bachelor of Pharmacy (B.Pharm), Kasturi Shikshan Sanstha College of Pharmacy, Pune, 2025-2026, CGPA 7.38/10

Diploma in Pharmacy (D.Pharm), Adv. V.R. Manohar Institute of Diploma in Pharmacy, Nagpur, 2022-2023, 70.64%

Higher Secondary Certificate (HSC), 2020-2021, 90.50%

Secondary School Certificate (SSC), 2018-2019, 79.80%

Right, eyebrow "CERTIFICATIONS", heading "Certifications & Research". There are no professional certificates, so show only a subsection "Research & Publications" with two cards:

Review on Gut Microbiota and Its Role in Drug Metabolism

Evaluation and Formulation of Herbal Soap Using Medicinal Plants

Do not invent certificates or providers.

MY PROFESSIONAL BACKGROUND
Heading "My Professional Background", with a note "Pharmacy domain experience". Four attractive icon cards:

Pharmacy Operations: Prescription verification, Medicine dispensing, Pharmaceutical documentation, Patient information management

Healthcare Documentation: Patient records, Prescription details, Data entry, Information verification

Inventory Management: Medicine stock records, Expiry monitoring, Inventory documentation

Patient Support: Patient counselling, Medication information, Healthcare awareness activities

Never label this as Data Analyst experience.

CTA BANNER
Wide rounded yellow-tinted card. Heading "Let's Work Together" ("Together" in yellow). Text: "I am actively looking for entry-level opportunities in Data Analytics, Healthcare Analytics, Pharmaceutical Data Management, and Healthcare Technology." Buttons: "Send Email" (yellow, mailto:dr9325958877@gmail.com) and "Connect on LinkedIn" (outline, [PASTE MY LINKEDIN URL]).

FOOTER
"DARSHAN RAJPUT", "Aspiring Data Analyst | B.Pharm Graduate", LinkedIn / Email / Phone icons (no GitHub), "© 2026 Darshan Rajput. All Rights Reserved."

TECHNICAL REQUIREMENTS

Reusable components (Navbar, Hero, Reveal, SkillMarquee, ProjectCard, etc.), clean organized code

Fully responsive, mobile hamburger nav, optimized images, fast loading, accessible (alt text, focus states, contrast)

SEO title "Darshan Rajput | Aspiring Data Analyst | B.Pharm Graduate" and a meta description

Same visual identity throughout; avoid excessive decoration

FINAL GOAL

A premium portfolio for recruiters that presents me as an ASPIRING DATA ANALYST WITH PHARMACY KNOWLEDGE NOT PHARMACEUTICAL, without exaggerating experience, skills, certifications, or projects.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0c5f10f2-ec62-4697-aa7e-9a6d8d1806ab).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
