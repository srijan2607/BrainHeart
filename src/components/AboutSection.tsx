import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 bg-background neuron-bg">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 title-gradient">
            About the Project
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            BrainHeart is an open-source initiative aimed at building a
            user-friendly, integrated software platform for joint analysis of
            EEG and ECG data. Most current solutions are either closed-source or
            fragmented. We're here to change that.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-8 rounded-xl shadow-sm card-hover border border-border">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tech/10 flex items-center justify-center">
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
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Integration</h3>
              <p className="text-muted-foreground">
                Seamlessly integrate and synchronize EEG and ECG data from
                various sources and formats for comprehensive analysis.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm card-hover border border-border">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-heart/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-heart"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Analysis</h3>
              <p className="text-muted-foreground">
                Access cutting-edge algorithms and statistical tools
                specifically designed for heart-brain interactions research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
