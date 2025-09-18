import { HashRouter, Routes, Route } from "react-router-dom";
import LoginPage from "@pages/LoginPage";
import InboxPage from "@pages/InboxPage";
import SpamPage from "@pages/SpamPage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/spam" element={<SpamPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
