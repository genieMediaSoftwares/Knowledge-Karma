import {  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import About from './Pages/About'
import Contact from './Pages/Contact'
// Pages
import Courses from "./Pages/Courses";
import Hundredbooks from "./Pages/Hundredbooks";
import NLPMastery from "./Pages/NLPMastery";
import My25thHour from "./Pages/My25thHour";
import Brainkibaat from "./Pages/Brainkibaat";

// Shared Navbar (yours)
import Header from './Components/Header'
import Footer from './Components/Footer'
import SocialMedia from "./Components/SocialMedia";

export default function App() {
  return (
    <>
      {/* Navbar sits outside Routes so it persists across all pages */}
      <Header />

      <Routes>
        {/* Courses listing page */}
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses/>}/>
         <Route path='/contact' element={<Contact/>}/>

        {/* Individual course detail pages */}
        <Route path="/courses/how-to-read-100-books" element={<Hundredbooks />} />
        <Route path="/courses/nlp-mastery"           element={<NLPMastery />} />
        <Route path="/courses/my-25th-hour"          element={<My25thHour />} />
        <Route path="/courses/brain-ki-baat"         element={<Brainkibaat />} />

        {/* Fallback — redirect unknown paths to courses */}
      </Routes>
      <SocialMedia/>
      <Footer/>
      </>
  );
}