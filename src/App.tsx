import { useState } from 'react';
import './App.css';
import { Timer } from './components/Timer';
import { TimerFromArticle } from './components/TimerFromArticle';

function App() {

  const [time, setTime] = useState(10)

  return (
    <div className="App">
      <Timer time={time} />
      {/* <TimerFromArticle time={time} /> */}
      <button
        style={{ position: 'relative', zIndex: '1000' }}
        onClick={() => {
          setTime(time < 50 ? time + 5 : 10);
        }}>+5</button>
    </div>
  );
}

export default App;
