import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "How fast is delivery?",
      answer:
        "We deliver your minimalist avatar within 30-60 minutes after payment confirmation. Most orders are completed even faster!",
    },
    {
      question: "Are avatars made with AI?",
      answer:
        "No. Our avatars are hand-drawn and delivered with the highest possible quality.",
    },
    {
      question: "What file format will I get?",
      answer:
        "You'll receive high-resolution PNG files, perfect for all social media platforms, websites, and print materials.",
    },
    {
      question: "If I don like my avatar?",
      answer: "It justs send email for us, you gain one revision free.",
    },
    {
      question: "Where can I use my avatar?",
      answer:
        "Everywhere! LinkedIn, Twitter/X, GitHub, Instagram, Discord, Slack, email signatures, business cards, and any other platform where you need a professional profile picture.",
    },
    {
      question: "What style of avatar will I get?",
      answer:
        "Our signature minimalist style features clean lines, simple shapes, and your brand colors. Think modern, professional, and distinctly you. But soon more styles",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about getting your perfect avatar
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-zinc-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
