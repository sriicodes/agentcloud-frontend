import Link from "next/link";
import Sidebar from "@/components/layout/Sidebar";

const teamMembers = [
  {
    name: "Srishti Sinha",
    role: "Frontend Developer",
    image: "/team/girl.png",
    accent: "blue",
    contribution:
      "Developed the AgentCloud dashboard, project management, analysis results, testing, and deployment interfaces.",
  },
  {
    name: "Anushka Gahlowt",
    role: "Frontend Developer",
    image: "/team/girl.png",
    accent: "violet",
    contribution:
      "Developed authentication, GitHub integration, job monitoring, logs, results, and frontend testing.",
  },
  {
    name: "Shaivi Pandey",
    role: "Backend Developer",
    image: "/team/girl.png",
    accent: "pink",
    contribution:
      "Developed backend APIs, authentication, GitHub integration, project management, database, and security.",
  },
  {
    name: "Rinav Vaish",
    role: "Backend & Orchestration Developer",
    image: "/team/boy.png",
    accent: "cyan",
    contribution:
      "Developed job orchestration, service integration, deployment pipeline, and error handling.",
  },
  {
    name: "Rohan Das",
    role: "Repository Analysis Engineer",
    image: "/team/boy.png",
    accent: "amber",
    contribution:
      "Developed repository analysis for project structure, dependencies, configuration, commands, and frontend-backend relationships.",
  },
  {
    name: "Shreya",
    role: "Docker & Sandbox Engineer",
    image: "/team/girl.png",
    accent: "rose",
    contribution:
      "Developed secure sandboxing, Docker infrastructure, application testing, health checks, logging, and cleanup.",
  },
];

const colors: Record<
  string,
  {
    border: string;
    glow: string;
    text: string;
    badge: string;
  }
> = {
  blue: {
    border: "border-blue-500/30 hover:border-blue-500/60",
    glow: "bg-blue-600/20",
    text: "text-blue-400",
    badge: "border-blue-500/50 bg-blue-500/10",
  },

  violet: {
    border: "border-violet-500/30 hover:border-violet-500/60",
    glow: "bg-violet-600/20",
    text: "text-violet-400",
    badge: "border-violet-500/50 bg-violet-500/10",
  },

  pink: {
    border: "border-pink-500/30 hover:border-pink-500/60",
    glow: "bg-pink-600/20",
    text: "text-pink-400",
    badge: "border-pink-500/50 bg-pink-500/10",
  },

  cyan: {
    border: "border-cyan-500/30 hover:border-cyan-500/60",
    glow: "bg-cyan-600/20",
    text: "text-cyan-400",
    badge: "border-cyan-500/50 bg-cyan-500/10",
  },

  amber: {
    border: "border-amber-500/30 hover:border-amber-500/60",
    glow: "bg-amber-600/20",
    text: "text-amber-400",
    badge: "border-amber-500/50 bg-amber-500/10",
  },

  rose: {
    border: "border-rose-500/30 hover:border-rose-500/60",
    glow: "bg-rose-600/20",
    text: "text-rose-400",
    badge: "border-rose-500/50 bg-rose-500/10",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-x-hidden pl-24">

      <Sidebar />

      {/* ================= BACKGROUND ================= */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        <div className="absolute left-1/2 -translate-x-1/2 -top-40 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[160px]" />

        <div className="absolute right-0 top-1/3 w-[450px] h-[450px] bg-violet-600/5 rounded-full blur-[150px]" />

        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px]" />

      </div>

      {/* Decorative circles */}

      <div className="fixed inset-0 pointer-events-none opacity-20">

        <div className="absolute -left-40 -top-80 w-[900px] h-[900px] rounded-full border border-blue-500/20" />

        <div className="absolute -right-40 -top-80 w-[900px] h-[900px] rounded-full border border-violet-500/10" />

      </div>

      {/* ================= PAGE ================= */}

      <section className="relative z-10 px-6 lg:px-12 py-10">

        <div className="max-w-[1400px] mx-auto">

          {/* ================= HERO ================= */}

          <div className="text-center">

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/5">

              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />

              <span className="text-sm tracking-[0.15em] uppercase text-blue-400">
                The Team
              </span>

            </div>

            <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.05em] leading-none">
              Built by a team.
            </h1>

            <h2 className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.05em] bg-gradient-to-r from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Designed to deploy.
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-base lg:text-lg text-slate-400 leading-7">
              AgentCloud brings together frontend, backend,
              orchestration, repository analysis, and secure
              execution into one deployment platform.
            </p>

          </div>

          {/* ================= TEAM GRID ================= */}

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

            {teamMembers.map((member) => {

              const color = colors[member.accent];

              return (
                <article
                  key={member.name}
                  className={`
                    group
                    relative
                    h-[320px]
                    overflow-hidden
                    rounded-3xl
                    border
                    bg-[#080d1c]/90
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:bg-[#0b1123]
                    ${color.border}
                  `}
                >

                  {/* Card glow */}

                  <div
                    className={`
                      absolute
                      -left-16
                      -top-16
                      w-52
                      h-52
                      rounded-full
                      blur-[80px]
                      opacity-60
                      ${color.glow}
                    `}
                  />

                  {/* ================= CARD CONTENT ================= */}

                  <div className="relative h-full grid grid-cols-[180px_1fr] gap-5 p-5">

                    {/* ================= AVATAR ================= */}

                    <div className="h-[250px] w-[180px] flex items-center justify-center">

                      <div className="relative w-[165px] h-[230px] rounded-2xl bg-slate-950/40 overflow-hidden flex items-center justify-center">

                        {/* Avatar glow */}

                        <div
                          className={`
                            absolute
                            left-1/2
                            top-1/2
                            -translate-x-1/2
                            -translate-y-1/2
                            w-32
                            h-32
                            rounded-full
                            blur-3xl
                            ${color.glow}
                          `}
                        />

                        {/* Avatar */}

                        <img
                          src={member.image}
                          alt={member.name}
                          className="
                            relative
                            z-10
                            w-full
                            h-full
                            object-contain
                            p-3
                            transition-transform
                            duration-500
                            group-hover:scale-105
                          "
                        />

                        {/* Bottom fade */}

                        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#080d1c] to-transparent z-20 pointer-events-none" />

                      </div>

                    </div>

                    {/* ================= TEXT ================= */}

                    <div className="min-w-0 pr-2">

                      {/* ROLE */}

                      <div className="h-[42px] flex items-start">

                        <div
                          className={`
                            inline-flex
                            items-center
                            whitespace-nowrap
                            px-3
                            py-1.5
                            rounded-full
                            border
                            text-[10px]
                            lg:text-[11px]
                            leading-none
                            font-medium
                            ${color.text}
                            ${color.badge}
                          `}
                        >
                          {member.role}
                        </div>

                      </div>

                      {/* NAME */}

                      <h2 className="text-xl font-bold tracking-tight">
                        {member.name}
                      </h2>

                      {/* DIVIDER */}

                      <div className="mt-3 h-px bg-slate-800/80" />

                      {/* CONTRIBUTION */}

                      <p className="mt-3 text-xs lg:text-[13px] text-slate-400 leading-5">
                        {member.contribution}
                      </p>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

          {/* ================= BOTTOM CTA ================= */}

          <div className="mt-8 mb-8 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl p-7 lg:p-9 text-center">

            <p className="text-xs uppercase tracking-[0.25em] text-blue-400 font-semibold">
              AgentCloud
            </p>

            <h2 className="mt-3 text-2xl lg:text-3xl font-bold">
              Six roles. One deployment pipeline.
            </h2>

            <p className="max-w-2xl mx-auto mt-3 text-sm text-slate-500 leading-6">
              From repository analysis to sandboxed testing,
              orchestration, and deployment, every part of
              AgentCloud works together as one connected system.
            </p>

            <Link
              href="/"
              className="inline-flex mt-5 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20 font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore AgentCloud →
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}