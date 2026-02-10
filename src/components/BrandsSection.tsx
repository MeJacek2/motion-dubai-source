import { useScrollReveal } from "@/hooks/useScrollReveal";

const brands = [
  { name: "NACHI", origin: "Japan" },
  { name: "KOYO", origin: "Japan" },
  { name: "NTN", origin: "Japan" },
  { name: "THK", origin: "Japan" },
  { name: "NFC", origin: "China" },
];

const BrandsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="brands" className="py-20 bg-background">
      <div ref={ref} className="container mx-auto px-4 opacity-0">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Trusted Global Brands
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          We partner with internationally recognized manufacturers to ensure quality, performance, and reliability.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((b) => (
            <div
              key={b.name}
              className="flex flex-col items-center justify-center p-8 rounded-lg border bg-secondary hover:shadow-md transition-shadow"
            >
              <span className="text-2xl font-bold text-primary mb-2">{b.name}</span>
              <span className="text-xs text-muted-foreground">{b.origin}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-8">
          Our focus is on supplying genuine products that meet global standards and customer expectations.
        </p>
      </div>
    </section>
  );
};

export default BrandsSection;
