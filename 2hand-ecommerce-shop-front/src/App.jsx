import "./index.css";
import CookieConsent from "./components/CookieConsent";
import { MainContent } from "./components/MainContent";
import { Header } from "../src/components/Header";

function App() {
  return (
    <>
      <Header />
      <CookieConsent />
      <MainContent />
    </>
  );
}

export default App;
