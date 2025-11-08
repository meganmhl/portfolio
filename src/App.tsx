import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About Me' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigateToProjects={() => setActiveTab('projects')} />;
      case 'projects':
        return <Projects />;
      case 'about':
        return <AboutMe />;
      default:
        return <Home onNavigateToProjects={() => setActiveTab('projects')} />;
    }
  };

  return (
    <div className="App">
      <nav className="navigation">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + tabs.indexOf(tab) * 0.1 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </nav>

      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
