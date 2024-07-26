import "./App.css";
import Header from "./componets/Header";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./componets/Cards";
import CardsDetails from "./componets/CardsDetails";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        {" "}
        <Route path="/" element={<Cards></Cards>} />
        <Route path="/cart/:id" element={<CardsDetails></CardsDetails>} />
      </Routes>
    </>
  );
}

export default App;
