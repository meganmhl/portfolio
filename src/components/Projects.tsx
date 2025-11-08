import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectData from './data/project_details.json';

// Import images
import copdCover from './data/images/copd-cover.jpg';
import autoproofCover from './data/images/autoproof-cover.jpg';
import pouchCover from './data/images/pouch-cover.png';
import vrappCover from './data/images/vrapp-cover.jpg';

// Import HTML content from TypeScript files
import copdHtml from './data/pages/copd';
import autoproofHtml from './data/pages/autoproof';
import pouchHtml from './data/pages/pouch';
import vrappHtml from './data/pages/vrapp';

interface Project {
  name: string;
  properties: string;
  tags: string[];
  technologies: string[];
  image: string;
  content: string;
  year: number;
}

// Image mapping
const imageMap: { [key: string]: string } = {
  '../data/images/copd-cover.png': copdCover,
  'images/autoproof-cover.png': autoproofCover,
  'images/pouch-cover.png': pouchCover,
  'images/vrapp-cover.jpg': vrappCover,
};

// HTML content mapping
const htmlContentMap: { [key: string]: string } = {
  'pages/copd.ts': copdHtml,
  'pages/autoproof.ts': autoproofHtml,
  'pages/pouch.ts': pouchHtml,
  'pages/vrapp.ts': vrappHtml,
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = projectData as Project[];

  // Get image path from mapping
  const getImagePath = (imagePath: string): string => {
    return imageMap[imagePath] || imagePath;
  };

  // Get HTML content for selected project
  const htmlContent = selectedProject 
    ? htmlContentMap[selectedProject.content] || '<p>Content not found.</p>'
    : '';

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      
      {/* Gallery View */}
      <AnimatePresence>
        {!selectedProject && (
          <motion.div
            className="projects-gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="gallery-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="project-image-wrapper">
                    <img
                      src={getImagePath(project.image)}
                      alt={project.name}
                      className="project-cover-image"
                    />
                  </div>
                  <div className="project-card-content">
                    <h3 className="project-card-title">{project.name}</h3>
                    <p className="project-card-properties">{project.properties}</p>
                    <div className="project-card-tags">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={`tag-${tagIndex}`} className="project-tag">{tag}</span>
                      ))}
                      {project.technologies.map((tech, techIndex) => (
                        <span key={`tech-${techIndex}`} className="project-technology">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.p
              className="projects-more-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: projects.length * 0.1 + 0.3 }}
            >
              More projects to be updated soon...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-detail-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseDetail}
          >
            <motion.div
              className="project-detail-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={handleCloseDetail}>
                ×
              </button>
              
              <div 
                className="project-detail-content"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
