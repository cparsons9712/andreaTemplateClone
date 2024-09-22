import "./App.css"
import { TopSection } from "../components/TopSection/topSection";
import { Nav } from "../components/Nav/Nav";
import { BottomSection } from "../components/BottomSection/BottomSection";

function App() {
  return (
    <div className="App">

      <Nav />
      <TopSection />
      <BottomSection />

    </div>
  );
}

export default App;
