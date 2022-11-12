import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Skills";
import Resume from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
