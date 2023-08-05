import LoginPage from "./components/pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderPage from "./components/pages/OrderPage";
import NotFound from "./components/pages/NotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:prenom" element={<OrderPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
