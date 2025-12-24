export default function LearnPage() {
  const steps = [
    {
      title: "Python Foundations for ML",
      description:
        "Learn Python from scratch. Variables, loops, functions, and basic programming concepts required for Machine Learning.",
    },
    {
      title: "Python Libraries for ML",
      description:
        "Work with NumPy, Pandas, and visualization libraries to handle and understand real-world data.",
    },
    {
      title: "Machine Learning Basics",
      description:
        "Understand what Machine Learning is, its types, and how an ML workflow works from data to predictions.",
    },
    {
      title: "Math for Machine Learning",
      description:
        "Build intuition for Linear Algebra, Probability, Statistics, and Optimization used in ML algorithms.",
    },
    {
      title: "Core ML Algorithms",
      description:
        "Learn supervised and unsupervised algorithms such as regression, classification, and clustering.",
    },
    {
      title: "Projects & Practice",
      description:
        "Apply everything you learned by building real-world Machine Learning projects end-to-end.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Machine Learning Roadmap
        </h1>

        <p className="text-slate-600 mb-12 max-w-2xl">
          Follow this structured roadmap to move step by step from a complete
          beginner to a confident Machine Learning practitioner.
        </p>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="relative bg-white border border-slate-200 rounded-lg p-6 pl-16 shadow-sm hover:shadow-md transition-shadow">
                {/* Step number */}
                <div className="absolute left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">
                  {index + 1}
                </div>

                {/* Content */}
                <h2 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h2>
                <p className="text-slate-600 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v14m0 0l-4-4m4 4l4-4"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
