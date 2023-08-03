import "./index.css";
import CookieConsent from "./components/CookieConsent";
import { MainContent } from "./components/MainContent";
import { Header } from "../src/components/Header";
import { AuthProvider } from "./contexts/auth-context";
import { useLocation } from "react-router-dom";
import { WishlistProvider } from "../src/contexts/WishListContext";

function App() {
  const location = useLocation();
  const shouldShowHeader =
    location.pathname !== "/login" && location.pathname !== "/register";

  return (
    <>
      <AuthProvider>
        <WishlistProvider>
          {shouldShowHeader && <Header />}
          <CookieConsent />
          <MainContent />
        </WishlistProvider>
      </AuthProvider>
    </>
  );
}

export default App;
