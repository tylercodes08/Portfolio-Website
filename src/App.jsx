import "./App.css";
import About from "./abt";
import "./hero";
import Hero from "./hero";

function App() {
  return (
    <>
      <div className="container">        
        <div className="vl1" />
        <div className="vl2" />
        <div className="hl1 " />
        <div className="text">
          <Hero className="hero"></Hero>
          <div className="hl2"/>
          <About className="abt"></About>
        </div>
      </div>

      
    </>
  );
}
export default App;
