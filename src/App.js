import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Project from './components/views/Project';
import projects from './components/projects.json';

function App() {
  const jumbo = (
    <div className="jumbo fade-in">
      <h1 className="mainTitle">On the pursuit to impactful development & design.</h1>
      <div className="grid">
        <div className="jumboDesc">
          It makes me proud to be able to create beautiful code. Whether it be a passion project or commisioned project.
          With technology constantly changing, I enjoy learning better ways to improve on my existing knowledge on
          UI/UX, web development. Outside of web development, I enjoy tinkering with computers, cars, motorcycles.
          Ocasionally, I'll tour around America.
        </div>
        <div className="jumboDesc">
          Well I wouldn't be a very good developer if I hadn't made my own site! If you would like to see some of my
          projects, feel free to take a look at my portfolio, or get in touch.
        </div>
      </div>
    </div>
  );

  const services = (
    <div className="services fade-in">
      <h1 className="mainTitle">What I Do</h1>
      <div className="grid">
        <div>
          <h2>Web Design</h2>
          <p>
            With the latest technology and standards I help to build personally tailored web application that will work
            across all browsers while having a quality presence.
          </p>
        </div>
        <div>
          <h2>Web Development</h2>
          <p>
            Currently enjoy coding with <code>ReactJS</code>. Specializing in front-end development, I hand-code my
            applications using <code>JS</code>, <code>HTML5</code>, <code>CSS3</code> <code>Git</code>,{' '}
            <code>GitHub</code>. Other projects have included <code>NodeJS</code>, <code>ExpressJS</code>,{' '}
            <code>MongoDB</code>.
          </p>
        </div>
        <div className="gridNewLine">
          <h2>Responsive Design</h2>
          <p>
            With the latest standards in <code>ReactJS</code> and <code>CSS3</code>, I'm able to create applications
            that are properly responsive regardless of browser size to showcase the best features.
          </p>
        </div>
        <div>
          <h2>UI/UX Design</h2>
          <p>
            Creating a seemless user experience is something I would spend most of my time with. Even down to the
            smallest transitions.
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <Router>
      <div className="App container">
        <Header />
        <Switch>
          <Route exact path="/">
            {jumbo}
            <Projects />
            {services}
          </Route>
          {projects.map((item) => (
            <Route {...item.routeProps} key={item.name}>
              <Project {...item} />
            </Route>
          ))}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
