import { projects } from "../data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          Machine Learning Projects
        </h1>

        <p className="text-gray-600 mb-10">
          Practice Machine Learning concepts with real-world inspired projects.
          Start from beginner level and gradually move to advanced projects.
        </p>

        <div className="space-y-10">
          {projects.map((group) => (
            <div key={group.level}>
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                {group.level} Projects
              </h2>

              <p className="text-gray-600 mb-4">
                {group.description}
              </p>

              <ul className="space-y-3">
                {group.items.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="block"
                  >
                    <li className="border rounded-lg p-4 bg-white shadow-sm hover:border-blue-500 transition">
                      <h3 className="font-medium text-slate-800">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Concept: {project.concept}
                      </p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
