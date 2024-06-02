import React from "react";

export default function About() {
  return (
    <section id="about" className="max-w-[920px] mx-auto">
      <div className="about-cont container mx-auto flex px-10 py-20 flex-col items-center">
        <div className="flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center">
          <h1 style={{ fontSize: "2em" }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <div>
              <div md={8} className="home-about-description">
                <div
                  className="home-about-body text-left"
                  style={{ fontSize: "1.4em" }}
                >
                  <div className="font-bold" style={{ fontSize: "1.6em" }}>
                    {" "}
                    Frontend Engineer at Pazago Technologies
                  </div>
                  <br />
                  As a passionate and innovative Frontend Engineer at Pazago
                  Technologies, I specialize in creating seamless and engaging
                  user experiences. With a strong foundation in web development
                  and a keen eye for design, I collaborate closely with
                  designers, product managers, and backend developers to deliver
                  cutting-edge solutions that drive customer satisfaction and
                  business success. <br />
                  <br />
                  Professional Highlights: <br /> <br />
                  Innovative Web Development: I revamped user experiences by
                  developing interactive web applications using Next.js,
                  Tailwind CSS, and Chakra UI, achieving a 50% increase in page
                  load speed and a 20% boost in user retention. Cross-functional
                  Collaboration: Ensuring seamless integration of frontend and
                  backend systems through close collaboration with designers and
                  backend developers. Performance Optimization: Optimized
                  website performance and ensured cross-browser compatibility,
                  significantly enhancing user experience and search visibility.
                  Feature Development: Contributed to key projects, such as
                  implementing shipment tracking with Google Maps API,
                  developing real-time chat with WebSocket technology, and
                  enabling push notifications for real-time updates. Advanced
                  Functionality: Designed and implemented features like a
                  dynamic text editor, multi-select document functionality, CSV
                  file reader, and PDF document generator, all aimed at
                  improving usability and efficiency. Technical Excellence:
                  Migrated JavaScript to TypeScript, resulting in 30% faster
                  development and 20% fewer bugs, and optimized website
                  performance with techniques like lazy loading and code
                  splitting. User-centric Solutions: Created a comprehensive
                  Admin Dashboard with visually captivating graphs and developed
                  a modern wallet system handling 1,000+ monthly transactions.
                  Education: Full Stack Web Development - Masai School,
                  Bangalore B.Sc. - K C College, Mumbai With a track record of
                  boosting performance metrics and delivering user-centric
                  solutions, I am dedicated to pushing the boundaries of web
                  development and creating exceptional digital experiences.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
