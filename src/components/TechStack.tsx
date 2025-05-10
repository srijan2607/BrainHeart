import React from "react";

const TechStack = () => {
  const technologies = [
    {
      name: "Python",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="h-12 w-12 mx-auto mb-4"
        >
          <path
            fill="currentColor"
            d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"
          />
        </svg>
      ),
    },
    {
      name: "MATLAB",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-12 w-12 mx-auto mb-4"
        >
          <path
            fill="currentColor"
            d="M19.6,18.9h0v0A18.3,18.3,0,0,0,16,14.5a.9.9,0,0,1-.3-.5c0-.1.2-.5.5-.8l2.1-2.2L17.8,9.9,15.7,12l-.7.7a26.6,26.6,0,0,1-2.9-1.8l-.8-.5c-.2-.1-.1-.4.1-.8l.6-1.5L7,2,6,3.3a11.6,11.6,0,0,0-2,5.8C4,9.7,4,10,3.6,10.5l-1.4,2A25.3,25.3,0,0,0,0,15.9c0,.1.2.3.4.3a10.2,10.2,0,0,0,1.8-.5,15.1,15.1,0,0,1,4-1.2,5.8,5.8,0,0,1,2.4.5,10.1,10.1,0,0,1,2.7,2c.7.7,2.6,2.1,2.8,2.2a4.1,4.1,0,0,0,2.3.8,5.1,5.1,0,0,0,3.2-1.1M7.3,6.6c.4,1,.4,1.5.1,1.8s-.6.3-1.3.1A9.9,9.9,0,0,0,5,7.9a24.1,24.1,0,0,0,2.3-1.3"
          />
        </svg>
      ),
    },
    {
      name: "Slurm",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-12 w-12 mx-auto mb-4"
        >
          <path
            fill="currentColor"
            d="M 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 8.5 7 L 15.5 7 C 16.328 7 17 7.672 17 8.5 L 17 15.5 C 17 16.328 16.328 17 15.5 17 L 8.5 17 C 7.672 17 7 16.328 7 15.5 L 7 8.5 C 7 7.672 7.672 7 8.5 7 z"
          />
        </svg>
      ),
    },
    {
      name: "Streamlit",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-12 w-12 mx-auto mb-4"
        >
          <path
            fill="currentColor"
            d="M16.9,17.2c1.2-0.7,2.1-2,2.1-3.4c0-2.2-1.8-4-4-4c-0.6,0-1.1,0.1-1.6,0.3c-0.5-1.9-2.3-3.2-4.3-3.2C6.5,7,4,9.5,4,12.5c0,1.5,0.6,2.9,1.6,3.9c0.5,0.5,1,0.8,1.7,1.1l0,0c0.9,0.4,1.8,0.5,2.8,0.5c0.7,0,1.4-0.1,2-0.3c0.6-0.1,1.1-0.3,1.6-0.5c0.2-0.1,0.4-0.2,0.6-0.3c0.4-0.2,0.7-0.5,1.1-0.8c0.5-0.3,1-0.8,1.5-1"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-12 w-12 mx-auto mb-4"
        >
          <path
            fill="currentColor"
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
      ),
    },
    {
      name: "WebAssembly",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-12 w-12 mx-auto mb-4"
        >
          <path
            fill="currentColor"
            d="M14.745,0c-0.598,0.019-1.152,0.334-1.439,0.899L5.618,15.777l-3.21-5.424C2.152,9.902,1.603,9.603,1.115,9.667 c-0.507,0.066-0.908,0.46-0.999,0.966c-0.109,0.506,0.115,0.983,0.584,1.236c0,0,4.549,7.084,4.599,7.133 c0.484,0.679,1.41,0.828,2.122,0.349c0.744-0.507,0.893-1.473,0.335-2.15l7.675-14.7c0.109-0.208,0.336-0.334,0.573-0.334h6.563 c0.713,0,1.344-0.621,1.335-1.335c0-0.713-0.621-1.334-1.335-1.334h-7.33C15.076,0.01,14.906,0,14.745,0z M11.232,5.011 c-0.454,0.01-0.873,0.244-1.119,0.64l-3.495,5.683c-0.418,0.678-0.209,1.545,0.448,1.972c0.656,0.428,1.552,0.19,1.962-0.49 l3.513-5.682c0.42-0.678,0.209-1.561-0.47-1.981C11.811,5.042,11.521,5.002,11.232,5.011z M19.27,8.895 c-0.564,0.01-1.105,0.301-1.34,0.849l-2.83,5.997c-0.316,0.736,0.021,1.594,0.756,1.91c0.736,0.316,1.593-0.021,1.91-0.756 l2.83-5.998c0.315-0.736-0.022-1.594-0.757-1.909C19.67,8.915,19.47,8.886,19.27,8.895z M17.376,9.021 c-0.741-0.032-1.402,0.5-1.478,1.243l-0.589,5.515c-0.078,0.741,0.469,1.403,1.21,1.482c0.741,0.078,1.402-0.47,1.481-1.21 l0.589-5.515c0.078-0.741-0.47-1.402-1.21-1.481C17.42,9.024,17.398,9.022,17.376,9.021z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="tech" className="relative py-24 bg-background">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center title-gradient">
          Tech Stack
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground">
            We're building in Python/MATLAB, leveraging NeuroKit2, MNE, and
            biosignal toolkits.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-card p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center card-hover border border-border"
            >
              <div className="text-foreground">{tech.icon}</div>
              <h3 className="font-medium text-foreground">{tech.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-tech/5 to-heart/5 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4 text-center text-foreground">
              Core Technologies & Libraries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card p-3 rounded-lg text-center shadow-sm border border-border">
                <span className="text-tech font-medium">NeuroKit2</span>
              </div>
              <div className="bg-card p-3 rounded-lg text-center shadow-sm border border-border">
                <span className="text-tech font-medium">MNE</span>
              </div>
              <div className="bg-card p-3 rounded-lg text-center shadow-sm border border-border">
                <span className="text-heart font-medium">BioSPPy</span>
              </div>
              <div className="bg-card p-3 rounded-lg text-center shadow-sm border border-border">
                <span className="text-heart font-medium">HeartPy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
