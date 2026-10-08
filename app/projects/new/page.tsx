"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import { projects as defaultProjects, Project } from "@/lib/projects";
import {
  getProjects,
  initializeProjects,
  saveProjects,
} from "@/lib/projectStorage";

export default function CreateProjectPage() {
  const router = useRouter();

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [frontendRepo, setFrontendRepo] = useState("");
  const [backendRepo, setBackendRepo] = useState("");

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (!projectName.trim()) {
      setError("Project name is required.");
      return;
    }

    if (!description.trim()) {
      setError("Description is required.");
      return;
    }

    if (!frontendRepo.trim()) {
      setError("Frontend repository is required.");
      return;
    }

    if (!backendRepo.trim()) {
      setError("Backend repository is required.");
      return;
    }

    if (!frontendRepo.startsWith("https://github.com/")) {
      setError("Frontend repository must be a GitHub URL.");
      return;
    }

    if (!backendRepo.startsWith("https://github.com/")) {
      setError("Backend repository must be a GitHub URL.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Make sure the original projects exist
      initializeProjects(defaultProjects);

      // Read current projects
      const currentProjects = getProjects();

      // Find the next ID
      const nextId =
        currentProjects.length === 0
          ? "1"
          : String(
              Math.max(
                ...currentProjects.map((project) =>
                  Number(project.id)
                )
              ) + 1
            );

      // Create the new project
      const newProject: Project = {
        id: nextId,
        name: projectName.trim(),
        description: description.trim(),
        status: "Processing",
        updated: "Just now",
        frontendRepo: frontendRepo.trim(),
        backendRepo: backendRepo.trim(),
      };

      // Save everything
      saveProjects([
        ...currentProjects,
        newProject,
      ]);

      console.log("NEW PROJECT CREATED:", newProject);
      console.log(
        "ALL PROJECTS:",
        getProjects()
      );

      // Go to projects page
      router.push("/projects");
    } catch (err) {
      console.error(err);
      setError(
        "Something went wrong while creating the project."
      );
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex pl-24">
      <Sidebar />

      <section className="flex-1 p-8 overflow-auto">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold">
            Create New Project
          </h1>

          <p className="mt-2 text-slate-400">
            Add your project details and repositories to start
            the deployment workflow.
          </p>
        </div>

        <div className="max-w-3xl mt-8 bg-slate-900 border border-slate-800 rounded-xl p-6">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Project Name */}
            <div>
              <label
                htmlFor="projectName"
                className="block text-sm font-medium mb-2"
              >
                Project Name
              </label>

              <input
                id="projectName"
                type="text"
                value={projectName}
                onChange={(e) =>
                  setProjectName(e.target.value)
                }
                placeholder="e.g. My Portfolio"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 outline-none focus:border-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-2"
              >
                Description
              </label>

              <textarea
                id="description"
                rows={4}
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                placeholder="Describe your application..."
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 outline-none focus:border-blue-500 resize-none"
              />
            </div>

            {/* Frontend Repository */}
            <div>
              <label
                htmlFor="frontendRepo"
                className="block text-sm font-medium mb-2"
              >
                Frontend Repository
              </label>

              <input
                id="frontendRepo"
                type="url"
                value={frontendRepo}
                onChange={(e) =>
                  setFrontendRepo(e.target.value)
                }
                placeholder="https://github.com/username/frontend"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 outline-none focus:border-blue-500"
              />
            </div>

            {/* Backend Repository */}
            <div>
              <label
                htmlFor="backendRepo"
                className="block text-sm font-medium mb-2"
              >
                Backend Repository
              </label>

              <input
                id="backendRepo"
                type="url"
                value={backendRepo}
                onChange={(e) =>
                  setBackendRepo(e.target.value)
                }
                placeholder="https://github.com/username/backend"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 outline-none focus:border-blue-500"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3">
                <p className="text-sm text-red-400">
                  {error}
                </p>
              </div>
            )}

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <Link
                href="/projects"
                className="px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 font-medium"
              >
                {isSubmitting
                  ? "Creating Project..."
                  : "Create Project"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}