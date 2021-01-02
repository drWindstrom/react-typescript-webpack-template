import {useState} from 'react';
import styled from 'styled-components';

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <TurboButton onClick={incrementCount}>Increment</TurboButton>
      <p>The count is: {count}</p>
    </div>
  );
}

export default App;

const TurboButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #00c3ff;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  color: black;
  padding: 0px 24px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 40px;
  user-select: none;
  
  &:hover,
  &:active {
    background-color: #008fbb;
    color: white;
  }
  
`;