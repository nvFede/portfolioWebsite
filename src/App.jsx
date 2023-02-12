import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Components/About";
import Clients from "./Components/Clients";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Web3 from "./Components/Web3";
import Blog from "./Components/Blog";
import Left from "./Components/Sidebar/Left";
import Right from "./Components/Sidebar/Right";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Header />
      <Left />
      <Right />

      <main className="w-screen px-10 md:px-24 lg:px-36 bg-navy text-white ">
        <Home />
        <About />
        <Clients />
        <Projects />
        <Web3 />
{/*         <Blog /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
