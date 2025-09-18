import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "@pages/LoginPage";
import InboxPage from "@pages/InboxPage";
import SpamPage from "@pages/SpamPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/spam" element={<SpamPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
