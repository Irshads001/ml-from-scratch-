import { getProgress, setProgress } from "./progress";

export function syncLocalToSession(
  sessionProgress: {
    completedLessons: string[];
    completedProjects: string[];
  }
) {
  const local = getProgress();

  const merged = {
    completedLessons: Array.from(
      new Set([
        ...local.completedLessons,
        ...sessionProgress.completedLessons,
      ])
    ),
    completedProjects: Array.from(
      new Set([
        ...local.completedProjects,
        ...sessionProgress.completedProjects,
      ])
    ),
  };

  setProgress(merged);
  return merged;
}
