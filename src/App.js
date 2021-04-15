import './App.css';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';
import Services from './components/Services/Services';
import About from './components/About/About';
import Prices from './components/Prices/Prices';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
        <Banner/>
        <Nav/>
        <Services/>
        <About/>
        <Prices/>
        <Contact/>
    </div>
  );
}

export default App;