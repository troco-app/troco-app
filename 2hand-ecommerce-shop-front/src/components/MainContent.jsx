import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { ProductDetail } from "../pages/ProductDetail.jsx";
import { UserInfo } from "../pages/UserInfo.jsx";
import { Register } from "../pages/Register.jsx";
import { AddProduct } from "../pages/AddProduct.jsx";
import { ExchangeProduct } from "../pages/ExchangeProduct.jsx";
import { StoreDetail } from "../pages/StoreDetail.jsx";
import { UserDeals } from "../pages/UserDeals.jsx";
import { WishList } from "../pages/WishList.jsx";
import { Login } from "../pages/Login.jsx";
import { ValidationCode } from "../pages/ValidationCode.jsx";
import { ItemPage } from "../pages/ItemPage.jsx";
import { SellerPage } from "../pages/SellerPage.jsx";
import { AllProductsPage } from "../pages/AllProductsPage.jsx";

export function MainContent() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/UserInfo" element={<UserInfo />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/AllProductsPage" element={<AllProductsPage />} />
        <Route path="/ExchangeProduct" element={<ExchangeProduct />} />
        <Route path="/StoreDetail" element={<StoreDetail />} />
        <Route path="/UserDeals" element={<UserDeals />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/ValidationCode" element={<ValidationCode />} />
        <Route path="/ItemPage/:itemId" element={<ItemPage />} />
        <Route path="/SellerPage/:sellerId" element={<SellerPage />} />
      </Routes>
    </main>
  );
}
