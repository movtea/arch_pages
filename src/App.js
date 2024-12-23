import React from "react";
import { Routes, Route } from 'react-router-dom';

import Head_nav from "./components/layout/Head_nav";

import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Forumes from "./pages/Forumes";


function App() {
return (
  <>
    <div>
      <Head_nav/>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/packages" element={<Packages/>}>
        </Route>
        <Route path="/forumes" element={<Forumes/>}>
        </Route>
      </Routes>
    </div>
  </>
);
}
export default App;