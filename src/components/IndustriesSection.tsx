import { Wrench, Truck, Factory, Settings, Package } from "lucide-react";

const industries = [
  { icon: Wrench, label: "Automotive workshops and service centers" },
  { icon: Truck, label: "Auto parts distributors and traders" },
  { icon: Factory, label: "Industrial maintenance companies" },
  { icon: Settings, label: "Manufacturing and engineering firms" },
  { icon: Package, label: "OEM and aftermarket supply chains" },
];

const IndustriesSection = () => (
  <section id="industries" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
        Industries We Serve
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Markets We Support
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {industries.map((i) => (
          <div
            key={i.label}
            className="flex items-center gap-4 bg-background rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
              <i.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-sm font-medium text-primary">{i.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
