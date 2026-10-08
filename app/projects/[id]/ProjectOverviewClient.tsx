"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import Sidebar from "@/components/layout/Sidebar";

import {
  projects as defaultProjects,
  Project,
} from "@/lib/projects";

import {
  getProjects,
  initializeProjects,
  updateProjectStatus,
} from "@/lib/projectStorage";

const deploymentSteps = [
  {
    name: "Repository Scan",
    description:
      "Analyzing frontend and backend repositories",
  },
  {
    name: "Build & Test",
    description:
      "Installing dependencies and running tests",
  },
  {
    name: "Deployment",
    description:
      "Preparing application for deployment",
  },
  {
    name: "Application",
    description:
      "Application URL will appear here",
  },
];

export default function ProjectOverviewClient() {
  const params = useParams();

  const projectId = params.id as string;

  const [project, setProject] = useState<Project | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    initializeProjects(defaultProjects);

    const allProjects = getProjects();

    const foundProject = allProjects.find(
      (item) => item.id === projectId
    );

    setProject(foundProject || null);
  }, [projectId]);

  async function handleDeploymentAction() {
    if (!project) {
      return;
    }

    setIsUpdating(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    const updatedProjects = updateProjectStatus(
      project.id,
      "Deployed"
    );

    const updatedProject = updatedProjects.find(
      (item) => item.id === project.id
    );

    if (updatedProject) {
      setProject(updatedProject);
    }

    setIsUpdating(false);
  }

  if (project === null) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex pl-24">
        <Sidebar />

        <section className="flex-1 p-8">
          <Link
            href="/projects"
            className="text-sm text-slate-400 hover:text-white transition"
          >
            ← Back to Projects
          </Link>

          <div className="mt-10 bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
            <h1 className="text-2xl font-bold">
              Project Not Found
            </h1>

            <p className="mt-2 text-slate-500">
              The project you're looking for doesn't exist.
            </p>

            <Link
              href="/projects"
              className="inline-block mt-6 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
            >
              Back to Projects
            </Link>
          </div>
        </section>
      </main>
    );
  }

  function getStepStatus(index: number) {
    if (project.status === "Failed") {
      if (index === 0) return "Completed";
      if (index === 1) return "Failed";
      return "Pending";
    }

    if (project.status === "Processing") {
      if (index < 2) return "Completed";
      if (index === 2) return "Processing";
      return "Pending";
    }

    return "Completed";
  }

  function getDeploymentButtonText() {
    if (isUpdating) {
      return "Deploying...";
    }

    if (project.status === "Failed") {
      return "Retry Deployment";
    }

    if (project.status === "Deployed") {
      return "Redeploy";
    }

    return "Deployment in Progress";
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar />

      <section className="flex-1 p-8 overflow-auto">

        {/* Back */}
        <Link
          href="/projects"
          className="text-sm text-slate-400 hover:text-white transition"
        >
          ← Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mt-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">
                {project.name}
              </h1>

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
            </div>

            <p className="mt-2 text-slate-400">
              {project.description}
            </p>

            <p className="text-xs text-slate-600 mt-2">
              Project ID: {project.id}
            </p>
          </div>

          <button
            type="button"
            className="px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
          >
            Project Settings
          </button>
        </div>

        {/* Repositories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <p className="text-sm text-slate-400">
              Frontend Repository
            </p>

            <p className="mt-3 font-medium break-all">
              {project.frontendRepo}
            </p>

            <span className="inline-block mt-3 text-xs px-2.5 py-1 rounded-full bg-green-500/10 text-green-400">
              Connected
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <p className="text-sm text-slate-400">
              Backend Repository
            </p>

            <p className="mt-3 font-medium break-all">
              {project.backendRepo}
            </p>

            <span className="inline-block mt-3 text-xs px-2.5 py-1 rounded-full bg-green-500/10 text-green-400">
              Connected
            </span>
          </div>

        </div>

        {/* Deployment Workflow */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold">
            Deployment Workflow
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Track your application as it moves through the
            deployment pipeline.
          </p>

          <div className="mt-5 space-y-4">
            {deploymentSteps.map((step, index) => {
              const status = getStepStatus(index);

              return (
                <div
                  key={step.name}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-5"
                >
                  <div className="flex items-center gap-4">

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        status === "Completed"
                          ? "bg-green-500/10 text-green-400"
                          : status === "Processing"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : status === "Failed"
                          ? "bg-red-500/10 text-red-400"
                          : "bg-slate-800 text-slate-500"
                      }`}
                    >
                      {status === "Completed"
                        ? "✓"
                        : status === "Failed"
                        ? "!"
                        : index + 1}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-medium">
                        {step.name}
                      </h3>

                      <p className="text-sm text-slate-500 mt-1">
                        {step.description}
                      </p>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        status === "Completed"
                          ? "bg-green-500/10 text-green-400"
                          : status === "Processing"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : status === "Failed"
                          ? "bg-red-500/10 text-red-400"
                          : "bg-slate-800 text-slate-500"
                      }`}
                    >
                      {status}
                    </span>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deployment Controls */}
        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-lg font-semibold">
                Deployment
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Manage the deployment of your application.
              </p>
            </div>

            <button
              type="button"
              onClick={handleDeploymentAction}
              disabled={
                isUpdating ||
                project.status === "Processing"
              }
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 disabled:cursor-not-allowed font-medium transition"
            >
              {getDeploymentButtonText()}
            </button>

          </div>
        </div>

        {/* Application */}
        <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold">
            Application
          </h2>

          {project.status === "Deployed" && (
            <div className="mt-4 rounded-lg border border-green-500/20 bg-green-500/5 p-6">
              <p className="text-sm text-slate-400">
                Your application has been successfully deployed.
              </p>

              <button
                type="button"
                className="mt-4 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 transition font-medium"
              >
                Open Application
              </button>
            </div>
          )}

          {project.status === "Processing" && (
            <div className="mt-4 rounded-lg border border-dashed border-slate-700 p-6 text-center">
              <p className="text-slate-500 text-sm">
                Your application is currently being deployed.
              </p>

              <p className="text-xs text-slate-600 mt-2">
                The application URL will appear here once
                deployment is complete.
              </p>

              <button
                type="button"
                disabled
                className="mt-4 px-4 py-2 rounded-lg bg-slate-800 text-slate-600 cursor-not-allowed"
              >
                Open Application
              </button>
            </div>
          )}

          {project.status === "Failed" && (
            <div className="mt-4 rounded-lg border border-red-500/20 bg-red-500/5 p-6">
              <p className="text-sm text-red-400">
                Deployment failed. Please retry the deployment.
              </p>

              <button
                type="button"
                onClick={handleDeploymentAction}
                disabled={isUpdating}
                className="mt-4 px-4 py-2 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 disabled:opacity-50 transition"
              >
                {isUpdating
                  ? "Retrying..."
                  : "Retry Deployment"}
              </button>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}