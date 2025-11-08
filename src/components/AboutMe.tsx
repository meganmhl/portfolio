import React, { useState } from 'react';
import { motion } from 'framer-motion';
import profilePic from './data/images/propic.png';

const AboutMe = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const tags = [
    'FinTech & Banking',
    'Software Development',
    'Data Analytics',
    'AI & Machine Learning'
  ];

  return (
    <div className="about-me">
      <motion.div
        className="id-card-container"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`id-card-inner ${isFlipped ? 'flipped' : ''}`}>
          {/* Front of card */}
          <div className="id-card-front">
            <div className="id-card-content">
              <div className="id-card-photo">
                <img src={profilePic} alt="Megan Ng" />
              </div>
              
              <div className="id-card-info">
                <h2 className="id-card-name">Megan Ng</h2>
                
                <div className="id-card-location">
                  <span className="location-icon">📍</span>
                  <span>Brisbane, Australia</span>
                </div>

                <div className="id-card-tags">
                  {tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      className="id-card-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            <p className="flip-hint-front">Contact information →</p>
          </div>

          {/* Back of card */}
          <div className="id-card-back">
            <div className="id-card-back-content">
              <h2 className="connect-title">Connect</h2>
              <div className="connect-links-vertical">
                <a 
                  href="https://www.linkedin.com/in/megan-ng-nhl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="connect-link-back"
                >
                  <span className="connect-icon">
                    <img
                      src={require('./data/images/linkedin.png')}
                      alt="LinkedIn"
                      style={{ width: '1.4em', height: '1.4em', verticalAlign: 'middle', marginRight: 2 }}
                    />
                  </span>
                  <span>@megan-ng-nhl</span>
                </a>
                <a 
                  href="https://github.com/meganmhl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="connect-link-back"
                >
                  <span className="connect-icon">
                    <img
                      src={require('./data/images/github.png')}
                      alt="GitHub"
                      style={{ width: '1.4em', height: '1.4em', verticalAlign: 'middle', marginRight: 2 }}
                    />
                  </span>
                  <span>@meganmhl</span>
                </a>
                <a 
                  href="mailto:meganhoilingng@gmail.com" 
                  className="connect-link-back"
                >
                  <span className="connect-icon">
                    <img
                      src={require('./data/images/gmail.png')}
                      alt="Email"
                      style={{ width: '1.4em', height: '1.4em', verticalAlign: 'middle', marginRight: 2 }}
                    />
                  </span>
                  <span>meganhoilingng@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

        <motion.div
          className="description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>
            <span><b>I'</b>m</span> <span><b>a</b></span> <span><b>Comp</b>uter</span> <span><b>Scie</b>nce</span> <span><b>mast</b>er's</span> <span><b>grad</b>uate</span> <span><b>fr</b>om</span> <span><b>th</b>e</span> <span><b>Unive</b>rsity</span> <span><b>o</b>f</span> <span><b>Queens</b>land,</span> <span><b>passi</b>onate</span> <span><b>abo</b>ut</span> <span><b>buil</b>ding</span> <span><b>te</b>ch</span> <span><b>th</b>at</span> <span><b>mak</b>es</span> <span><b>a</b></span> <span><b>re</b>al</span> <span><b>impa</b>ct.</span> <span><b>M</b>y</span> <span><b>exper</b>ience</span> <span><b>spa</b>ns</span> <span><b>da</b>ta</span> <span><b>scie</b>nce,</span> <span><b>AI</b>,</span> <span><b>clo</b>ud</span> <span><b>develo</b>pment,</span> <span><b>soft</b>ware</span> <span><b>engine</b>ering,</span> <span><b>an</b>d</span> <span><b>cyberse</b>curity</span> <span><b>resea</b>rch.</span>
          </p>
          <p>
            <span><b>Wi</b>th</span> <span><b>a</b></span> <span><b>backg</b>round</span> <span><b>i</b>n</span> <span><b>FinT</b>ech</span> <span><b>an</b>d</span> <span><b>digi</b>tal</span> <span><b>bank</b>ing,</span> <span><b>I</b></span> <span><b>bri</b>ng</span> <span><b>bo</b>th</span> <span><b>a</b></span> <span><b>techn</b>ical</span> <span><b>mind</b>set</span> <span><b>an</b>d</span> <span><b>a</b></span> <span><b>busi</b>ness</span> <span><b>perspe</b>ctive</span> <span><b>t</b>o</span> <span><b>eve</b>ry</span> <span><b>proj</b>ect.</span> <span><b>I</b></span> <span><b>lo</b>ve</span> <span><b>solv</b>ing</span> <span><b>prob</b>lems</span> <span><b>wi</b>th</span> <span><b>Pyth</b>on,</span> <span><b>lear</b>ning</span> <span><b>ne</b>w</span> <span><b>thin</b>gs,</span> <span><b>an</b>d</span> <span><b>adap</b>ting</span> <span><b>i</b>n</span> <span><b>a</b></span> <span><b>fast-ch</b>anging</span> <span><b>wor</b>ld.</span>
          </p>
          <p>
            <span><b>Outs</b>ide</span> <span><b>o</b>f</span> <span><b>tec</b>h,</span> <span><b>I</b></span> <span><b>enj</b>oy</span> <span><b>runn</b>ing,</span> <span><b>play</b>ing</span> <span><b>th</b>e</span> <span><b>cel</b>lo,</span> <span><b>an</b>d</span> <span><b>volunt</b>eering</span> <span><b>—</b></span> <span><b>thi</b>ngs</span> <span><b>th</b>at</span> <span><b>ke</b>ep</span> <span><b>m</b>e</span> <span><b>curi</b>ous,</span> <span><b>groun</b>ded,</span> <span><b>an</b>d</span> <span><b>inspi</b>red.</span>
          </p>
        </motion.div>

    </div>
  );
};

export default AboutMe;
