import { useState } from "react";
import Counter from "./components/Counter";
// import Header from "./components/Header";
// import Login from "./components/Login";
// import Colors from "./components/Colors";
// import User from "./components/User";
// import Form from "./components/Form";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="App">
      {/* <Form />  */}
      {
        isVisible && <Counter />
      }
      <button onClick={() => setIsVisible(!isVisible)}>Göster/Gizle</button>
      {/* <User /> */}
      {/* <Colors /> */}
    </div>
  );
}

export default App;
