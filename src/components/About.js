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
                      Frontend Engineer
                    </div>
                    <br />
                    <div className="text-[16px] md:text-[22px]">
                      As a passionate and innovative Frontend Engineer, I
                      specialize in creating seamless and engaging user
                      experiences. With a strong foundation in web development
                      and a keen eye for design, I collaborate closely with
                      designers, product managers, and backend developers to
                      deliver cutting-edge solutions that drive customer
                      satisfaction and business success. <br />
                    </div>
                    <div className="font-semibold mt-5 mb-3 text-[22px] md:text-[24px]">
                      Professional Highlights:
                    </div>
                    <div className="flex flex-col text-[24px] gap-4">
                      <div className="text-[16px] md:text-[22px]">
                        I specialize in Next.js, React.js, TypeScript,
                        JavaScript, React Query, WebSockets, Redux, Tailwind
                        CSS, Chakra UI, HTML, CSS, Git, Web3.js, Ether.js,
                        Flutter, Firebase. I improved page load speed by 50% and
                        boosted user retention by 20%. <br />
                        Key Contributions: <br />
                        Integrated Google Maps API for shipment tracking and
                        WebSocket for real-time chat.
                        <br />
                        Built an Admin Dashboard with dynamic graphs and a
                        modern wallet system processing 10,000+ monthly
                        transactions. <br />
                        Devised and implemented real-time chat with WebSocket
                        technology for enhanced user engagement. Dynamically
                        updated UI elements for seamless responsiveness. <br />
                        Developed a dynamic text editor, empowering users to
                        effortlessly format text, add bullet points, numbering,
                        detect links, and mention tags for enhanced
                        communication flow. <br />
                        Developed interactive web applications and optimized
                        performance with lazy loading & code splitting. <br />{" "}
                        Migrated JavaScript to TypeScript, reducing bugs by 20%
                        and accelerating development by 30%. Focused on
                        efficiency, usability, and high-performance web
                        solutions.
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
