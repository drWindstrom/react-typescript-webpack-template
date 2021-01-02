import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <p>The count is: {count}</p>
    </div>
  );
}

export default App;