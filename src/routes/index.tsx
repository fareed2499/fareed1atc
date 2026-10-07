import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Carter — Product Designer & Developer" },
      {
        name: "description",
        content:
          "Resume of Alex Carter, a product designer and front-end developer with 8 years of experience building thoughtful digital products.",
      },
      { property: "og:title", content: "Alex Carter — Product Designer & Developer" },
      {
        property: "og:description",
        content:
          "Resume of Alex Carter, a product designer and front-end developer with 8 years of experience building thoughtful digital products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const experience = [
  {
    period: "2022 — Present",
    role: "Senior Product Designer",
    company: "Northwind",
    location: "Remote",
    description:
      "Lead designer for a platform serving 400k users. Built the design system from scratch, cut onboarding drop-off by 34%, and mentor a team of three designers.",
  },
  {
    period: "2019 — 2022",
    role: "Product Designer",
    company: "Cadence Labs",
    location: "Berlin",
    description:
      "Designed the flagship mobile app from zero to launch. Owned research, prototyping, and the motion language across iOS and Android.",
  },
  {
    period: "2016 — 2019",
    role: "UI Engineer",
    company: "Studio Kern",
    location: "Lisbon",
    description:
      "Bridged design and front-end for agency clients in fintech and culture. Shipped twelve production sites with a focus on performance and accessibility.",
  },
];

const skills = [
  "Product Strategy",
  "Design Systems",
  "Figma",
  "Prototyping",
  "React",
  "TypeScript",
  "Motion Design",
  "Accessibility",
  "User Research",
  "Design Leadership",
];

const projects = [
  {
    name: "Atlas Design System",
    description:
      "An open design system with 120 accessible components, live documentation, and theming support adopted by six product teams.",
    link: "#",
  },
  {
    name: "Tempo",
    description:
      "A training companion app with a kinetic motion system. 50k downloads in the first quarter and featured on the App Store.",
    link: "#",
  },
  {
    name: "Ledger",
    description:
      "A real-time treasury dashboard for finance teams managing multi-currency balances across twelve markets.",
    link: "#",
  },
];

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="font-display text-sm italic text-muted-foreground">
        {index}
      </span>
      <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
          <a href="#top" className="font-display text-lg font-medium tracking-tight">
            Alex Carter
          </a>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground sm:flex">
            <a href="#experience" className="transition-colors hover:text-foreground">
              Experience
            </a>
            <a href="#projects" className="transition-colors hover:text-foreground">
              Projects
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
            <a
              href="#contact"
              className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      <main id="top" className="mx-auto max-w-4xl px-6">
        {/* Hero */}
        <header className="animate-reveal border-b border-border py-24 sm:py-32">
          <p className="mb-5 flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <MapPin className="size-4" />
            Lisbon, Portugal — open to remote
          </p>
          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-balance sm:text-7xl">
            Product designer who ships code.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            I'm Alex Carter. For eight years I've helped teams turn ambiguous
            ideas into products people love — from early sketches to the
            front-end that ships.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" />
              Get in touch
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </div>
        </header>

        {/* About */}
        <section className="border-b border-border py-20">
          <SectionHeading index="01" title="About" />
          <p className="max-w-2xl text-xl leading-relaxed text-pretty sm:text-2xl">
            I care about the last 20% — the easing on a transition, the clarity
            of an empty state, the moment a form finally makes sense. I work
            best embedded with product and engineering, turning fuzzy problems
            into shipped, measurable interfaces.
          </p>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20 border-b border-border py-20">
          <SectionHeading index="02" title="Experience" />
          <div className="space-y-12">
            {experience.map((job) => (
              <article
                key={job.company}
                className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-8"
              >
                <p className="text-sm font-medium text-muted-foreground">
                  {job.period}
                </p>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight">
                    {job.role}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {job.company} · {job.location}
                  </p>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="border-b border-border py-20">
          <SectionHeading index="03" title="Skills" />
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:bg-secondary"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 border-b border-border py-20">
          <SectionHeading index="04" title="Selected projects" />
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.link}
                className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-secondary"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-medium tracking-tight">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="border-b border-border py-20">
          <SectionHeading index="05" title="Education" />
          <div className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-8">
            <p className="text-sm font-medium text-muted-foreground">2012 — 2016</p>
            <div>
              <h3 className="font-display text-xl font-medium tracking-tight">
                BSc Interaction Design
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Copenhagen Institute of Design
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <footer id="contact" className="scroll-mt-20 py-24 text-center">
          <p className="font-display text-sm italic text-muted-foreground">06 — Contact</p>
          <h2 className="mx-auto mt-4 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight text-balance sm:text-5xl">
            Let's build something considered.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Open to select freelance projects and full-time roles from next quarter.
          </p>
          <a
            href="mailto:hello@alexcarter.design"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" />
            hello@alexcarter.design
          </a>
          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
              <Github className="size-4" /> GitHub
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
              <Globe className="size-4" /> Writing
            </a>
          </div>
          <p className="mt-16 text-xs text-muted-foreground">
            © 2026 Alex Carter · Lisbon
          </p>
        </footer>
      </main>
    </div>
  );
}
