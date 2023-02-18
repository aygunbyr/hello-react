import Counter from "./components/Counter";
import Header from "./components/Header";
import Login from "./components/Login";
import User from "./components/User";

function App() {
  const user = {
    name: "Mehmet Seven",
    city: "Yalova",
    age: 29,
  };

  return (
    <div className="App">
      <Counter />
      {/* <User data={{name:"Mehmet Seven", age: 29, city:"Yalova"}} friends={["Ahmet", "Murat", "Ayşe", "Fatma"]} /> */}
    </div>
  );
}

export default App;
