import { services } from "@/data/content";

export function Services() {
  return (
    <section id="services" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-[#c7b9a5]">
            Services
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Systems for businesses that sell, stock and deliver products.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
            >
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#b8b8b8]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}