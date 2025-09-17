import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "@pages/LoginPage";
import MailListPage from "@pages/MailListPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/mail" element={<MailListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
