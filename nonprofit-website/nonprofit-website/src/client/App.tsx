import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Podcast from './pages/Podcast';
import Store from './pages/Store';
import Activities from './pages/Activities';
import Games from './pages/Games';
import Contact from './pages/Contact';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/podcast" component={Podcast} />
          <Route path="/store" component={Store} />
          <Route path="/activities" component={Activities} />
          <Route path="/games" component={Games} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;