import Link from "next/link";
import projects from "@/data/projects.json" // Importing project data from JSON

interface Project {
  id: string;
  name: string;
  description: string;
  img:string;
}


export default function CareerPage() {
  return (
    <main className="p-8  to-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* Section 3: Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-200 mb-6 animation-pop-in">Education</h2>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="flex items-center bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg p-6 gap-4 transition-transform duration-300 "
              >
                {/* Image */}
                <div className="w-20 h-20 flex-shrink-0">
                  <img
                    src={edu.image}
                    alt={edu.title}
                    className="w-full h-full object-cover rounded-lg "
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-100 mb-1 hover:text-blue-400 transition-colors duration-300">
                    {edu.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400 mb-2 hover:text-gray-200 transition-colors duration-300">
                    <i className="fas fa-user-graduate mr-2"></i>
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mb-4 hover:text-gray-200 transition-colors duration-300">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span>{edu.role +" (" +edu.date+ ")"}</span>
                  </div>
                  <p className="text-gray-300 hover:text-gray-100 transition-colors duration-300">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>




        {/* Section 4: Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-200 mb-6 animation-pop-in">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id}>
                <div
                  className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-md p-4 transform transition-transform duration-300 hover:scale-500 hover:shadow-xl hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-600 animation-pop-in"
                >
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-40 object-cover rounded-t-lg hover:opacity-90 transition-opacity duration-300"
                  />
                  <h3 className="text-lg font-bold text-gray-100 mt-4 hover:text-blue-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 hover:text-gray-200 transition-colors duration-300">
                    {project.short}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.technologies.map((technology, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-gray-200 text-xs font-semibold px-3 py-1 rounded-full hover:bg-gray-600 hover:text-gray-100 transition-colors duration-300"
                      >
                        {technology.title}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 1: About My Career */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-200 mb-4 animation-pop-in">About My Career</h1>
          <p className="text-gray-400 animation-pop-in">
            My journey has been a blend of learning, creating, and achieving milestones. Explore my career timeline, academic accomplishments,
            and project portfolio to see how I’ve grown and contributed to the tech world.
          </p>
        </section>
        
        {/* Section 2: Career Timeline */}
        <section className="career-timeline relative animation-pop-in">
          <div className="vertical-line"></div>
          {careerData.map((job, index) => (
            <div
              className="timeline-item hover:scale-105 transition-transform duration-300"
              key={index}
            >
              <div className="year">{job.year}</div>
              <div className="card">
                <img
                  src={job.image}
                  alt={job.title}
                  className="hover:opacity-90 transition-opacity duration-300"
                />
                <div className="card-content">
                  <h3 className="text-lg font-bold text-gray-100 hover:text-blue-400 transition-colors duration-300">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">{job.date}</p>
                  <p className="text-gray-300">{job.description}</p>
                  {job.link && (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline hover:text-blue-500 transition-colors duration-300"
                    >
                      Visit Company →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>



        {/* Footer Section */}
        <footer className="text-center text-gray-400 mt-16 animation-pop-in">
          <p className="text-lg font-bold text-gray-200 mb-4">
            Thank You for Exploring My Career Journey!
          </p>
          <p className="mb-4">
            Feel free to connect with me on social media or reach out for collaborations or inquiries.
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://github.com/tangtnp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/tanathorn-piyachart/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="6633097121@student.chula.ac.th"
              className="text-gray-400 hover:text-blue-400"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
          <p className="text-sm">
            © This portfolio template made by Sorravich Lakngoenchai & Tanathorn Piyachart
          </p>
        </footer>
      </div>
    </main>
  );
}

const careerData = [
  {
    year: "2024",
    title: "Software Engineering - Data Internship",
    date: "May 2024 - June 2024 (2.5 months)",
    description:
      "Developed a Data Product Registration internal website, built data pipelines for 900 tables using Airflow, ensured 98% success in BI dashboard migration, and created web scraping tools for HR talent acquisition.",
    link : "https://www.bangkokbank.com/",
    image: "/images/icons/bbl.png",
  },
];

const educationData = [
  {
    title: "Bachelor of Engineering in Computer Engineering (CEDT)",
    role: "Sophomore student",
    location: "📍Chulalongkorn University, Bangkok, Thailand",
    date: "August 2022 - Present",
    description:
      "I’ve gained strong skills in data science, data engineering, data analytics, software development, and system design, with practical knowledge in statistics and database management, all fostering analytical thinking and real-world problem-solving.",
    image: "/images/icons/chula.png",
  },
  {
    title: "High School",
    role: "Student",
    location: "📍Saint Gabriel's College, Bangkok, Thailand",
    date: "May 2011 - March 2022",
    description:
      "At Saint Gabriel's College, I developed a strong foundation in science and math while learning the importance of hard work and discipline. It was a place where I grew academically and personally, preparing me for the challenges of university life.",
    image: "/images/icons/SGlogo.png",
  },
];
