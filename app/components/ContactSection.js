"use client";

import { useState } from "react";

const formEndpoint = "https://formspree.io/f/moeegvnb";

const socialLinks = [
  { name: "Email", icon: "email", url: "mailto:your-email@example.com", visible: true },
  { name: "GitHub", icon: "github", url: "https://github.com/princeatsus", visible: true },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/prince-elesi-842a55364/", visible: true },
  { name: "YouTube", icon: "youtube", url: "https://www.youtube.com/@princeelesi", visible: false },
  { name: "TikTok", icon: "tiktok", url: "https://www.tiktok.com/@princeatsu32", visible: false },
  { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/quail.8068928", visible: false },
  { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/share/1EqpouULyt/?mibextid=wwXIfr", visible: false },
];

const contactIcons = {
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  github: (
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5Z" />
  ),
  linkedin: (
    <>
      <path d="M5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path d="M3.8 10h2.4v10H3.8zM10 10h2.3v1.4h.1a2.5 2.5 0 0 1 2.3-1.6c2.5 0 3 1.6 3 3.7V20h-2.4v-5.8c0-1.4 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V20H10z" />
    </>
  ),
  youtube: (
    <>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8Z" />
      <path className="icon-cutout" d="m10 15.5 5-3.5-5-3.5z" />
    </>
  ),
  tiktok: (
    <path d="M19.6 7.2a6.1 6.1 0 0 1-3.8-1.3v8.4a5.6 5.6 0 1 1-5.6-5.6c.4 0 .8 0 1.2.1v3.1a2.6 2.6 0 1 0 1.5 2.4V2h3a6.1 6.1 0 0 0 3.7 3.8z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="icon-fill" cx="17.5" cy="6.5" r="1" />
    </>
  ),
  facebook: (
    <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8z" />
  ),
};

function ContactIcon({ name }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill={["youtube", "github", "facebook", "tiktok"].includes(name) ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {contactIcons[name]}
    </svg>
  );
}

export default function ContactSection() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setStatus("sending");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });

      if (!response.ok) {
        throw new Error(`Contact form request failed with status ${response.status}`);
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Unable to send contact form:", error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="wrap contact">
      <h2>Let&apos;s Connect</h2>
      <p className="contact-subtitle">
        Have a role, a project or a question? Get in touch!
      </p>
      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            required
          />

          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="How can I help?"
            rows={2}
            required
          />

          <button type="submit" className="contact-submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          <p className="contact-privacy">
            Your details are only used to answer your message.
          </p>
          <p className={`contact-status ${status}`} aria-live="polite" role="status">
            {status === "success" && "Thanks, I'll get back to you soon"}
            {status === "error" && "Sorry, your message could not be sent. Please try again."}
          </p>
        </form>

        <aside className="contact-details">
          <h3>Connect With Me</h3>
          <div className="links">
            {socialLinks
              .filter((link) => link.visible)
              .map((link) => {
                const isEmail = link.icon === "email";
                return (
                  <a
                    key={link.name}
                    className="social-link"
                    href={link.url}
                    aria-label={link.name}
                    title={link.name}
                    {...(!isEmail && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    <ContactIcon name={link.icon} />
                  </a>
                );
              })}
          </div>
          <hr />
          <p><strong>Location:</strong> Aflao, Volta Region, Ghana</p>
          <p>
            <strong>Status:</strong> Open to software engineering internships
            and entry-level roles
          </p>
        </aside>
      </div>
    </section>
  );
}
