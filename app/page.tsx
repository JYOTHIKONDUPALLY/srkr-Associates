// app/page.tsx
import StickyTopBar from "../components/stickToTopbar";
import Header from "../components/header";
import HeroSection from "../components/Herosection";
import OurServices from "../components/OurServices";
import IndustriesWeServe from "../components/IndustriesWeServe";
import WhyUs from "@/components/WhyUs";
import AboutUs from "@/components/Aboutus";
import FloatingContactButton from "@/components/contactButton";
import ContactForm from "@/components/ContactUsForm";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <StickyTopBar />
      <Header />
      <HeroSection />
        <AboutUs />
        <FloatingContactButton/>
      {/* <WhyUs /> */}
      <section className="max-w-7xl mx-auto py-16 px-4"  id="services">
      <div className="block md:hidden w-full px-6 text-center mt-6">
    <h2 className="text-2xl font-bold text-[#003865] mb-4">
      Our Services
    </h2>
  </div>
        < OurServices/>
      </section>
      {/* <section className="bg-white py-16 px-4"> */}
        {/* <IndustriesWeServe /> */}
      {/* </section> */}
      {/* <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">Technology We Use to Deliver Services</h2> */}
        {/* <TechStack /> */}
      {/* </section> */}
      {/* <section className="bg-white py-16 px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">What Our Clients Say</h2> */}
        {/* <Testimonials /> */}
      {/* </section> */}
      {/* <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2> */}
        {/* <FAQ /> */}
      {/* </section> */}
      <ContactForm/>
      <Footer />
    </div>
  );
}
