import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './styles/App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MealsContainer from './containers/MealsContainer';
import Random from './components/Random';
import About from './components/About';


function App() {
  return (
    <div className="App">
    <Navbar />
    
    <BrowserRouter> 
      <Switch>
        <Route exact path='/'>
          <MealsContainer/>
        </Route>
      <Route exact path='/random'>
      <Random/>
      </Route>
      <Route exact path='/about'>
      <About/>
      </Route>
      </Switch>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
