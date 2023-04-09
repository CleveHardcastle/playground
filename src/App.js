import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Nav from "./nav";
import { UserContext } from "./UserContext";
import { useState, useMemo } from "react";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
