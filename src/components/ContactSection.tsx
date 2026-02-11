import { useState } from "react";
import { Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const ref = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent", description: "Thank you! We'll get back to you shortly." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div ref={ref} className="container mx-auto px-4 opacity-0">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6">Motion Technology Autoparts Trading FZE</h3>
            <p className="text-muted-foreground mb-1">FC0401WS84,</p>
            <p className="text-muted-foreground mb-1">Jebel Ali Free Zone Authority (JAFZA)</p>
            <p className="text-muted-foreground mb-6">Dubai, United Arab Emirates</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <div className="text-muted-foreground">
                  <p>info@motiontechparts.com</p>
                  <p>sales01@motiontechparts.com</p>
                  <p>sales02@motiontechparts.com</p>
                  <p>sales03@motiontechparts.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">M: +971 50 7642014</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">Mon – Fri | 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
