import { ArrowRight, Search, Send, KeyRound } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle/SectionTItle";

const steps = [
  {
    number: "01",
    title: "Find your place",
    description:
      "Explore available homes and compare the details to find a place that fits your needs.",
    icon: Search,
  },
  {
    number: "02",
    title: "Send a rental request",
    description:
      "Choose the property you love and send a request directly to its landlord.",
    icon: Send,
  },
  {
    number: "03",
    title: "Get approved and move in",
    description:
      "Once your request is approved, complete the next steps and get ready to settle in.",
    icon: KeyRound,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-16 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-secondary/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          title="Find a home in three simple steps"
          subtitle="From browsing to moving in, Novexa makes your rental journey easier to follow."
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative rounded-2xl border border-border bg-card p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <span className="font-lora text-3xl font-bold text-primary/40">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-lora text-xl font-bold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-text-secondary">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight
                    aria-hidden
                    className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-secondary lg:block"
                    size={24}
                  />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
