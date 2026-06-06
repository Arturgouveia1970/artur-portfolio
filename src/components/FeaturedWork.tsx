import Link from "next/link";
import { projects } from "@/data/content";

export function FeaturedWork() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section id="work" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-[#c7b9a5]">
            Selected work
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Real business systems, not just portfolio experiments.
          </h2>
        </div>

        <article className="mt-14 grid gap-8 rounded-[2rem] border border-white/10 bg-[#f5f3ee] p-6 text-[#0f0f10] md:grid-cols-[1fr_0.85fr] md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a927d]">
              {featuredProject.type}
            </p>

            <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              {featuredProject.title}
            </h3>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#3a3a3a]">
              {featuredProject.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {featuredProject.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 px-3 py-2 text-xs font-medium text-[#1f2328]"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-8 text-sm font-medium text-[#5d5549]">
              {featuredProject.status}
            </p>

            <Link
              href="/work/aglos-commerce-os"
              className="mt-8 inline-flex rounded-full bg-[#0f0f10] px-5 py-3 text-sm font-semibold text-[#f5f3ee] transition hover:bg-[#1f2328]"
            >
              Read the full case study
            </Link>
          </div>

          <div className="rounded-[1.5rem] border border-black/10 bg-[#0f0f10] p-5 text-[#f5f3ee]">
            <p className="text-sm uppercase tracking-[0.24em] text-[#c7b9a5]">
              Case study highlights
            </p>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-[#d8d3ca]">
              <li>Storefront, cart and customer order experience.</li>
              <li>Admin dashboard for products, orders and reporting.</li>
              <li>Inventory workflows with stock movements and stocktakes.</li>
              <li>Built as a real system for a family fashion business.</li>
            </ul>
          </div>
        </article>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-[#c7b9a5]">
                {project.type}
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#b8b8b8]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-2 text-xs text-[#d8d3ca]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#f5f3ee] transition hover:border-[#c7b9a5]"
                  >
                    GitHub
                  </a>
                ) : null}

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#f5f3ee] transition hover:border-[#c7b9a5]"
                  >
                    Live site
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}