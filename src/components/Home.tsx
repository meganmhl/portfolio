import React, { useState, useEffect, useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import AppDev from "./data/images/computer-program-coding-screen.jpg";
import Mlai from "./data/images/ai-technology-brain-background-digital-transformation-concept.jpg";
import Research from "./data/images/education-concept-books-laptop-library.jpg";
import Innovation from "./data/images/closeup-sticky-note-paper.jpg"

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  shouldStart?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 50, 
  delay = 0,
  className = "",
  shouldStart = true
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!shouldStart) return;
    
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay, shouldStart]);

  useEffect(() => {
    if (!isStarted || currentIndex >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, isStarted]);

  const isTyping = currentIndex < text.length;

  return (
    <span className={className}>
      {displayedText}
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          style={{ display: "inline-block", marginLeft: "2px" }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};

interface ScrollSectionProps {
  title: string;
  description: string | string[];
  image: string;
  index: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const imageVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
    scale: 0.8,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: 0.2,
    },
  },
};

const ScrollSection: React.FC<ScrollSectionProps> = ({ title, description, image, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  return (
    <motion.section
      ref={ref}
      className={`scroll-section ${index % 2 === 0 ? 'left-text' : 'right-text'}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.3, once: false }}
    >
      <motion.div
        className="scroll-content"
        variants={cardVariants}
      >
        <h2 className="scroll-title">
          <TypewriterText 
            text={title} 
            speed={50}
            delay={300}
            className="scroll-title-typewriter"
            shouldStart={isInView}
          />
        </h2>
        {Array.isArray(description) ? (
          <ul className="scroll-description-list">
            {description.map((item, idx) => (
              <li key={idx} className="scroll-description-item">
                <TypewriterText 
                  text={item} 
                  speed={30}
                  delay={800 + (idx * 200)}
                  className="scroll-description-typewriter"
                  shouldStart={isInView}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="scroll-description">
            <TypewriterText 
              text={description} 
              speed={30}
              delay={800}
              className="scroll-description-typewriter"
              shouldStart={isInView}
            />
          </p>
        )}
      </motion.div>
      <motion.div
        className="scroll-image-wrapper"
        variants={imageVariants}
      >
        <img
          src={image}
          alt={title}
          className="scroll-image"
        />
      </motion.div>
    </motion.section>
  );
};

const WorkOnSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <motion.div
      ref={ref}
      className="work-on-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="work-on-title">
        <TypewriterText 
          text="I work on..." 
          speed={60}
          delay={300}
          className="work-on-typewriter"
          shouldStart={isInView}
        />
      </h2>
    </motion.div>
  );
};

interface HomeProps {
  onNavigateToProjects?: () => void;
}

const Home: React.FC<HomeProps> = ({ onNavigateToProjects }) => {
  const scrollSections = [
    {
      title: "Application Development",
      description: [
        "COPD management app for patient self-monitoring",
        "Scalable platform enabling communication between doctors and patients",
        "Contextual English vocabulary learning app powered by GenAI"
      ],
      image: AppDev
    },
    {
      title: "Machine Learning & AI",
      description: [
        "Developed reinforcement learning agents for solving gaming problems",
        "Implemented neural information retrieval models to rank web passages and evaluate performance",
        "Applied supervised learning classification models to identify Drosophila species",
        "Evaluated and improved the readability of Chinese insurance documentation"
      ],
      image: Mlai
    },
    {
      title: "Academic Research",
      description: [
        "Studied peer-to-peer energy sharing systems in Australia",
        "Evaluated security and privacy disclosures in emerging applications"
      ],
      image: Research
    },
    {
      title: "Innovation & Entrepreneurship",
      description: [
        "Currently developing a startup focused on contextual language learning for Australian immigrants",
        "Joined multiple case competitions and hackathons with award-winning projects"
      ],
      image: Innovation
    }
  ];

  return (
    <div className="home">
      <motion.div
        className="welcome-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="greeting-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <TypewriterText 
            text="Hello, this is" 
            speed={80}
            delay={500}
            className="greeting-typewriter"
          />
        </motion.p>

        <motion.div
          className="name-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <svg
            className="name-svg"
            viewBox="-5 0 450 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* M */}
            <motion.path
              d="M 24.6 71.6 L 24.6 71.2 Q 27 65 30.25 58.95 Q 33.5 52.9 36.6 47 Q 37.9 44.5 40.05 40.65 Q 42.2 36.8 44.65 32.2 Q 47.1 27.6 49.25 23 Q 51.4 18.4 52.75 14.45 
                Q 54.1 10.5 54.1 7.9 Q 54.1 4.9 52.2 3.6 Q 50.3 2.3 47 2.3 Q 43.9 2.3 40.15 3.2 Q 36.4 4.1 32.85 5.45 Q 29.3 6.8 26.6 8.2 Q 22.9 10 18.8 13.05 Q 14.7 16.1 11.1 19.85 
                Q 7.5 23.6 5.25 27.7 Q 3 31.8 3 35.8 Q 3 38.8 4.8 40.7 Q 6.6 42.6 10.3 42.6 Q 12.7 42.6 14.25 41.8 Q 15.8 41 16.5 41 Q 17.2 41 17.7 41.5 Q 18.2 42 18.2 42.6 
                Q 18.2 43.5 16.6 44.15 Q 15 44.8 13.1 45.1 Q 11.2 45.4 10.4 45.4 Q 5.2 45.4 2.6 42.65 Q 0 39.9 0 35.6 Q 0 32.7 1 29.7 Q 2 26.7 3.7 24.2 Q 6.1 20.7 9.75 17.2 
                Q 13.4 13.7 17.65 10.7 Q 21.9 7.7 25.8 5.7 Q 30.2 3.4 36.15 1.7 Q 42.1 0 47.3 0 Q 51.5 0 54.45 1.65 Q 57.4 3.3 57.4 7.4 Q 57.4 10 56.25 13.65 Q 55.1 17.3 53.35 21.25 
                Q 51.6 25.2 49.85 28.75 Q 48.1 32.3 46.8 34.7 L 47.3 34.9 Q 48.5 33.4 50.65 30.8 Q 52.8 28.2 55.55 25.2 Q 58.3 22.2 61.3 19.55 Q 64.3 16.9 67.15 15.2 Q 70 13.5 72.3 13.5 
                Q 75.2 13.5 76.25 15.6 Q 77.3 17.7 77.3 19.8 Q 77.3 20.8 77.1 21.8 Q 76.9 22.8 76.7 23.9 Q 76.3 25.9 75.55 27.9 Q 74.8 29.9 74.2 31.9 L 68.8 48.2 L 69.3 48.4 Q 73 42.9 77.85 36.5 
                Q 82.7 30.1 88.1 24 Q 93.5 17.9 98.5 13.5 Q 100.3 11.8 102.75 10.45 Q 105.2 9.1 108 9.1 Q 110 9.1 111.3 10.05 Q 112.6 11 112.6 12.8 Q 112.6 13.8 112.15 14.8 
                Q 111.7 15.8 111.1 16.7 Q 106.4 23.6 102.25 31.75 Q 98.1 39.9 95.05 48.4 Q 92 56.9 90.4 65 Q 90.1 66.4 89.9 67.9 Q 89.7 69.4 89.7 70.8 Q 89.7 73.1 90.25 74.2 
                Q 90.8 75.3 91.55 75.8 Q 92.3 76.3 92.85 76.65 Q 93.4 77 93.4 77.9 Q 93.4 79.2 92.1 79.2 Q 91.6 79.2 91.3 79.1 Q 88.3 77.9 87.35 76 Q 86.4 74.1 86.4 71.3 Q 86.4 69.6 86.6 67.9 
                Q 86.8 66.2 87.1 64.5 Q 89.3 51.4 94.9 38.9 Q 100.5 26.4 108.3 15.2 Q 108.8 14.5 108.8 13.7 Q 108.8 13 108.25 12.7 Q 107.7 12.4 106.9 12.4 Q 105.2 12.4 103.55 13.4 
                Q 101.9 14.4 100.8 15.4 Q 95.8 19.7 90.95 25.45 Q 86.1 31.2 82.1 36.2 Q 78.7 40.7 75.4 45.3 Q 72.1 49.9 69 54.6 Q 67.7 56.7 66.35 59.05 Q 65 61.4 63.6 63.4 Q 63.1 64.4 62 64.4 
                Q 61.3 64.4 60.8 63.95 Q 60.3 63.5 60.3 62.9 Q 60.3 62.7 60.35 62.6 Q 60.4 62.5 60.4 62.4 Q 63.8 52.6 67.05 42.8 Q 70.3 33 73.4 23.2 Q 73.7 22.3 73.9 21.4 Q 74.1 20.5 74.1 19.6 
                Q 74.1 18.5 73.65 17.6 Q 73.2 16.7 71.8 16.7 Q 70.6 16.7 69.45 17.3 Q 68.3 17.9 67.4 18.5 Q 65.8 19.6 64.3 20.95 Q 62.8 22.3 61.4 23.6 Q 55.9 28.9 50.95 34.75 Q 46 40.6 42.2 47 
                Q 38.6 53.3 34.95 59.6 Q 31.3 65.9 28 72.4 Q 27.3 72.7 26.5 72.7 Q 26 72.7 25.3 72.5 Q 24.6 72.3 24.6 71.6 Z"
              fill="#ffffff"
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1 }}
              transition={{
                pathLength: { duration: 1, delay: 1.5, ease: "easeInOut" },
                fillOpacity: { duration: 0.5, delay: 2.5, ease: "easeInOut" },
              }}
              transform="translate(5,5)"
            />

            {/* e */}
            <motion.path
              d="M 9.3 34.8 Q 4.1 34.8 2.05 31.75 Q 0 28.7 0 24.6 Q 0 21.6 1.5 17.45 Q 3 13.3 5.65 9.3 Q 8.3 5.3 11.8 2.65 Q 15.3 0 19.3 0 Q 21.9 0 23.45 1.45 Q 25 2.9 25 5.1 
                Q 25 9.3 22.3 13.2 Q 19.6 17.1 15.3 19.6 Q 11 22.1 6.1 22.1 Q 5.5 22.1 4.9 22.05 Q 4.3 22 3.7 21.9 Q 3.4 23.2 3.4 24.9 Q 3.4 27.5 4.65 29.7 Q 5.9 31.9 9.5 31.9 
                Q 12.5 31.9 15.3 30.4 Q 18.1 28.9 20 27 Q 21.9 25.1 23.2 23.6 Q 24.5 22.1 25.9 20.15 Q 27.3 18.2 29.4 15 Q 29.8 14.3 30.6 14.3 Q 32 14.3 32 15.8 Q 32 16.3 31.8 16.6 
                Q 29.1 21.2 25.8 25.35 Q 22.5 29.5 18.45 32.15 Q 14.4 34.8 9.3 34.8 Z M 6.8 19 Q 10.6 19 13.95 16.95 Q 17.3 14.9 19.45 11.8 Q 21.6 8.7 21.6 5.5 Q 21.6 4.4 21.05 3.7 
                Q 20.5 3 19.2 3 Q 16.6 3 14.2 4.75 Q 11.8 6.5 9.85 9.15 Q 7.9 11.8 6.55 14.4 Q 5.2 17 4.6 18.8 Q 5.1 18.9 5.65 18.95 Q 6.2 19 6.8 19 Z"
              fill="#ffffff"
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinecap="butt"
              strokeLinejoin="round"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1 }}
              transition={{
                pathLength: { duration: 1, delay: 2, ease: "easeInOut" },
                fillOpacity: { duration: 0.5, delay: 3, ease: "easeInOut" },
              }}
              transform="translate(105,40)"
            />

            {/* g */}
            <motion.path
              d="M 7.353 72.7 Q 4.453 72.7 2.503 71.35 Q 0.553 70 0.053 67.2 Q -0.347 64.3 2.253 61.1 Q 4.853 57.9 8.753 54.8 Q 11.853 52.3 15.253 50.15 Q 18.653 48 21.603 46.25 
              Q 24.553 44.5 26.353 43.5 Q 30.153 41.2 34.153 38.75 Q 38.153 36.3 41.853 34 Q 43.053 30.4 43.403 26.75 Q 43.753 23.1 43.653 19.6 Q 42.553 21.3 40.503 24.1 Q 38.453 26.9 35.703 29.7 
              Q 32.953 32.5 29.753 34.45 Q 26.553 36.4 23.153 36.4 Q 18.853 36.4 17.253 33.9 Q 15.653 31.4 15.653 28 Q 15.653 25 16.503 21.9 Q 17.353 18.8 18.353 16.9 Q 20.353 12.8 23.403 8.9 
              Q 26.453 5 30.303 2.5 Q 34.153 0 38.153 0 Q 41.053 0 42.403 1.7 Q 43.753 3.4 43.753 5.6 Q 43.753 6.3 43.353 7.8 Q 42.953 9.3 42.303 10.9 Q 41.653 12.5 40.753 13.65 
              Q 39.853 14.8 38.753 14.8 Q 38.053 14.8 37.553 14.35 Q 37.053 13.9 37.053 13.4 Q 37.053 13.1 37.853 12 Q 38.653 10.9 39.453 9.3 Q 40.253 7.7 40.253 5.9 Q 40.253 4.8 39.703 3.9 
              Q 39.153 3 37.653 3 Q 34.553 3 31.503 5.2 Q 28.453 7.4 25.953 10.7 Q 23.453 14 21.753 17.5 Q 21.053 19 20.153 22 Q 19.253 25 19.253 27.8 Q 19.253 30.2 20.253 31.85 
              Q 21.253 33.5 23.753 33.5 Q 25.953 33.5 28.503 31.8 Q 31.053 30.1 33.653 27.45 Q 36.253 24.8 38.403 21.95 Q 40.553 19.1 41.903 16.8 Q 43.253 14.5 43.353 13.5 Q 43.453 13 43.953 12.4 
              Q 44.453 11.8 45.153 11.8 Q 45.953 11.8 46.253 12.3 Q 46.553 12.8 46.653 13.3 Q 47.353 16 47.353 19.6 Q 47.353 22.5 47.003 25.5 Q 46.653 28.5 46.253 30.9 Q 49.653 28.1 52.503 24.15 
              Q 55.353 20.2 57.653 16.7 Q 58.153 15.9 58.853 15.9 Q 59.353 15.9 59.803 16.3 Q 60.253 16.7 60.253 17.3 Q 60.253 17.7 59.953 18.3 Q 56.853 23.3 53.403 27.85 Q 49.953 32.4 44.653 35.9 
              Q 41.853 43.9 37.003 51.05 Q 32.153 58.2 26.303 63.45 Q 20.453 68.7 14.553 71.1 Q 12.653 71.9 10.803 72.3 Q 8.953 72.7 7.353 72.7 Z M 7.353 70.2 Q 8.553 70.2 9.953 69.8 
              Q 11.353 69.4 12.853 68.8 Q 18.853 66.1 23.803 61.75 Q 28.753 57.4 32.503 52.1 Q 36.253 46.8 38.553 41.5 Q 38.753 40.9 39.053 40.3 L 39.653 39.1 Q 36.753 40.7 34.053 42.55 
              Q 31.353 44.4 28.453 46 Q 26.853 46.9 23.753 48.7 Q 20.653 50.5 17.053 52.75 Q 13.453 55 10.353 57.5 Q 7.353 59.8 5.353 62.1 Q 3.353 64.4 3.353 66.4 Q 3.353 68.4 4.503 69.3 
              Q 5.653 70.2 7.353 70.2 Z"
              fill="#ffffff"
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinecap="butt"
              strokeLinejoin="round"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1 }}
              transition={{
                pathLength: { duration: 1, delay: 2.5, ease: "easeInOut" },
                fillOpacity: { duration: 0.5, delay: 3.5, ease: "easeInOut" },
              }}
              transform="translate(115,40)"
            />

            {/* a */}
            <motion.path
              d="M 21.1 25 L 20.7 24.7 Q 19.8 25.8 18 27.5 Q 16.2 29.2 14 30.95 Q 11.8 32.7 9.65 33.9 Q 7.5 35.1 5.8 35.1 Q 2.5 35.1 1.25 33.35 Q 0 31.6 0 29.1 Q 0 26.7 0.8 24.1 
                Q 1.6 21.5 2.55 19.25 Q 3.5 17 4.1 15.9 Q 5.9 12.8 8.15 9.9 Q 10.4 7 13 4.8 Q 15.6 2.5 18.35 1.25 Q 21.1 0 23.9 0 Q 28.7 0 30.7 2.55 Q 32.7 5.1 32.7 8 Q 32.7 9 32.4 10.1 
                Q 32 11.6 31.45 12.7 Q 30.9 13.8 30.1 13.8 Q 29.4 13.8 28.8 13.1 Q 28.2 12.4 28.4 11.7 Q 28.6 11 28.95 10.3 Q 29.3 9.6 29.4 8.9 Q 29.5 8.4 29.55 8 Q 29.6 7.6 29.6 7.2 
                Q 29.6 4.5 27.85 3.45 Q 26.1 2.4 24.1 2.4 Q 21.8 2.4 19.35 3.7 Q 16.9 5 15.1 6.7 Q 12.9 8.9 10.7 11.8 Q 8.5 14.7 6.9 17.7 Q 6.7 18.2 5.85 20.1 Q 5 22 4.25 24.35 
                Q 3.5 26.7 3.5 28.7 Q 3.5 30.1 4.15 31.1 Q 4.8 32.1 6.4 32.1 Q 8.1 32.1 10.35 30.5 Q 12.6 28.9 14.95 26.55 Q 17.3 24.2 19.2 22 Q 21.1 19.8 22 18.6 Q 22.6 17.8 23.15 16.85 
                Q 23.7 15.9 24.3 15.1 Q 24.6 14.7 25.5 14.7 Q 26.3 14.7 27.15 15.15 Q 28 15.6 27.8 16.4 Q 27.4 17.1 26.35 19.45 Q 25.3 21.8 24.4 24.55 Q 23.5 27.3 23.5 29.4 Q 23.5 32 25.1 32.4 
                Q 26.2 32.6 27.45 31.6 Q 28.7 30.6 29.75 29.3 Q 30.8 28 31.3 27.4 Q 33.4 24.6 35.25 21.65 Q 37.1 18.7 39 16.1 Q 39.6 15.3 40.4 15.3 Q 41.8 15.3 41.8 16.8 Q 41.8 17.3 40.5 19.35 
                Q 39.2 21.4 37.35 24 Q 35.5 26.6 33.9 28.7 Q 32.3 30.8 30.3 32.8 Q 28.3 34.8 25.2 34.8 Q 22.3 34.8 21.25 33.5 Q 20.2 32.2 20.2 30.6 Q 20.2 29.2 20.5 27.65 Q 20.8 26.1 21.1 25 Z"
              fill="#ffffff"
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinecap="butt"
              strokeLinejoin="round"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1 }}
              transition={{
                pathLength: { duration: 1, delay: 3, ease: "easeInOut" },
                fillOpacity: { duration: 0.5, delay: 4, ease: "easeInOut" },
              }}
              transform="translate(170,40)"
            />

            {/* n */}
            <motion.path
              d="M 18.02 23.6 L 14.02 29.9 Q 13.52 30.7 13.12 31.55 Q 12.72 32.4 12.22 33.2 Q 11.62 34 10.72 34 Q 10.22 34 9.62 33.7 Q 9.02 33.4 9.02 32.9 Q 9.02 32.1 9.32 31.5 
              Q 10.42 29.1 12.17 25.6 Q 13.92 22.1 15.67 18.35 Q 17.42 14.6 18.67 11.3 Q 19.92 8 19.92 6 Q 19.92 5.4 19.67 4.85 Q 19.42 4.3 18.62 4.3 Q 17.42 4.3 16.27 5.3 
              Q 15.12 6.3 14.22 7.55 Q 13.32 8.8 12.72 9.6 Q 10.72 12.3 9.32 14.55 Q 7.92 16.8 6.47 18.95 Q 5.02 21.1 2.92 23.7 Q 2.62 24.1 2.27 24.35 Q 1.92 24.6 1.32 24.6 
              Q 0.72 24.6 0.27 24 Q -0.18 23.4 0.12 22.9 Q 2.32 19.4 4.42 16.25 Q 6.52 13.1 8.12 10.8 Q 9.72 8.5 10.32 7.7 Q 12.02 5.5 13.87 3.5 Q 15.72 1.5 18.92 1.5 Q 21.62 1.5 22.67 3 
              Q 23.72 4.5 23.72 6.5 Q 23.72 10.1 20.72 15.8 Q 24.42 11.9 28.67 8.7 Q 32.92 5.5 36.62 3.35 Q 40.32 1.2 42.22 0.7 Q 43.12 0.4 44.07 0.2 Q 45.02 0 45.82 0 Q 46.82 0 47.47 0.5 
              Q 48.12 1 48.12 2.4 Q 48.12 3.8 46.32 6.35 Q 44.52 8.9 41.97 12.15 Q 39.42 15.4 37.12 18.7 Q 34.82 22 33.82 24.9 Q 33.52 25.6 33.42 26.25 Q 33.32 26.9 33.32 27.4 
              Q 33.32 30.1 35.82 30.1 Q 37.42 30.1 39.82 28.5 Q 41.22 27.6 42.57 26.45 Q 43.92 25.3 44.62 24.4 Q 46.12 22.7 47.07 21.5 Q 48.02 20.3 48.97 18.85 Q 49.92 17.4 51.42 15.2 
              Q 51.72 14.7 52.02 14.5 Q 52.32 14.3 53.02 14.3 Q 54.12 14.3 54.12 15.7 Q 54.12 16.3 53.22 17.75 Q 52.32 19.2 51.07 20.95 Q 49.82 22.7 48.67 24.15 Q 47.52 25.6 47.02 26.2 
              Q 45.92 27.5 44.27 28.9 Q 42.62 30.3 40.92 31.3 Q 39.32 32.2 37.62 32.6 Q 35.92 33 34.32 33 Q 31.72 33 30.57 31.5 Q 29.42 30 29.42 28.3 Q 29.42 25.7 31.17 22.35 
              Q 32.92 19 35.37 15.65 Q 37.82 12.3 39.97 9.6 Q 42.12 6.9 42.92 5.7 Q 43.12 5.4 43.22 5.15 Q 43.32 4.9 43.32 4.7 Q 43.32 3.9 42.12 3.9 Q 41.52 3.9 40.72 4.2 Q 36.62 5.9 32.17 9.2 
              Q 27.72 12.5 23.97 16.35 Q 20.22 20.2 17.02 24.5 Z"
              fill="#ffffff"
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinecap="butt"
              strokeLinejoin="round"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1 }}
              transition={{
                pathLength: { duration: 1, delay: 3.5, ease: "easeInOut" },
                fillOpacity: { duration: 0.5, delay: 4.5, ease: "easeInOut" },
              }}
              transform="translate(205,40)"
            />

            {/* Space */}

            {/* N */}
            <motion.path
              d="M 91.1 11.1 L 90.9 11.1 Q 86.3 11.1 81.3 13.8 Q 76.3 16.5 71.35 20.85 Q 66.4 25.2 61.9 30.15 Q 57.4 35.1 53.75 39.75 Q 50.1 44.4 47.8 47.6 Q 46.2 49.8 44.9 52.05 
              Q 43.6 54.3 42.2 56.6 Q 40.3 60 38.3 63.5 Q 36.3 67 34.3 70.4 Q 33.5 72 32.6 73.5 Q 31.7 75 30.7 76.5 Q 30.6 76.7 30 77.05 Q 29.4 77.4 29.1 77.4 Q 28.5 77.4 28 76.95 
              Q 27.5 76.5 27.5 75.9 Q 27.5 75.7 27.55 75.6 Q 27.6 75.5 27.6 75.4 Q 30.2 69.8 33.3 64.25 Q 36.4 58.7 39.2 53.2 Q 44.4 43.1 48.65 32.75 Q 52.9 22.4 55 11.5 Q 55.1 11 55.15 10.45 
              Q 55.2 9.9 55.2 9.3 Q 55.2 6 53 4.6 Q 50.8 3.2 47.3 3.2 Q 44.4 3.2 40.75 4 Q 37.1 4.8 33.6 6.05 Q 30.1 7.3 27.5 8.7 Q 23.8 10.6 19.8 13.5 Q 15.8 16.4 12.35 19.7 Q 8.9 23 6.7 26.3 
              Q 5.3 28.5 4.4 31.2 Q 3.5 33.9 3.5 36.5 Q 3.5 39.6 5.15 41.4 Q 6.8 43.2 10.6 43.2 Q 13.3 43.2 14.85 42.2 Q 16.4 41.2 17.7 41.2 Q 19 41.2 19 42.3 Q 19 43.5 17.4 44.35 
              Q 15.8 45.2 13.8 45.65 Q 11.8 46.1 10.7 46.1 Q 5.6 46.1 2.8 43.45 Q 0 40.8 0 36.5 Q 0 33.5 1.1 30.4 Q 2.2 27.3 3.9 24.7 Q 6.2 21.3 9.95 17.85 Q 13.7 14.4 18 11.35 
              Q 22.3 8.3 26 6.3 Q 28.9 4.7 32.8 3.25 Q 36.7 1.8 40.75 0.9 Q 44.8 0 48.1 0 Q 53.1 0 55.9 2.2 Q 58.7 4.4 58.7 8.8 Q 58.7 11.7 57.75 15.8 Q 56.8 19.9 55.3 24.3 
              Q 53.8 28.7 52.25 32.7 Q 50.7 36.7 49.5 39.6 L 49.9 39.8 Q 52.2 37 55.75 33 Q 59.3 29 63.65 24.7 Q 68 20.4 72.8 16.7 Q 77.6 13 82.3 10.65 Q 87 8.3 91.3 8.3 Q 96.1 8.3 98.35 10.5 
              Q 100.6 12.7 100.6 16.8 Q 100.6 20.9 98.8 25.95 Q 97 31 94.55 35.85 Q 92.1 40.7 90 44.3 Q 86.2 50.9 82.75 57.6 Q 79.3 64.3 77 71.5 Q 76.5 73.1 76.05 74.7 Q 75.6 76.3 75.6 78 
              Q 75.6 79.8 76.2 80.3 Q 76.8 80.8 77.4 81 Q 78 81.2 78 82.1 Q 78 82.7 77.5 83.15 Q 77 83.6 76.3 83.6 Q 74.8 83.6 73.95 82.4 Q 73.1 81.2 72.8 79.65 Q 72.5 78.1 72.5 77.2 
              Q 72.5 75.5 72.85 73.9 Q 73.2 72.3 73.6 70.7 Q 75.9 63.3 79.45 56.45 Q 83 49.6 86.9 42.9 Q 88.8 39.6 91.05 35.05 Q 93.3 30.5 95 25.8 Q 96.7 21.1 96.7 17.4 Q 96.7 15 95.55 13.05 
              Q 94.4 11.1 90.1 11.1 Z"
              fill="#ffffff"
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinecap="butt"
              strokeLinejoin="round"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1 }}
              transition={{
                pathLength: { duration: 1, delay: 4.5, ease: "easeInOut" },
                fillOpacity: { duration: 0.5, delay: 5.5, ease: "easeInOut" },
              }}
              transform="translate(283,3)"
            />

            {/* g */}
            <motion.path
              d="M 7.353 72.7 Q 4.453 72.7 2.503 71.35 Q 0.553 70 0.053 67.2 Q -0.347 64.3 2.253 61.1 Q 4.853 57.9 8.753 54.8 Q 11.853 52.3 15.253 50.15 Q 18.653 48 21.603 46.25 
              Q 24.553 44.5 26.353 43.5 Q 30.153 41.2 34.153 38.75 Q 38.153 36.3 41.853 34 Q 43.053 30.4 43.403 26.75 Q 43.753 23.1 43.653 19.6 Q 42.553 21.3 40.503 24.1 
              Q 38.453 26.9 35.703 29.7 Q 32.953 32.5 29.753 34.45 Q 26.553 36.4 23.153 36.4 Q 18.853 36.4 17.253 33.9 Q 15.653 31.4 15.653 28 Q 15.653 25 16.503 21.9 Q 17.353 18.8 18.353 16.9 
              Q 20.353 12.8 23.403 8.9 Q 26.453 5 30.303 2.5 Q 34.153 0 38.153 0 Q 41.053 0 42.403 1.7 Q 43.753 3.4 43.753 5.6 Q 43.753 6.3 43.353 7.8 Q 42.953 9.3 42.303 10.9 
              Q 41.653 12.5 40.753 13.65 Q 39.853 14.8 38.753 14.8 Q 38.053 14.8 37.553 14.35 Q 37.053 13.9 37.053 13.4 Q 37.053 13.1 37.853 12 Q 38.653 10.9 39.453 9.3 Q 40.253 7.7 40.253 5.9 
              Q 40.253 4.8 39.703 3.9 Q 39.153 3 37.653 3 Q 34.553 3 31.503 5.2 Q 28.453 7.4 25.953 10.7 Q 23.453 14 21.753 17.5 Q 21.053 19 20.153 22 Q 19.253 25 19.253 27.8 
              Q 19.253 30.2 20.253 31.85 Q 21.253 33.5 23.753 33.5 Q 25.953 33.5 28.503 31.8 Q 31.053 30.1 33.653 27.45 Q 36.253 24.8 38.403 21.95 Q 40.553 19.1 41.903 16.8 
              Q 43.253 14.5 43.353 13.5 Q 43.453 13 43.953 12.4 Q 44.453 11.8 45.153 11.8 Q 45.953 11.8 46.253 12.3 Q 46.553 12.8 46.653 13.3 Q 47.353 16 47.353 19.6 Q 47.353 22.5 47.003 25.5 
              Q 46.653 28.5 46.253 30.9 Q 49.653 28.1 52.503 24.15 Q 55.353 20.2 57.653 16.7 Q 58.153 15.9 58.853 15.9 Q 59.353 15.9 59.803 16.3 Q 60.253 16.7 60.253 17.3 
              Q 60.253 17.7 59.953 18.3 Q 56.853 23.3 53.403 27.85 Q 49.953 32.4 44.653 35.9 Q 41.853 43.9 37.003 51.05 Q 32.153 58.2 26.303 63.45 Q 20.453 68.7 14.553 71.1 
              Q 12.653 71.9 10.803 72.3 Q 8.953 72.7 7.353 72.7 Z M 7.353 70.2 Q 8.553 70.2 9.953 69.8 Q 11.353 69.4 12.853 68.8 Q 18.853 66.1 23.803 61.75 Q 28.753 57.4 32.503 52.1 
              Q 36.253 46.8 38.553 41.5 Q 38.753 40.9 39.053 40.3 L 39.653 39.1 Q 36.753 40.7 34.053 42.55 Q 31.353 44.4 28.453 46 Q 26.853 46.9 23.753 48.7 Q 20.653 50.5 17.053 52.75 
              Q 13.453 55 10.353 57.5 Q 7.353 59.8 5.353 62.1 Q 3.353 64.4 3.353 66.4 Q 3.353 68.4 4.503 69.3 Q 5.653 70.2 7.353 70.2 Z"
              fill="#ffffff"
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinecap="butt"
              strokeLinejoin="round"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1 }}
              transition={{
                pathLength: { duration: 1, delay: 5, ease: "easeInOut" },
                fillOpacity: { duration: 0.5, delay: 6, ease: "easeInOut" },
              }}
              transform="translate(360,40)"
            />
          </svg>
        </motion.div>

        <motion.h2
          className="welcome-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 6.5 }}
        >
          <TypewriterText 
            text="Welcome to my page!" 
            speed={70}
            delay={6500}
            className="welcome-typewriter"
          />
        </motion.h2>

        <motion.div
          className="swipe-down-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 8.5 }}
        >
          <motion.p
            className="swipe-text"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Swipe down
          </motion.p>
          <motion.div
            className="swipe-arrow"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>

      {/* I work on section */}
      <WorkOnSection />

      {/* Scroll Triggered Sections */}
      <div className="scroll-sections">
        {scrollSections.map((section, index) => (
          <ScrollSection
            key={index}
            title={section.title}
            description={section.description}
            image={section.image}
            index={index}
          />
        ))}
      </div>

      {/* See all projects section */}
      <motion.div
        className="projects-cta-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="projects-cta-title">See all my projects</h2>
        <motion.button
          className="projects-cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (onNavigateToProjects) {
              onNavigateToProjects();
            }
          }}
        >
          View Projects
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
