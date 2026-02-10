import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    tag: "Precision Bearings",
    heading: "Trusted Global Brands.",
    accent: "Reliable Supply.",
    subheading:
      "We supply high-quality ball, roller, and needle bearings from NACHI, KOYO, NTN and more — engineered for performance.",
  },
  {
    image: heroSlide2,
    tag: "Linear Motion Systems",
    heading: "Engineered for Motion.",
    accent: "Built to Last.",
    subheading:
      "THK linear guides, ball screws, and actuators powering automation and manufacturing across the region.",
  },
  {
    image: heroSlide3,
    tag: "Automotive Parts",
    heading: "Quality Auto Parts.",
    accent: "Delivered Fast.",
    subheading:
      "From engine components to drivetrain parts — genuine OEM-grade automotive parts sourced from trusted manufacturers.",
  },
];

const INTERVAL = 5000;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setFadeKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden min-h-[520px] md:min-h-[600px] flex items-center">
      {/* Background images — all layered, only active one is visible */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${s.image})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/75" />

      {/* Content */}
      <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
        <div className="max-w-3xl" key={fadeKey}>
          <p className="text-primary-foreground font-semibold tracking-wide uppercase text-sm mb-4 animate-fade-up drop-shadow-md">
            {slide.tag}
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up drop-shadow-lg"
            style={{ animationDelay: "0.1s" }}
          >
            {slide.heading}{" "}
            <span className="text-primary-foreground font-extrabold">{slide.accent}</span>
          </h1>
          <p
            className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl animate-fade-up drop-shadow-md"
            style={{ animationDelay: "0.2s" }}
          >
            {slide.subheading}
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8"
            >
              <a href="#contact">Request a Quote</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8"
            >
              <a href="#contact">Contact Sales</a>
            </Button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                setFadeKey((k) => k + 1);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-accent"
                  : "w-4 bg-primary-foreground/30 hover:bg-primary-foreground/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
