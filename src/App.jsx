import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router";

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

function App() {
  return (
    <BrowserRouter className={styles.read_the_docs}>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/product/:productId/option/:optionId"
            element={<Detail />}
          />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/chart" element={<Chart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
