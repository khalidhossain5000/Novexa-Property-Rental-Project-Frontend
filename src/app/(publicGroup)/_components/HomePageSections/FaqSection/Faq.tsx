import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import SectionTitle from "@/components/shared/SectionTitle/SectionTItle";

const faqData = [
  {
    id: "booking",
    question: "How do I book a rental property?",
    answer:
      "You can browse available properties, select your preferred home, send a rental request, and complete the booking process securely.",
  },
  {
    id: "cancellation",
    question: "Can I cancel my rental request?",
    answer:
      "Yes, cancellation depends on the current status of your request and the landlord's approval policy.",
  },
  {
    id: "property",
    question: "Are all properties verified?",
    answer:
      "We verify property information to provide a safer and more reliable rental experience for tenants.",
  },
  {
    id: "payment",
    question: "How does the payment process work?",
    answer:
      "Payments are processed securely after your rental request is approved by the landlord.",
  },
  {
    id: "support",
    question: "How can I contact support?",
    answer:
      "You can contact our support team through email or help center. We are always ready to assist you.",
  },
];

const Faq = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 px-4">
      {/* Glow */}
      <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about renting properties, booking, and payments."
          className="mb-12"
        />

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/50"
            >
              <AccordionTrigger
                className="
                  px-6 py-5 
                  text-left text-base md:text-lg
                  font-semibold
                  text-text-primary
                  hover:no-underline
                  hover:text-primary
                  transition-colors
                "
              >
                {faq.question}
              </AccordionTrigger>

              <AccordionContent
                className="
                  px-6 pb-5
                  text-sm md:text-base
                  leading-relaxed
                  text-text-secondary
                "
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
