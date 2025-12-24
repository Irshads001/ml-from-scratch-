import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Learn Machine Learning <br />
          <span className="text-blue-600">From Scratch</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          A structured, beginner-friendly Machine Learning course.
          Start with Python, understand the fundamentals, and build
          real-world projects step by step.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/learn/python-environment-setup"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
          >
            Start Learning
          </Link>

          <Link
            href="/learn"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-slate-700 font-medium hover:bg-slate-100 transition"
          >
            View Roadmap
          </Link>
        </div>
      </section>
      {/* Why This Platform Section */}
    <section className="bg-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-6"></div>
  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
    Why Learn Machine Learning Here?
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">

      <h3 className="text-lg font-semibold text-slate-800 mb-2">
        Beginner Friendly
      </h3>
      <p className="text-gray-600">
        No prior programming or Machine Learning experience required.
        Every concept is explained from scratch in a clear and simple way.
      </p>
    </div>

    {/* Card 2 */}
    <div className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">

      <h3 className="text-lg font-semibold text-slate-800 mb-2">
        Structured Learning Path
      </h3>
      <p className="text-gray-600">
        Follow a clear roadmap starting from Python foundations to
        real-world Machine Learning projects without confusion.
      </p>
    </div>

    {/* Card 3 */}
    <div className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">

      <h3 className="text-lg font-semibold text-slate-800 mb-2">
        Practical & Concept Focused
      </h3>
      <p className="text-gray-600">
        Learn not just how to use tools, but why things work.
        Strong fundamentals help you grow beyond tutorials.
      </p>
    </div>
  </div>
</section>
{/* Learning Path Preview */}
<section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
    Your Learning Path
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center text-center">
    {/* Step 1 */}
    <div className="border rounded-lg p-5 bg-white shadow-sm hover:border-blue-200 transition">

      <h3 className="font-semibold text-slate-800 mb-1">
        Python Foundations
      </h3>
      <p className="text-sm text-gray-600">
        Learn Python from scratch
      </p>
    </div>

    <div className="hidden md:block text-gray-400">→</div>

    {/* Step 2 */}
<div className="border rounded-lg p-5 bg-white shadow-sm hover:border-blue-200 transition">
      <h3 className="font-semibold text-slate-800 mb-1">
        ML Basics
      </h3>
      <p className="text-sm text-gray-600">
        Understand core concepts
      </p>
    </div>

    <div className="hidden md:block text-gray-400">→</div>

    {/* Step 3 */}
<div className="border rounded-lg p-5 bg-white shadow-sm hover:border-blue-200 transition">
      <h3 className="font-semibold text-slate-800 mb-1">
        Math for ML
      </h3>
      <p className="text-sm text-gray-600">
        Build strong intuition
      </p>
    </div>

    <div className="hidden md:block text-gray-400">→</div>

    {/* Step 4 */}
<div className="border rounded-lg p-5 bg-white shadow-sm hover:border-blue-200 transition">
      <h3 className="font-semibold text-slate-800 mb-1">
        ML Algorithms
      </h3>
      <p className="text-sm text-gray-600">
        Train real models
      </p>
    </div>

    <div className="hidden md:block text-gray-400">→</div>

    {/* Step 5 */}
<div className="border rounded-lg p-5 bg-white shadow-sm hover:border-blue-200 transition">
      <h3 className="font-semibold text-slate-800 mb-1">
        Projects
      </h3>
      <p className="text-sm text-gray-600">
        Apply what you learned
      </p>
    </div>
  </div>

  <div className="mt-10 text-center">
    <a
      href="/roadmap"
      className="inline-block text-blue-600 font-medium hover:underline"
    >
      View full roadmap →
    </a>
  </div>
</section>
{/* Final Call To Action */}
<section className="bg-slate-50 py-20">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
      Ready to Start Your Machine Learning Journey?
    </h2>

    <p className="text-gray-600 mb-8">
      Begin with Python foundations and progress step by step
      towards real-world Machine Learning projects.
    </p>

    <a
      href="/learn/python-environment-setup"
      className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-white font-medium hover:bg-blue-700 transition"
    >
      Start Learning Now
    </a>
  </div>
</section>

    </div>
  );
}
