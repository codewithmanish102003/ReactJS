// import Rules from "./Components/JSXRules";
// import JSXExpressions from "./Components/JSXExpressions";
// import Lists from "./Components/Lists";
// import PersonProps from "./Components/PersonProps";
// import Cards from "./Components/Cards";
// import Wheather from "./Components/Wheather";
// import Greet from "./Components/Greet";
// import StyleCard from "./Components/Styling";
import Counter from "./Components/Hooks/Counter";
import Profile from "./Components/Hooks/Profile";
import RandomNum from "./Components/Hooks/RandomNum";
import Todos from "./Components/Hooks/Todos";
import App2 from "./Components/react-Portals/App2.jsx"
function App() {

  return (
    <>
      {/* <Rules />
      <JSXExpressions/>
      <Lists/>
      <PersonProps name="Manish" age="21"/>
      <Cards>
        <h1>This is Card 1</h1>
        <p>Here is Some Content</p>
      </Cards>
      <Wheather temprature="35" />
      <Greet time="afternoon" /> */}
      {/* <StyleCard/> */}
      <Counter />
      <RandomNum />
      <Todos/>
      <Profile />

      <App2/>


    </>
  )
}

export default App;
