"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Building2, Users, KeyRound, Star } from "lucide-react";

const stats = [
  {
    id: 1,
    value: 2500,
    suffix: "+",
    label: "Available Properties",
    icon: Building2,
  },
  {
    id: 2,
    value: 12000,
    suffix: "+",
    label: "Happy Tenants",
    icon: Users,
  },
  {
    id: 3,
    value: 8500,
    suffix: "+",
    label: "Successful Rentals",
    icon: KeyRound,
  },
  {
    id: 4,
    value: 4.9,
    suffix: "/5",
    label: "Average Rating",
    icon: Star,
    decimal: true,
  },
];

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 left-10 h-52 w-52 rounded-full bg-secondary/20 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="font-lora text-center text-3xl font-bold text-text-primary md:text-4xl">
            Trusted By Thousands Of Renters
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-center text-text-secondary">
            Experience a smarter way to find your perfect home with verified
            properties and trusted landlords.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-border bg-card/80 p-6 text-center shadow-sm backdrop-blur-md"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={24} />
                </div>

                <h3 className="text-3xl font-bold text-text-primary md:text-4xl">
                  <CountUp
                    end={stat.value}
                    duration={2}
                    decimals={stat.decimal ? 1 : 0}
                  />
                  {stat.suffix}
                </h3>

                <p className="mt-2 text-sm text-text-secondary md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
