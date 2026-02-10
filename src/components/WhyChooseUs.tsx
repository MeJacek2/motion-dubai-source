import { Award, Globe, Handshake, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: Award, title: "Genuine Products", desc: "We supply authentic components sourced from trusted manufacturers." },
  { icon: Globe, title: "Global Brands", desc: "Our portfolio includes leading Japanese and Chinese brands recognized worldwide." },
  { icon: Handshake, title: "Trade-Focused Approach", desc: "We understand the requirements of distributors, workshops, and industrial buyers." },
  { icon: MapPin, title: "Dubai Advantage", desc: "Strategically located to support efficient regional supply and logistics." },
];

const WhyChooseUs = () => {
  const ref = useScrollReveal();

  return (
    <section id="why-us" className="py-20 bg-primary text-primary-foreground">
      <div ref={ref} className="container mx-auto px-4 opacity-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose Motion Technology
        </h2>
        <p className="text-primary-foreground/70 text-center max-w-2xl mx-auto mb-12">
          Your Reliable Trading Partner
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-primary-foreground/5 backdrop-blur rounded-lg p-6 text-center border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-primary-foreground/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
