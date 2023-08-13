import "./index.css";
import CookieConsent from "./components/CookieConsent";
import { MainContent } from "./components/MainContent";
import { AuthProvider } from "./contexts/auth-context";
import { WishlistProvider } from "../src/contexts/WishListContext";
import { Header } from "../src/components/Header";

function App() {
  return (
    <>
      <AuthProvider>
        <WishlistProvider>
          <CookieConsent />
          <Header />
          <MainContent />
        </WishlistProvider>
      </AuthProvider>
    </>
  );
}

export default App;
