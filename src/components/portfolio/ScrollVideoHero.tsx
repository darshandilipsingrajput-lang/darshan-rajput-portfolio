import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

type ScrollVideoHeroProps = {
  videoSrc: string;
};

export function ScrollVideoHero({ videoSrc }: ScrollVideoHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const video = videoRef.current;
    if (!section || !stage || !video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let desiredTime = 0;

    const seekToDesiredTime = () => {
      if (video.readyState < 1 || video.seeking || !Number.isFinite(video.duration)) return;
      if (Math.abs(video.currentTime - desiredTime) > 0.025) video.currentTime = desiredTime;
    };

    const update = () => {
      frame = 0;
      const scrollDistance = section.offsetHeight - stage.offsetHeight;
      const stickyTop = Number.parseFloat(window.getComputedStyle(stage).top);
      const traveled = stickyTop - section.getBoundingClientRect().top;
      const progress = scrollDistance > 0 ? Math.min(1, Math.max(0, traveled / scrollDistance)) : 0;
      const lastFrameTime = Math.max(0, video.duration - 0.05);

      desiredTime = reducedMotion.matches ? 0 : progress * lastFrameTime;
      seekToDesiredTime();
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    video.pause();
    video.addEventListener("loadedmetadata", scheduleUpdate);
    video.addEventListener("seeked", scheduleUpdate);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    reducedMotion.addEventListener("change", scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.cancelAnimationFrame(frame);
      video.removeEventListener("loadedmetadata", scheduleUpdate);
      video.removeEventListener("seeked", scheduleUpdate);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      reducedMotion.removeEventListener("change", scheduleUpdate);
    };
  }, []);

  return (
    <section ref={sectionRef} id="home" className="scroll-hero" aria-label="Introduction">
      <div ref={stageRef} className="scroll-hero-stage">
        <video
          ref={videoRef}
          className="scroll-hero-video"
          src={videoSrc}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="scroll-hero-shade" aria-hidden="true" />
        <div className="scroll-hero-content portfolio-container">
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow hero-eyebrow">Aspiring Data Analyst · B.Pharm Graduate</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="hero-title">
                Darshan
                <br />
                <span>Rajput</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="hero-description">
                Connecting pharmaceutical knowledge with thoughtful, data-led healthcare insights.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="hero-actions">
                <Button asChild size="lg" className="site-button button-primary">
                  <a href="#projects">
                    Explore My Projects <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="site-button button-outline-light">
                  <a href="#contact">Let’s Connect</a>
                </Button>
              </div>
            </Reveal>
          </div>
          <a className="hero-scroll-cue" href="#about" aria-label="Scroll to About Me">
            <span className="hero-scroll-icon"><ArrowDown aria-hidden="true" /></span>
            <span>Scroll to explore</span>
          </a>
        </div>
      </div>
    </section>
  );
}