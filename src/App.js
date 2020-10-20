import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  const jumbo = (
    <div className="jumbo">
      <h1 className="mainTitle">Lorem ipsum dolor sit amet consectetur adipisicing & elit.</h1>
      <div className="homeGrid">
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
      <div className="homeGrid">
        <div>
          <h2>Web Development</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum consequatur veniam odio unde praesentium
            natus, error magni tempore repellat est amet, atque et ipsam at iste. Ex.
          </p>
          <h2>Hosting</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae magni molestiae quae quas temporibus
            voluptatem beatae voluptatibus sunt mollitia. Vel incidunt inventore illum blanditiis et a!
          </p>
        </div>
        <div>
          <h2>Consulting</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat aliquid debitis sed maxime.
            Quisquam soluta maiores debitis laborum velit rem, mollitia animi culpa odio ut explicabo.
          </p>
          <h2>Web Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi obcaecati in accusantium earum! Eos magnam
            quisquam iure esse eum vel ipsa, excepturi laudantium, delectus autem a possimus.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="App container">
      <Header />
      {jumbo}
      <Projects />
      {services}
      <Footer />
    </div>
  );
}

export default App;
