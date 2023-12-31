import { ThemeProvider } from '@emotion/react'
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Showroom';
import Packages from './pages/Packages';

function App() {
  const theme = {
    isMain: true,
    colors: {
      primary: 'turquoise',
      secondary: 'coral'
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="about" element={ <About/> } />
          <Route path="gallery" element={ <Gallery /> } />
          <Route path="contact" element={ <Contact/> } />
          <Route path="Packages" element={ <Packages /> } />
        </Routes>
      </>
    </ThemeProvider>
  )
}

export default App;
