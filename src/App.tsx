import './App.css'
import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import jsLogo from './assets/js.svg';
import pythonLogo from './assets/python.svg';
import reactLogo from './assets/reactjs.svg';

const Section = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      {children}
    </motion.section>
  );
};

const Expandable = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="expandable">
      <motion.div
        className="expandable-header"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ cursor: 'pointer' }}
      >
        <h3 className="font-semibold">{title}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ fontSize: '1.5rem', fontWeight: 300 }}
        >
          +
        </motion.span>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="expandable-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <>
      {/* Header Navigation */}
      <header className="app-header">
        <nav className="main-nav">
          <a className="header-link" href="#profile">My Profile</a>
          <a className="header-link" href="#projects">Personal Projects</a>
          <a className="header-link" href="#skills">Technical Skills</a>
          <a className="header-link" href="#education">Education</a>
          <a className="header-link" href="#clubs">Clubs & Involvement</a>
          <a className="header-link" href="#languages">Languages</a>
        </nav>
      </header>
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '5rem 0 2rem 0' }}>
        {/* My Profile Section */}
        <div id="profile">
          <Section>
            <div className="hero-section">
              <div>
                <h1 className="text-4xl font-bold">Chiew Yi Jia</h1>
                <p className="text-lg">Computer Science Student | Aspiring Software Engineer</p>
                <p className="text-sm">Tel: +601110977387 | Email: chyj218@gmail.com</p>
                <p className="text-sm mt-4">Passionate computer science student that has a strong interest in building interactive applications using various tools and libraries. Eager to learn new technical and interpersonal skills and actively seeking internship opportunities to grow further.</p>
              </div>
            </div>
          </Section>
        </div>
        {/*Experience Section*/}
        <div id="experience">
          <Section>
            <div className="skills-section">
              <h2 className="section-title">Experience</h2>
              <Expandable title="IT developer intern at SK Intellix">
                <ul className="text-sm" style={{ paddingLeft: '1.5em', margin: 0, textAlign: 'left', listStylePosition: 'outside' }}>
                  <li>Assisted in extending and maintaining frontend of the company's storefront website</li>
                  <li>Debugged and resolved various frontend issues and bugs</li>
                  <li>Documented the development process to improve code readability and maintainability</li>
                  <li>Collaborated with the team and suggested improvements to the frontend codebase</li>
                  <li>Exposed to tools that handles API integration and web application development</li>
                  <li>Assisted with evaluation and testing of SK intellix's AI-powered product; NamuhX</li>

                </ul>
              </Expandable>
            </div>
          </Section>
        </div>
        {/* Personal Projects Section */}
        <div id="projects">
          <Section>
            <div className="skills-section">
              <h2 className="section-title">Projects</h2>
              <Expandable title="Smart Bulletin Board (React + Firebase + MediaPipe) — Final Year Project">
                <ul className="text-sm" style={{ paddingLeft: '1.5em', margin: 0, textAlign: 'left', listStylePosition: 'outside' }}>
                  <li>Final year capstone project to build a centralized, interactive digital noticeboard system for campus announcements</li>
                  <li>Integrated Google MediaPipe to enable custom hand gesture recognition, allowing touchless interaction with the bulletin board</li>
                  <li>Developed the frontend using React, focusing on a responsive and user-friendly interface for content creation and display</li>
                  <li>Utilized Firebase for real-time database synchronization, cloud storage, and user role management</li>
                  <li>Designed to enhance accessibility and streamline content dissemination in public spaces</li>
                  <li>Achieved top 10 best project award in Monash University Malaysia</li>
                </ul>
              </Expandable>
              <Expandable title="Chess Engine & Game Logic Projects (Frontend & Backend)">
                <div>
                  <h4 style={{ marginBottom: "0.5em", marginTop: 0, color: "#2b4162" }}>Frontend (TypeScript, React)</h4>
                  <ul className="text-sm" style={{ paddingLeft: '1.5em', margin: 0, textAlign: 'left', listStylePosition: 'outside' }}>
                    <li>Chess Web App: Built a full-stack chess application with real-time move validation, game-over detection, and Stockfish AI integration</li>
                    <li>Developed an interactive interface in TypeScript for live gameplay and in-memory game state management</li>
                    <li>Focused on responsive UI for seamless player experience and utilized WebSocket for frontend-backend communication</li>
                  </ul>

                  <h4 style={{ marginBottom: "0.5em", marginTop: "1.5em", color: "#2b4162" }}>Backend (Python, Java, JavaScript)</h4>
                  <ul className="text-sm" style={{ paddingLeft: '1.5em', margin: 0, textAlign: 'left', listStylePosition: 'outside' }}>
                    <li>Python: Used python-chess to manage move validation, game logic, and Stockfish engine integration for the chess web app backend</li>
                    <li>Employed WebSocket for seamless real-time data flow between backend and frontend</li>
                    <li>Chinese Chess (Xiangqi) Engine: Self-made full backend engine in Java, supporting all game rules, piece movements, and board representation</li>
                    <li>Focused on object-oriented design principles to model complex rules for Xiangqi and explored traditional board game logic</li>
                    <li>
                      <a
                        className="github-link"
                        target="_blank"
                        href="https://github.com/YiJiaC138/xiangqi"
                      >
                        Xiangqi Java Engine Github Repository here
                      </a>
                    </li>
                  </ul>
                </div>
              </Expandable>
              <Expandable title="Smart Trip Planner">
                <ul className="text-sm" style={{ paddingLeft: '1.5em', margin: 0, textAlign: 'left', listStylePosition: 'outside' }}>
                  <li>Participated in Kaggle x Google Capstone Project</li>
                  <li>Developed a smart trip planner using React and Node.js to help users plan their trips</li>
                  <li>Implemented specialized AI agents using Google's SDK for tasks like visa rule checks, packing lists, and real-time travel info, improving trip planning accuracy and efficiency.</li>
                  <li><a className="github-link" target="_blank" href="https://github.com/YiJiaC138/smart-trip-planner">Github Repository here</a></li>
                </ul>

              </Expandable>
              
            </div>
          </Section>
        </div>

        {/* Technical Skills Section */}
        <div id="skills">
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
        <div id="education">
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
        <div id="clubs">
          <Section>
            <div className="skills-section">
              <h2 className="section-title">Clubs & Involvement</h2>
              <div className="skills-grid">
                <div>
                  <h3 className="font-semibold">Monash Speakers Society - Secretary</h3>
                  <div className="text-sm">January 2025 - December 2025</div>
                  <div className="text-sm">Coordinated society operations, including meeting agendas, membership records, and official documentation.</div>
                </div>
                <div>
                  <h3 className="font-semibold">Inti International Sales Support Team</h3>
                  <div className="text-sm">Jan 2018 - May 2020</div>
                  <div className="text-sm">Assisted prospective students and parents with course inquiries and application procedures. Provided administrative support during recruitment events and open days. Gained experience in client interaction and teamwork.</div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* Languages Section */}
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
      </main>
    </>
  );
}

