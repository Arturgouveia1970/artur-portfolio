import { profile } from "@/data/content";

export function About() {
  return (
    <section id="about" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-[#c7b9a5]">
            About
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
            Practical software for real operations.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-[#b8b8b8]">
          <p>
            I am a Angolan-Portuguese full-stack developer focused on ecommerce,
            inventory and business operations systems.
          </p>

          <p>
            My background includes business, logistics and operations experience,
            which helps me build software around real workflows: products,
            stock, orders, customers, reports and daily admin tasks.
          </p>

          <p>
             I am relocating to the Netherlands and building AGLOS Commerce OS as
              both a real family-business platform and a professional case study
              for ecommerce, inventory and multilingual business software.
          </p>

          <p className="text-base text-[#c7b9a5]">{profile.location}</p>
        </div>
      </div>
    </section>
  );
}