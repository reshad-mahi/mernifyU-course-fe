import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import CallBackTutorial from './components/hooks/UseCallback/CallbackTutorial';
import Home from './pages/Home';
import Formpage from './pages/Formpage';
import StateTutorial from './components/hooks/UseState/StateTutorial';
import EffectTutorial from './components/hooks/UseEffect/EffectTutorial';
import LayoutEffectTutorial from './components/hooks/UseLayoutEffect/LayoutEffectTutorial';
import MemoTutorial from './components/hooks/UseMemo/MemoTutorial';
import ReducerTutorial from './components/hooks/UseReducer/ReducerTutorial';
import RefTutorial from './components/hooks/UseRef/RefTutorial';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="new" element={<CallBackTutorial />}></Route>
            <Route path="state" element={<StateTutorial />}></Route>
            <Route path="effect" element={<EffectTutorial />}></Route>
            <Route path="layout" element={<LayoutEffectTutorial />}></Route>
            <Route path="memo" element={<MemoTutorial />}></Route>
            <Route path="reducer" element={<ReducerTutorial />}></Route>
            <Route path="ref" element={<RefTutorial />}></Route>
            <Route path="form" element={<Formpage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
