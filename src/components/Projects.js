import React from 'react';

function Projects() {
  return (
    <div className="card" id="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <strong>Paiable</strong> (March 2020)
        <p>Implemented an MVP of a simple project organization tool with Ruby on Rails. Used RESTful principles, implemented Amazon S3 Storage and CarrierWave, and tested with RSpec and Capybara.</p>
        <a className="btn" href="https://paiable.herokuapp.com/">View Project</a>
      </div>
      <div className="project-item">
        <strong>Stay in Touch</strong> (February 2020)
        <p>Built a fully functional social media (Facebook) clone using Ruby on Rails. Delivered a set of software specifications, used RESTful principles, implemented Omniauth and Devise authorization, and tested with RSpec and Capybara.</p>
        <a className="btn" href="https://audmaru-stay-in-touch.herokuapp.com/">View Project</a>
      </div>
    </div>
  );
}

export default Projects;
