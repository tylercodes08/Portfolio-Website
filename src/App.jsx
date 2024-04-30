import "./App.css";
import About from "./abt";
import "./hero";
import Hero from "./hero";

function App() {
  return (
    <>
      <div className="container">  
        <div className="navbar">
          <div className="vvl1"></div>
          <a className="home">home</a>
          <a className="mw">my work</a>
          <div className="vvl2"></div>
        </div>
        <div className="hl1 " />   
        <div className="stuff">
          <div className="vl1" />
          <Hero className="hero"></Hero>   
          <div className="vl2" />
        </div>
        <div className="hl2"/> 
      </div>

      
    </>
  );
}
export default App;
