import { useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth-context.jsx";
import { ExProductList } from "../components/ExProductrList.jsx";
import { createExchangeDeal } from "../api/create-exchange-deal.js";
import { PocketCardList } from "../components/PocketCardList.jsx";
import { ProgressBar } from "../components/ProgressBar.jsx";
import "../assets/css/pagescss/ExchangeProduct.css";
import Exchangicone from "../assets/img/Exchangeicon.svg";

export function ExchangeProduct() {
  const location = useLocation();
  const navigate = useNavigate();
  const sellerId = location.state.sellerId;
  const ownerName = location.state.ownerName;
  const { currentUser, token } = useContext(AuthContext);
  const buyerId = currentUser?.id;
  const [step, setStep] = useState(1);
  const [sellerSelectedProducts, setSellerSelectedProducts] = useState([]);
  const [buyerSelectedProducts, setBuyerSelectedProducts] = useState([]);

  const createDealPayload = () => {
    return {
      buyer_id: buyerId,
      seller_id: sellerId,
      offered_items: buyerSelectedProducts.map((product) => product.id),
      requested_items: sellerSelectedProducts.map((product) => product.id),
    };
  };

  const handleCreateDeal = () => {
    const payload = createDealPayload();
    createExchangeDeal(payload, token)
      .then((response) => {
        // Handle success
        console.log("Deal created successfully", response);
        navigate("/UserDeals"); // Move it here
      })
      .catch((error) => {
        // Handle error
        console.error("Failed to create deal", error);
      });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="exchange-product-container">
      <ProgressBar currentStep={step} />
      <h1 className="exchange-product-title">Exchanging Process</h1>
      {step === 1 && (
        <>
          <h1>Products from {ownerName} </h1>
          <ExProductList
            userId={sellerId}
            onSelect={setSellerSelectedProducts}
            selectedProducts={sellerSelectedProducts}
          />
          <button className="exchange-product-button" onClick={handleNext}>
            Next
          </button>
        </>
      )}
      {step === 2 && (
        <>
          <h1>Select the products you want to exchange</h1>
          <ExProductList
            userId={buyerId}
            onSelect={setBuyerSelectedProducts}
            selectedProducts={buyerSelectedProducts}
          />
          <button className="exchange-product-button" onClick={handleBack}>
            Back
          </button>
          <button className="exchange-product-button" onClick={handleNext}>
            Next
          </button>
        </>
      )}
      {step === 3 && (
        <>
          <h1>Review the selected products</h1>
          <div>
            <h2>Products from seller:</h2>
            <PocketCardList products={sellerSelectedProducts} />
          </div>
          <div className="exchange-icon">
            <img src={Exchangicone} alt="Exhange Icon" />
          </div>
          <div>
            <h2>Products you offered:</h2>
            <PocketCardList products={buyerSelectedProducts} />
          </div>
          <button className="exchange-product-button" onClick={handleBack}>
            Back
          </button>
          <button
            className="exchange-product-button"
            onClick={handleCreateDeal}
          >
            Create Deal
          </button>
        </>
      )}
    </div>
  );
}
