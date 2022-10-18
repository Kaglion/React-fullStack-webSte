import React, { useEffect } from "react";
import {BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import "./App.css";
import Single from "./pages/Single"; 
import { useAppContext } from "./context";
 
function App() {
const {fetchPosts} = useAppContext()


useEffect(() => {
  fetchPosts();
}, [])


  return ( 
  <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:title" element={<Single />} /> 
        </Routes> 
    </Layout> 
  </Router>
   );
}

export default App;
