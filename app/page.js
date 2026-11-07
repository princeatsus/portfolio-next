/* eslint-disable @next/next/no-img-element */
import Nav from "./components/Nav";

const tech = [
  ["react", "React"],
  ["nextdotjs", "Next.js"],
  ["nodedotjs", "Node.js"],
  ["express", "Express"],
  ["supabase", "Supabase"],
  ["postgresql", "PostgreSQL"],
  ["mysql", "MySQL"],
  ["javascript", "JavaScript"],
  ["git", "Git"],
  ["github", "GitHub"],
];

export default function Home() {
  return (
    <>
      <Nav />

      <main id="top">
        <section className="hero wrap">
          <div className="hero-text">
            <h1>Prince Atsu</h1>
            <p className="role">Full Stack Developer and IT Student</p>
            <p className="lead">
              Building web apps with React, Next.js, Node.js and Supabase. Based
              in Aflao, Ghana.
            </p>
            <div className="actions">
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn" href="#contact">Get in Touch</a>
            </div>
          </div>
          {/* The Spline scene goes in this box later */}
                   <div className="hero-visual">
            <iframe
              src="https://my.spline.design/3dtextcopy-gWDPqmRxSXyWu2c4HZBOrA2e/"
              title="3D letters EPA"
              frameBorder="0"
            />
          </div>
          <a className="scroll-hint" href="#about">
  <span>Scroll to explore</span>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
</a>
        </section>

        <section className="band" aria-label="Technologies">
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

        <section id="about" className="wrap">
          <h2>About me</h2>
          <div className="about">
            <div className="prose">
              <p>
                I&apos;m an HND Information Technology student at Ho Technical
                University. I like building systems that solve problems people
                around me actually have, like collecting departmental dues and
                tracking lecture attendance.
              </p>
              <p>
                My biggest project so far is a dues management platform I built
                for the COMPSSA HTU Hackathon 2026. It takes live Paystack
                payments, restricts sign-in to HTU accounts and keeps a
                tamper-evident audit log.
              </p>
              <p>
                Outside code, I&apos;m Media Head at RJCNFH, where I manage
                content capture and social media. Before that I taught ICT for a
                year at Awusu Royal Foundation.
              </p>
              <p>
                <a className="text-link" href="/resume.pdf">Download resume</a>
              </p>
            </div>
            <dl className="stats">
              <div><dt>Projects</dt><dd>4</dd></div>
              <div><dt>Teaching ICT</dt><dd>1 year</dd></div>
              <div><dt>Hackathon</dt><dd>2026</dd></div>
            </dl>
          </div>
        </section>

        <section id="experience" className="band">
          <div className="wrap">
            <h2>Experience &amp; Education</h2>
            <ol className="timeline">
              <li>
                <h3>Media Head, RJCNFH</h3>
                <p className="date">Present</p>
                <p>
                  Lead content capture and social media for Resurrected Jesus
                  Christ of Nazareth Family House, including flyers, event
                  graphics and the church website.
                </p>
                <ul className="chips">
                  <li>Content capture</li>
                  <li>Social media</li>
                  <li>Graphic design</li>
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

        <section id="projects" className="wrap">
          <h2>Projects</h2>

          <article className="project">
            <div className="shot" role="img" aria-label="Screenshot of the Departmental Dues Management System">
              <span>DDMS</span>
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
            <div className="shot" role="img" aria-label="Screenshot of AttendIQ">
              <span>AttendIQ</span>
            </div>
            <div className="info">
              <h3>AttendIQ</h3>
              <p>
                A QR-based attendance system. Lecturers open a session and show
                a code, students scan it from their phones, and attendance
                exports to CSV. Works over a mobile hotspot, so it runs in rooms
                without Wi-Fi.
              </p>
              <ul className="chips">
                <li>HTML, CSS, JavaScript</li><li>Node.js</li><li>Express</li><li>MySQL</li>
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

        <section id="contact" className="wrap contact">
          <h2>Let&apos;s connect</h2>
          <p>Have a project, an internship or a question? Send me a message.</p>
          <p className="links">
            <a className="btn primary" href="mailto:your-email@example.com">Email me</a>
            <a className="btn" href="https://github.com/princeatsus">GitHub</a>
          </p>
          <p className="meta">Based in Aflao, Volta Region, Ghana</p>
        </section>
      </main>

      <footer className="wrap foot">
        <p>&copy; 2026 Prince Atsu. All rights reserved.</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}