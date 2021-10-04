import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/home">
          <Home></Home>
         </Route>
         <Route path="/services">
          <Services></Services>
         </Route>
         <Route path="/about">
         <About></About>
         </Route>
         <Route path="/contact">
         <Contact></Contact>
         </Route>
         <Route path="*">
          <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
