import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./style/App.css";

function App() {
  return (
    <>
      <main className="container">
        <Header />
        <Hero />
        <Features />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
