import './App.css';
import Header from './Header'
import TinderCards from './TinderCards';

function App() {
  return (
    //BEM Class Naming Convention
    <div className="app">
      {/* Header */}
      {/* TinderCards */}
      {/* SwipeButtons */}
      <Header />
      <TinderCards />
    </div>
  );
}

export default App;
