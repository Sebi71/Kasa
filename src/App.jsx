import { BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";


export default function App() {
    return (
        <>
            <BrowserRouter>
            <NavBar />
                <AppRoutes />
                <Footer/>
            </BrowserRouter>
        </>
    )
}