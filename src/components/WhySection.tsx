import React from "react";
import { Brain, FlaskRound } from "lucide-react";

const WhySection = () => {
  const items = [
    {
      icon: <Brain className="w-12 h-12 text-tech" />,
      title: "Neuroscience meets Cardiology",
      description:
        "Bridging the gap between two fields that have historically been studied in isolation to reveal powerful insights.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-tech"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Open-Source by Default",
      description:
        "Everything we build is free, open, and accessible to researchers worldwide, promoting collaboration and innovation.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-heart"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Web-Based Visualization Tools",
      description:
        "Interactive, browser-based tools that make complex data visualization accessible without specialized software.",
    },
    {
      icon: <FlaskRound className="w-12 h-12 text-heart" />,
      title: "Built for Researchers, by Researchers",
      description:
        "Designed with the real needs of scientific research in mind, not corporate interests or profit motives.",
    },
  ];

  return (
    <section
      id="why"
      className="relative py-24 bg-background brain-grid-pattern"
    >
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center title-gradient">
            Why It Matters
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center border border-border"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default WhySection;
