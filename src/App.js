import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import './styles/App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MealsContainer from './containers/MealsContainer';
import Random from './components/Random';
import About from './components/About';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
