import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { UserInfo } from "../pages/UserInfo.jsx";
import { Register } from "../pages/Register.jsx";
import { AddProduct } from "../pages/AddProduct.jsx";
import { ExchangeProduct } from "../pages/ExchangeProduct.jsx";
import { UserDeals } from "../pages/UserDeals.jsx";
import { WishListPage } from "../pages/WishListPage.jsx";
import { Login } from "../pages/Login.jsx";
import { ValidationCode } from "../pages/ValidationCode.jsx";
import { ProductPage } from "../pages/ProductPage.jsx";
import { StoreDetail } from "../pages/StoreDetail.jsx";
import { ContactUs } from "../pages/ContactUs.jsx";
import { Faq } from "../pages/Faq.jsx";
import { Careers } from "../pages/Careers.jsx";
import { SearchPage } from "../pages/SearchPage.jsx";
import { ExchangeGuide } from "../pages/ExchangeGuide.jsx";
import { TermsConditions } from "../pages/TermsConditions.jsx";
import { OurStory } from "../pages/OurStory.jsx";

export function MainContent() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UserInfo" element={<UserInfo />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/ExchangeProduct" element={<ExchangeProduct />} />
        <Route path="/UserDeals" element={<UserDeals />} />
        <Route path="/WishListPage" element={<WishListPage />} />
        <Route path="/ValidationCode" element={<ValidationCode />} />
        <Route path="/ProductPage/:itemId" element={<ProductPage />} />
        <Route path="/StoreDetail/:sellerId" element={<StoreDetail />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        <Route path="/ExchangeGuide" element={<ExchangeGuide />} />
        <Route path="/OurStory" element={<OurStory />} />
      </Routes>
    </main>
  );
}
