import './App.css'
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Section } from "./components/Section";
import { Expandable } from "./components/Expandable";
import { ProjectCard } from "./components/ProjectCard";
import { projects } from "./data/projects";
import jsLogo from './assets/js.svg';
import pythonLogo from './assets/python.svg';
import profileImage from './assets/images/2842680.jpg';
import Projects from './pages/Projects';

function NavLink({ to, hash, children }: { to: string; hash: string; children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) return;
    e.preventDefault();
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (isHome) {
    return (
      <a className="header-link" href={hash} onClick={scrollToSection}>
        {children}
      </a>
    );
  }
  return <Link className="header-link" to={to}>{children}</Link>;
}

export default function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <header className="app-header">
        <nav className="main-nav">
          <NavLink to="/#profile" hash="#profile">My Profile</NavLink>
          <NavLink to="/#projects" hash="#projects">Projects</NavLink>
          <NavLink to="/#skills" hash="#skills">Technical Skills</NavLink>
          <NavLink to="/#education" hash="#education">Education</NavLink>
          <NavLink to="/#clubs" hash="#clubs">Clubs & Involvement</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<HomeContent />} />
      </Routes>
    </BrowserRouter>
  );
}

function HomeContent() {
  const location = useLocation();

  // Smooth scroll to section when landing on home with a hash (e.g. from another page)
  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) {
      const t = requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return () => cancelAnimationFrame(t);
    }
  }, [location.pathname, location.hash]);

  return (
      <main style={{ margin: '0 auto', padding: 0 }}>
        {/* My Profile Section */}
        <div id="profile" className="section-block section-bg-b">
          <Section>
            <div className="hero-section">
              <div className="hero-card">
                <h1 className="text-4xl font-bold">Chiew Yi Jia</h1>
                <p className="text-lg">Computer Science Student | Aspiring Software Engineer</p>
                <p className="text-sm">Tel: <a href="tel:+601110977387">(+60)1110977387</a> | Email: <a href="mailto:chyj218@gmail.com">chyj218@gmail.com</a></p>
                <p className="text-sm mt-4">Passionate computer science student that has a strong interest in building interactive applications using various tools and libraries. Eager to learn new technical and interpersonal skills and actively seeking internship opportunities to grow further.</p>
              </div>
              <div className="profile-image-wrap">
                <img src={profileImage} alt="Developer at work" className="profile-image" />
                <a href="http://www.freepik.com" className="profile-image-credit" target="_blank" rel="noopener noreferrer">Designed by Freepik</a>
              </div>
            </div>
          </Section>
        </div>
        {/*Experience Section*/}
        <div id="experience" className="section-block section-bg-a">
          <Section>
            <h2 className="section-title">Experience</h2>
            <Expandable title="IT developer intern at SK Intellix" expandOnPhaseIn>
              <ul className="text-sm" style={{ paddingLeft: '1.5em', margin: 0, textAlign: 'left', listStylePosition: 'outside' }}>
                <li>Assisted in extending and maintaining frontend of the company's storefront website</li>
                <li>Debugged and resolved various frontend issues and bugs</li>
                <li>Documented the development process to improve code readability and maintainability</li>
                <li>Collaborated with the team and suggested improvements to the frontend codebase</li>
                <li>Exposed to tools that handles API integration and web application development</li>
                <li>Assisted with evaluation and testing of SK intellix's AI-powered product; NamuhX</li>
              </ul>
            </Expandable>
          </Section>
        </div>
        {/* Personal Projects Section */}
        <div id="projects" className="section-block section-bg-b">
          <Section>
            <h2 className="section-title">Projects</h2>
            <p className="text-sm" style={{ marginBottom: '1rem' }}>
              <Link to="/projects" className="github-link">View full projects page →</Link>
            </p>
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} showImage={false} />
              ))}
            </div>
          </Section>
        </div>

        {/* Technical Skills Section */}
        <div id="skills" className="section-block section-bg-a">
          <Section>
            <div className="skills-section">
              <h2 className="section-title">Technical Skills</h2>
              <div className="skills-grid">
                <div>
                  <img src={pythonLogo} alt="Python" />
                  <div>Python</div>
                </div>
                <div>
                  <img src={jsLogo} alt="JavaScript" />
                  <div>JavaScript</div>
                </div>
                <div>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style={{ width: 40, height: 40 }} />
                  <div>Java</div>
                </div>
                <div>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" style={{ width: 40, height: 40 }} />
                  <div>C#</div>
                </div>
                <div>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" style={{ width: 40, height: 40 }} />
                  <div>HTML/CSS</div>
                </div>
                <div>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" style={{ width: 40, height: 40 }} />
                  <div>TypeScript</div>
                </div>
                <div>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue" style={{ width: 40, height: 40 }} />
                  <div>Vue.js</div>
                </div>
                <div>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" style={{ width: 40, height: 40 }} />
                  <div>PHP</div>
                </div>
                <div>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{ width: 40, height: 40 }} />
                  <div>React</div>
                </div>
                <div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" style={{ width: 40, height: 40 }} />
                  <div>Node.js</div>
                </div>
                <div>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" style={{ width: 40, height: 40 }} />
                  <div>MySQL</div>
                </div>
                <div>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" style={{ width: 40, height: 40 }} />
                  <div>Git</div>
                </div>
                <div>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="Unity" style={{ width: 40, height: 40 }} />
                  <div>Unity</div>
                </div>
                <div>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" style={{ width: 40, height: 40 }} />
                  <div>VS Code</div>
                </div>
                <div>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" style={{ width: 40, height: 40 }} />
                  <div>Figma</div>
                </div>
                <div>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt="Canva" style={{ width: 40, height: 40 }} />
                  <div>Canva</div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* Education Section */}
        <div id="education" className="section-block section-bg-b">
          <Section>
            <div className="skills-section">
              <h2 className="section-title">Education</h2>
              <h3 className="font-bold">Monash University Malaysia, Subang Jaya, Kuala Lumpur</h3>
              <p className="text-sm">Bachelor of Computer Science | March 2023 - Now</p>
              {/* <p className="text-sm">Overall GPA: 3.789 | CGPA:3.931 </p> */}
              {/* <p className="text-sm">WAM: 84.233</p> */}
              <p className="text-sm">Relevant Coursework: Data Structures & Algorithms, App Development, Object Oriented Design</p>
              <br />
              <h3 className="font-bold">Inti International College Penang, Pulau Pinang</h3>
              <p className="text-sm">Cambridge A-Levels | Jan 2019 - May 2020</p>
              <p className="text-sm">Subjects: Mathematics, Physics, Chemistry, Further Mathematics</p>
              
              <br />
              
            </div>
          </Section>
        </div>

        {/* Clubs and Involvement Section */}
        <div id="clubs" className="section-block section-bg-a">
          <Section>
            <div className="skills-section">
              <h2 className="section-title">Clubs & Involvement</h2>
              <div className="clubs-grid">
                <div className="clubs-card">
                  <h3 className="clubs-card-title">Monash Speakers Society - Secretary</h3>
                  <div className="clubs-card-date">January 2025 - December 2025</div>
                  <p className="clubs-card-description">Coordinated society operations, including meeting agendas, membership records, and official documentation.</p>
                </div>
                <div className="clubs-card">
                  <h3 className="clubs-card-title">Inti International Sales Support Team</h3>
                  <div className="clubs-card-date">Jan 2018 - May 2020</div>
                  <p className="clubs-card-description">Assisted prospective students and parents with course inquiries and application procedures. Provided administrative support during recruitment events and open days. Gained experience in client interaction and teamwork.</p>
                </div>
              </div>
            </div>
          </Section>
        </div>
        
        {/*
        <div id="languages">
          <Section>
            <div className="skills-section">
              <h2 className="section-title">Languages</h2>
              <ul className="text-sm" style={{ paddingLeft: 0, margin: 0, textAlign: 'center', listStylePosition: 'inside' }}>
                <li>English</li>
                <li>Chinese</li>
                <li>Malay</li>
              </ul>
            </div>
          </Section>
        </div>
        */}
      </main>
  );
}

