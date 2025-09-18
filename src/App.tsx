import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "@pages/LoginPage";
import InboxPage from "@pages/InboxPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/inbox" element={<InboxPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
