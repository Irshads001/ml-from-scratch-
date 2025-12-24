import type { Metadata } from "next";
import { projects } from "@/app/data/projects";
import ProjectPage from "./ProjectPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = projects
    .flatMap((group) => group.items)
    .find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

 return {
  title: `${project.title} – Machine Learning Project`,
  description: project.details?.problem,

  openGraph: {
    title: project.title,
    description: project.details?.problem,
    type: "article",
  },

  twitter: {
    card: "summary",
    title: project.title,
    description: project.details?.problem,
  },
  alternates: {
    canonical: `/projects/${slug}`,
  },

  robots: {
    index: true,
    follow: true,
  },
};

}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProjectPage slug={slug} />;
}
