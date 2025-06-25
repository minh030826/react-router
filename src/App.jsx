import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
// layouts
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";

// user
import About from "./pages/user/About";
import Home from "./pages/user/Home";
import Detail from "./pages/user/Detail";

// admin
import Dashboard from "./pages/admin/Dashboard";
import Chart from "./pages/admin/Chart";

//page
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/product/:productId/option/:optionId"
          element={<Detail />}
        />
      </Route>

      <Route path="/login" element={<Login users={users} />} />
      <Route
        path="/register"
        element={<Register setUsers={setUsers} users={users} />}
      />

      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/chart" element={<Chart />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
