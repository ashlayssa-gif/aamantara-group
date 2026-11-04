import { companies } from "@/data/companies";
import { notFound } from "next/navigation";
import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CompanyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);

  if (!company) {
    notFound();
  }

  return (
    <div>
      <section className="bg-gradient-to-r from-[#111111] to-[#2a2a2a] text-white section-padding">
        <div className="container-custom">
          <Link
            href="/companies"
            className="text-[#F58220] text-sm mb-4 inline-block"
          >
            ← Back to Companies
          </Link>
          <p className="text-[#F58220] font-semibold tracking-widest mb-4">
            {company.sector.toUpperCase()}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {company.name}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {company.description}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-[#111111] mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {company.services.map((service) => (
              <div
                key={service}
                className="border border-gray-200 rounded-lg p-6 hover:border-[#F58220] transition"
              >
                <div className="w-10 h-1 bg-[#F58220] mb-3"></div>
                <p className="font-semibold text-[#111111]">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F0] section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-[#111111] mb-4">
            Interested in {company.shortName}?
          </h2>
          <p className="text-gray-600 mb-8">
            Get in touch with us for more information.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F58220] hover:bg-[#e07010] text-white font-semibold px-8 py-3 rounded-md transition"
          >
            Contact Us →
          </Link>
        </div>
      </section>
    </div>
  );
}