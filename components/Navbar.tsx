"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { getProgressPercentage } from "@/app/lib/progress";
import { signIn, signOut, useSession } from "next-auth/react";
import { syncLocalToSession } from "@/app/lib/progressSync";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [progress, setProgress] = useState(0);

  /* 🔹 User menu */
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* 🔹 Close dropdown on outside click */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

 /* 🔹 Local progress listener (USER AWARE) */
const userEmail = session?.user?.email?? undefined;

useEffect(() => {
  function updateProgress() {
    setProgress(getProgressPercentage(userEmail));
  }

  updateProgress();

  window.addEventListener(
    "ml-progress-updated",
    updateProgress
  );

  return () => {
    window.removeEventListener(
      "ml-progress-updated",
      updateProgress
    );
  };
}, [userEmail]);



  /* 🔹 SYNC local progress ←→ user session */
  useEffect(() => {
    if (session?.user?.progress) {
      syncLocalToSession(session.user.progress);
    }
  }, [session]);

  const linkClass = (href: string) => {
    const isActive =
      pathname === href || pathname.startsWith(href + "/");

    return `
      inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium transition-all
      ${
        isActive
          ? "bg-blue-50 text-blue-700"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      }
    `;
  };

  const initials =
    session?.user?.name
      ?.split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() ?? "U";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b h-14">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white text-sm font-bold tracking-tight">
            ML
          </span>

          <span className="flex flex-col leading-tight whitespace-nowrap">
            <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition">
              ML From Scratch
            </span>
            <span className="text-[11px] text-slate-500">
              Learn Machine Learning
            </span>
          </span>
        </Link>

        {/* Links + Auth + Progress */}
        <div className="flex items-center gap-1">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/learn" className={linkClass("/learn")}>
            Learn
          </Link>
          <Link href="/projects" className={linkClass("/projects")}>
            Projects
          </Link>

          {/* Auth */}
          <div className="ml-3 relative" ref={menuRef}>
            {status === "loading" ? null : session ? (
              <>
               {/* Avatar button */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="flex items-center gap-2 rounded-full border px-2 py-1 hover:bg-slate-50 transition"
>
  {session.user?.image &&
  session.user.image.trim().length > 0 ? (
    <img
      src={session.user.image}
      alt={session.user.name ?? "User"}
      className="h-6 w-6 rounded-full object-cover"
    />
  ) : (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-semibold">
      {initials}
    </span>
  )}
</button>


                {/* Dropdown */}
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-md border bg-white shadow-lg overflow-hidden">
                    <div className="px-4 py-3 border-b">
                      <p className="text-sm font-medium text-slate-800">
                        {session.user?.name}
                      </p>
                      <p className="text-xs text-slate-500 truncate">
                        {session.user?.email}
                      </p>
                    </div>

                    <button
                      onClick={() => signOut()}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="text-sm font-medium text-blue-600 hover:text-blue-700 transition"
              >
                Login
              </button>
            )}
          </div>

          {/* Course Progress */}
          <div
  title={`${progress}% course completed`}
  className="ml-3 relative w-9 h-9 shrink-0 overflow-hidden"
>

            <svg
              className="w-full h-full rotate-[-90deg]"
              viewBox="0 0 36 36"
            >
              <path
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
              />

              <path
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={
                  progress <= 30
                    ? "#EF4444"
                    : progress <= 70
                    ? "#F59E0B"
                    : "#22C55E"
                }
                strokeWidth="3"
                strokeDasharray={`${progress}, 100`}
                strokeLinecap="round"
                style={{
                  transition:
                    "stroke-dasharray 0.8s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.5s ease",
                  filter:
                    "drop-shadow(0 0 4px rgba(59,130,246,0.35))",
                }}
              />
            </svg>

            <span className="absolute inset-0 flex flex-col items-center justify-center leading-none">
              <span className="text-[8.5px] font-semibold text-slate-800">
                {progress}%
              </span>
              <span className="text-[6px] text-slate-500">
                Progress
              </span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
