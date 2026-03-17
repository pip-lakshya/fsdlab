
import './App.css';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

function App() {
  return (
    <BrowserRouter>
    <h1>Welcome</h1>
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/contact">Contact</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
