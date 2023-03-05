import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Barrel importing Components
import { Footer, Home, Nav, Show, ShowsEditForm, ShowsIndex, ShowsNewForm } from "./components";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<ShowsIndex />} />
          <Route path="/shows/new" element={<ShowsNewForm />} />
          <Route path="/shows/:id" element={<Show />} />
          <Route path="/shows/:id/edit" element={<ShowsEditForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
