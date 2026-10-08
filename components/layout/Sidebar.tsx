export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 text-white flex flex-col">
      
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <div>
          <h1 className="text-xl font-bold">AgentCloud</h1>
          <p className="text-xs text-slate-400">Deployment Platform</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
          Workspace
        </p>

        <div className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-slate-800 text-white"
          >
            <span>⌂</span>
            <span>Dashboard</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition"
          >
            <span>◫</span>
            <span>Projects</span>
          </a>
        </div>
      </nav>

      {/* Bottom */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-semibold">
            S
          </div>

          <div>
            <p className="text-sm font-medium">User</p>
            <p className="text-xs text-slate-500">Developer</p>
          </div>
        </div>
      </div>

    </aside>
  );
}