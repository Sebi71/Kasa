/**
 * In this function, we find the different paths to the pages created.
 */

//Import of Routes and Route for navigation from one page to another
import { Routes, Route } from "react-router-dom";
// Importing application pages
import Home from "../../pages/Home"
import About from "../../pages/About";
import Housing from "../../pages/Housing";
import NotFound from "../../pages/NotFound";


export default function AppRoutes() {
  return (
    <Routes>
        {/* path to Home page */}
        <Route path="/" element={<Home />} />
        {/* path to About page */}
        <Route path="/about" element={<About />} />
        {/* path to Housing page with the retrieved ID*/}
        <Route path="/housing/:id" element={<Housing />} />
        {/* path to Error page */}
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}