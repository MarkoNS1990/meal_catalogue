
import './App.css';
import Navbar from './components/Navbar';
import MealsContainer from './containers/MealsContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MealsContainer/>
      <Footer/>
    </div>
  );
}

export default App;
