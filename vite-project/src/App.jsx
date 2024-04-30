import './App.css'
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {

  let [counter,setCounter]=useState(1)        
  //hook->[variable,function]=useState()-can give/pass any default value like array,object,empty string,value-t/f etc
  // let counter = 5;

 const addValue=()=>{
  console.log(counter)
  // counter++;
  if(counter<20){
  setCounter(counter+1)
//{setCounter(prevCounter=>prevCounter+1)}   //previous calling-previousCounter
  }else{
    alert('limit maximum')
  }
 }
 const removeValue =()=>{
  // counter--;
  if(counter>0)
  {
 setCounter(counter-1) 
  }
  else{
    alert('limit khtm')
  }
 }
  return (
    <>
<h1> project-1</h1>
<h2>Counter value:{counter}</h2>
<div className='container'>
<button  className='btn'onClick={addValue}>Add value :{counter}</button>
<br/><br/>

<button className='btn' onClick={removeValue}>Reduce value :{counter}</button>
</div> 
<TodoList/>
  </>
  )
}

export default App
