'use client';

type Project = {
  id: string;
  name: string;
  description: string;
  platform: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border flex flex-row justify-between w-full px-4 py-3 rounded-xl bg-white shadow">

      <h2 className="text-l font-semibold">{project.name}</h2>
      <p className="text-gray-600">{project.description}</p>

    </div>
  );
}
