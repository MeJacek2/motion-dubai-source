import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-4 text-sm">Last updated: February 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-foreground/80">
          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-3">1. General</h2>
            <p>These Terms and Conditions govern your use of the website operated by Motion Technology Autoparts Trading ("the Company"), registered in Jebel Ali Free Zone Authority (JAFZA), Dubai, United Arab Emirates. By accessing and using this website, you accept and agree to be bound by these terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-3">2. Products & Services</h2>
            <p>Motion Technology Autoparts Trading specializes in the supply and distribution of precision bearings, linear motion systems, and automotive parts. All products listed on this website are subject to availability. We reserve the right to modify product specifications, pricing, and availability without prior notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-3">3. Quotations & Orders</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>All quotations provided are valid for a period specified in the quotation document unless otherwise stated.</li>
              <li>Orders are subject to acceptance and confirmation by Motion Technology Autoparts Trading.</li>
              <li>Prices are quoted in the currency specified and are exclusive of applicable taxes, duties, and shipping charges unless stated otherwise.</li>
              <li>Payment terms will be agreed upon at the time of order confirmation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-3">4. Warranty & Returns</h2>
            <p>All products supplied are covered by the manufacturer's warranty. Motion Technology Autoparts Trading ensures the authenticity and quality of all products sourced from our authorized brand partners including NACHI, KOYO, NTN, THK, and NFC. Returns are accepted within the agreed return period, provided the products are in their original, unused condition and packaging.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-3">5. Limitation of Liability</h2>
            <p>To the fullest extent permitted by UAE law, Motion Technology Autoparts Trading shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services. Our total liability shall not exceed the value of the products or services purchased.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-3">6. Intellectual Property</h2>
            <p>All content on this website, including logos, text, images, and design elements, is the property of Motion Technology Autoparts Trading or its respective brand partners and is protected by intellectual property laws. Unauthorized reproduction or distribution is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-3">7. Governing Law</h2>
            <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-3">8. Modifications</h2>
            <p>Motion Technology Autoparts Trading reserves the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of this website after any changes constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-3">9. Contact Us</h2>
            <p>For questions regarding these Terms and Conditions, please contact us at:</p>
            <p className="mt-2">
              <strong>Motion Technology Autoparts Trading</strong><br />
              FC0401WS84, Jebel Ali Free Zone Authority (JAFZA)<br />
              Dubai, United Arab Emirates<br />
              Email: sales01@motiontechparts.com<br />
              Phone: +971 50 7642014
            </p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default TermsAndConditions;
