import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import DetailedPage from "./pages/DetailedPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UsersPage from "./pages/UsersPage";


function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/user" element={<DetailedPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
            path="/"
            element={<Navigate to="/login" replace />}
        />
      </Routes>
    </>
  )
}

export default App;
