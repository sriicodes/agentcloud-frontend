import Link from "next/link";

export default function Sidebar() {
  return (
    <aside
      className="
        fixed
        left-0
        top-0
        z-50
        w-[88px]
        h-screen
        bg-[#0b1224]
        border-r
        border-slate-800
        flex
        flex-col
        items-center
      "
    >
      {/* Logo */}

      <div className="h-20 w-full flex items-center justify-center border-b border-slate-800">
        <Link
          href="/"
          className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-600/20"
        >
          A
        </Link>
      </div>

      {/* Navigation */}

      <nav className="flex-1 flex flex-col items-center gap-4 pt-8">

        <Link
          href="/"
          title="Dashboard"
          className="
            w-12
            h-12
            rounded-xl
            flex
            items-center
            justify-center
            text-slate-400
            hover:text-white
            hover:bg-slate-800
            transition
          "
        >
          ⌂
        </Link>

        <Link
          href="/projects"
          title="Projects"
          className="
            w-12
            h-12
            rounded-xl
            flex
            items-center
            justify-center
            text-slate-400
            hover:text-white
            hover:bg-slate-800
            transition
          "
        >
          ◫
        </Link>

        <Link
          href="/about"
          title="About Team"
          className="
            w-12
            h-12
            rounded-xl
            flex
            items-center
            justify-center
            text-slate-400
            hover:text-white
            hover:bg-slate-800
            transition
          "
        >
          ♙
        </Link>

      </nav>

      {/* Bottom profile */}

      <div className="pb-6">

        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-semibold">
          S
        </div>

      </div>

    </aside>
  );
}