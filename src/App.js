import './App.css';
import StateTutorial from './components/UseState/StateTutorial';
import ReducerTutorial from './components/UseReducer/ReducerTutorial';
import EffectTutorial from './components/UseEffect/EffectTutorial';
import ContextTutorial from './components/UseContext/ContextTutorial';
import RefTutorial from './components/UseRef/RefTutorial';
import MemoTutorial from './components/UseMemo/MemoTutorial';
import CallBackTutorial from './components/UseCallback/CallbackTutorial';
import LayoutEffectTutorial from './components/UseLayoutEffect/LayoutEffectTutorial';

function App() {
  return (
    <div className="App">
      <CallBackTutorial />
    </div>
  );
}

export default App;
