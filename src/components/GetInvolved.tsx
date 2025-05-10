import React from "react";
import Button from "./Button";

const GetInvolved = () => {
  return (
    <section
      id="get-involved"
      className="relative py-24 bg-background neuron-bg"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-tech/5 to-heart/5"></div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 title-gradient">
            Get Involved
          </h2>

          <p className="text-lg text-muted-foreground mb-10">
            Join our growing community of researchers, developers, and
            contributors who are passionate about advancing heart-brain
            research.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center border border-border">
              <div className="w-16 h-16 rounded-full bg-tech/10 flex items-center justify-center mb-4">
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-foreground">
                Contribute Code
              </h3>
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Help develop new features, improve documentation, or fix bugs in
                our codebase.
              </p>
              <Button
                variant="tech"
                size="sm"
                className="mt-auto"
                onClick={() => window.open("https://github.com", "_blank")}
              >
                GitHub Repository
              </Button>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center border border-border">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-foreground">
                Join the Forum
              </h3>
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Participate in discussions, ask questions, and share your
                insights with the community.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-auto"
                onClick={() => window.open("#", "_blank")}
              >
                Join Discussion
              </Button>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center border border-border">
              <div className="w-16 h-16 rounded-full bg-heart/10 flex items-center justify-center mb-4">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-foreground">
                Follow Our Progress
              </h3>
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Stay updated with our latest developments, publications, and
                upcoming events.
              </p>
              <Button
                variant="heart"
                size="sm"
                className="mt-auto"
                onClick={() => {
                  const subscribeSection = document.getElementById("subscribe");
                  if (subscribeSection) {
                    subscribeSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>

          <div
            id="subscribe"
            className="bg-card p-8 rounded-xl shadow-md border border-border"
          >
            <h3 className="text-foreground text-xl font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form className="flex flex-col md:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-tech"
              />
              <Button variant="tech">Subscribe</Button>
            </form>
            <p className="text-muted-foreground text-sm mt-3">
              We'll keep you updated on our latest releases, features, and
              events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
