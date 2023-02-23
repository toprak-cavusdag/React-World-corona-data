import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import CoronaForCountry from './components/CoronaForCountry';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import RecordedCorona from './components/RecordedCorona';
import CoronaForCountinent from './components/CoronaForContinent';

function App() {
  const [key, setKey] = useState(1);
  return (
    <div>
      <Header
        onMenuChange={(_key) => {
          setKey(_key);
        }}
      />

      <div className='container mx-auto p-6'>
        {key === 1 && (
          <div className='container mx-auto p-8'>
            <CoronaForCountry />
          </div>
        )}
        {key === 2 && (
          <div>
            <RecordedCorona />
          </div>
        )}
        {key === 3 && (
          <div>
            <CoronaForCountinent />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
