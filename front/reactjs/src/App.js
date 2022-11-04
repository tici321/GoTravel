import React from 'react';
import Rotas from './Routes';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Rotas />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
