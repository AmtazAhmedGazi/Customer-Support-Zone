import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <ToastContainer />
    </>
  );
}

export default App;
