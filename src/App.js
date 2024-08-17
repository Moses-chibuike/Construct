import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import Career from './Pages/Career';
import Africas from './Pages/Africas';
import Americas from './Pages/Americas';
import Home from './Pages/Home';
import Services from './Pages/Services';
import WhatsAppButton from './Components/WhatsAppButton';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/career" component={Career} />
          <Route path="/africas" component={Africas} />
          <Route path="/americas" component={Americas} />
        </Switch>
        <WhatsAppButton /> {/* Ensure this is outside the Switch to show on all pages */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
