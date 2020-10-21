import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Project from './components/views/Project';
import CV from './components/views/CV';
import projects from './components/projects.json';

function App() {
  const jumbo = (
    <div className="jumbo">
      <h1 className="mainTitle">Lorem ipsum dolor sit amet consectetur adipisicing & elit.</h1>
      <div className="grid">
        <div className="jumboDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veritatis illo quisquam sit praesentium, tempora
          quos doloribus fugit reiciendis. Animi facilis ipsum reprehenderit temporibus! Beatae sequi eos odit id rerum
          minus pariatur. Cum consectetur eum corporis tenetur ab culpa ratione?
        </div>
        <div className="jumboDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quam impedit ad, illum a in, delectus sunt
          pariatur vel minus similique dolorem dolor error! Veniam rem corrupti voluptas laudantium quidem?
        </div>
      </div>
    </div>
  );

  const services = (
    <div className="services">
      <h1 className="mainTitle">Services</h1>
      <div className="grid">
        <div>
          <h2>Lorem, ipsum.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum consequatur veniam odio unde praesentium
            natus, error magni tempore repellat est amet, atque et ipsam at iste. Ex.
          </p>
        </div>
        <div>
          <h2>Lorem, ipsum.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae magni molestiae quae quas temporibus
            voluptatem beatae voluptatibus sunt mollitia. Vel incidunt inventore illum blanditiis et a!
          </p>
        </div>
        <div className="gridNewLine">
          <h2>Lorem, ipsum.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat aliquid debitis sed maxime.
            Quisquam soluta maiores debitis laborum velit rem, mollitia animi culpa odio ut explicabo.
          </p>
        </div>
        <div>
          <h2>Lorem, ipsum.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi obcaecati in accusantium earum! Eos magnam
            quisquam iure esse eum vel ipsa, excepturi laudantium, delectus autem a possimus.
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
          <Route path="/cv">
            <CV />
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
