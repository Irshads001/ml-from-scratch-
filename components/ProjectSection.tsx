export default function ProjectSection({
  title,
  children,
}: ProjectSectionProps) {
  return (
    <section className="pt-6">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
