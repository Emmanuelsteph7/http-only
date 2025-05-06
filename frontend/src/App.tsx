import axios from "axios";

import "./App.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosConfig = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

const App = () => {
  const handleLogin = async () => {
    try {
      await axiosConfig.post("/login", {});
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-empty
    } catch (error) {}
  };

  const handleLogout = async () => {
    try {
      await axiosConfig.post("/logout", {});
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-empty
    } catch (error) {}
  };

  return (
    <div className="app">
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default App;
