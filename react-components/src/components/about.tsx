import React from 'react';
import Header from './header';

function AboutPage() {
  return (
    <>
      <Header currentPage="About Us" />
      <div className="wrapper">
        <h1>About Us</h1>
        <p>
          At React, we are passionate about building robust, scalable, and maintainable web
          applications. Our team consists of experienced developers who are deeply familiar with
          React and its ecosystem. We have worked on a wide range of projects, from small startups
          to large enterprises. Our goal is to help our clients deliver high-quality software that
          meets their business needs. Thank you for considering React for your next project.
        </p>
      </div>
    </>
  );
}

export default AboutPage;
