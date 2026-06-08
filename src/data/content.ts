type Project = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  status: string;
  caseStudyUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const profile = {
    name: "Artur Gouveia",
    role: "Full-Stack Developer",
    headline:
      "Building ecommerce and inventory systems for product-based businesses.",
    summary:
      "I build web applications that help businesses sell online, manage stock, control orders and run operations from one dashboard. I am currently building AGLOS Commerce OS, a multilingual ecommerce and stock-management platform for a family fashion brand targeting European and Portuguese-speaking markets, especially Portugal and Angola.",
    location: "Angolan-Portuguese developer relocating to the Netherlands",
    email: "artgouveiag@gmail.com",
    github: "https://github.com/Arturgouveia1970",
    linkedin: "https://www.linkedin.com/in/artur-gouveia/",
  };
  
  export const techStack = [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "FastAPI",
    "PostgreSQL",
    "SQLAlchemy",
    "Alembic",
    "JWT Auth",
    "Role-Based Access",
  ];
  
  export const projects: Project[] = [
    {
      title: "AGLOS Commerce OS",
      type: "Featured case study",
      description:
        "A full-stack ecommerce and inventory platform built for a family fashion brand, with storefront, customer accounts, admin dashboard, stock movements, reports and multilingual support planned.",
      stack: ["Next.js", "FastAPI", "PostgreSQL", "Tailwind CSS"],
      status: "Private production repo · Public case study available",
      caseStudyUrl: "/work/aglos-commerce-os",
    },
    {
      title: "Dreamcars",
      type: "Car rental platform",
      description:
        "A rental platform concept focused on vehicle listings, booking workflows and online customer experience.",
      stack: ["WordPress", "Stripe", "Frontend"],
      status: "Public project",
      githubUrl: "https://github.com/Arturgouveia1970/Dreamcars",
      liveUrl: "",
    },
    {
      title: "AA TV",
      type: "Streaming platform",
      description:
        "A TV streaming application experiment built around video delivery, interface structure and media browsing.",
      stack: ["Laravel", "Tailwind CSS", "HLS.js"],
      status: "Public project",
      githubUrl: "https://github.com/Arturgouveia1970/AA-tv-",
      liveUrl: "",
    },
  ];
  
  export const services = [
    {
      title: "Ecommerce Platforms",
      description:
        "Online stores with product catalogues, cart, checkout flows and customer accounts.",
    },
    {
      title: "Inventory Systems",
      description:
        "Stock control, product variants, warehouses, stock movements and low-stock reporting.",
    },
    {
      title: "Admin Dashboards",
      description:
        "Internal tools for orders, users, reports, permissions and daily operations.",
    },
    {
      title: "Multilingual Business Apps",
      description:
        "English and Portuguese-first systems for European, Portuguese-speaking markets.",
    },
  ];