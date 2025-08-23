import React from "react";
import Nav from "./components/Nav"; // ✅ Import Nav, not nav
import MainRoutes from "./Routes/MainRoutes";

const App = () => {
  return (
    <div>
      <Nav />  {/* ✅ Use Nav, not nav */}
      <MainRoutes />
    </div>
  );
};

export default App;
