import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyHome from "../components/WhyHome";
import HowItWorks from "../components/HowItWorks";
import Coverage from "../components/Coverage";
import About from "../components/About";
import Trust from "../components/Trust";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";

export default function Home() {
  const [open, setOpen] = useState(false);
  const openBooking = () => setOpen(true);

  return (
    <div className="bg-[#FFFBF4] min-h-screen overflow-x-hidden">
      <Header onBook={openBooking} />
      <Hero onBook={openBooking} />
      <Services onBook={openBooking} />
      <WhyHome onBook={openBooking} />
      <HowItWorks onBook={openBooking} />
      <Coverage onBook={openBooking} />
      <About />
      <Trust onBook={openBooking} />
      <Footer />
      <BookingModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
