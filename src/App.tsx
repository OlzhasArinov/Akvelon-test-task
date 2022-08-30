import { Navigate, Route, Routes } from "react-router-dom";
import DetailedPage from "./pages/DetailedPage";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/RegisterPage";
import UsersPage from "./pages/UsersPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/user/:id" element={<DetailedPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
            path="/"
            element={<Navigate to="/login" replace />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App;
