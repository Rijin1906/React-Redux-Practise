import logo from './logo.svg';
import './App.css';
// import Home from "../src/components/Home"
import HeaderContainer from './container/HeaderContainer';
import HomeContainer from "../src/container/HomeContainer"

function App() {
  return (
    <div className="App">
   {/* <Home/> */}
   <HeaderContainer/>
   <HomeContainer/>
    </div>
  );
}

export default App;
