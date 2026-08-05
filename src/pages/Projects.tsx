import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../utils/projects'

export default function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-2 text-slate-400">커뮤니티, Web3, 자동화를 넘나드는 프로젝트들</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
