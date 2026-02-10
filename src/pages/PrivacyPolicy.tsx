import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-4 text-sm">Last updated: February 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-foreground/80">
          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-3">1. Introduction</h2>
            <p>Motion Technology Autoparts Trading ("we", "us", or "our"), registered in Jebel Ali Free Zone Authority (JAFZA), Dubai, United Arab Emirates, is committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information when you interact with our website or contact us:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and company name when you submit an inquiry through our contact form.</li>
              <li><strong>Business Information:</strong> Details about your business requirements, product inquiries, and order specifications.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and browsing activity on our website, collected automatically through cookies and similar technologies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>To respond to your inquiries and provide customer support.</li>
              <li>To process and fulfill orders for bearings, linear motion systems, and automotive parts.</li>
              <li>To send you relevant product information and updates with your consent.</li>
              <li>To improve our website, products, and services.</li>
              <li>To comply with legal obligations under UAE law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-3">4. Data Sharing & Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners and service providers who assist us in operating our business, provided they agree to keep this information confidential. We may also disclose information when required by UAE law or to protect our legal rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-3">5. Data Security</h2>
            <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-3">6. Data Retention</h2>
            <p>We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-3">7. Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us using the details provided below.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-3">8. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
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

export default PrivacyPolicy;
