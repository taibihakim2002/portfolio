import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Rights from "./components/Rights";
import Services from "./components/Services";
import Skills from "./components/Skills";
import SkillsList from "./components/SkillsList";
import Works from "./components/works";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <SkillsList />
      <Services />
      <Works />
      <Contact />
      <Rights />
    </div>
  );
}

export default App;
