import { BrowserRouter as Router, Link } from "react-router-dom";
import GameContainer from './components/ui-components/GameContainer'

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/"><h1>Games</h1></Link>
        <GameContainer />
      </div>
    </Router>
  )
}

export default App;
