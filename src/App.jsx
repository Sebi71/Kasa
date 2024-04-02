/**
 * This App component represents the basic structure of the application, 
 * including navigation, application content, and footer.
 */

//Import of BrowserRouter which allows you to encapsulate the entire application.
import { BrowserRouter} from "react-router-dom";
//Import the navbar and footer components, and AppRoutes which contains the paths.
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";


export default function App() {
    return (
        <>
            <BrowserRouter basename="/Kasa/">
                <NavBar />
                <AppRoutes />
                <Footer/>
            </BrowserRouter>
        </>
    )
}