import { mlTopics } from "@/app/data/mlTopics";

export type ProgressState = {
  completedLessons: string[];
  completedProjects: string[];
};

function getStorageKey(email?: string) {
  return email
    ? `ml-progress:${email}`
    : "ml-progress:guest";
}

function emptyProgress(): ProgressState {
  return {
    completedLessons: [],
    completedProjects: [],
  };
}

function readProgress(email?: string): ProgressState {
  if (typeof window === "undefined") return emptyProgress();

  const raw = localStorage.getItem(getStorageKey(email));
  if (!raw) return emptyProgress();

  try {
    return JSON.parse(raw);
  } catch {
    return emptyProgress();
  }
}

function writeProgress(
  progress: ProgressState,
  email?: string
) {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    getStorageKey(email),
    JSON.stringify(progress)
  );

  window.dispatchEvent(
    new CustomEvent("ml-progress-updated")
  );
}

/* ======================
   PUBLIC API
====================== */

export function markLessonComplete(
  slug: string,
  email?: string
) {
  const progress = readProgress(email);

  if (!progress.completedLessons.includes(slug)) {
    progress.completedLessons.push(slug);
    writeProgress(progress, email);
  }
}

export function unmarkLessonComplete(
  slug: string,
  email?: string
) {
  const progress = readProgress(email);

  progress.completedLessons =
    progress.completedLessons.filter(
      (s) => s !== slug
    );

  writeProgress(progress, email);
}

export function isLessonCompleted(
  slug: string,
  email?: string
) {
  return readProgress(email).completedLessons.includes(
    slug
  );
}

export function getProgressPercentage(
  email?: string
) {
  const progress = readProgress(email);
  const total = mlTopics.length;

  if (total === 0) return 0;

  return Math.round(
    (progress.completedLessons.length /
      total) *
      100
  );
}

export function getProgress(email?: string) {
  return readProgress(email);
}

export function setProgress(
  progress: ProgressState,
  email?: string
) {
  writeProgress(progress, email);
}
