import { Building2, ShieldCheck, Globe, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: Building2, title: "DAFZA Dubai Based", desc: "Trading company operating from Dubai's strategic hub" },
  { icon: ShieldCheck, title: "Quality & Authenticity", desc: "Focus on genuine, high-quality components" },
  { icon: Globe, title: "Global Sourcing", desc: "Partnerships with manufacturers across Japan & China" },
  { icon: Users, title: "B2B Built", desc: "Designed for trade, industrial & distribution customers" },
];

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-background">
      <div ref={ref} className="container mx-auto px-4 opacity-0">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          About Motion Technology
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 text-lg">
          Motion Technology Autoparts Trading is a UAE-based company specializing in the supply of precision bearings, linear motion components, and automotive parts for industrial and aftermarket applications. We work closely with trusted manufacturers from Japan and China to deliver reliable, genuine products that meet the technical and commercial requirements of our customers.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-secondary rounded-lg p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
