import { useContext } from 'react';
import './App.css';
import { TreesContext } from '.';
function App() {
  const {trees}=useContext(TreesContext)
  return (
    <>
      <h1>The trees I have heard of</h1>
      <ul>
        {trees.map((tree)=>(
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
