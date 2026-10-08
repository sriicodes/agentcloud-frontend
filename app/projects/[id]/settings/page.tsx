import Link from "next/link";
import Sidebar from "@/components/layout/Sidebar";

export default function ProjectSettingsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <section className="ml-[88px] min-h-screen p-6 md:p-8 lg:p-10 overflow-x-hidden">

        <div className="max-w-4xl mx-auto">

          {/* BACK */}

          <Link
            href="/projects/3"
            className="inline-flex items-center text-sm text-slate-400 hover:text-white transition"
          >
            ← Back to Project
          </Link>

          {/* HEADER */}

          <div className="mt-6">

            <h1 className="text-3xl font-bold">
              Project Settings
            </h1>

            <p className="mt-2 text-slate-400">
              Manage your project configuration and repositories.
            </p>

          </div>

          {/* GENERAL SETTINGS */}

          <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h2 className="text-lg font-semibold">
              General
            </h2>

            <div className="mt-5">

              <label
                htmlFor="projectName"
                className="block text-sm text-slate-400 mb-2"
              >
                Project Name
              </label>

              <input
                id="projectName"
                type="text"
                defaultValue="Chat Application"
                className="
                  w-full
                  bg-slate-950
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-blue-500
                  transition
                "
              />

            </div>

            <div className="mt-5">

              <label
                htmlFor="description"
                className="block text-sm text-slate-400 mb-2"
              >
                Description
              </label>

              <textarea
                id="description"
                defaultValue="Real-time messaging application"
                rows={4}
                className="
                  w-full
                  bg-slate-950
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-blue-500
                  transition
                  resize-none
                "
              />

            </div>

          </div>

          {/* REPOSITORIES */}

          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h2 className="text-lg font-semibold">
              Repositories
            </h2>

            <div className="mt-5">

              <label
                htmlFor="frontendRepo"
                className="block text-sm text-slate-400 mb-2"
              >
                Frontend Repository
              </label>

              <input
                id="frontendRepo"
                type="text"
                defaultValue="https://github.com/example/chat-frontend"
                className="
                  w-full
                  bg-slate-950
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-blue-500
                  transition
                "
              />

            </div>

            <div className="mt-5">

              <label
                htmlFor="backendRepo"
                className="block text-sm text-slate-400 mb-2"
              >
                Backend Repository
              </label>

              <input
                id="backendRepo"
                type="text"
                defaultValue="https://github.com/example/chat-backend"
                className="
                  w-full
                  bg-slate-950
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-blue-500
                  transition
                "
              />

            </div>

          </div>

          {/* ACTIONS */}

          <div className="mt-6 flex justify-end gap-3">

            <Link
              href="/projects/3"
              className="
                px-5
                py-2.5
                rounded-xl
                border
                border-slate-700
                text-slate-300
                hover:bg-slate-800
                transition
              "
            >
              Cancel
            </Link>

            <button
              type="button"
              className="
                px-5
                py-2.5
                rounded-xl
                bg-blue-600
                hover:bg-blue-500
                transition
                font-medium
              "
            >
              Save Changes
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}