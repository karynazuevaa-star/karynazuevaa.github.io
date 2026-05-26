import React from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    slug: "vbt",
    year: "2026 — now",
    title: "Visual-Based Therapy (VBT)",
    role: "AI Product Manager / Researcher",
    meta: ["Ongoing", "AI Therapy", "Visual Avatars"],
    image: "/images/inner-transparent.png",
    problem:
      "Therapy often relies on verbal descriptions of inner experiences, which can be difficult to express, control, or transform.",
    approach:
      "I conceptualized an AI-assisted platform that externalizes internal therapeutic imagery into interactive visual environments with avatars, emotional tone modulation, and guided interaction.",
    outcome:
      "Ongoing concept with therapeutic logic, interaction scenarios, and avatar-based visualization.",
    metrics: ["Ongoing project", "AI-assisted therapy", "Avatar-based interaction"],
  },
  {
    slug: "human-ai-loneliness",
    year: "2025 — now",
    title: "Human–AI Interaction and Loneliness",
    role: "Researcher",
    meta: ["Human–AI Interaction", "Statistical Methods", "30-day study", "MixedLM"],
    visual: "/gifs/Ai_mp4.MOV",
    problem:
      "AI companions are increasingly used for emotional communication, but their effects on loneliness remain unclear.",
    approach:
      "I designed a 30-day pilot study with repeated measurements and structured interaction protocols.",
    outcome:
      "Individual AI interactions showed short-term reductions in loneliness.",
    metrics: ["N = 22", "30 days", "MixedLM", "UCLA Loneliness Scale"],
  },
  {
    slug: "ai-avatar-course",
    year: "2024",
    title: "AI Avatar-Based Psychoeducation Course",
    role: "Product Owner / Content Designer",
    meta: ["CBT", "AI Video", "Education"],
    visual: "/gifs/course_ai.MOV",
    problem:
      "Clients often need a simple and engaging introduction to CBT before therapy or self-help work.",
    approach:
      "I created scripts, generated AI-based video content, edited educational materials, and structured a digital learning experience.",
    outcome:
      "The course introduced CBT concepts through AI-generated video materials.",
    metrics: ["~100 users", "AI video", "CBT introduction"],
  },
  {
    slug: "bot-psychologist",
    year: "2023",
    title: "Bot-Psychologist for Teenagers",
    role: "Product Owner",
    meta: ["500+ users", "117 commands", "CBT / DBT / ACT"],
    image: "/images/bot.png",
    problem:
      "Teenagers may need immediate psychological support, but access to professional help is often limited.",
    approach:
      "I developed a Telegram chatbot based on CBT, DBT, and ACT with emotional classification and structured scenarios.",
    outcome:
      "The bot reached 500+ users and analyzed 7 emotional states.",
    metrics: ["500+ users", "67 reactions", "7 emotions"],
  },
  {
    slug: "nerv",
    year: "2022",
    title: "NERV: VR Creativity Enhancement System",
    role: "Product Manager / Concept Developer",
    meta: ["3rd Place", "Hackathon", "VR"],
    vrVisual: true,
    problem:
      "Organizations need tools that help employees generate ideas individually and collaboratively.",
    approach:
      "I designed a VR capsule concept using creativity techniques.",
    outcome: "The project won 3rd place at a university hackathon.",
    metrics: ["3rd place", "VR creativity"],
  },
  {
    slug: "vr-school-adaptation",
    year: "2022",
    title: "VR Game for Children’s School Adaptation",
    role: "Product Manager / Concept Developer",
    meta: ["1st Place", "VR", "Children"],
    schoolVisual: true,
    problem:
      "Children may struggle with school adaptation, empathy, communication, and emotional recognition.",
    approach:
      "I designed VR social and cognitive modules with virtual mentor support.",
    outcome:
      "The project won 1st place in the Creative Industries VR project competition.",
    metrics: ["1st place", "6 MVP sessions", "VR"],
  },
];

const interests = [
  "Human–AI Interaction",
  "Human-Centered AI",
  "Ethical & Safe AI",
  "Cyberpsychology",
  "Digital Psychotherapy",
  "Virtual Reality & Presence",
  "Cognitive Science",
  "Behavioral Design",
];

const education = [
  { year: "2024 — present", text: "PGDip in Clinical Psychology · Psychodemia" },
  { year: "2023 — 2025", text: "M.Sc. Psychology · Cyberpsychology & HCI · GPA 5/5" },
  { year: "2019 — 2023", text: "B.Sc. Psychology · GPA 4.98/5" },
];

const courses = [
  "Code in Place · Stanford University",
  "Introduction to Machine Learning with Python",
  "Professional training in CBT, ACT, and REBT",
];

const experience = [
  { year: "2025 — present", text: "Lecturer in Consultative Psychology" },
  { year: "2022 — present", text: "Cognitive Behavioral Therapist" },
  { year: "2021 — 2025", text: "Research Assistant · Cyberpsychology Laboratory" },
  { year: "2021 — 2022", text: "School Psychologist" },
];

const leadership = [
  "Outstanding Academic Achievement Scholarship",
  "Psychology Olympiad Prize Winner",
  "Conference Presentations",
  "Volunteer Psychological Support",
  "Leadership Experience",
];

const skillGroups = [
  {
    title: "Research Methods",
    items: ["Experimental design", "Longitudinal studies", "Behavioral annotation", "Psychological assessment", "Literature review"],
  },
  {
    title: "Statistics & Data Analysis",
    items: ["Descriptive statistics", "Correlation analysis", "t-tests", "Linear regression", "Logistic regression", "Mixed-effects linear models", "Mann–Whitney tests", "Polynomial regression"],
  },
  {
    title: "Technical Tools",
    items: ["Python", "Pandas", "NumPy", "SPSS", "Jupyter Notebook", "PsychoPy", "Figma", "Miro"],
  },
  {
    title: "Data Acquisition",
    items: ["Eye-tracking", "EEG", "ECG", "VR equipment", "Behavioral video analysis"],
  },
  {
    title: "Clinical Methods",
    items: ["CBT", "ACT", "REBT", "Clinical interviewing", "Case conceptualization"],
  },
  {
    title: "Product & UX",
    items: ["User research", "User flows", "Customer journey map", "Empathy map", "MVP design", "AI product thinking"],
  },
];

const colors = {
  bg: "#0B0D12",
  text: "#F5F1EA",
  muted: "#9AA3B2",
  soft: "#C9CED6",
  card: "rgba(255,255,255,0.052)",
  border: "rgba(255,255,255,0.11)",
};

const chip = {
  padding: "7px 13px",
  borderRadius: "999px",
  border: `1px solid ${colors.border}`,
  background: "rgba(255,255,255,0.055)",
  fontSize: "13px",
  color: colors.text,
};

const card = {
  background: colors.card,
  borderRadius: "26px",
  padding: "24px",
  border: `1px solid ${colors.border}`,
  backdropFilter: "blur(18px)",
  boxShadow: "0 18px 60px rgba(0,0,0,0.14)",
};

const buttonPrimary = {
  padding: "14px 22px",
  borderRadius: "999px",
  background: "#F5F1EA",
  color: "#0B0D12",
  textDecoration: "none",
  fontWeight: 600,
};

const buttonSecondary = {
  padding: "14px 22px",
  borderRadius: "999px",
  border: `1px solid ${colors.border}`,
  color: colors.text,
  textDecoration: "none",
  background: "rgba(255,255,255,0.055)",
};

const sectionMotion = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.8 },
};

function MediaBlock({ src, minHeight = "240px", dim = false }) {
  const isVideo =
    src && [".mp4", ".mov"].some((ext) => src.toLowerCase().endsWith(ext));

  return (
    <motion.div
      whileHover={{ y: -4 }}
      style={{
        width: "100%",
        height: minHeight,
        borderRadius: "22px",
        overflow: "hidden",
        border: `1px solid ${colors.border}`,
        background: "#050609",
      }}
    >
      {isVideo ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: dim ? 0.82 : 1,
          }}
        />
      ) : (
        <img
          src={src}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
    </motion.div>
  );
}

function ProjectMedia({ project }) {
  if (project.visual) {
    return (
      <div style={{ marginTop: "16px" }}>
        <MediaBlock src={project.visual} minHeight="260px" dim />
      </div>
    );
  }

  if (project.image) {
    return (
      <div
        style={{
          marginTop: "18px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "220px",
          borderRadius: "22px",
          background:
            "radial-gradient(circle at center, rgba(100,110,255,0.18), transparent 70%)",
        }}
      >
        <img
          src={project.image}
          alt=""
          style={{
            width: project.slug === "bot-psychologist" ? "250px" : "220px",
            objectFit: "contain",
            filter: "drop-shadow(0 0 26px rgba(120,120,255,0.22))",
          }}
        />
      </div>
    );
  }

  if (project.schoolVisual || project.vrVisual) {
    const icons = project.schoolVisual
      ? ["🥽", "📐", "📚", "🎒", "✏️", "📏", "🧭"]
      : ["🥽", "💡", "🧠", "🔗", "🟣", "🔵"];

    return (
      <div
        style={{
          marginTop: "18px",
          height: "190px",
          position: "relative",
          borderRadius: "24px",
          overflow: "hidden",
          background:
            "radial-gradient(circle at center, rgba(100,110,255,0.12), transparent 70%)",
        }}
      >
        {icons.map((icon, i) => (
          <motion.div
            key={icon + i}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4 + i * 0.3, repeat: Infinity }}
            style={{
              position: "absolute",
              left: `${8 + (i % 4) * 22}%`,
              top: `${18 + (i % 3) * 24}%`,
              fontSize: i === 0 ? "48px" : "34px",
              transform: `rotate(${i % 2 === 0 ? "-12deg" : "14deg"})`,
              filter: "drop-shadow(0 0 20px rgba(120,120,255,0.18))",
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    );
  }

  return null;
}

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
        height: "100%",
      }}
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
        style={{
          ...card,
          height: "100%",
        }}
      >
        <p style={{ color: colors.muted, margin: "0 0 8px", fontSize: "15px" }}>
          {project.year}
        </p>

        <h3
          style={{
            fontSize: "38px",
            lineHeight: "1.04",
            margin: "0 0 14px",
            letterSpacing: "-0.04em",
          }}
        >
          {project.title}
        </h3>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "14px",
          }}
        >
          {project.meta.map((item) => (
            <div key={item} style={chip}>
              {item}
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.5",
            color: colors.soft,
            margin: 0,
          }}
        >
          {project.problem}
        </p>

        <ProjectMedia project={project} />
      </motion.div>
    </Link>
  );
}

function Home() {
  return (
    <React.Fragment>
      <style>{globalStyles}</style>

      <main
        style={{
          background: colors.bg,
          color: colors.text,
          fontFamily: "Inter, Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <div className="glow glow1" />
        <div className="glow glow2" />

        <motion.section
          {...sectionMotion}
          style={{
            minHeight: "100vh",
            display: "grid",
            gridTemplateColumns:window.innerWidth < 768 ? "1fr" : "1.05fr .95fr",
            gap: "50px",
            alignItems: "center",
            padding: "90px 80px",
          }}
        >
          <div>
            <p className="eyebrow">Human-Centered AI · Psychology · Research</p>

            <h1
              style={{
                fontSize: "120px",
                lineHeight: "0.9",
                marginBottom: "26px",
                letterSpacing: "-0.07em",
              }}
            >
              Karina
              <br />
              Zueva
            </h1>

            <p
              style={{
                fontSize: "30px",
                lineHeight: "1.5",
                color: colors.soft,
                marginBottom: "40px",
                maxWidth: "760px",
              }}
            >
              Psychology researcher and AI product designer exploring
              human–computer interaction, digital psychotherapy, virtual reality,
              and behavioral technologies.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="#projects" style={buttonPrimary}>
                View Projects
              </a>

<a
  href="/Karina_Zueva_CV.pdf"
  target="_blank"
  rel="noreferrer"
  style={buttonSecondary}
>
  Download CV
</a>
            </div>
          </div>

<MediaBlock
  src="/images/karina-real.jpg"
  minHeight={window.innerWidth < 768 ? "420px" : "680px"}
/>
        </motion.section>

        <motion.section {...sectionMotion} style={{ padding: "70px 80px" }}>
          <p className="eyebrow">About</p>

          <div
            style={{
              display: "grid",
gridTemplateColumns:
  window.innerWidth < 768 ? "1fr" : "1.05fr .95fr",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <div>
              <h2 className="sectionTitle">Interests</h2>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "26px" }}>
                {interests.map((item) => (
                  <div key={item} style={chip}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <MediaBlock src="/gifs/head.MOV" minHeight="500px" dim />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr .85fr",
              gap: "22px",
              marginTop: "56px",
            }}
          >
            <motion.div whileHover={{ y: -4 }} style={card}>
              <h3 style={{ fontSize: "32px", marginBottom: "14px" }}>Education</h3>

              {education.map((item) => (
                <div
                  key={item.text}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "145px 1fr",
                    gap: "20px",
                    padding: "15px 0",
                    borderTop: `1px solid ${colors.border}`,
                  }}
                >
                  <p style={{ color: colors.muted, margin: 0 }}>{item.year}</p>
                  <p style={{ fontSize: "17px", lineHeight: "1.5", margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              ))}

              <h3 style={{ fontSize: "26px", marginTop: "32px", marginBottom: "10px" }}>
                Additional Education
              </h3>

              {courses.map((item) => (
                <p
                  key={item}
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    padding: "12px 0",
                    margin: 0,
                    borderTop: `1px solid ${colors.border}`,
                    color: colors.soft,
                  }}
                >
                  {item}
                </p>
              ))}
            </motion.div>

            <div style={{ display: "grid", gap: "22px" }}>
              <motion.div whileHover={{ y: -4 }} style={card}>
                <h3 style={{ fontSize: "26px", marginBottom: "14px" }}>
                  Work Experience
                </h3>

                {experience.map((item) => (
                  <div
                    key={item.text}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "120px 1fr",
                      gap: "14px",
                      padding: "12px 0",
                      borderTop: `1px solid ${colors.border}`,
                    }}
                  >
                    <p style={{ color: colors.muted, margin: 0 }}>{item.year}</p>
                    <p style={{ fontSize: "16px", lineHeight: "1.5", margin: 0 }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div whileHover={{ y: -4 }} style={card}>
                <h3 style={{ fontSize: "26px", marginBottom: "16px" }}>
                  Leadership & Achievements
                </h3>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {leadership.map((item) => (
                    <div key={item} style={chip}>
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section id="projects" {...sectionMotion} style={{ padding: "40px 80px 90px" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <p className="eyebrow">Projects</p>

            <h2 className="sectionTitle" style={{ marginBottom: "26px" }}>
              Selected Work
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "18px",
                alignItems: "stretch",
              }}
            >
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...sectionMotion} style={{ padding: "20px 80px 90px" }}>
          <p className="eyebrow">Skills</p>

          <h2 className="sectionTitle" style={{ marginBottom: "28px" }}>
            Methods & Tools
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "18px" }}>
            {skillGroups.map((group) => (
              <motion.div whileHover={{ y: -4 }} key={group.title} style={card}>
                <h3 style={{ fontSize: "22px", marginBottom: "16px" }}>
                  {group.title}
                </h3>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {group.items.map((skill) => (
                    <div key={skill} style={chip}>
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </React.Fragment>
  );
}
function StudyFlow({ title, steps }) {
  return (
    <div
      style={{
        border: `1px solid ${colors.border}`,
        borderRadius: "22px",
        padding: "20px",
        background: "rgba(255,255,255,0.035)",
      }}
    >
      <h3 style={{ margin: "0 0 16px", fontSize: "22px" }}>{title}</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 60px 1fr 60px 1fr",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {steps.map((step, i) => (
          <React.Fragment key={step}>
            <div
              style={{
                padding: "18px",
                borderRadius: "18px",
                border: `1px solid ${colors.border}`,
                textAlign: "center",
                color: colors.soft,
              }}
            >
              {step}
            </div>

            {i < steps.length - 1 && (
              <div
                style={{
                  textAlign: "center",
                  color: colors.muted,
                  fontSize: "26px",
                }}
              >
                →
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function ResultCard({ title, value, text }) {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "22px",
        border: `1px solid ${colors.border}`,
        background: "rgba(255,255,255,0.035)",
      }}
    >
      <p style={{ color: colors.muted, margin: "0 0 8px" }}>{title}</p>
      <h3 style={{ fontSize: "34px", margin: "0 0 10px" }}>{value}</h3>
      <p style={{ color: colors.soft, lineHeight: 1.55, margin: 0 }}>{text}</p>
    </div>
  );
}

function FigureBlock({ title, src, caption }) {
  return (
    <div style={{ ...card, maxWidth: "100%", marginBottom: "28px" }}>
      <h2 style={{ fontSize: "28px", marginTop: 0, marginBottom: "18px" }}>
        {title}
      </h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={src}
          alt={title}
          style={{
            width: "42%",
            minWidth: "320px",
            maxWidth: "520px",
            borderRadius: "18px",
            background: "#fff",
            padding: "10px",
            objectFit: "contain",
          }}
        />
      </div>

      <p
        style={{
          color: colors.muted,
          marginTop: "16px",
          lineHeight: 1.5,
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        {caption}
      </p>
    </div>
  );
}

function LonelinessProject() {
  return (
    <main
      style={{
        background: colors.bg,
        color: colors.text,
        minHeight: "100vh",
        padding: "70px 80px",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <Link to="/" style={{ color: colors.soft, textDecoration: "none" }}>
        ← Back
      </Link>

      <section style={{ maxWidth: "1180px", margin: "60px auto 0" }}>
        <p className="eyebrow">Research Project · 2025 — now</p>

        <h1 style={{ fontSize: "76px", lineHeight: 1, margin: "18px 0 24px" }}>
          Human–AI Interaction and Loneliness
        </h1>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "34px" }}>
          {["N = 22", "30 days", "15 sessions", "MixedLM", "UCLA Loneliness Scale"].map((item) => (
            <div key={item} style={chip}>
              {item}
            </div>
          ))}
        </div>

        <div style={{ ...card, maxWidth: "100%", marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>Abstract</h2>

          <p style={{ fontSize: "19px", lineHeight: 1.75, color: colors.soft }}>
            Understanding the psychological effects of interaction with conversational artificial
            intelligence is increasingly important as AI-mediated communication becomes widespread.
            This study examined whether regular interaction with AI systems influences perceived
            loneliness among young adults. A longitudinal study was conducted with 22 participants
            aged 18–30 who interacted with conversational AI over a 30-day period following a protocol
            of 15 structured conversations. Participants rated their loneliness before and after each
            session and completed the UCLA Loneliness Scale before and after the intervention. In total,
            330 interaction sessions were analyzed using Mann–Whitney tests, polynomial regression,
            mixed-effects modeling, and Wilcoxon tests. Results showed a consistent short-term reduction
            in loneliness after individual AI interactions, particularly for conversations involving
            personal topics. However, no significant change in overall loneliness was observed after
            one month. The findings suggest that AI interactions may provide temporary emotional relief
            but do not produce sustained reductions in loneliness.
          </p>
        </div>

        <div style={{ ...card, maxWidth: "100%", marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>Study Design</h2>

          <div style={{ display: "grid", gap: "18px", marginTop: "24px" }}>
            <StudyFlow
              title="Experimental group"
              steps={[
                "Baseline testing",
                "30-day AI interaction · 15 structured conversations",
                "Post-intervention testing",
              ]}
            />

            <StudyFlow
              title="Control group"
              steps={["Baseline testing", "No AI interaction", "Post-test after 30 days"]}
            />
          </div>
        </div>

        <div style={{ ...card, maxWidth: "100%", marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>Results</h2>

          <div style={{ display: "grid", gap: "18px", marginTop: "22px" }}>
            <ResultCard
              title="Immediate effect"
              value="−0.715, p = .010"
              text="AI interaction produced a statistically significant immediate reduction in loneliness after individual sessions."
            />

            <ResultCard
              title="Topic effect"
              value="p = .0179"
              text="Personal topics produced a statistically significant stronger reduction in loneliness than general topics."
            />

            <ResultCard
              title="Session dynamics"
              value="p = .049 / .026"
              text="Loneliness reduction followed a curvilinear pattern: the effect increased early, peaked mid-protocol, and then weakened."
            />

            <ResultCard
              title="Long-term effect"
              value="n.s."
              text="UCLA loneliness scores did not change significantly after one month, suggesting the effect was short-term rather than cumulative."
            />
          </div>
        </div>

        <FigureBlock
          title="Overall reduction in loneliness"
          src="/images/total_loneless.png"
          caption="Fig. 1. Overall reduction in loneliness after AI interaction."
        />

        <FigureBlock
          title="Personal vs. general topics"
          src="/images/topics_loneliness.png"
          caption="Fig. 2. Personal topics produced a stronger reduction in loneliness than general topics."
        />

        <FigureBlock
          title="Dynamics across sessions"
          src="/images/dynamic_lon.png"
          caption="Fig. 3. Curvilinear trend in loneliness changes across conversation topics."
        />

        <div style={{ ...card, maxWidth: "100%", marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>Conclusion</h2>

          <p style={{ fontSize: "19px", lineHeight: 1.75, color: colors.soft }}>
            The study suggests that conversational AI can provide short-term emotional relief,
            especially when conversations involve personal reflection. However, these effects did
            not translate into a significant long-term decrease in loneliness after one month.
            AI-mediated communication may therefore support temporary emotional regulation, but it
            should not be understood as a replacement for meaningful human relationships.
          </p>
        </div>

        <div style={{ ...card, maxWidth: "100%" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>Why I chose this topic</h2>

          <p style={{ fontSize: "19px", lineHeight: 1.75, color: colors.soft }}>
            I became interested in this project because I am fascinated by parasocial relationships
            and the way people form emotional bonds with non-human agents. In a world where artificial
            intelligence is becoming part of everyday life, I wanted to understand how people become
            attached to AI systems, how they interact with them emotionally, and whether these
            interactions can temporarily change feelings of loneliness.
          </p>
        </div>
      </section>
    </main>
  );
}
function VBTProject() {
  return (
    <main
      style={{
        background: colors.bg,
        color: colors.text,
        minHeight: "100vh",
        padding: "70px 80px",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <Link to="/" style={{ color: colors.soft, textDecoration: "none" }}>
        ← Back
      </Link>

      <section style={{ maxWidth: "1180px", margin: "60px auto 0" }}>
        <p className="eyebrow">Startup Concept · 2026 — now</p>

        <h1
          style={{
            fontSize: "76px",
            lineHeight: 1,
            margin: "18px 0 24px",
          }}
        >
          Visual-Based Therapy (VBT)
        </h1>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "34px",
          }}
        >
          {[
            "AI Therapy",
            "Visualization",
            "Psychotherapy",
            "Inner Parts",
            "Startup",
          ].map((item) => (
            <div key={item} style={chip}>
              {item}
            </div>
          ))}
        </div>

        <div style={{ ...card, marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>
            About the Project
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.75,
              color: colors.soft,
            }}
          >
            VBT is a startup developing a digital tool for visualizing and
            working with inner psychological parts.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.75,
              color: colors.soft,
            }}
          >
            Many evidence-based therapeutic approaches use imagery techniques
            to help clients engage with internal experiences such as the inner
            critic, vulnerable child, healthy adult, or protective parts.
            However, these processes remain largely internal, verbal, and
            difficult to structure or externalize.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.75,
              color: colors.soft,
            }}
          >
            VBT aims to support therapists and researchers by transforming
            these internal experiences into interactive visual scenes. The
            goal is to make imagery-based therapeutic work more structured,
            observable, and reproducible while preserving emotional depth
            and engagement.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.75,
              color: colors.soft,
            }}
          >
            The project explores the intersection of psychotherapy,
            cognitive science, visualization, artificial intelligence,
            and technology.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "20px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              ...card,
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at center, rgba(255,120,120,0.18), transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <img
              src="/images/innercritic.png"
              alt=""
              style={{
                width: "100%",
                maxHeight: "420px",
                objectFit: "contain",
                position: "relative",
                zIndex: 1,
                filter: "drop-shadow(0 0 25px rgba(255,120,120,0.35))",
              }}
            />

            <h3 style={{ fontSize: "26px", marginBottom: "8px" }}>
              Inner Critic
            </h3>

            <p style={{ color: colors.soft, lineHeight: 1.6 }}>
              Visualization of self-critical inner dialogue and emotional
              pressure.
            </p>
          </div>

          <div
            style={{
              ...card,
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at center, rgba(120,180,255,0.18), transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <img
              src="/images/innerchild.png"
              alt=""
              style={{
                width: "100%",
                maxHeight: "420px",
                objectFit: "contain",
                position: "relative",
                zIndex: 1,
                filter: "drop-shadow(0 0 25px rgba(120,180,255,0.35))",
              }}
            />

            <h3 style={{ fontSize: "26px", marginBottom: "8px" }}>
              Inner Child
            </h3>

            <p style={{ color: colors.soft, lineHeight: 1.6 }}>
              Representation of vulnerable emotional states and unmet needs.
            </p>
          </div>

          <div
            style={{
              ...card,
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at center, rgba(180,120,255,0.18), transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <img
              src="/images/innerprotector.png"
              alt=""
              style={{
                width: "100%",
                maxHeight: "420px",
                objectFit: "contain",
                position: "relative",
                zIndex: 1,
                filter: "drop-shadow(0 0 25px rgba(180,120,255,0.35))",
              }}
            />

            <h3 style={{ fontSize: "26px", marginBottom: "8px" }}>
              Inner Protector
            </h3>

            <p style={{ color: colors.soft, lineHeight: 1.6 }}>
              Protective psychological mechanisms visualized as interactive
              therapeutic characters.
            </p>
          </div>
        </div>

        <div style={{ ...card, marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>
            Project Development
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              marginTop: "24px",
            }}
          >
            <div>
              <h3 style={{ fontSize: "24px" }}>Completed</h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "16px",
                }}
              >
                {[
                  "Literature analysis",
                  "30+ psychologist interviews",
                  "Prototype creation",
                  "User flow",
                  "UI/UX",
                  "Full concept design",
                  "AI integration",
                  "IP work",
                ].map((item) => (
                  <div key={item} style={chip}>
                    #{item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: "24px" }}>In Progress</h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "16px",
                }}
              >
                {[
                  "Prototype refinement",
                  "Marketing strategy",
                  "Launch preparation",
                ].map((item) => (
                  <div key={item} style={chip}>
                    #{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ ...card }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>
            My Role
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.75,
              color: colors.soft,
            }}
          >
            I developed the conceptual structure of the platform, conducted
            interviews with psychologists, participated in literature analysis,
            designed user flows and UI/UX logic, contributed to AI integration,
            and worked on IP-related processes. The project combines clinical
            psychology, visualization, and interactive technology to create
            a new format for therapeutic work with internal parts.
          </p>
        </div>
      </section>
    </main>
  );
}
function VRSchoolProject() {
  return (
    <main style={{ background: colors.bg, color: colors.text, minHeight: "100vh", padding: "70px 80px", fontFamily: "Inter, Arial, sans-serif" }}>
      <Link to="/" style={{ color: colors.soft, textDecoration: "none" }}>← Back</Link>

      <section style={{ maxWidth: "1180px", margin: "60px auto 0" }}>
        <p className="eyebrow">VR Project · 2022 · 1st Place</p>

        <h1 style={{ fontSize: "76px", lineHeight: 1, margin: "18px 0 24px" }}>
          VR Game for Children’s School Adaptation
        </h1>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "34px" }}>
          {["VR", "Children", "School Adaptation", "Social Anxiety", "1st Place"].map((item) => (
            <div key={item} style={chip}>{item}</div>
          ))}
        </div>

        <div style={{ ...card, marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>Objective</h2>
          <p style={{ fontSize: "19px", lineHeight: 1.75, color: colors.soft }}>
            The project aimed to create a VR-based tool for children’s school adaptation, especially for children with social anxiety. The system was designed to foster emotional intelligence, develop empathy, and support social skill formation through guided virtual scenarios.
          </p>
          <p style={{ fontSize: "19px", lineHeight: 1.75, color: colors.soft }}>
            During six VR sessions with the participation of a psychologist, the child, guided by a virtual mentor, encounters real-life school situations that help assess cognitive abilities and enhance social skills.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "28px" }}>
          <FigureBlock title="Virtual mentor interaction" src="/images/school1.png" caption="Scenario-based interaction between a child and a virtual mentor." />
          <FigureBlock title="School adaptation environment" src="/images/school2.png" caption="VR environment for practicing school-related social situations." />
        </div>

        <div style={{ ...card, marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>Social Modules</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "20px" }}>
            {[
              "Public Speaking",
              "Communication with a Desk Mate",
              "Maintaining Social Connections",
              "Learning to Share",
              "Asking for Help in Class",
              "Developing Empathy",
            ].map((item) => (
              <div key={item} style={chip}>{item}</div>
            ))}
          </div>
        </div>

        <div style={{ ...card, marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>Cognitive Modules</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "20px" }}>
            {[
              "Logical Thinking",
              "Connections",
              "General Awareness",
              "Perception",
              "School Material",
              "Attention",
            ].map((item) => (
              <div key={item} style={chip}>{item}</div>
            ))}
          </div>
        </div>

        <div style={{ ...card, marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>Program Structure</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginTop: "20px" }}>
            <ResultCard title="Total program" value="10 sessions" text="Psychologist-guided VR intervention." />
            <ResultCard title="MVP" value="6 sessions" text="Minimum viable version of the program." />
            <ResultCard title="Session length" value="40 min" text="Each session includes one cognitive and one social block." />
          </div>

          <p style={{ fontSize: "18px", lineHeight: 1.7, color: colors.soft, marginTop: "24px" }}>
            The program also included a “session 0” without avatars, allowing the child to gradually get used to the VR environment before entering social interaction scenarios.
          </p>
        </div>

        <div style={{ ...card, marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>My Role</h2>

          <p style={{ fontSize: "19px", lineHeight: 1.75, color: colors.soft }}>
            I conducted literature analysis, participated in interviews, developed the full program concept, described each social and cognitive block, designed the user flow, and worked with a team of 10 VR developers. I also led the concept-development group and coordinated the structure of the VR intervention.
          </p>
        </div>

        <div style={{ ...card }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>Outcome</h2>

          <p style={{ fontSize: "19px", lineHeight: 1.75, color: colors.soft }}>
            The project won 1st place in a Creative Industries VR project competition in 2022.
          </p>
        </div>
      </section>
    </main>
  );
}
function NERVProject() {
  return (
    <main
      style={{
        background: colors.bg,
        color: colors.text,
        minHeight: "100vh",
        padding: "70px 80px",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <Link to="/" style={{ color: colors.soft, textDecoration: "none" }}>
        ← Back
      </Link>

      <section style={{ maxWidth: "1180px", margin: "60px auto 0" }}>
        <p className="eyebrow">
          University VR Project · 2022 · 3rd Place Hackathon
        </p>

        <h1
          style={{
            fontSize: "76px",
            lineHeight: 1,
            margin: "18px 0 24px",
          }}
        >
          NERV: VR Creativity Enhancement System
        </h1>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "34px",
          }}
        >
          {[
            "VR",
            "Creativity",
            "B2B",
            "Hackathon",
            "Immersive Experience",
          ].map((item) => (
            <div key={item} style={chip}>
              {item}
            </div>
          ))}
        </div>

        <div style={{ ...card, marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>
            Task
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.75,
              color: colors.soft,
            }}
          >
            Create a project using technology to foster creativity in employees
            within the B2B sector.
          </p>
        </div>

        <div style={{ ...card, marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>
            Solution
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.75,
              color: colors.soft,
            }}
          >
            A VR program simulating an immersive capsule with different
            scenarios designed to develop both individual and group creativity.
          </p>

          <div
            style={{
              marginTop: "26px",
              borderRadius: "28px",
              overflow: "hidden",
              position: "relative",
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${colors.border}`,
            }}
          >
            <motion.img
              src="/images/capsula.png"
              alt=""
              animate={{
                scale: [1, 1.03, 1],
                x: [0, 8, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: "100%",
                display: "block",
                filter: "brightness(1.02)",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at center, rgba(255,255,255,0.12), transparent 60%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        <div style={{ ...card, marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>
            Creativity Structure
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "24px",
            }}
          >
            <img
              src="/images/nerv-graph.png"
              alt=""
              style={{
                width: "100%",
                maxWidth: "900px",
                borderRadius: "22px",
                background: "#fff",
                padding: "18px",
              }}
            />
          </div>

          <p
            style={{
              color: colors.muted,
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            VR creativity-development structure for both individual and group work.
          </p>
        </div>

        <div style={{ ...card, marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>
            Features
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "22px",
            }}
          >
            {[
              "Reduction of distractions",
              "Immersion in a new environment",
              "Movement stimulates idea generation",
              "Proven creativity techniques",
              "Individual & team work",
              "Global challenge-solving",
            ].map((item) => (
              <div key={item} style={chip}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...card }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>
            Outcome
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.75,
              color: colors.soft,
            }}
          >
            The project was developed as a university VR concept and won
            3rd place at a creativity-focused hackathon in 2022.
          </p>
        </div>
      </section>
    </main>
  );
}
function CourseProject() {
  return (
    <main
      style={{
        background: colors.bg,
        color: colors.text,
        minHeight: "100vh",
        padding: "70px 80px",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <Link to="/" style={{ color: colors.soft, textDecoration: "none" }}>
        ← Back
      </Link>

      <section style={{ maxWidth: "1180px", margin: "60px auto 0" }}>
        <p className="eyebrow">Digital Psychoeducation · 2024</p>

        <h1 style={{ fontSize: "76px", lineHeight: 1, margin: "18px 0 24px" }}>
          AI Avatar-Based Psychoeducation Course
        </h1>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "34px" }}>
          {["CBT", "5 videos", "Written materials", "Website", "Psychoeducation"].map((item) => (
            <div key={item} style={chip}>
              {item}
            </div>
          ))}
        </div>

        <div style={{ ...card, marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>Objective</h2>

          <p style={{ fontSize: "19px", lineHeight: 1.75, color: colors.soft }}>
            Create a short digital psychoeducational material to introduce clients
            to Cognitive Behavioral Therapy (CBT) in a clear, accessible, and
            visually engaging format.
          </p>
        </div>

        <div style={{ ...card, marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>Project Format</h2>

          <p style={{ fontSize: "19px", lineHeight: 1.75, color: colors.soft }}>
            The project was designed as a compact online course consisting of
            five short video lessons and accompanying written materials. The
            content was presented on a website and guided users step by step
            through the basic model and principles of Cognitive Behavioral Therapy.
          </p>

          <div style={{ marginTop: "26px" }}>
            <MediaBlock src="/gifs/course_ai.MOV" minHeight="420px" dim />
          </div>
        </div>

        <div style={{ ...card, marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>Tasks</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "20px" }}>
            {[
              "Write scripts for video clips",
              "Prepare accompanying materials",
              "Generate video content",
              "Edit the videos",
              "Design website presentation",
              "Format the course page",
            ].map((item) => (
              <div key={item} style={chip}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...card, marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>Course Logic</h2>

          <p style={{ fontSize: "19px", lineHeight: 1.75, color: colors.soft }}>
            The course explains CBT as a structured way of understanding the
            connection between thoughts, emotions, behavior, and reactions. The
            materials were organized so that users could gradually move from a
            general introduction to CBT toward a clearer understanding of how the
            cognitive-behavioral model can be applied in everyday life.
          </p>
        </div>

        <div style={{ ...card, marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>What Was Developed</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "20px" }}>
            <ResultCard
              title="Video content"
              value="5 lessons"
              text="Short psychoeducational videos introducing CBT concepts."
            />

            <ResultCard
              title="Written materials"
              value="supporting text"
              text="Additional explanations and structured materials for the website."
            />

            <ResultCard
              title="Website"
              value="course page"
              text="A formatted digital page presenting the course in a clear sequence."
            />

            <ResultCard
              title="Experience"
              value="step-by-step"
              text="A guided learning flow introducing CBT principles gradually."
            />
          </div>
        </div>

        <div style={{ ...card }}>
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>Outcome</h2>

          <p style={{ fontSize: "19px", lineHeight: 1.75, color: colors.soft }}>
            The result was a structured psychoeducational mini-course with five
            video lessons, written materials, and a website presentation that
            introduced users to the foundations of CBT in a simple and accessible
            format.
          </p>
        </div>
      </section>
    </main>
  );
}
function FlowBox({ children }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.92)",
        color: "#111",
        borderRadius: "24px",
        padding: "20px",
        textAlign: "center",
        fontSize: "16px",
        lineHeight: 1.4,
        minHeight: "88px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 500,
      }}
    >
      {children}
    </div>
  );
}

function JourneyBlock() {
  const steps = [
    "Greeting",
    "Psychologist Selection",
    "Introduction",
    "Choosing a Safe Space",
    "Receiving a Gift",
    "Menu",
  ];

  return (
    <div style={{ ...card }}>
      <h2 style={{ fontSize: "34px", marginTop: 0 }}>
        User Journey
      </h2>

      <div
        style={{
          display: "grid",
          gap: "14px",
          marginTop: "28px",
        }}
      >
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <FlowBox>{step}</FlowBox>

            {index < steps.length - 1 && (
              <div
                style={{
                  textAlign: "center",
                  color: colors.muted,
                  fontSize: "22px",
                }}
              >
                ↓
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <p
        style={{
          color: colors.soft,
          marginTop: "24px",
          lineHeight: 1.7,
          fontSize: "17px",
        }}
      >
        The interaction flow was designed to create a feeling of safety,
        emotional support, and gradual engagement rather than a simple
        “question-answer” chatbot experience.
      </p>
    </div>
  );
}

function MenuBlock() {
  const items = [
    "What to Do with an Emotion?",
    "Difficult Situation",
    "Problem Solving",
    "SOS",
    "Friendly Reminder",
  ];

  return (
    <div style={{ ...card }}>
      <h2 style={{ fontSize: "34px", marginTop: 0 }}>
        Bot Menu
      </h2>

      <div
        style={{
          display: "grid",
          gap: "16px",
          marginTop: "28px",
        }}
      >
        {items.map((item) => (
          <FlowBox key={item}>{item}</FlowBox>
        ))}
      </div>

      <p
        style={{
          color: colors.soft,
          marginTop: "24px",
          lineHeight: 1.7,
          fontSize: "17px",
        }}
      >
        The bot combines psychoeducation, emotional support,
        decision-making assistance, emergency resources, and
        supportive communication.
      </p>
    </div>
  );
}

function BotProject() {
  return (
    <main
      style={{
        background: colors.bg,
        color: colors.text,
        minHeight: "100vh",
        padding: "70px 80px",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <Link
        to="/"
        style={{
          color: colors.soft,
          textDecoration: "none",
        }}
      >
        ← Back
      </Link>

      <section
        style={{
          maxWidth: "1180px",
          margin: "60px auto 0",
        }}
      >
        <p className="eyebrow">
          Telegram Mental Health Bot · 2023
        </p>

        <h1
          style={{
            fontSize: "76px",
            lineHeight: 1,
            margin: "18px 0 24px",
          }}
        >
          Bot-Psychologist for Teenagers
        </h1>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "34px",
          }}
        >
          {[
            "500+ users",
            "117 reactions",
            "7 emotions",
            "CBT / DBT / ACT",
            "Teen support",
          ].map((item) => (
            <div key={item} style={chip}>
              {item}
            </div>
          ))}
        </div>

        <div
          style={{
            ...card,
            marginBottom: "28px",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              marginTop: 0,
            }}
          >
            Problem
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.75,
              color: colors.soft,
            }}
          >
            Teenagers often experience difficulties accessing
            evidence-based psychotherapy and emotional support.
            Many feel isolated with their problems and do not know
            where to seek immediate psychological help.
          </p>
        </div>

        <div
          style={{
            ...card,
            marginBottom: "28px",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              marginTop: 0,
            }}
          >
            Concept
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.75,
              color: colors.soft,
            }}
          >
            NEO Bot was designed not simply as a collection of
            psychological techniques inside Telegram, but as a
            complete interaction experience. The teenager first
            chooses a psychologist character, then selects a safe
            place for future “meetings”, and later receives a
            symbolic gift — a psychoeducational guide written
            and visually designed in an accessible way to explain
            anxiety and coping techniques.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            marginBottom: "28px",
          }}
        >
          <JourneyBlock />

          <MenuBlock />
        </div>

        <div
          style={{
            ...card,
            marginBottom: "28px",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              marginTop: 0,
            }}
          >
            Key Features
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "18px",
              marginTop: "24px",
            }}
          >
            <ResultCard
              title="Reaction system"
              value="117"
              text="67 general reactions and 50 supportive phrases help teenagers feel emotionally supported."
            />

            <ResultCard
              title="Scientific base"
              value="50+ studies"
              text="The psychoeducational logic was based on scientific literature and evidence-based psychotherapy."
            />

            <ResultCard
              title="Emotion analysis"
              value="7 emotions"
              text="Sadness, shame, guilt, jealousy, fear, anger, and resentment."
            />

            <ResultCard
              title="SOS support"
              value="Emergency help"
              text="The SOS section contains crisis phone numbers and mental health support websites."
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "20px",
            marginBottom: "28px",
          }}
        >
          {[
            {
              src: "/images/bot_teen.png",
              title: "Psychoeducational Material",
            },
            {
              src: "/images/bot_teen2.png",
              title: "Symbolic Gift",
            },
            {
              src: "/images/bot_teen3.png",
              title: "Safe Space",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                ...card,
                padding: "16px",
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "360px",
                  objectFit: "cover",
                  borderRadius: "22px",
                  marginBottom: "16px",
                }}
              />

              <h3
                style={{
                  fontSize: "24px",
                  margin: 0,
                }}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <div
          style={{
            ...card,
            marginBottom: "28px",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              marginTop: 0,
            }}
          >
            Support Logic
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.75,
              color: colors.soft,
            }}
          >
            The bot assists with decision-making, incorporates
            coaching techniques, and helps break down difficult
            situations using structured psychological protocols.
            It provides immediate emotional support while also
            directing users toward professional crisis resources
            when necessary.
          </p>
        </div>

        <div style={{ ...card }}>
          <h2
            style={{
              fontSize: "30px",
              marginTop: 0,
            }}
          >
            Outcome
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.75,
              color: colors.soft,
            }}
          >
            The project combined psychoeducation, emotional
            support, structured coping techniques, and interaction
            design into a Telegram-based experience for teenagers.
            The bot reached more than 500 users and created a more
            approachable format for psychological support.
          </p>
        </div>
      </section>
    </main>
  );
}
function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (slug === "human-ai-loneliness") {
  return <LonelinessProject />;
}
if (slug === "ai-avatar-course") {
  return <CourseProject />;
}
if (slug === "vr-school-adaptation") {
  return <VRSchoolProject />;
}
if (slug === "nerv") {
  return <NERVProject />;
}
if (slug === "bot-psychologist") {
  return <BotProject />;
}
if (slug === "vbt") {
  return <VBTProject />;
}
  if (!project) {
    return (
      <main
        style={{
          background: colors.bg,
          color: colors.text,
          minHeight: "100vh",
          padding: "80px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        Project not found
      </main>
    );
  }

  return (
    <main
      style={{
        background: colors.bg,
        color: colors.text,
        minHeight: "100vh",
        padding: "80px",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <Link to="/" style={{ color: colors.soft, textDecoration: "none" }}>
        ← Back
      </Link>

      <div style={{ marginTop: "60px", maxWidth: "960px" }}>
        <p className="eyebrow">
          {project.year} · {project.role}
        </p>

        <h1 style={{ fontSize: "72px", lineHeight: 1, marginBottom: "24px" }}>
          {project.title}
        </h1>

        <p style={{ fontSize: "22px", color: colors.soft, lineHeight: "1.7" }}>
          {project.problem}
        </p>

        <div style={{ marginTop: "34px" }}>
          <h2>Approach</h2>
          <p style={{ fontSize: "20px", color: colors.soft, lineHeight: "1.7" }}>
            {project.approach}
          </p>
        </div>

        <div style={{ marginTop: "34px" }}>
          <h2>Outcome</h2>
          <p style={{ fontSize: "20px", color: colors.soft, lineHeight: "1.7" }}>
            {project.outcome}
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "30px" }}>
          {project.metrics.map((item) => (
            <div key={item} style={chip}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const globalStyles = `
body {
  margin: 0;
  background: #0B0D12;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

.glow {
  position: fixed;
  border-radius: 999px;
  filter: blur(140px);
  z-index: 0;
  pointer-events: none;
}

.glow1 {
  top: -180px;
  left: -180px;
  width: 520px;
  height: 520px;
  background: rgba(120,110,255,0.18);
}

.glow2 {
  bottom: -240px;
  right: -120px;
  width: 620px;
  height: 620px;
  background: rgba(60,90,255,0.14);
}

.eyebrow {
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #8F96A3;
  font-size: 14px;
}

.sectionTitle {
  font-size: 52px;
  margin: 0;
}

@media (max-width: 980px) {
  main section {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }

  h1 {
    font-size: 72px !important;
  }

  .sectionTitle {
    font-size: 42px;
  }

  a > div {
    height: auto !important;
  }
}
  @media (max-width: 768px) {
  main {
    overflow-x: hidden;
  }

  main section {
    padding: 44px 20px !important;
  }

  h1 {
    font-size: 54px !important;
    line-height: 0.95 !important;
  }

  h2,
  .sectionTitle {
    font-size: 36px !important;
  }

  h3 {
    font-size: 28px !important;
  }

  p {
    font-size: 16px !important;
  }

  .eyebrow {
    font-size: 11px !important;
    letter-spacing: 3px !important;
  }

  div[style*="grid-template-columns"] {
    grid-template-columns: 1fr !important;
  }

  video,
  img {
    max-width: 100% !important;
  }

  a {
    word-break: break-word;
  }
}

@media (max-width: 480px) {
  main section {
    padding: 36px 16px !important;
  }

  h1 {
    font-size: 44px !important;
  }

  .sectionTitle {
    font-size: 32px !important;
  }

  button,
  a {
    font-size: 14px !important;
  }
}
`;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}