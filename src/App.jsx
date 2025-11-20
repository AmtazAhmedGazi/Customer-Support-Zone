import { Suspense, useState, useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import MainSection from "./components/MainSection/MainSection";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

const ticketsPromise = fetchTickets();

function App() {
  const [tickets, setTickets] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);

  useEffect(() => {
    ticketsPromise.then((data) => setTickets(data));
  }, []);

  return (
    <>
      <div className="bg-[#d1c0c01f]">
        <Navbar />
        <Banner tasks={tasks} resolvedTask={resolvedTask} />
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-[300px]">
              <span className="loading loading-spinner loading-4xl"></span>
            </div>
          }
        >
          <MainSection
            tickets={tickets}
            setTickets={setTickets}
            tasks={tasks}
            setTasks={setTasks}
            resolvedTask={resolvedTask}
            setResolvedTask={setResolvedTask}
          />
        </Suspense>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
