import { Button } from "@/components/ui/button";

const CTABanner = () => (
  <section className="py-16 bg-accent text-accent-foreground">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Looking for Reliable Bearings or Auto Parts?
      </h2>
      <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
        Get in touch with our team for pricing, availability, and product information. We are ready to support your sourcing and trading requirements.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          asChild
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
        >
          <a href="#contact">Request a Quote</a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 px-8"
        >
          <a href="#contact">Contact Sales</a>
        </Button>
      </div>
    </div>
  </section>
);

export default CTABanner;
