import Navbar from "./components/Navbar"
import ToDos from "./components/ToDos"
import AddToDo from "./components/addtodo"
import "./App.css"

const App = () => {
  return (
    <main>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <Navbar/>
      <AddToDo/>
      <ToDos/>
    </main>
  )
}

export default App