import Link from "next/link";
import { ArrowRight, ClipboardList, Home, Users } from "lucide-react";
import { IUser } from "@/app/(authGroup)/_authTypes/authTypes";

interface LandlordSectionProps {
  user: IUser | null;
}

const benefits = [
  {
    title: "Showcase your property",
    description:
      "Create a clear listing with the details renters need to make their choice.",
    icon: Home,
  },
  {
    title: "Connect with renters",
    description:
      "Help prospective tenants discover your property and send rental requests.",
    icon: Users,
  },
  {
    title: "Manage requests in one place",
    description:
      "Review incoming rental requests through your landlord dashboard.",
    icon: ClipboardList,
  },
];

const LandlordSection = ({ user }: LandlordSectionProps) => {
  const role = user?.data?.role;
  const dashboardPath =
    role === "LANDLORD"
      ? "/landlord-dashboard"
      : role === "ADMIN"
        ? "/admin-dashboard"
        : "/dashboard";
  const buttonHref = user ? dashboardPath : "/register";
  const buttonLabel = user
    ? role === "LANDLORD"
      ? "Manage your properties"
      : "Go to your dashboard"
    : "Get started as a landlord";

  return (
    <section className="relative overflow-hidden bg-primary/10 px-4 py-16 dark:bg-primary/5 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-secondary">
            For property owners
          </p>
          <h2 className="font-lora text-3xl font-bold leading-tight text-text-primary md:text-4xl">
            Make your next rental simpler with Novexa
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-text-secondary">
            Put your property in front of renters and keep rental requests
            organized from your landlord dashboard.
          </p>
          <Link
            href={buttonHref}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-semibold text-white transition hover:bg-secondary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            {buttonLabel}
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className={`rounded-2xl border border-border bg-card p-6 shadow-sm ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="font-lora text-lg font-bold text-text-primary">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LandlordSection;
