import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
// import Skills from './components/skills/Skills';
// import Services from './components/services/Services';
// import Qualifications from './components/qualifications/Qualifications';
import Work from './components/work/Work';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Resume from './components/resume/Resume';
import Blog from './components/blog/Blog';
import ToolGrid from './components/tools/tools';

const App = () => {
  return (
    <>

      <Header />

      <main className='main'>
        <Home />
        <About />
        {/* <Skills /> */}
        {/* <Services /> */}
        {/* <Qualifications /> */}
        <ToolGrid />
        <Resume />
        <Work />
        <Testimonials />
        <Blog />
        <Contact />
        
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App;
