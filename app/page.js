/* eslint-disable @next/next/no-img-element */
import CountUp from "@/components/CountUp";
import Image from "next/image";
import ContactSection from "./components/ContactSection";
import LandingExperience from "./components/LandingExperience";
import Nav from "./components/Nav";

const tech = [
  ["react", "React"],
  ["nextdotjs", "Next.js"],
  ["nodedotjs", "Node.js"],
  ["supabase", "Supabase"],
  ["mysql", "MySQL"],
  ["javascript", "JavaScript"],
  ["git", "Git"],
  ["github", "GitHub"],
];

const aboutParagraphs = [
  "Hi, I'm Prince Elesi, a Higher National Diploma student in Information Technology at Ho Technical University, based in Aflao, Ghana. I'm working towards becoming a software engineer who builds reliable systems that solve real problems.",
  "I built the Departmental Dues Management System for the COMPSSA HTU Hackathon 2026, with live Paystack payments, Mobile Money reconciliation and an audit trail. Before that, I spent a year teaching ICT, and I also lead the media team at my church, which taught me how to explain things clearly and work with people.",
  "I'm now documenting my journey online, one project at a time. My long-term goal is to turn the systems I build into real businesses that serve people in my community. If you have an internship, a project or just a question, I'd love to hear from you.",
];

const aboutFacts = [
  { label: "Focus", value: "Software engineering", icon: "code" },
  { label: "Currently seeking", value: "Internships and entry-level roles", icon: "briefcase" },
  { label: "Leadership", value: "Media Head, CASA HTU", icon: "users" },
  { label: "Current project", value: "Departmental Dues Management System", icon: "layers" },
];

const aboutFactIcons = {
  code: (
    <>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 5-4 14" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
};

function AboutFactIcon({ name }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {aboutFactIcons[name]}
    </svg>
  );
}

export default function Home() {
  return (
    <LandingExperience>
      <Nav />

      <main id="top">
        <section className="hero wrap">
          <div className="hero-photo">
            <Image
              src="/elesi-portrait.png"
              alt="Prince Elesi"
              width={600}
              height={600}
              priority
            />
          </div>
          <div className="hero-text">
            <h1>
              Aspiring <span className="accent">Software Engineer</span>
            </h1>
            <p className="role">
              HND Information Technology student at Ho Technical University in
              Aflao, Ghana, learning to build reliable web applications with
              React, Next.js, Node.js and Supabase.
            </p>
            <div className="hero-stats">
              <div><strong><CountUp end={3} suffix="+" /></strong><span>Projects Built</span></div>
              <div><strong><CountUp end={1} suffix="+" /></strong><span>Years Teaching ICT</span></div>
              <div><strong>2026</strong><span>Final Year</span></div>
            </div>
            <div className="actions">
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn" href="#contact">Contact Me</a>
            </div>
          </div>
          <a className="scroll-hint" href="#about">
            <span>Scroll to explore</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </section>

        <section id="skills" className="band" aria-label="Technologies">
          <div className="wrap">
            <h2>Technologies</h2>
            <ul className="tech-list">
              {tech.map(([slug, label]) => (
                <li key={slug}>
                  <img
                    src={`https://cdn.simpleicons.org/${slug}/333333`}
                    alt=""
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" className="band">
          <div className="wrap">
            <h2>Experience &amp; Education</h2>
            <ol className="timeline">
              <li>
                <h3>Media Head, CASA HTU</h3>
                <p className="date">Present</p>
                <p>
                  Lead content capture and social media for Christ Apostolic Student Associates (HTU), including flyers, event
                  graphics.
                </p>
                <ul className="chips">
                  <li>Content capture</li>
                  <li>Social media</li>
                  <li>Flyer design</li>
                </ul>
              </li>
              <li>
                <h3>HND Information Technology, Ho Technical University</h3>
                <p className="date">In progress</p>
                <p>Studying for my Higher National Diploma in Information Technology.</p>
              </li>
              <li>
                <h3>ICT Teacher, Awusu Royal Foundation</h3>
                <p className="date">1 year</p>
                <p>Taught ICT to students for one year.</p>
              </li>
            </ol>
          </div>
        </section>

        <section id="about" className="wrap">
          <h2>About</h2>
          <div className="about-layout">
            <div className="about-copy">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <aside className="about-facts">
              <p className="about-facts-title">Quick facts</p>
              <dl>
                {aboutFacts.map(({ label, value, icon }) => (
                  <div className="about-fact" key={label}>
                    <span className="about-fact-icon">
                      <AboutFactIcon name={icon} />
                    </span>
                    <div className="about-fact-copy">
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section id="projects" className="wrap">
          <h2>Projects</h2>

          <article className="project">
            <div className="shot shot-image">
              <Image
                src="/projects/ddms.png"
                alt="DDMS accountant dashboard"
                width={1200}
                height={720}
              />
            </div>
            <div className="info">
              <h3>Departmental Dues Management System</h3>
              <p>
                A role-based platform for collecting and tracking departmental
                dues. Students pay through Paystack in live mode, sign in with
                HTU Google accounts, and treasurers reconcile Mobile Money CSV
                exports with fuzzy matching. Every change is written to an audit
                log.
              </p>
              <ul className="chips">
                <li>Next.js</li><li>Node.js</li><li>Supabase</li><li>PostgreSQL</li><li>Paystack</li>
              </ul>
              <a className="text-link" href="https://github.com/princeatsus">View code</a>
            </div>
          </article>

           

          <article className="project">
            <div className="shot" role="img" aria-label="Screenshot of the RJCNFH church website">
              <span>RJCNFH</span>
            </div>
            <div className="info">
              <h3>RJCNFH church website</h3>
              <p>
                The website for my church family house, built from scratch and
                maintained alongside the media team&apos;s social content.
              </p>
              <ul className="chips">
                <li>HTML</li><li>CSS</li><li>JavaScript</li>
              </ul>
              <a className="text-link" href="https://github.com/princeatsus">View code</a>
            </div>
          </article>

          <article className="project">
            <div className="shot" role="img" aria-label="Preview of FaithFlix">
              <span>FaithFlix</span>
            </div>
            <div className="info">
              <h3>FaithFlix <span className="badge">In progress</span></h3>
              <p>
                A YouTube-style video platform for faith content, with a navy and
                gold interface. The frontend is built and the backend is next.
              </p>
              <ul className="chips">
                <li>HTML, CSS, JavaScript</li><li>PHP</li><li>MySQL</li>
              </ul>
            </div>
          </article>
        </section>

        <ContactSection />
      </main>

      <footer className="site-footer">
        <div className="footer-inner wrap">
          <div className="footer-identity">
            <strong>Prince Elesi</strong>
            <span>Aspiring Software Engineer</span>
          </div>
          <div className="footer-center">
            <nav aria-label="Footer navigation">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
            <p>&copy; 2026 Prince Elesi. All rights reserved.</p>
          </div>
          <a className="back-to-top" href="#top">↑ Back to Top</a>
        </div>
      </footer>
    </LandingExperience>
  );
}