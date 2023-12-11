import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from './counter';
import './App.css';

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
   <div className="App"> 
     <h1 className="counter-style">The count is:{count}</h1>
     <button className="button-style" onClick={() => dispatch(increment())}> Increment + 
     </button> 
     <button className="button-style" onClick={() => dispatch(decrement())}> Decrement - 
     </button> <button className="button-style" onClick={() => dispatch(incrementByAmount(10))} > Increment + by 10 
     </button> <button className="button-style" onClick={() => dispatch(decrementByAmount(10))} > Decrement - by 10 
     </button> 
   </div>
  );
}

export default App;