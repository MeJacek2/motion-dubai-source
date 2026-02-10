import { Cog, ArrowRightLeft, Car } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    icon: Cog,
    title: "Bearings",
    desc: "We supply a comprehensive range of industrial and automotive bearings designed for durability, precision, and performance.",
    items: ["Deep groove ball bearings", "Angular contact bearings", "Industrial and automotive solutions"],
  },
  {
    icon: ArrowRightLeft,
    title: "Linear Motion Systems",
    desc: "Precision linear motion components engineered for smooth, accurate movement in industrial applications.",
    items: ["LM Guides", "Linear motion components"],
  },
  {
    icon: Car,
    title: "Automotive Parts",
    desc: "Reliable aftermarket and OEM automotive parts sourced for trade and distribution markets.",
    items: ["Auto parts for workshops and distributors", "Consistent quality and dependable supply"],
  },
];

const ProductsSection = () => (
  <section id="products" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
        Products We Supply
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Our product range covers critical components for industrial and automotive applications.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p) => (
          <Card key={p.title} className="border-none shadow-md hover:shadow-lg transition-shadow bg-background">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <p.icon className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-primary">{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <ul className="space-y-2">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
