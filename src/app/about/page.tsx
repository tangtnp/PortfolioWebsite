import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#141b2a] text-white min-h-screen flex justify-center items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 p-8">
        {/* Left Section */}
        <div className="text-center lg:w-1/2">
          {/* About Me Section */}
          <section>
            <h1 className="text-4xl font-bold text-blue-400 mb-4">About Me</h1>

            <p className="text-gray-400 mb-8 leading-relaxed">
              I am a sophomore studying Computer Engineering with a passion for learning and self-improvement. I am particularly interested in data engineering, data science, and network and system design. Always eager to grow, I strive to develop the skills and knowledge needed to contribute effectively to any team or project.
            </p>



            {/* Cards with Equal Size */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
              <div className="bg-[#3C5B6F] rounded-lg p-4 shadow-lg flex-1 transition transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold mb-2">🎓 Education</h3>
                <p className="text-gray-400 text-sm">
                  CEDT, Chulalongkorn University
                </p>
              </div>

              <div className="bg-[#3C5B6F] rounded-lg p-4 shadow-lg flex-1 transition transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold mb-2">💻 Expertise</h3>
                <p className="text-gray-400 text-sm">Data Engineering and Full-stack Development</p>
              </div>

              <div className="bg-[#3C5B6F] rounded-lg p-4 shadow-lg flex-1 transition transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold mb-2">🚀 Focus</h3>
                <p className="text-gray-400 text-sm">
                  Innovation & Problem Solving
                </p>
              </div>
            </div>
          </section>

          {/* My Journey Section */}
          {/* My Journey Section */}
          <section>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">My Journey</h2>
            <p className="text-gray-400 leading-relaxed">
              During high school, I discovered my passion for the tech field through projects and initiatives that challenged me to solve problems creatively. This experience led me to pursue a degree in Computer Engineering at Chulalongkorn University.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              The transition into this field was both surprising and exciting, sparking my curiosity and eagerness to delve deeper into technology. Each new challenge has fueled my drive to learn, innovate, and create impactful solutions.
            </p>
          </section>


        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-96"> {/* Image Container */}
            {/* Bigger Image */}
            <img
              src="/images/tang.jpg"
              alt="Profile"
              className="rounded-lg shadow-lg w-full h-auto"
            />

            {/* Badge */}
            <div className="absolute bottom-4 right-4">
              <button className="bg-white text-gray-800 text-sm font-semibold px-4 py-1 rounded-full shadow-md hover:bg-blue-700 hover:text-white transition-all duration-300">
                Data Engineer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
