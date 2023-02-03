import React, {useReducer} from 'react';
import { PostState, postItReducer } from './postItReducer';

function App() {
  const [PostState, dispatch] = useReducer(postItReducer,{input: "",postItArr:[]})
  const listItems = PostState.postItArr.map((i) => <li>{i}</li>)
  return (
    <>
      <input onChange={(event)=>dispatch({type:"INPUT", payload: event.target.value})}></input>
      <button onClick={()=>dispatch({type:"POST"})}>Post</button>
      <button onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
      <button onClick={()=>dispatch({type:"DELETE"})}>Delete</button>
      <ul>{listItems}</ul>
    </>
  );
}

export default App;
