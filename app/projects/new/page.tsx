"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import Sidebar from "@/components/layout/Sidebar";

export default function CreateProjectPage() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [frontendRepo, setFrontendRepo] = useState("");
  const [backendRepo, setBackendRepo] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function validateForm() {
    const newErrors: Record<string, string> = {};

    if (!projectName.trim()) {
      newErrors.projectName = "Project name is required.";
    }

    if (!description.trim()) {
      newErrors.description = "Description is required.";
    }

    if (!frontendRepo.trim()) {
      newErrors.frontendRepo = "Frontend repository URL is required.";
    } else if (!frontendRepo.startsWith("https://github.com/")) {
      newErrors.frontendRepo =
        "Please enter a valid GitHub repository URL.";
    }

    if (!backendRepo.trim()) {
      newErrors.backendRepo = "Backend repository URL is required.";
    } else if (!backendRepo.startsWith("https://github.com/")) {
      newErrors.backendRepo =
        "Please enter a valid GitHub repository URL.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSuccess(false);

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setIsSubmitting(true);

    // Temporary mock API delay.
    // We will replace this with the real backend API later.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSuccess(true);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar />

      <section className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold">
            Create New Project
          </h1>

          <p className="mt-2 text-slate-400">
            Add your project details and repositories to start the
            deployment workflow.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mt-8 bg-slate-900 border border-slate-800 rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                onChange={(event) => setProjectName(event.target.value)}
                placeholder="e.g. My Portfolio"
                className={`w-full bg-slate-950 border rounded-lg px-4 py-3 text-white placeholder-slate-600 outline-none transition ${
                  errors.projectName
                    ? "border-red-500"
                    : "border-slate-700 focus:border-blue-500"
                }`}
              />

              {errors.projectName ? (
                <p className="text-sm text-red-400 mt-2">
                  {errors.projectName}
                </p>
              ) : (
                <p className="text-xs text-slate-500 mt-2">
                  Choose a name that helps you identify your project.
                </p>
              )}
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
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Describe your application..."
                className={`w-full bg-slate-950 border rounded-lg px-4 py-3 text-white placeholder-slate-600 outline-none transition resize-none ${
                  errors.description
                    ? "border-red-500"
                    : "border-slate-700 focus:border-blue-500"
                }`}
              />

              {errors.description && (
                <p className="text-sm text-red-400 mt-2">
                  {errors.description}
                </p>
              )}
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
                onChange={(event) => setFrontendRepo(event.target.value)}
                placeholder="https://github.com/username/frontend"
                className={`w-full bg-slate-950 border rounded-lg px-4 py-3 text-white placeholder-slate-600 outline-none transition ${
                  errors.frontendRepo
                    ? "border-red-500"
                    : "border-slate-700 focus:border-blue-500"
                }`}
              />

              {errors.frontendRepo ? (
                <p className="text-sm text-red-400 mt-2">
                  {errors.frontendRepo}
                </p>
              ) : (
                <p className="text-xs text-slate-500 mt-2">
                  GitHub repository containing your frontend application.
                </p>
              )}
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
                onChange={(event) => setBackendRepo(event.target.value)}
                placeholder="https://github.com/username/backend"
                className={`w-full bg-slate-950 border rounded-lg px-4 py-3 text-white placeholder-slate-600 outline-none transition ${
                  errors.backendRepo
                    ? "border-red-500"
                    : "border-slate-700 focus:border-blue-500"
                }`}
              />

              {errors.backendRepo ? (
                <p className="text-sm text-red-400 mt-2">
                  {errors.backendRepo}
                </p>
              ) : (
                <p className="text-xs text-slate-500 mt-2">
                  GitHub repository containing your backend application.
                </p>
              )}
            </div>

            {/* Success Message */}
            {success && (
              <div className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3">
                <p className="text-sm text-green-400">
                  Project created successfully!
                </p>

                <p className="text-xs text-green-400/70 mt-1">
                  Backend integration will be connected next.
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <Link
                href="/"
                className="px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed font-medium transition"
              >
                {isSubmitting ? "Creating Project..." : "Create Project"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}