import logo from './logo.svg';
import './App.css';
import BottoneArrow from './components/BottoneArrow';
import BottoneExtend from './components/BottoneExtend';
import ImmagineUno from './components/ImmagineUno';
import ImmagineDue from './components/ImmagineDue';

function App() {
  return (
    <div className="App">
     <div>
      <BottoneArrow button = 'Arrow' />
     </div>
     <div>
      <BottoneExtend label = 'Extend' />
     </div>
     <div className='image'>
      <ImmagineUno />
      <ImmagineDue />
     </div>

    </div>
  );
}

export default App;
