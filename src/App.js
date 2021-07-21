import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import './styles/App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MealsContainer from './containers/MealsContainer';
import Random from './components/Random';
import About from './components/About';
import store from './redux/store';
import SingleMeal from './components/SingleMeal';


function App() {

  
  return (
    <Provider store={store}>
    <div className="App">
    
    
    <BrowserRouter>
    <Navbar /> 
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
        <Route exact path='/:id'>
          <SingleMeal />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    
    </div>
    </Provider>
  );
}

export default App;
