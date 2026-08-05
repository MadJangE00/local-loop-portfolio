export interface Project {
  title: string
  description: string
  stack: string[]
  github: string
  demo?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-emerald-500/50">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-emerald-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-3 text-sm">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-slate-300 underline-offset-4 hover:text-emerald-400 hover:underline"
        >
          GitHub →
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-300 underline-offset-4 hover:text-emerald-400 hover:underline"
          >
            Demo →
          </a>
        )}
      </div>
    </article>
  )
}
