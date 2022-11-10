import PlanetsContainer from "./PlanetsContainer"
import StarsContainer from "./StarsContainer"
import MoonsContainer from "./MoonsContainer"
import spaceShuttle from '../assets/space-shuttle.png'

function App() {
  return (
    <div className="App">

      <img className="absolute fly-in" 
      src={spaceShuttle} 
      alt="space shuttle" />

      <PlanetsContainer />
      <StarsContainer />
      <MoonsContainer />

    </div>
  );
}

export default App;
