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

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    initializeProjects(defaultProjects);

    const storedProjects = getProjects();
    setProjects(storedProjects);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white pl-24">
      <Sidebar />

      <section className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Projects
            </h1>

            <p className="mt-2 text-slate-400">
              View and manage all your AgentCloud projects.
            </p>
          </div>

          {/* Create Project */}
          <Link
            href="/projects/new"
            className="bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-lg font-medium transition"
          >
            + Create Project
          </Link>
        </div>

        {/* Projects */}
        {projects.length === 0 ? (
          <div className="mt-8 bg-slate-900 border border-slate-800 rounded-xl p-10 text-center">
            <h2 className="text-xl font-semibold">
              No Projects Yet
            </h2>

            <p className="text-slate-500 mt-2">
              Create your first project to get started.
            </p>

            <Link
              href="/projects/new"
              className="inline-block mt-5 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
            >
              Create Project
            </Link>
          </div>
        ) : (
          <div className="mt-8 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-6 border-b border-slate-800 last:border-b-0 hover:bg-slate-800/40 transition"
              >
                <div className="flex items-center justify-between">
                  {/* Project Information */}
                  <div>
                    <h2 className="text-lg font-semibold">
                      {project.name}
                    </h2>

                    <p className="text-sm text-slate-500 mt-1">
                      {project.description}
                    </p>

                    <p className="text-xs text-slate-600 mt-3">
                      Updated {project.updated}
                    </p>
                  </div>

                  {/* Status + View */}
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Deployed"
                          ? "bg-green-500/10 text-green-400"
                          : project.status === "Processing"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {project.status}
                    </span>

                    <Link
                      href={`/projects/${project.id}`}
                      className="px-4 py-2 rounded-lg border border-slate-700 text-sm text-slate-300 hover:bg-slate-800 transition"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600">
            Showing {projects.length} projects
          </p>
        </div>
      </section>
    </main>
  );
}