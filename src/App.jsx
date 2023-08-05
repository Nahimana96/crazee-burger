import LoginPage from "./components/pages/login/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderPage from "./components/pages/order/OrderPage";
import NotFound from "./components/pages/error/NotFound";
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
