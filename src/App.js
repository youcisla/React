import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Count from "./Components/Count/Count";
import Jokes from "./Components/Jokes/Jokes";
import Users from "./Components/Users/Users";
import Login from "./Components/Login/Login";
import Wrapper from "./Components/Wrapper/Wrapper";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="/count" element={<Count />} />
            <Route path="/jokes" element={<Jokes />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
