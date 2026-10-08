"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import {
  projects as defaultProjects,
  Project,
} from "@/lib/projects";
import {
  getProjects,
  initializeProjects,
} from "@/lib/projectStorage";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    initializeProjects(defaultProjects);
    setProjects(getProjects());

    const projectSection =
      document.getElementById("projects-section");

    if (!projectSection) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowProjects(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(projectSection);

    return () => observer.disconnect();
  }, []);

  const processingCount = projects.filter(
    (project) => project.status === "Processing"
  ).length;

  const deployedCount = projects.filter(
    (project) => project.status === "Deployed"
  ).length;

  const failedCount = projects.filter(
    (project) => project.status === "Failed"
  ).length;

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-x-hidden pl-24">

      <Sidebar />

      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}

      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-20">

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px]" />

          <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px]" />

          <div className="absolute left-0 bottom-0 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[120px]" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl w-full text-center">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Deployment Platform
          </div>

          {/* Main heading */}
          <h1 className="mt-8 text-6xl sm:text-7xl lg:text-[100px] font-bold tracking-[-0.06em] leading-[0.9]">
            Deploy smarter.
          </h1>

          <h2 className="mt-3 text-6xl sm:text-7xl lg:text-[100px] font-bold tracking-[-0.06em] leading-[0.9] text-slate-600">
            Ship faster.
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto mt-10 text-lg lg:text-xl text-slate-400 leading-8">
            Connect your repositories, monitor deployments,
            and manage your applications from one beautifully
            simple workspace.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

            <Link
              href="/projects/new"
              className="group relative px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-2xl shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="flex items-center gap-3">
                Create Project

                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </Link>

            <a
              href="#projects-section"
              className="px-8 py-4 rounded-2xl border border-slate-700/80 bg-slate-900/40 hover:bg-slate-800/70 text-slate-300 hover:text-white font-medium transition-all duration-300"
            >
              Explore Projects
            </a>

          </div>

          {/* Scroll indicator */}
          <a
            href="#projects-section"
            className="absolute left-1/2 -translate-x-1/2 mt-20 flex flex-col items-center gap-3 text-slate-600 hover:text-slate-400 transition"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Scroll
            </span>

            <span className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent" />
          </a>

        </div>
      </section>


      {/* ================================================= */}
      {/* PROJECT SECTION */}
      {/* ================================================= */}

      <section
        id="projects-section"
        className={`relative min-h-screen px-6 lg:px-24 py-28 transition-all duration-1000 ${
          showProjects
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/5 rounded-full blur-[130px]" />

        </div>

        <div className="relative max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-blue-400 font-semibold">
                Workspace
              </p>

              <h2 className="mt-4 text-4xl lg:text-6xl font-bold tracking-tight">
                Your projects.
              </h2>

              <p className="mt-4 text-slate-500 max-w-xl">
                Everything you're building, deploying, and
                monitoring in one place.
              </p>
            </div>

            <Link
              href="/projects"
              className="self-start md:self-auto px-5 py-3 rounded-xl border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-sm transition"
            >
              View all →
            </Link>

          </div>


          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-8">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs text-slate-500">
                Projects
              </p>

              <p className="text-3xl font-bold mt-2">
                {projects.length}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs text-slate-500">
                Processing
              </p>

              <p className="text-3xl font-bold mt-2 text-amber-400">
                {processingCount}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs text-slate-500">
                Deployed
              </p>

              <p className="text-3xl font-bold mt-2 text-emerald-400">
                {deployedCount}
              </p>
            </div>

          </div>


          {/* Projects */}
          <div className="space-y-3">

            {projects.length === 0 ? (

              <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-16 text-center">

                <p className="text-slate-500">
                  No projects yet.
                </p>

                <Link
                  href="/projects/new"
                  className="inline-block mt-6 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
                >
                  Create your first project
                </Link>

              </div>

            ) : (

              projects
                .slice()
                .reverse()
                .map((project, index) => (

                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="group block"
                  >

                    <div
                      className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-6 lg:p-7 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-500"
                      style={{
                        transitionDelay: `${index * 60}ms`,
                      }}
                    >

                      <div className="flex items-center justify-between gap-6">

                        {/* Left */}
                        <div className="flex items-center gap-5 min-w-0">

                          <div
                            className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${
                              project.status === "Deployed"
                                ? "bg-emerald-500/10 text-emerald-400"
                                : project.status === "Processing"
                                ? "bg-amber-500/10 text-amber-400"
                                : "bg-red-500/10 text-red-400"
                            }`}
                          >
                            {project.status === "Deployed"
                              ? "✓"
                              : project.status === "Processing"
                              ? "◌"
                              : "!"}
                          </div>

                          <div className="min-w-0">

                            <h3 className="text-lg font-semibold group-hover:text-blue-400 transition">
                              {project.name}
                            </h3>

                            <p className="text-sm text-slate-500 mt-1 truncate">
                              {project.description}
                            </p>

                          </div>

                        </div>


                        {/* Right */}
                        <div className="flex items-center gap-5">

                          <span
                            className={`hidden sm:block px-3 py-1.5 rounded-full text-xs font-medium ${
                              project.status === "Deployed"
                                ? "bg-emerald-500/10 text-emerald-400"
                                : project.status === "Processing"
                                ? "bg-amber-500/10 text-amber-400"
                                : "bg-red-500/10 text-red-400"
                            }`}
                          >
                            {project.status}
                          </span>

                          <span className="text-xl text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all">
                            →
                          </span>

                        </div>

                      </div>

                    </div>

                  </Link>

                ))

            )}

          </div>


          {/* Failed projects notice */}
          {failedCount > 0 && (
            <div className="mt-6 rounded-2xl border border-red-500/10 bg-red-500/5 px-5 py-4">
              <p className="text-sm text-red-400">
                {failedCount} project
                {failedCount > 1 ? "s" : ""} require
                attention.
              </p>
            </div>
          )}

        </div>
      </section>


      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <footer className="border-t border-slate-900 py-10 px-6 lg:px-24">

        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-slate-600">
            © 2026 AgentCloud
          </p>

          <p className="text-xs text-slate-700">
            Deployment infrastructure, simplified.
          </p>

        </div>

      </footer>

    </main>
  );
}