import "./App.css";
import Catalog from "./components/Catalog";
import Header from "./components/Header";
import Confirmation from "./components/Confirmation";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import {PageContextProvider} from './components/Context'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Header/>  */}
      <Router>
        <Header />
        <Switch>
          <Route path="/confirmation">
            <Confirmation />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route exact path="/">
            <PageContextProvider>
            <Catalog />
            </PageContextProvider>
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
