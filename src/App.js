import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Show from "./components/media/Show";
import EditForm from "./components/media/forms/EditForm";
import NewForm from "./components/media/forms/NewForm";
import Index from "./components/media/Index";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ------------------ Shows -------------------- */}
          <Route path="/shows" element={<Index type={"Shows"} />} />
          <Route path="/shows/new" element={<NewForm type={"Shows"} />} />
          <Route path="/shows/:id" element={<Show type={"Shows"} />} />
          <Route path="/shows/:id/edit" element={<EditForm type={"Shows"} />} />
          {/* ------------------ Movies -------------------- */}
          <Route path="/movies" element={<Index type={"Movies"} />} />
          <Route path="/movies/new" element={<NewForm type={"Movies"} />} />
          <Route path="/movies/:id" element={<Show type={"Movies"} />} />
          <Route
            path="/movies/:id/edit"
            element={<EditForm type={"Movies"} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
