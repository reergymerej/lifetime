import React from 'react';
import './App.css';
import Clock from './Clock';
import Schedule from './Schedule';

const App: React.FC = () => {
  const [age, setAge] = React.useState<number>(30)

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const age = parseInt(event.target.value)
    setAge(age)
  }

  return (
    <div className="App">
      <p>
        How old are you?
      </p>
      <input type="number"
        min="0"
        max="72"
        value={age}
        onChange={handleAgeChange}
      />

      <h2>Current Time</h2>
      <Clock
        age={age}
      />

      <h2>Life Schedule</h2>
      <Schedule
        age={age}
      />
    </div>
  );
}

export default App;
