import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Blog1 from "./components/Blog1";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import MyBlog from "./components/MyBlog";
// import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blogs />}/>
        <Route path="/blog/page/:id" element={<Blog1 />} />
        <Route element={<MyBlog />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
