import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuPreview from './components/MenuPreview';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MenuPreview />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
