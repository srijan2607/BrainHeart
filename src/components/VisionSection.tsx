import React, { useRef, useEffect } from "react";
import ECGAnimation from "./ECGAnimation";

const VisionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <section id="vision" className="relative py-24 bg-background">
      <div className="section-container">
        <div
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center opacity-0"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 title-gradient">
            Our Vision
          </h2>

          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-4 bg-background">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-tech"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            To democratize the study of brain–heart dynamics through
            well-documented, reproducible, and accessible tools that integrate
            cutting-edge algorithms with public datasets.
          </p>

          <div className="bg-gradient-to-r from-tech/5 to-heart/5 p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-tech/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-tech">1</span>
                </div>
                <h3 className="font-semibold mb-2">Accessibility</h3>
                <p className="text-sm text-muted-foreground">
                  Making complex analysis tools available to all researchers
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-tech/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-tech">2</span>
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Pioneering new methods for understanding heart-brain
                  relationships
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-heart/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-heart">3</span>
                </div>
                <h3 className="font-semibold mb-2">Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Fostering a global community of interdisciplinary researchers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ECGAnimation className="max-w-7xl mx-auto mt-16 opacity-30" />
    </section>
  );
};

export default VisionSection;
