import { useState, useEffect } from 'react';
import './ModelShowcaseSection.css';

// Load high-res images and thumbnails
const highResModules = import.meta.glob('../../assets/P-*.{jpg,jpeg}', { eager: true });
const thumbnailModules = import.meta.glob('../../assets/thumbnails/P-*.{jpg,jpeg}', { eager: true });

// Helper function to get image URLs
const getImageUrls = (imageNumber) => {
  const paddedNumber = String(imageNumber).padStart(2, '0');

  // Find high-res image
  const highResKey = Object.keys(highResModules).find(key =>
    key.includes(`P-${paddedNumber}.jpg`) || key.includes(`P-${paddedNumber}.jpeg`)
  );

  // Find thumbnail
  const thumbKey = Object.keys(thumbnailModules).find(key =>
    key.includes(`P-${paddedNumber}.jpg`) || key.includes(`P-${paddedNumber}.jpeg`)
  );

  return {
    src: highResKey ? highResModules[highResKey].default : null,
    thumb: thumbKey ? thumbnailModules[thumbKey].default : (highResKey ? highResModules[highResKey].default : null)
  };
};

// Define showcase projects with image numbers
const showcaseProjects = [
  {
    id: '01',
    title: 'Editorial Showcase',
    photographer: 'Arvin Coloma',
    date: 'May 2025',
    imageNumbers: [27, 29]
  },
  {
    id: '02',
    title: 'Melbourne Fashion Week',
    subtitle: "Maker's Lane Showcase",
    date: 'October 2025',
    imageNumbers: [44, 45, 46, 47]
  },
  {
    id: '03',
    title: '33Animewear',
    subtitle: 'Winter/Spring Collection',
    date: 'August 2025',
    imageNumbers: [42]
  },
  {
    id: '04',
    title: "L'Oreal Colour and Style Trophy",
    photographer: 'Styled by Nikki Reponia',
    date: 'July 2025',
    imageNumbers: [21]
  },
  {
    id: '05',
    title: 'Arnel Arce Photography',
    date: 'January 2025',
    imageNumbers: [23, 10]
  }
];

const ModelShowcaseSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="model-showcase-section">
      <div className="showcase-container">
        {/* Header */}
        <div className="showcase-header">
          <h2 className="showcase-title">MODEL PORTFOLIO</h2>
          <p className="showcase-subtitle">
            I am a model who specialises in editorial and commercial shoots.
          </p>
          <p className="showcase-description">
            I enjoy a focus on shape and emotion through posing, and love experimenting
            with lighting to bring life to photos.
          </p>
        </div>

        {/* Philosophy Quote */}
        <div className="showcase-quote-section">
          <blockquote className="showcase-quote">
            "I want to give every photo a story, a slice of life in a split second."
          </blockquote>
          <cite className="showcase-quote-author">— Ebony March</cite>
        </div>

        {/* Projects Grid */}
        <div className="showcase-projects">
          {showcaseProjects.map((project) => {
            // Load images for this project
            const projectImages = project.imageNumbers.map(num => ({
              ...getImageUrls(num),
              alt: `${project.title} - Photo ${num}`
            }));

            return (
              <div key={project.id} className="showcase-project">
                <div className="project-images">
                  {projectImages.map((image, idx) => (
                    <div
                      key={idx}
                      className="project-image-wrapper"
                      onClick={() => setSelectedProject({ images: projectImages, imageIndex: idx })}
                    >
                      <img
                        src={image.thumb}
                        alt={image.alt}
                        className="project-image"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  {project.subtitle && (
                    <p className="project-subtitle">{project.subtitle}</p>
                  )}
                  <div className="project-meta">
                    {project.photographer && (
                      <span className="project-photographer">{project.photographer}</span>
                    )}
                    <span className="project-date">{project.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* About Section */}
        <div className="showcase-about">
          <h3 className="about-title">About Me</h3>
          <div className="about-content">
            <p>
              I'm a professional fashion and editorial model with a passion for bringing
              creative visions to life. With years of experience in the modeling industry, I've had
              the privilege of working with talented photographers, designers, and brands across
              Australia and internationally.
            </p>
            <p>
              My approach to modeling is rooted in versatility and professionalism. Whether
              it's high fashion runway shows, commercial brand campaigns, or editorial photo shoots,
              I bring dedication, creativity, and authenticity to every project. I specialize in
              bringing the designer's vision to life while adding my own unique energy to each shot.
            </p>
            <p>
              Based in Australia, I'm available for fashion modeling assignments, editorial work,
              commercial campaigns, and creative collaborations worldwide. My experience spans
              runway modeling, print campaigns, digital content creation, and brand partnerships.
            </p>
          </div>
        </div>
      </div>

      {/* Modal for full-size images */}
      {selectedProject && selectedProject.images && selectedProject.images[selectedProject.imageIndex] && (
        <div
          className="showcase-modal"
          onClick={() => setSelectedProject(null)}
        >
          <button className="modal-close" onClick={() => setSelectedProject(null)}>
            &times;
          </button>
          <img
            src={selectedProject.images[selectedProject.imageIndex].src}
            alt={selectedProject.images[selectedProject.imageIndex].alt}
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default ModelShowcaseSection;
