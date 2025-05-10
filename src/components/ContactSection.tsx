import React from "react";

interface MentorProps {
  name: string;
  institution?: string;
  image: string;
}

const ContactSection = () => {
  const mentors: MentorProps[] = [
    {
      name: "Oren Gurevitch",
      institution: "McGill University",
      image:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Maya Aderka",
      institution: "",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Suresh Krishna",
      institution: "",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-background">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center title-gradient">
          Meet the Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {mentors.map((mentor, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-tech/20">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{mentor.name}</h3>
              {mentor.institution && (
                <p className="text-muted-foreground">{mentor.institution}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-lg">
            <a
              href="mailto:contact@brainheart.ai"
              className="text-tech hover:text-tech/80 transition-colors"
            >
              contact@brainheart.ai
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
