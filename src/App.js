
import './App.css';
import { useTrees } from '.';
function App() {
  const {trees}=useTrees();
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
