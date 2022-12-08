import BGLayout from './Components/BGLayout';
import { SettingsContext } from './Context/SettingsContext';
import './App.css';

function App() {





  return (
    <div>
      <SettingsContext>
        <BGLayout/>
        </SettingsContext>
    </div>
  );
}

export default App;
