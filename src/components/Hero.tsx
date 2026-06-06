import { profile, techStack } from "@/data/content";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.15fr_0.85fr] md:py-32">
      <div>
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.32em] text-[#c7b9a5]">
          {profile.role}
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#f5f3ee] md:text-7xl">
          {profile.headline}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#b8b8b8]">
          {profile.summary}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="work/aglos-commerce-os"
            className="rounded-full bg-[#c7b9a5] px-6 py-3 text-sm font-semibold text-[#0f0f10] transition hover:bg-[#f5f3ee]"
          >
            View AGLOS case study
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-[#f5f3ee] transition hover:border-[#f5f3ee]"
          >
            Contact me
          </a>
        </div>
      </div>

      <aside className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
        <p className="text-sm uppercase tracking-[0.24em] text-[#c7b9a5]">
          Current focus
        </p>

        <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em]">
          AGLOS Commerce OS
        </h2>

        <p className="mt-4 text-sm leading-7 text-[#b8b8b8]">
          A real ecommerce and inventory platform built around storefront,
          stock control, admin workflows, reports and multilingual business
          operations.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-2 text-xs text-[#d8d3ca]"
            >
              {tech}
            </span>
          ))}
        </div>
      </aside>
    </section>
  );
}