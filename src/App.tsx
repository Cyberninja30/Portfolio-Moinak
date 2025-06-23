import React, { useEffect, useState } from 'react';
import img from "../Screenshot from 2025-01-13 00-25-12.png"

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStats, setSystemStats] = useState({
    uptime: '00:00:00',
    connections: Math.floor(Math.random() * 50) + 10,
    threats: Math.floor(Math.random() * 5),
    status: 'SECURE'
  });

  useEffect(() => {
    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Update system stats every 5 seconds
    const statsInterval = setInterval(() => {
      setSystemStats(prev => ({
        ...prev,
        connections: Math.floor(Math.random() * 50) + 10,
        threats: Math.floor(Math.random() * 5),
        uptime: new Date(Date.now() - Math.random() * 86400000).toISOString().substr(11, 8)
      }));
    }, 5000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(statsInterval);
    };
  }, []);

  // Matrix rain effect
  useEffect(() => {
    const createMatrixRain = () => {
      const matrixContainer = document.querySelector('.matrix-rain');
      if (!matrixContainer) return;

      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      
      for (let i = 0; i < 20; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = Math.random() * 100 + '%';
        column.style.animationDuration = (Math.random() * 3 + 2) + 's';
        column.style.animationDelay = Math.random() * 2 + 's';
        
        let text = '';
        for (let j = 0; j < 20; j++) {
          text += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        column.textContent = text;
        
        matrixContainer.appendChild(column);
      }
    };

    const timer = setTimeout(createMatrixRain, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Floating code snippets
  useEffect(() => {
    const codeSnippets = [
      'def scan_ports(target):',
      'nmap -sS -O target',
      'import socket, sys',
      'while True: exploit()',
      'if vulnerability_found:',
      'payload = shellcode',
      'connect(target, 443)',
      'decrypt(hash_value)',
      'for i in range(256):',
      'subprocess.call(cmd)'
    ];

    const createFloatingCode = () => {
      const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      const element = document.createElement('div');
      element.className = 'floating-code';
      element.textContent = snippet;
      element.style.top = Math.random() * window.innerHeight + 'px';
      element.style.animationDuration = (Math.random() * 10 + 15) + 's';
      
      document.body.appendChild(element);
      
      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }, 20000);
    };

    const interval = setInterval(createFloatingCode, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background Effects */}
      <div className="matrix-rain"></div>
      <div className="terminal-grid"></div>
      <div className="scanlines"></div>
      
      {/* System Status Widget */}
      <div className="system-status">
        <div className="status-line">
          <span>SYSTEM STATUS</span>
          <span className="pulse-glow">{systemStats.status}</span>
        </div>
        <div className="status-line">
          <span>UPTIME</span>
          <span>{systemStats.uptime}</span>
        </div>
        <div className="status-line">
          <span>CONNECTIONS</span>
          <span>{systemStats.connections}</span>
        </div>
        <div className="status-line">
          <span>THREATS</span>
          <span style={{color: systemStats.threats > 2 ? '#ff4444' : '#00ff41'}}>
            {systemStats.threats}
          </span>
        </div>
        <div className="status-line">
          <span>TIME</span>
          <span>{currentTime.toLocaleTimeString()}</span>
        </div>
        <div style={{marginTop: '10px', fontSize: '8px'}}>
          <span className="status-indicator status-online"></span>
          <span>FIREWALL ACTIVE</span>
        </div>
        <div style={{fontSize: '8px'}}>
          <span className="status-indicator status-online"></span>
          <span>IDS MONITORING</span>
        </div>
        <div style={{fontSize: '8px'}}>
          <span className="status-indicator status-warning"></span>
          <span>UPDATES PENDING</span>
        </div>
      </div>

      <div className="terminal-container">
        {/* Header */}
        <header className="terminal-header">
        <div className="terminal-prompt pulse-glow">
        root@kali-mnx~#
        <span className="terminal-cursor"></span>
        </div>  
          <nav className="terminal-nav">
            <a href="#timeline">timeline</a>
            <a href="#projects">projects</a>
            <a href="#skills">skills</a>
            <a href="#certifications">certifications</a>
            <a href="#contact">contact</a>
            <a href="/Moinak_Resume.pdf" target="_blank" rel="noopener noreferrer">📄 Resume</a>
          </nav>
        </header>

        {/* About Section */}
        <section id="About">
          <h2 className="section-title glitch-text" data-text="About">About</h2>
          <div className="section-underline">=====</div>
          
          <div className="profile-section">
            <img 
              src={img}
              alt="Cybersecurity Enthusiast" 
              className="profile-image"
            />
            <div className="profile-info">
              <p>Hi, I am <strong className="pulse-glow">Moinak Niyogi</strong>,<p> love to learn new things and build cool stuffs</p> </p>
              <br />
              <p>Intern @ <a href="#">Haryana Police</a></p>
              <p>Secretary & RD Lead @ <a href="#">Association for Cyber Security(ACS)</a></p>
              <p>Mentor @ <a href="#">Albus Security</a></p>
              <p>Ex-Research Intern @ <a href="#">IIIT Kalyani</a></p>
              <div style={{marginTop: '15px'}}>
                
                <span className="typing-indicator">
                  
          
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Life Updates Section */}
        <section id="timeline">
          <h2 className="section-title glitch-text" data-text="timeline">timeline<span style={{color: 'var(--terminal-muted)'}}></span></h2>
          <div className="section-underline">============</div>
          
          <div className="timeline-section">
            <div className="timeline-item">
              <span className="timeline-date pulse-glow">2017</span>
              <div className="timeline-content">
                <div className="timeline-title"> First Lines of Code </div>
                <div className="timeline-underline">=================</div>
                <div className="timeline-description">
                  <p>1. Began programming with C and C++, exploring basic logic, loops, and file handling.</p>
                  <p>2. Built small programs like calculators, grade systems, and pattern generators.</p>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2019</span>
              <div className="timeline-content">
                <div className="timeline-title"> Python Enters the Picture </div>
                <div className="timeline-underline">=======================</div>
                <div className="timeline-description">
                   <p> 1. Started learning Python, focusing on functions, data structures, and modules.</p>
                   <p> 2. Gained a strong foundation in writing clean and efficient code.</p>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2020</span>
              <div className="timeline-content">
                <div className="timeline-title"> First Web Application: Library Management System </div>
                <div className="timeline-underline">=============================================</div>
                <div className="timeline-description">
                   <p> 1. Built my first full-stack project — a Library Management System.</p>
                   <p> 2. Tech Stack: Python (backend) + MySQL (database).</p>
                   <p> 3. Features included user login, book issuance/returns, and admin dashboard.</p>
                   <p> 4. Marked my entry into real-world application development.</p>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2022</span>
              <div className="timeline-content">
                <div className="timeline-title">Expanding Horizons</div>
                <div className="timeline-underline">=================</div>
                <div className="timeline-description">
                  <p> 1. Started exploring blockchain development.</p>
                  <p> 2. Learned about smart contracts, wallets, and Web3 architecture.</p>
                  <p> 3. As a summer trainee at Metacrafters, built Web3 applications with practical use-cases.</p>
                  <p> 4. Built AlgoPool on the Algorand Ecosystem and decentralized protocols.</p>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2023</span>
              <div className="timeline-content">
                <div className="timeline-title">Cybersecurity came into action</div>
                <div className="timeline-underline">=================</div>
                <div className="timeline-description">
                  <p> 1. Started learning and exploring Operating Systems and Computer Networks in-depth.</p>
                  <p> 2. Began my journey into bug bounty hunting, read POCs , articles and reports. understood real-world attack vectors.</p>
                  <p> 3. Reported my first bug to GeeksforGeeks worth $250 — an OAuth 2.0 authorization flaw.</p>
                  <p> 4. Explored and practiced vulnerabilities like IDOR, SSRF, CSRF, XSS, and SQL Injection.</p>
                  <p> 5. Tested and submitted findings through VDP programs on platforms like Bugcrowd, HackerOne, and PortSwigger Labs.</p>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="section-title glitch-text" data-text="Technical Arena">Technical Arena</h2>
          <div className="section-underline">=================</div>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Offensive Security</h3>
              <ul className="skill-list">
                <li>Penetration Testing</li>
                <li>Vulnerability Assessment</li>
                <li>Social Engineering</li>
                <li>Exploit Development</li>
                <li>Web Application Security</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Security Tools</h3>
              <ul className="skill-list">
                <li>Metasploit Framework</li>
                <li>Burp Suite</li>
                <li>Maltego</li>
                <li>Nmap & Nessus</li>
                <li>Wireshark & tcpdump</li>
                <li>Splunk & Wifite</li>
                <li>Kali Linux & Parrot OS</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Programming & Scripting</h3>
              <ul className="skill-list">
                <li>Python</li>
                <li>Shell</li>
                <li>JavaScript</li>
                <li>SQL Injection Techniques</li>
                <li>C++</li>
                <li>Go & lua</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Compliance & Frameworks</h3>
              <ul className="skill-list">
                <li>NIST Cybersecurity Framework</li>
                <li>ISO 27001/27002</li>
                <li>PCI DSS Compliance</li>
                <li>GDPR & Privacy Laws</li>
                <li>SOX Compliance</li>
                <li>OWASP Top 10</li>
              </ul>
            </div>
          </div>

           <div className="skill-category">
              <h3>Blockchain Development</h3>
              <ul className="skill-list">
                <li>Smart Contracts on Algorand</li>
                <li>Algorand SDKs</li>
                <li>ASA & NFT Creationt</li>
                <li>DApp Development</li>
                <li>Atomic Transfers & Group Transactions</li>
                <li>Smart Contract Testing with Algokit</li>
                <li>Indexer & Algod API Integration</li>
                <li>On-chain Logic Optimization</li>
              </ul>
            </div>
        </section>

        {/* Certifications Section */}
        
        <section id="Achievements & Certifications">
          <h2 className="section-title glitch-text" data-text="Achievements & Certifications"> Achievements & Certifications </h2>
          <div className="section-underline">==============================</div>
          
          <div className="timeline-section">
            <div className="timeline-item">
              <span className="timeline-date pulse-glow">2024</span>
              <div className="timeline-content">
                <div className="timeline-title">Offensive Security Certified Professional (OSCP)</div>
                <div className="timeline-description">
                  Advanced penetration testing certification - hands-on 24-hour exam demonstrating real-world exploitation skills
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2023</span>
              <div className="timeline-content">
                <div className="timeline-title">Certified Information Systems Security Professional (CISSP)</div>
                <div className="timeline-description">
                  Industry-leading certification covering 8 domains of cybersecurity knowledge and management
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2022</span>
              <div className="timeline-content">
                <div className="timeline-title">Certified Ethical Hacker (CEH) v12</div>
                <div className="timeline-description">
                  Comprehensive ethical hacking certification covering latest attack vectors and defensive countermeasures
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2021</span>
              <div className="timeline-content">
                <div className="timeline-title">AWS Certified Security - Specialty</div>
                <div className="timeline-description">
                  Advanced cloud security certification demonstrating expertise in securing AWS workloads and infrastructure
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="section-title glitch-text" data-text="Projects">Projects</h2>
          <div className="section-underline">================</div>
          
          <div className="timeline-section">
            <div className="timeline-item">
              <span className="timeline-date">2024</span>
              <div className="timeline-content">
                <div className="timeline-title">ThreatHunter Pro - Advanced SIEM Analytics</div>
                <div className="timeline-description">
                  Open-source threat hunting platform with ML-powered anomaly detection. Built with Python, Elasticsearch, and React. 
                  Used by 500+ security teams worldwide. GitHub: https://github.com/alexrodriguez/threathunter-pro
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2023</span>
              <div className="timeline-content">
                <div className="timeline-title">Zero-Day Discovery in Smart Home Devices</div>
                <div className="timeline-description">
                  Discovered critical vulnerabilities in popular IoT devices affecting 2M+ users. Coordinated responsible disclosure 
                  with vendors. CVE-2023-XXXX assigned. Research published at Black Hat USA 2023.
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2022</span>
              <div className="timeline-content">
                <div className="timeline-title">Enterprise SOC Transformation</div>
                <div className="timeline-description">
                  Led complete SOC modernization for 10,000+ employee organization. Reduced MTTR by 75% and false positives by 60%. 
                  Implemented SOAR playbooks and threat intelligence integration.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section id="contact" className="connect-section">
          <h2 className="section-title glitch-text" data-text="Let's Connect">Let's Connect</h2>
          <div className="section-underline">===============</div>
          
          <div className="social-links">
            <a href="https://github.com/Cyberninja30" target="_blank" rel="noopener noreferrer">Github</a>
            <span style={{color: 'var(--terminal-muted)'}}>·</span>
            <a href="https://x.com/CyberXNinja_30" target="_blank" rel="noopener noreferrer">Twitter</a>
            <span style={{color: 'var(--terminal-muted)'}}>·</span>
            <a href="https://www.linkedin.com/in/moinak-niyogi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span style={{color: 'var(--terminal-muted)'}}>·</span>
            <a href="https://medium.com/@Moinak_mnx" target="_blank" rel="noopener noreferrer">Medium</a>
            <span style={{color: 'var(--terminal-muted)'}}>·</span>
            <a href="mailto:moinak@albussec.com">Email</a>
            <span style={{color: 'var(--terminal-muted)'}}>·</span>
          </div>
          
        

          <div style={{marginTop: '30px', color: 'var(--terminal-muted)', fontSize: '0.9rem'}}>
            <p>PGP Key: 4A8B 9C2D 1E3F 7G8H 5I6J 0K1L 2M3N 4O5P</p>
            <p>All communications encrypted end-to-end</p>
          </div>
        </section>

        {/* Terminal Cursor */}
        
      </div>
    </>
  );
}

export default App;
