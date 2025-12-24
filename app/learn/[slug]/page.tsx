"use client";

import { lessonContent } from "@/app/data/lessonContent";
import { learningSections } from "@/app/data/learningSections";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  markLessonComplete,
  isLessonCompleted,
  unmarkLessonComplete,
} from "@/app/lib/progress";
import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function LessonPage({ params }: Props) {
  const { data: session, status } = useSession();

  const [slug, setSlug] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);

  /* 🔹 Resolve slug */
  useEffect(() => {
    params.then((p) => {
      setSlug(p.slug);
    });
  }, [params]);

  /* 🔹 Load completion state (SAFE) */
  useEffect(() => {
    if (!slug) return;

    setCompleted(
      isLessonCompleted(
        slug,
        session?.user?.email?? undefined
      )
    );
  }, [slug, session?.user?.email?? undefined]);

  /* ⛔ Nothing below this should affect hook order */

  if (!slug) return null;

  const lesson = lessonContent[slug];
  if (!lesson) notFound();

  const allLessons = learningSections.flatMap(
    (section) => section.items
  );

  const topicIndex = allLessons.findIndex(
    (item) => item.slug === slug
  );

  if (topicIndex === -1) notFound();

  const prevTopic = allLessons[topicIndex - 1];
  const nextTopic = allLessons[topicIndex + 1];

 function handleComplete() {
  if (!slug) return;

  markLessonComplete(
    slug,
    session?.user?.email ?? undefined
  );

  setCompleted(true);
}

  /* 🔒 LOGIN GATE */
  if (status !== "loading" && !session) {
    return (
      <article className="max-w-3xl">
        <h1 className="text-2xl font-bold text-zinc-800 mb-6">
          {lesson.title}
        </h1>

        <div className="rounded-lg border bg-slate-50 p-8 text-center">
          <h2 className="text-lg font-semibold text-slate-800 mb-2">
            Login required to continue
          </h2>

          <p className="text-sm text-slate-600 mb-6">
            Please sign in to read this lesson and
            track your progress.
          </p>

          <button
            onClick={() => signIn("google")}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </article>
    );
  }

  /* ✅ FULL CONTENT */
  return (
    <article className="max-w-3xl">
      <h1 className="text-2xl font-semibold text-zinc-800 mb-4">
        {lesson.title}
      </h1>

      <div className="space-y-6">
        {lesson.content.map((block, i) => {
          if (block.type === "heading") {
            return (
              <h2
                key={i}
                className="text-xl font-medium text-slate-800 mt-10"
              >
                {block.text}
              </h2>
            );
          }

          if (block.type === "important") {
            return (
              <div
                key={i}
                className="border-l-4 border-blue-500 bg-blue-50 p-4 text-blue-900"
              >
                <strong>Important:</strong>{" "}
                {block.text}
              </div>
            );
          }

          if (block.type === "tip") {
            return (
              <div
                key={i}
                className="border-l-4 border-green-500 bg-green-50 p-4 text-green-900"
              >
                <strong>Tip:</strong>{" "}
                {block.text}
              </div>
            );
          }

          if (block.type === "code") {
            return (
              <pre
                key={i}
                className="rounded-md bg-slate-900 p-4 text-sm text-slate-100 overflow-x-auto"
              >
                <code>{block.text}</code>
              </pre>
            );
          }

          return (
            <p
              key={i}
              className="text-gray-700 leading-relaxed"
            >
              {block.text}
            </p>
          );
        })}
      </div>

      {/* Completion */}
      <div className="mt-8">
        {completed ? (
          <button
            onClick={() => {
  if (!slug) return;

  unmarkLessonComplete(
    slug,
    session?.user?.email ?? undefined
  );

  setCompleted(false);
}}

            className="text-xs rounded-md bg-gray-500 px-3 py-1 text-white"
          >
            Mark as incomplete
          </button>
        ) : (
          <button
            onClick={handleComplete}
            className="text-xs rounded-md bg-blue-600 px-3 py-1 text-white"
          >
            Mark as completed
          </button>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-10 flex justify-between border-t pt-6">
        {prevTopic ? (
          <Link
            href={`/learn/${prevTopic.slug}`}
            className="text-sm border rounded-md px-4 py-2 text-blue-700 hover:bg-gray-200"
          >
            ← Previous
          </Link>
        ) : (
          <span />
        )}

        {nextTopic && (
          <Link
            href={`/learn/${nextTopic.slug}`}
            className="text-sm  border rounded-md px-4 py-2 text-blue-700 hover:bg-gray-200"
          >
            Next →
          </Link>
        )}
      </div>
    </article>
  );
}
