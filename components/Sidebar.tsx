"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { learningSections } from "@/app/data/learningSections";
import { toggleSidebar } from "@/app/lib/sidebar";

export default function Sidebar() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();

  const [openSection, setOpenSection] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  // ✅ Load progress (NEW format safe)
  useEffect(() => {
    function loadProgress() {
      const raw = localStorage.getItem("ml-progress");

      if (!raw) {
        setCompletedLessons([]);
        return;
      }

      try {
        const parsed = JSON.parse(raw);

        // backward + forward safe
        if (Array.isArray(parsed)) {
          setCompletedLessons(parsed);
        } else {
          setCompletedLessons(parsed.completedLessons ?? []);
        }
      } catch {
        setCompletedLessons([]);
      }
    }

    loadProgress();
    window.addEventListener("ml-progress-updated", loadProgress);

    return () => {
      window.removeEventListener(
        "ml-progress-updated",
        loadProgress
      );
    };
  }, []);

  // Auto open section of active lesson
  useEffect(() => {
    for (const section of learningSections) {
      if (
        section.items.some(
          (item) => item.slug === currentSlug
        )
      ) {
        setOpenSection(section.id);
        break;
      }
    }
  }, [currentSlug]);

  return (
    <aside className="w-64 min-h-screen border-r bg-white p-4">
      {/* 🔹 Sidebar Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-900">
          ML Topics
        </h2>

        <button
          onClick={toggleSidebar}
          title="Hide sidebar"
          className="p-1 rounded hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* 🔹 Sections */}
      {learningSections.map((section) => {
        const isOpen = openSection === section.id;

        return (
          <div key={section.id} className="mb-4">
            {/* Section title */}
            <button
              onClick={() =>
                setOpenSection(isOpen ? null : section.id)
              }
              className="flex w-full items-center justify-between text-sm font-semibold text-gray-700 hover:text-blue-600 mb-2"
            >
              <span>{section.title}</span>

              <svg
                className={`h-4 w-4 transition-transform ${
                  isOpen ? "rotate-90" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Section items */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
                ${
                  isOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
            >
              <ul className="pl-3 space-y-1 text-sm pt-1">
                {section.items.map((item) => {
                  const isActive =
                    currentSlug === item.slug;
                  const isDone =
                    completedLessons.includes(item.slug);

                  return (
                    <li key={item.slug}>
                      <Link
                        href={`/learn/${item.slug}`}
                        className={`flex items-center justify-between rounded px-2 py-1 transition-colors
                          ${
                            isActive
                              ? "bg-blue-100 text-blue-700 font-medium"
                              : "text-gray-700 hover:text-blue-600"
                          }`}
                      >
                        <span>{item.title}</span>
                        {isDone && <span>✔️</span>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </aside>
  );
}
