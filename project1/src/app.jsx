import React from "react";
import Nav from "./components/Nav"; // ✅ Import Nav, not nav
import MainRoutes from "./Routes/MainRoutes";
import { ToastContainer } from "react-toastify"; // ✅ Import ToastContainer for notifications

const App = () => {
  return (
    <div>
      <Nav />  {/* ✅ Use Nav, not nav */}
      <MainRoutes />
      <ToastContainer />
    </div>
  );
};

export default App;
