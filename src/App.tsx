import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import DetailedPage from "./pages/DetailedPage";
import UsersPage from "./pages/UsersPage";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/user" element={<DetailedPage />} />
      </Routes>
    </>
  )
}

export default App;
