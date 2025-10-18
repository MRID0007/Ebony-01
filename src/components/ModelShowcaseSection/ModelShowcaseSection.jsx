import { useState } from 'react';
import './ModelShowcaseSection.css';

// Import showcase images from the portfolio
const showcaseProjects = [
  {
    id: '01',
    title: 'Editorial Showcase',
    photographer: 'Arvin Coloma',
    date: 'May 2025',
    images: [
      { src: '/assets/P-01.jpg', alt: 'Editorial work' },
      { src: '/assets/P-08.jpg', alt: 'Editorial work' }
    ]
  },
  {
    id: '02',
    title: 'Melbourne Fashion Week',
    subtitle: "Maker's Lane Showcase",
    date: 'October 2025',
    images: [
      { src: '/assets/P-44.jpg', alt: 'Melbourne Fashion Week' },
      { src: '/assets/P-45.jpg', alt: 'Melbourne Fashion Week' }
    ]
  },
  {
    id: '03',
    title: 'Commercial Work',
    photographer: '33Animewear',
    date: 'August 2025',
    images: [
      { src: '/assets/P-27.jpg', alt: '33Animewear collection' },
      { src: '/assets/P-26.jpg', alt: '33Animewear collection' }
    ]
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
            "I WANT TO GIVE EVERY PHOTO A STORY, A SLICE OF LIFE IN A SPLIT SECOND."
          </blockquote>
          <cite className="showcase-quote-author">— Ebony March</cite>
        </div>

        {/* Projects Grid */}
        <div className="showcase-projects">
          {showcaseProjects.map((project) => (
            <div key={project.id} className="showcase-project">
              <div className="project-number">{project.id}</div>

              <div className="project-images">
                {project.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="project-image-wrapper"
                    onClick={() => setSelectedProject({ ...project, imageIndex: idx })}
                  >
                    <img
                      src={image.src}
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
          ))}
        </div>

        {/* About Section */}
        <div className="showcase-about">
          <div className="about-number">01</div>
          <h3 className="about-title">about me</h3>
          <div className="about-content">
            <p>
              Modeling is an art form I deeply love. I used to think it was just about
              being in front of the camera, but it's also about you: your body, how you
              present yourself, and whom you identify with.
            </p>
            <p>
              Under different lights, lenses and creative direction, modeling gives me
              a chance to become a different person, one shutter click at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Modal for full-size images */}
      {selectedProject && (
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
