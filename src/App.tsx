import { ThemeProvider } from '@emotion/react'
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Showroom';

function App() {
  const theme = {
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
        </Routes>
      </>
    </ThemeProvider>
  )
}

export default App;
