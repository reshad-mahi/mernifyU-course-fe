import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import CallBackTutorial from './components/hooks/UseCallback/CallbackTutorial';
import Home from './pages/Home';
import Formpage from './pages/Formpage';
import StateTutorial from './components/hooks/UseState/StateTutorial';
import EffectTutorial from './components/hooks/UseEffect/EffectTutorial';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="new" element={<CallBackTutorial />}></Route>
            <Route path="state" element={<StateTutorial />}></Route>
            <Route path="effect" element={<EffectTutorial />}></Route>
            <Route path="form" element={<Formpage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
