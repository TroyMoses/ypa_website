import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { EmpowermentSection } from "@/components/empowerment-section";
import { TeamSection } from "@/components/team-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <EmpowermentSection />
      <TeamSection />
      <TestimonialsSection />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </main>
  );
}
