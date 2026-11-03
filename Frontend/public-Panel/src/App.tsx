import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { college } from "./config/college";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Users,
  Bell,
  // CalendarDays,
  MapPin,
  Phone,
  Mail,
  UserRound,
  Presentation,
} from "lucide-react";

const notices = [
  {
    title: "Admissions Open",
    date: "Admission Announcement",
    description: "Admission information and application details will be announced here.",
  },
  {
    title: "Academic Updates",
    date: "School Announcement",
    description: "Important academic updates and school announcements.",
  },
  {
    title: "Examination Updates",
    date: "Examination Notice",
    description: "Examination schedules and related information.",
  },
];

const classes = [
  "Primary Classes",
  "Middle Classes",
  "Secondary Classes",
  "Higher Secondary",
];

function App() {
  return (
    <>
      <Navbar />

      <main>

        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-content">

            <span className="hero-label">
              Welcome to {college.shortName}
            </span>

            <h1>
              Building a Brighter
              <span> Future Through Education</span>
            </h1>

            <p>{college.tagline}. Explore our academic programs,
              school information and admission opportunities.
            </p>

            <div className="hero-buttons">
              <a href="#admissions" className="btn-primary">
                Apply for Admission <ArrowRight size={18} />
              </a>

              <a href="#about" className="btn-outline">
                Explore School
              </a>
            </div>

          </div>

          <div className="hero-image">
            <div className="hero-image-content">
              <GraduationCap size={85} />
              <h2>{college.shortName}</h2>
              <p>Learning Today, Leading Tomorrow</p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features">
          <div className="feature-card">
            <BookOpen />
            <h3>Quality Education</h3>
            <p>Focus on academic learning and development.</p>
          </div>

          <div className="feature-card">
            <Users />
            <h3>Experienced Teachers</h3>
            <p>Supporting students throughout their learning journey.</p>
          </div>

          <div className="feature-card">
            <GraduationCap />
            <h3>Student Development</h3>
            <p>Encouraging knowledge, skills and confidence.</p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about" id="about">
          <div className="section-heading">
            <span>ABOUT OUR SCHOOL</span>
            <h2>Welcome to {college.name}</h2>
            <p>{college.tagline}</p>
          </div>

          <div className="about-content">
            <div className="about-icon">
              <GraduationCap size={100} />
            </div>

            <div>
              <h3>Education for a Brighter Future</h3>

              <p>
                {college.name} is dedicated to providing
                students with educational opportunities and
                a supportive learning environment.
              </p>

              <p>
                Our goal is to encourage academic growth,
                character development and lifelong learning.
              </p>

              <a href="#contact" className="text-link">
                Contact Our School <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* NOTICE BOARD */}
        <section className="section notices" id="notices">
          <div className="section-heading">
            <span>STAY UPDATED</span>
            <h2>Latest Notices</h2>
            <p>Important school announcements and updates.</p>
          </div>

          <div className="notice-grid">
            {notices.map((notice, index) => (
              <div className="notice-card" key={index}>
                <div className="notice-icon">
                  <Bell size={23} />
                </div>

                <span>{notice.date}</span>
                <h3>{notice.title}</h3>
                <p>{notice.description}</p>

                <a href="#contact">
                  More Information <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CLASSES */}
        <section className="section classes" id="classes">
          <div className="section-heading">
            <span>ACADEMIC PROGRAMS</span>
            <h2>Our Classes & Programs</h2>
            <p>Explore the academic levels offered by our school.</p>
          </div>

          <div className="class-grid">
            {classes.map((item, index) => (
              <div className="class-card" key={item}>
                <div className="class-number">
                  0{index + 1}
                </div>

                <BookOpen size={30} />
                <h3>{item}</h3>
                <p>Academic information and admission details.</p>
              </div>
            ))}
          </div>
        </section>

        {/* ADMISSIONS */}
        <section className="admission-section" id="admissions">
          <div>
            <span>JOIN OUR SCHOOL</span>
            <h2>Give Your Child a Brighter Future</h2>
            <p>
              Explore admission opportunities at {college.name}.
            </p>
          </div>

          <a href="#contact" className="btn-white">
            Admission Information <ArrowRight size={18} />
          </a>
        </section>

        {/* GALLERY */}
        <section className="section gallery" id="gallery">
          <div className="section-heading">
            <span>OUR CAMPUS</span>
            <h2>School Gallery</h2>
            <p>Explore activities and memorable moments at our school.</p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item">School Campus</div>
            <div className="gallery-item">Classroom Activities</div>
            <div className="gallery-item">Student Activities</div>
            <div className="gallery-item">School Events</div>
          </div>
        </section>

        {/* PORTALS */}
        <section className="section portals" id="portals">
          <div className="section-heading">
            <span>PORTAL ACCESS</span>
            <h2>Access Your Portal</h2>
            <p>Select your portal to access your dashboard.</p>
          </div>

          <div className="portal-grid">

            <div className="portal-card">
              <div className="portal-icon">
                <Presentation size={35} />
              </div>

              <h3>Teacher Portal</h3>
              <p>
                Access your teaching dashboard,
                academic records and school information.
              </p>

              <a href="/teacher/login" className="btn-primary">
                Teacher Login <ArrowRight size={17} />
              </a>
            </div>

            <div className="portal-card">
              <div className="portal-icon">
                <UserRound size={35} />
              </div>

              <h3>Student Portal</h3>
              <p>
                Access your personal information,
                attendance, results and academic records.
              </p>

              <a href="/student/login" className="btn-primary">
                Student Login <ArrowRight size={17} />
              </a>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <div className="section-heading">
            <span>GET IN TOUCH</span>
            <h2>Contact Our School</h2>
            <p>We are happy to help you with your questions.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <MapPin />
              <h3>Our Location</h3>
              <p>{college.address}</p>
            </div>

            <div className="contact-card">
              <Phone />
              <h3>Phone Number</h3>
              <p>{college.phone}</p>
            </div>

            <div className="contact-card">
              <Mail />
              <h3>Email Address</h3>
              <p>{college.email}</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default App;