import MainPage from "./pages/MainPage"
import GuestsPage from "./pages/GuestsPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/api/guests" element={<GuestsPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
