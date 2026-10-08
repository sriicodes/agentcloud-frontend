import Link from "next/link";
import Sidebar from "@/components/layout/Sidebar";

const projects = [
  {
    id: "1",
    name: "My Portfolio",
    description: "Personal portfolio application",
    status: "Deployed",
    frontend: "github.com/example/frontend",
    backend: "github.com/example/backend",
  },
  {
    id: "2",
    name: "E-Commerce App",
    description: "Full-stack shopping application",
    status: "Processing",
    frontend: "github.com/example/ecommerce-frontend",
    backend: "github.com/example/ecommerce-backend",
  },
  {
    id: "3",
    name: "Chat Application",
    description: "Real-time messaging application",
    status: "Deployed",
    frontend: "github.com/example/chat-frontend",
    backend: "github.com/example/chat-backend",
  },
  {
    id: "4",
    name: "AgentCloud Test",
    description: "Testing the AgentCloud project creation workflow",
    status: "Processing",
    frontend: "github.com/example/agentcloud-frontend",
    backend: "github.com/example/agentcloud-backend",
  },
];

const deploymentSteps = [
  {
    name: "Repository Scan",
    description: "Analyzing frontend and backend repositories",
  },
  {
    name: "Build & Test",
    description: "Installing dependencies and running tests",
  },
  {
    name: "Deployment",
    description: "Preparing application for deployment",
  },
  {
    name: "Application",
    description: "Application is ready",
  },
];

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectOverviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project =
    projects.find((item) => item.id === id) ?? projects[0];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <Sidebar />

      {/* Main content starts after the sidebar */}
      <section className="ml-[88px] min-h-screen p-6 md:p-8 lg:p-10 overflow-x-hidden">

        <div className="max-w-[1500px] mx-auto">

          {/* Back */}

          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-slate-400 hover:text-white transition"
          >
            ← Back to Projects
          </Link>

          {/* Header */}

          <div className="mt-6 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

            <div className="min-w-0">

              <div className="flex flex-wrap items-center gap-3">

                <h1 className="text-3xl lg:text-4xl font-bold">
                  {project.name}
                </h1>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Deployed"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  {project.status}
                </span>

              </div>

              <p className="mt-2 text-slate-400">
                {project.description}
              </p>

              <p className="mt-2 text-xs text-slate-600">
                Project ID: {project.id}
              </p>

            </div>

            {/* Project Settings */}

            <Link
              href={`/projects/${project.id}/settings`}
              className="
                shrink-0
                inline-flex
                items-center
                justify-center
                px-5
                py-2.5
                rounded-xl
                border
                border-slate-700
                bg-slate-900
                text-slate-300
                hover:bg-slate-800
                hover:text-white
                transition
              "
            >
              Project Settings
            </Link>

          </div>

          {/* Repositories */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

              <p className="text-sm text-slate-400">
                Frontend Repository
              </p>

              <p className="mt-3 font-medium break-all">
                {project.frontend}
              </p>

              <span className="inline-block mt-3 text-xs px-2.5 py-1 rounded-full bg-green-500/10 text-green-400">
                Connected
              </span>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

              <p className="text-sm text-slate-400">
                Backend Repository
              </p>

              <p className="mt-3 font-medium break-all">
                {project.backend}
              </p>

              <span className="inline-block mt-3 text-xs px-2.5 py-1 rounded-full bg-green-500/10 text-green-400">
                Connected
              </span>

            </div>

          </div>

          {/* Deployment Workflow */}

          <div className="mt-10">

            <h2 className="text-2xl font-semibold">
              Deployment Workflow
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Track your application as it moves through the deployment
              pipeline.
            </p>

            <div className="mt-6 space-y-4">

              {deploymentSteps.map((step) => (

                <div
                  key={step.name}
                  className="
                    bg-slate-900
                    border
                    border-slate-800
                    rounded-2xl
                    p-5
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        w-11
                        h-11
                        shrink-0
                        rounded-full
                        bg-green-500/10
                        text-green-400
                        flex
                        items-center
                        justify-center
                        text-lg
                        font-semibold
                      "
                    >
                      ✓
                    </div>

                    <div className="flex-1 min-w-0">

                      <h3 className="font-medium">
                        {step.name}
                      </h3>

                      <p className="text-sm text-slate-500 mt-1">
                        {step.description}
                      </p>

                    </div>

                    <span
                      className="
                        shrink-0
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-medium
                        bg-green-500/10
                        text-green-400
                      "
                    >
                      Completed
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Application */}

          <div
            className="
              mt-10
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-6
            "
          >

            <div
              className="
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-4
              "
            >

              <div>

                <h2 className="text-xl font-semibold">
                  Application
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Your deployed application is ready.
                </p>

              </div>

              <button
                type="button"
                className="
                  shrink-0
                  px-5
                  py-2.5
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-500
                  transition
                  font-medium
                "
              >
                Open Application
              </button>

            </div>

            <div
              className="
                mt-5
                rounded-xl
                border
                border-slate-800
                bg-slate-950
                p-4
              "
            >

              <p className="text-sm text-slate-500">
                Application URL
              </p>

              <p className="mt-2 text-blue-400 break-all">
                https://app.agentcloud.dev
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}