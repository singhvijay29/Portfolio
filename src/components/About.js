import React from "react";

export default function About() {
  return (
<div className="gradient-to-gray-900 w-[100vw] overflow-hidden">
    <section id="about" className="max-w-[920px] mx-auto ">
      <div className="about-cont container mx-auto flex px-6 md:px-10 py-20 flex-col items-center">
        <div className="flex flex-col lg:items-start text-left mb-16 lg:mb-0 items-center">
          <h1 className="text-[28px] md:text-[38px] mb-6">
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <div>
            <div>
              <div md={8} className="home-about-description">
                <div className="home-about-body text-left">
                  <div className="font-semibold text-[24px] md:text-[32px]">
                    Frontend Engineer at Pazago Technologies
                  </div>
                  <br />
                  <div className="text-[16px] md:text-[22px]">
                    As a passionate and innovative Frontend Engineer at Pazago
                    Technologies, I specialize in creating seamless and engaging
                    user experiences. With a strong foundation in web
                    development and a keen eye for design, I collaborate closely
                    with designers, product managers, and backend developers to
                    deliver cutting-edge solutions that drive customer
                    satisfaction and business success. <br />
                  </div>
                  <div className="font-semibold mt-5 mb-3 text-[22px] md:text-[24px]">
                    Professional Highlights:
                  </div>
                  <div className="flex flex-col text-[24px] gap-4">
                    <div className="text-[16px] md:text-[22px]">
                      <span className="text-[#f2f29] font-[600]">
                        Innovative Web Development:
                      </span>{" "}
                      I revamped user experiences by developing interactive web
                      applications using Next.js, Tailwind CSS, and Chakra UI,
                      achieving a 50% increase in page load speed and a 20%
                      boost in user retention.
                    </div>
                    <div className="text-[16px] md:text-[22px]">
                      <span className="text-[#f2f29] font-[600]">
                        Cross-functional Collaboration:
                      </span>{" "}
                      Ensuring seamless integration of frontend and backend
                      systems through close collaboration with designers and
                      backend developers.
                    </div>
                    <div className="text-[16px] md:text-[22px]">
                      <span className="text-[#f2f29] font-[600]">
                        Performance Optimization:
                      </span>{" "}
                      Optimized website performance and ensured cross-browser
                      compatibility, significantly enhancing user experience and
                      search visibility.
                    </div>
                    <div className="text-[16px] md:text-[22px]">
                      <span className="text-[#f2f29] font-[600]">
                        Feature Development:
                      </span>{" "}
                      Contributed to key projects, such as implementing shipment
                      tracking with Google Maps API, developing real-time chat
                      with WebSocket technology, and enabling push notifications
                      for real-time updates.
                    </div>
                    <div className="text-[16px] md:text-[22px]">
                      <span className="text-[#f2f29] font-[600]">
                        Advanced Functionality:
                      </span>{" "}
                      Designed and implemented features like a dynamic text
                      editor, multi-select document functionality, CSV file
                      reader, and PDF document generator, all aimed at improving
                      usability and efficiency.
                    </div>
                    <div className="text-[16px] md:text-[22px]">
                      <span className="text-[#f2f29] font-[600]">
                        Technical Excellence:
                      </span>{" "}
                      Migrated JavaScript to TypeScript, resulting in 30% faster
                      development and 20% fewer bugs, and optimized website
                      performance with techniques like lazy loading and code
                      splitting.
                    </div>
                    <div className="text-[16px] md:text-[22px]">
                      <span className="text-[#f2f29] font-[600]">
                        User-centric Solutions:
                      </span>{" "}
                      Created a comprehensive Admin Dashboard with visually
                      captivating graphs and developed a modern wallet system
                      handling 1,000+ monthly transactions.
                    </div>
                  </div>
                  <div className="font-semibold mt-8 mb-3 text-[22px] md:text-[24px]">
                    Education:
                  </div>
                  <div className="flex flex-col text-[16px] md:text-[22px] gap-2">
                    <div>
                      Full Stack Web Development - Masai School, Bangalore
                    </div>
                    <div>B.Sc. - K C College, Mumbai</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
  );
}
