import "./index.css";
// import { Categories } from "./pages/categories";
import CookieConsent from "./components/CookieConsent";
import { Home } from "./pages/Home";

function App() {
    return (
        <>
            {/* <Categories /> */}
            <CookieConsent />
            <Home />
        </>
    );
}

export default App;
