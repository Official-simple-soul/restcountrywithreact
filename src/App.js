import './App.css';
import Header from './Header';
import Countries from './Main';
import Filter from './Filter';

function App() {
  return (
    <div className='App'>
            <Header />
            <Filter />
            <Countries />
    </div>
  );
}

export default App;
