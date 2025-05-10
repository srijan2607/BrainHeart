import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import VisionSection from "@/components/VisionSection";
import TechStack from "@/components/TechStack";
import GetInvolved from "@/components/GetInvolved";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Update the document title
    document.title = "BrainHeart | Heart–Brain Interactions";

    // Welcome toast notification
    const timer = setTimeout(() => {
      toast({
        title: "Welcome to BrainHeart",
        description: "Explore the intersection of neuroscience and cardiology",
        duration: 5000,
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="relative">
        <Hero />
        <AboutSection />
        <WhySection />
        <VisionSection />
        <TechStack />
        <GetInvolved />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
