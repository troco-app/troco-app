import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { UserInfo } from "../pages/UserInfo.jsx";
import { Register } from "../pages/Register.jsx";
import { AddProduct } from "../pages/AddProduct.jsx";
import { ExchangeProduct } from "../pages/ExchangeProduct.jsx";
import { UserDeals } from "../pages/UserDeals.jsx";
import { WishList } from "../pages/WishList.jsx";
import { Login } from "../pages/Login.jsx";
import { ValidationCode } from "../pages/ValidationCode.jsx";
import { ProductPage } from "../pages/ProductPage.jsx";
import { StoreDetail } from "../pages/StoreDetail.jsx";
import { AllProductsPage } from "../pages/AllProductsPage.jsx";
import { ContactUs } from "../pages/ContactUs.jsx";

export function MainContent() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UserInfo" element={<UserInfo />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/AllProductsPage" element={<AllProductsPage />} />
        <Route path="/ExchangeProduct" element={<ExchangeProduct />} />
        <Route path="/UserDeals" element={<UserDeals />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/ValidationCode" element={<ValidationCode />} />
        <Route path="/ProductPage/:itemId" element={<ProductPage />} />
        <Route path="/StoreDetail/:sellerId" element={<StoreDetail />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </main>
  );
}
