import Link from "next/link";

type CompanyCardProps = {
  slug: string;
  name: string;
  sector: string;
  description: string;
};

const sectorColors: Record<string, string> = {
  Finance: "bg-green-600",
  Service: "bg-orange-500",
  Education: "bg-blue-600",
  Hospitality: "bg-yellow-600",
};

export default function CompanyCard({
  slug,
  name,
  sector,
  description,
}: CompanyCardProps) {
  return (
    <Link href={`/companies/${slug}`}>
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition h-full flex flex-col">
        <div
          className={`${sectorColors[sector]} text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-4`}
        >
          {sector.toUpperCase()}
        </div>

        <h3 className="text-xl font-bold text-[#111111] mb-3">{name}</h3>
        <p className="text-gray-600 text-sm flex-1">{description}</p>

        <div className="mt-4 text-[#F58220] font-semibold text-sm">
          Learn More →
        </div>
      </div>
    </Link>
  );
}