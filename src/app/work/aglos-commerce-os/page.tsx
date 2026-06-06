import Link from "next/link";
import { Footer } from "@/components/Footer";

const features = [
  "Customer storefront",
  "Product catalogue",
  "Cart and checkout flow",
  "Customer account area",
  "Admin dashboard",
  "Product and variant management",
  "Inventory tracking",
  "Stock movements",
  "Stocktakes",
  "Order management",
  "Reports and financial insights",
  "Role-based access control",
];

const stack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "FastAPI",
  "PostgreSQL",
  "SQLAlchemy",
  "Alembic",
  "JWT Authentication",
  "Role-Based Access Control",
];

const screenshots = [
    {
      src: "/images/aglos/aglos-storefront.png",
      title: "Storefront",
      description: "Premium fashion storefront for AGLOS products.",
    },
    {
      src: "/images/aglos/aglos-admin-dashboard.png",
      title: "Admin dashboard",
      description: "Control centre for business operations.",
    },
    {
      src: "/images/aglos/aglos-orders.png",
      title: "Orders",
      description: "Order management for customer purchases.",
    },
    {
      src: "/images/aglos/aglos-inventory.png",
      title: "Inventory",
      description: "Stock tracking, restock workflows and product control.",
    },
    {
      src: "/images/aglos/aglos-reports.png",
      title: "Reports",
      description: "Sales, financial and product performance reports.",
    },
    {
      src: "/images/aglos/aglos-checkout.png",
      title: "Checkout",
      description: "Customer checkout and payment confirmation flow.",
    },
  ];

export default function AglosCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#0f0f10] text-[#f5f3ee]">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Link
          href="/"
          className="text-sm text-[#b8b8b8] transition hover:text-[#f5f3ee]"
        >
          ← Back to home
        </Link>

        <div className="mt-20 max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-[#c7b9a5]">
            Featured case study
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            AGLOS Commerce OS
          </h1>

          <p className="mt-8 text-xl leading-9 text-[#b8b8b8]">
            A multilingual ecommerce and stock-management platform built for a
              family fashion brand targeting European and Portuguese-speaking markets,
              especially Portugal and Angola.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-[#c7b9a5]">
              The problem
            </p>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#b8b8b8]">
            <p>
              Small fashion brands often start with Instagram, WhatsApp,
              spreadsheets and manual stock tracking. That works at the very
              beginning, but it quickly becomes difficult to control products,
              orders, stock, refunds, reports and customer information.
            </p>

            <p>
              AGLOS needed more than a simple storefront. The goal was to build
              a business system that could support online sales and internal
              operations from one dashboard.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-[#c7b9a5]">
              The solution
            </p>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#b8b8b8]">
            <p>
              I designed AGLOS Commerce OS as a full-stack ecommerce and
              inventory platform with a customer-facing store and an admin
              system for managing products, variants, stock, orders and reports.
            </p>

            <p>
              The platform is being built with multilingual support in mind,
              starting with English and Portuguese, so it can support European,
              Portuguese and Angolan business workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-[#c7b9a5]">
            Core features
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-[#d8d3ca]"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-[#c7b9a5]">
                Interface
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
                Storefront and admin workflows designed for a real product business.
            </h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
            {screenshots.map((screenshot) => (
                <article
                key={screenshot.src}
                className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]"
                >
                <img
                    src={screenshot.src}
                    alt={screenshot.title}
                    className="aspect-[16/10] w-full object-cover"
                />

                <div className="p-5">
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">
                    {screenshot.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#b8b8b8]">
                    {screenshot.description}
                    </p>
                </div>
                </article>
            ))}
            </div>
        </div>
        </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-[#c7b9a5]">
              Tech stack
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#d8d3ca]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-[#c7b9a5]">
              Business value
            </p>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#b8b8b8]">
            <p>
              The project demonstrates how ecommerce, stock control and internal
              admin workflows can be combined into one practical system for a
              product-based business.
            </p>

            <p>
              It also acts as a professional case study showing my ability to
              build full-stack applications around real operational problems,
              not just isolated frontend pages.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}