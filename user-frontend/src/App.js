import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { lazy, Suspense } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Preloader from "./layout/Preloader";
const Home = lazy(() => import("./ui/Home"));
const Career = lazy(() => import("./ui/Career"));
const Contact = lazy(() => import("./ui/Contact"));
const About = lazy(() => import("./ui/About"));
const Service = lazy(() => import("./ui/Service"));
const Blogs = lazy(() => import("./ui/Blog"));
const BlogDetail = lazy(() => import("./ui/BlogDetail"))
const ApplyNow = lazy(() => import("./ui/ApplyNow"));
const TermsAndConditions = lazy(() => import("./ui/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./ui/PrivacyPolicy"));
const NoPage = lazy(() => import("./layout/NoPage"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Service />} />
            <Route path="careers" element={<Career />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="apply-now" element={<ApplyNow />} />
            <Route path="terms-conditions" element={<TermsAndConditions />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
