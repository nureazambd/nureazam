import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import MyWorks from './components/MyWorks';
import Extracurricular from './components/Extracurricular';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#050816] text-white">
      
      
      <Navbar/>
      <div id="section1"><Hero/></div>
      <div id="about"><About/></div>
      {/* Add more sections as needed */}
      <div id="education"><Education/></div>
      <div id="experience"><Experience/></div>
      <div id="my-works"><MyWorks/></div>
      <div id="extracurricular"><Extracurricular/></div>
      <div id="achievements"><Achievements/></div>
      <div id="contact"><Contact/></div>

    </div>
  );
}

export default App;
