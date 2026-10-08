import Sidebar from "@/components/layout/Sidebar";

const projects = [
  {
    name: "My Portfolio",
    description: "Personal portfolio application",
    status: "Deployed",
    updated: "2 hours ago",
  },
  {
    name: "E-Commerce App",
    description: "Full-stack shopping application",
    status: "Processing",
    updated: "5 hours ago",
  },
  {
    name: "Chat Application",
    description: "Real-time messaging application",
    status: "Failed",
    updated: "Yesterday",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar />

      <section className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome back 👋
            </h1>

            <p className="mt-2 text-slate-400">
              Manage your projects and deployment workflow.
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-lg font-medium transition">
            + Create Project
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <p className="text-slate-400 text-sm">
              Total Projects
            </p>
            <p className="text-3xl font-bold mt-2">3</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <p className="text-slate-400 text-sm">
              Processing
            </p>
            <p className="text-3xl font-bold mt-2">1</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <p className="text-slate-400 text-sm">
              Deployed
            </p>
            <p className="text-3xl font-bold mt-2">1</p>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">
              Recent Projects
            </h2>

            <button className="text-sm text-blue-400 hover:text-blue-300">
              View all
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            {projects.map((project) => (
              <div
                key={project.name}
                className="p-5 border-b border-slate-800 last:border-b-0 hover:bg-slate-800/50 transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">
                      {project.name}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      {project.description}
                    </p>
                  </div>

                  <div className="text-right">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Deployed"
                          ? "bg-green-500/10 text-green-400"
                          : project.status === "Processing"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {project.status}
                    </span>

                    <p className="text-xs text-slate-500 mt-2">
                      {project.updated}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}