import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Projects = () => (
  <Main
    title="Projects and Work"
    description="Learn about Jeffrey Xu's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>Checkout my <a href="https://github.com/jeffx228"> Github</a>! </p>
          <p>It&apos;s a collection of my individual projects, classwork, and clubwork.</p>
        </div>
      </header>
    </article>
  </Main>
);

export default Projects;
