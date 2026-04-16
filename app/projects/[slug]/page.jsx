import { projects } from "@/app/projects/projectsData";
import ProjectDetailCard from "@/app/projects/ProjectDetailCard";

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return <p className="text-white px-4 py-10">Project not found.</p>;
  }

  return <ProjectDetailCard {...project} />;
}
