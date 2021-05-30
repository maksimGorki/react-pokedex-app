import "./css/style.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Switcher from "./components/Switcher/Switcher";

function App() {
  const actionTypes = {
    fetchData: "FETCH_DATA",
  };

  const dispatch = useDispatch();
  const url = "https://pokeapi.co/api/v2/pokemon?limit=1118";

  useEffect(() => {
    dispatch({ type: actionTypes.fetchData, url: url });
  }, []);

  return (
    <div className="wrapper">
      <Navbar />
      <Switcher />
    </div>
  );
}

export default App;
