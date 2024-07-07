import React from 'react';
import './App.css';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <div className={`App ${theme}`}>
      <Header />
      <div className="container">
        <div id="main">
          <AboutMe />
          <Experience />
          <Skills />
          <Projects />
          <Publications />
          <Education />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
