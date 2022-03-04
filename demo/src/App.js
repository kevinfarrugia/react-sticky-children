import "./App.css";
import { ReactStickyChildren } from "./react-sticky-children";

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <ReactStickyChildren>
        <h1>Title</h1>
      </ReactStickyChildren>
      <div className="container"></div>
    </div>
  );
}

export default App;
