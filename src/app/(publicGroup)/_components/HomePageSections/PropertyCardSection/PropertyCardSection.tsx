import { IPropertyTypes } from "@/app/(dashboardGroup)/_dashboardTypes/dashboardTypes";
import PropertiesSkeleton from "../../AllPropertiesPage/PropertiesSkeleton";
import PropertyCard from "./PropertyCard";
import SectionTitle from "@/components/shared/SectionTitle/SectionTItle";
import Link from "next/link";
import PrimaryBtn from "@/components/shared/Button/PrimaryBtn";
interface IPropertyCardSectionProps {
  homeData: IPropertyTypes[];
}
const PropertyCardSection = ({ homeData }: IPropertyCardSectionProps) => {
  if (homeData.length === 0) return <PropertiesSkeleton />;
  return (
    <div className="bg-[#fcf7f6] dark:bg-[#050911] relative py-12 lg:py-22">
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          background: "#ffffff",
          backgroundImage: `
        radial-gradient(
          circle at top left,
          #f9a30040,
          transparent 60%
        )
      `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.75), rgba(0,0,0,0.75)), radial-gradient(68% 58% at 50% 50%, rgba(249,163,0,0.6) 0%, rgba(217,119,6,0.5) 16%, rgba(180,83,9,0.4) 32%, rgba(146,64,14,0.3) 46%, rgba(120,53,15,0.2) 60%, rgba(69,26,3,0.1) 72%, #0a0a0a 100%), radial-gradient(90% 75% at 50% 50%, rgba(249,163,0,0.03) 0%, rgba(249,163,0,0) 55%), radial-gradient(150% 120% at 8% 8%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(150% 120% at 92% 92%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(60% 50% at 50% 60%, rgba(249,163,0,0.03), rgba(0,0,0,0) 60%), #050505",
        }}
      />
      {/* Soft vignette to blend edges - slightly more transparent */}
      <div
        className="absolute inset-0 z-0 pointer-events-none hidden dark:block"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.6) 100%)",
          opacity: 0.85,
        }}
      />

      <div className="container px-4 md:px-6 lg:px-8 xl:px-14 2xl:px-20 mx-auto relative z-40">
        {/* title and button */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0">
          {/* Small Label */}
          <div className="title">
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <div className="w-10 h-[2px] bg-amber-600"></div>
              <p className="text-xs tracking-widest text-black dark:text-slate-100 uppercase font-playfair">
                Recently Added
              </p>
            </div>

            <SectionTitle
              title={"Explore Collections"}
              className={"font-lora"}
            />
          </div>

          <div>
            {/* Button */}
            <Link href="/all-properties">
              <PrimaryBtn className={"hover:opacity-90 "}>
                Explore More
              </PrimaryBtn>
            </Link>
          </div>
        </div>
        {/* card render */}
        <div>
          {homeData.length > 0 && (
            <div className="xl:px-20 pt-12 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
              {homeData.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                ></PropertyCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCardSection;
