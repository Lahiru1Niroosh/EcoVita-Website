// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import BlogAll from "./components/BlogAll";
import BlogSingle from "./components/BlogSingle";

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      delay: 100,
      easing: "ease-in",
    });
  }, []);

  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />

        {/* Homepage Layout */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Landing Section */}
                <section className="home-section" id="landing">
                  <LandingPage />
                </section>

                {/* About Section */}
                <section className="home-section" id="about">
                  <About />
                </section>

                {/* Products Section */}
                <section className="home-section" id="products">
                  <Products />
                </section>

                {/* Services Section */}
                <section className="home-section" id="services">
                  <Services />
                </section>

                {/* Blog Section */}
                <section className="home-section" id="blog">
                  <BlogPage />
                </section>

                {/* Footer */}
                <Footer />
              </>
            }
          />
          {/* Blog All Page */}
          <Route path="/blogs" element={<BlogAll />} />

          {/* Blog Single Page */}
          <Route path="/blog/:id" element={<BlogSingle />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
