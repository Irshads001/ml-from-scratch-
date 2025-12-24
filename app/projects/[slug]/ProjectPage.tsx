"use client";

import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import { useEffect, useState } from "react";
import ProjectSection from "@/components/ProjectSection";
import { useSession, signIn } from "next-auth/react";

export default function ProjectPage({ slug }: { slug: string }) {
  const { data: session, status } = useSession();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const found = projects
      .flatMap((group) => group.items)
      .find((item) => item.slug === slug);

    if (!found) {
      notFound();
    }

    setProject(found);
  }, [slug]);

  if (!project) return null;

  const details = project.details;
  const implementation = project.implementation;

  return (
    <div className="w-screen min-h-screen bg-slate-50">
      <div className="py-10">

        {/* STICKY HEADER */}
        <div className="sticky top-16 z-20 bg-white border-b">
          <div className="max-w-3xl mx-auto px-6 py-4">
            <h1 className="text-3xl font-bold text-zinc-800 mb-1">
              {project.title}
            </h1>

            <p className="text-sm text-gray-600">
              <span className="font-medium text-gray-800">
                Core Concept:
              </span>{" "}
              {project.concept}
            </p>
          </div>
        </div>

        {/* 🔒 LOGIN GATE */}
        {status !== "loading" && !session ? (
          <div className="max-w-3xl mx-auto mt-10 px-6">
            <div className="rounded-lg border bg-white p-8 text-center shadow-sm">
              <h2 className="text-lg font-semibold text-slate-800 mb-2">
                Login required to view this project
              </h2>

              <p className="text-sm text-slate-600 mb-6">
                Please sign in to access full project details,
                implementation files, and code.
              </p>

              <button
                onClick={() => signIn("google")}
                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
              >
                Login
              </button>
            </div>
          </div>
        ) : (
          /* ✅ LOGGED IN — FULL CONTENT */
          <article className="max-w-3xl mx-auto bg-white px-4 sm:px-6 py-8 rounded-lg shadow-sm mt-6">
            {details && (
              <div className="space-y-10">

                <ProjectSection title="Problem Statement">
                  <p className="text-gray-700 leading-relaxed">
                    {details.problem}
                  </p>
                </ProjectSection>

                <ProjectSection title="What You Will Build">
                  <p className="text-gray-700 leading-relaxed">
                    {details.outcome}
                  </p>
                </ProjectSection>

                <ProjectSection title="Approach">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {details.approach.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </ProjectSection>

                <ProjectSection title="Steps to Implement">
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    {details.steps.map((step: string, i: number) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </ProjectSection>

                <ProjectSection title="Extensions">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {details.extensions.map((ext: string, i: number) => (
                      <li key={i}>{ext}</li>
                    ))}
                  </ul>
                </ProjectSection>

                {implementation && (
                  <ProjectSection title="Project Files">
                    <div className="space-y-8">
                      {implementation.files.map((file: any, i: number) => (
                        <div key={i}>
                          <p className="font-mono text-sm font-medium text-slate-800 bg-slate-100 inline-block px-2 py-1 rounded mb-2">
                            {file.path}
                          </p>

                          <p className="text-sm text-gray-600 mb-2">
                            {file.description}
                          </p>

                          <pre className="overflow-x-auto rounded-md bg-slate-900 p-4 text-sm text-slate-100 touch-pan-x">
                            <code>{file.content}</code>
                          </pre>
                        </div>
                      ))}
                    </div>
                  </ProjectSection>
                )}

              </div>
            )}
          </article>
        )}
      </div>
    </div>
  );
}
