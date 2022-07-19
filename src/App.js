import React, { useState } from 'react'
import TopBar from './components/TopBar/TopBar';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import './styles.scss'
import Menu from './components/Menu/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
