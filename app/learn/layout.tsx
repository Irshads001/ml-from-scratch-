"use client";

import { ReactNode, useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function LearnLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    function toggle() {
      setSidebarVisible((v) => !v);
    }

    window.addEventListener("ml-sidebar-toggle", toggle);
    return () =>
      window.removeEventListener("ml-sidebar-toggle", toggle);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* Sidebar with smooth animation */}
      <div
        className={`border-r bg-white overflow-y-auto transition-all duration-300 ease-in-out
          ${sidebarVisible ? "w-64" : "w-0"}
        `}
      >
        <div
          className={`transition-opacity duration-200 ${
            sidebarVisible
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Sidebar />
        </div>
      </div>

      {/* Floating show sidebar button */}
      {!sidebarVisible && (
        <button
          onClick={() =>
            window.dispatchEvent(
              new Event("ml-sidebar-toggle")
            )
          }
          className="fixed top-15 left-2 z-50 rounded-md bg-white border p-0.5 shadow hover:bg-gray-100"
          title="Show sidebar"
        >
          ▶
        </button>
      )}

      {/* Main content */}
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
