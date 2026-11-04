import { companies } from "@/data/companies";
import CompanyCard from "@/components/cards/CompanyCard";

export default function CompaniesPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">
            Companies Under AAMANTARA
          </h1>
          <div className="w-20 h-1 bg-[#F58220] mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Explore our diverse portfolio across Finance, Service, Education,
            and Hospitality sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <CompanyCard
              key={company.slug}
              slug={company.slug}
              name={company.shortName}
              sector={company.sector}
              description={company.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}