import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Jeffrey Xu</h2>
        <p><a href="mailto:jeffreyxu@college.harvard.edu">jeffreyxu@college.harvard.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jeffrey. I&apos;m currently studying
        <a href="https://handbook.fas.harvard.edu/book/computer-science"> CS and Statistics at Harvard</a>.
        My main interests include natural language processing and full-stack development, and I have
        internship experience working as a Data Science Intern ThinkCerca. I&apos;m
        also interested in quantitative finance and trading.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jeffrey Xu.</p>
    </section>
  </section>
);

export default SideBar;
