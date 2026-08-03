"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ShieldCheck, Home } from "lucide-react";
import { toast } from "sonner";
import { FormEvent } from "react";
import PrimaryBtn from "@/components/shared/Button/PrimaryBtn";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "support@rentnest.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+880 1234 567890",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Dhaka, Bangladesh",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "9 AM - 6 PM",
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted Platform",
    description:
      "We provide a secure and reliable rental experience for tenants and landlords.",
  },
  {
    icon: Home,
    title: "Verified Properties",
    description: "Find quality homes with verified property information.",
  },
  {
    icon: Phone,
    title: "Quick Support",
    description:
      "Our team is always ready to help you with your rental journey.",
  },
];

const ContactUs = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.success("Thanks for contacting us! We will contact you soon.");
  };

  return (
    <main className="relative overflow-hidden bg-background">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]" />

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 py-20 text-center"
      >
        <h1 className="font-lora text-4xl font-bold text-text-primary md:text-6xl">
          Get In Touch With Us
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-text-secondary">
          Have questions about renting, properties, or your account? Our team is
          here to help you.
        </p>
      </motion.section>

      {/* Contact Information */}
      <section className="container px-6 md:px-8 lg:px-13 xl:px-16 mx-auto pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon />
                </div>

                <h3 className="font-semibold text-text-primary font-lora">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-text-secondary font-inter">
                  {item.value}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto gridcontainer px-6 md:px-8 lg:px-13 xl:px-16 gap-10 pb-20 lg:grid-cols-2"
      >
        <div>
          <h2 className="font-lora text-3xl font-bold text-text-primary">
            Send Us A Message
          </h2>

          <p className="mt-4 text-text-secondary font-inter">
            Fill out the form and our support team will get back to you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-border bg-card p-6"
        >
          <input
            required
            placeholder="Your Name"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-text-primary outline-none focus:border-primary"
          />

          <input
            required
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-text-primary outline-none focus:border-primary"
          />

          <textarea
            required
            rows={5}
            placeholder="Your Message"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-text-primary outline-none focus:border-primary"
          />
          <PrimaryBtn> Send Messag</PrimaryBtn>
        </form>
      </motion.section>

      {/* Why Contact */}
      <section className="container px-6 md:px-8 lg:px-13 xl:px-16 mx-auto pb-20">
        <h2 className="mb-10 text-center font-lora text-3xl font-bold text-text-primary">
          Why Contact RentNest?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <Icon className="mb-4 text-primary" />

                <h3 className="font-semibold text-text-primary font-lora">
                  {item.title}
                </h3>

                <p className="mt-3 text-text-secondary font-inter">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-4 mb-16 rounded-3xl bg-primary/10 px-6 py-12 text-center">
        <h2 className="font-lora text-3xl font-bold text-text-primary">
          Ready To Find Your Next Home?
        </h2>

        <p className="mt-3 text-text-secondary font-inter">
          Start exploring verified rental properties today.
        </p>
      </section>
    </main>
  );
};

export default ContactUs;
