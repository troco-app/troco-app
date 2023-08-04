import { useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth-context.jsx";
import { ExProductList } from "../components/ExProductrList.jsx";
import { createExchangeDeal } from "../api/create-exchange-deal.js";
import { ReviewPocketCardList } from "../components/ReviewPocketCardList.jsx";
import { ProgressBar } from "../components/ProgressBar.jsx";
import { Footer } from "../components/Footer.jsx";
import Exchangicone from "../assets/img/Exchangeicon.svg";

import "../assets/css/pagescss/ExchangeProduct.css";

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
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

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
    if (step === 1 && sellerSelectedProducts.length === 0) {
      setShowPopup(true);
      setPopupMessage("Please select at least one product from the seller.");
      return;
    }

    if (step === 2 && buyerSelectedProducts.length === 0) {
      setShowPopup(true);
      setPopupMessage(
        "Please select at least one product to propose for exchange."
      );
      return;
    }

    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="popup-close" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            {popupMessage}
          </div>
        </div>
      )}
      <div className="exchange-product-container">
        <h1 className="exchange-product-title">Exchanging Process</h1>
        <ProgressBar currentStep={step} />
        {step === 1 && (
          <>
            <h2 className="Step-H2 ">Select Item from: {ownerName} </h2>
            <ExProductList
              userId={sellerId}
              onSelect={setSellerSelectedProducts}
              selectedProducts={sellerSelectedProducts}
            />
            <div className="Step-Buttons-Exchange-3">
              <button className="exchange-product-button" onClick={handleNext}>
                Next
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <h2 className="Step-H2-user">Propose Something to Exchange:</h2>
            <ExProductList
              userId={buyerId}
              onSelect={setBuyerSelectedProducts}
              selectedProducts={buyerSelectedProducts}
            />
            <div className="Step-Buttons-Exchange-3">
              <button className="exchange-product-button" onClick={handleNext}>
                Next
              </button>
              <button
                className="exchange-product-button-back"
                onClick={handleBack}
              >
                Back
              </button>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <section className="Section-Step-3">
              <h2 className="Step-H2-normal ">Review the Selected Products</h2>
              <div>
                <h3 className="Step-H2">Products from Seller:</h3>
                <ReviewPocketCardList products={sellerSelectedProducts} />
              </div>
              <div className="exchange-icon">
                <img
                  className="exchange-icon-img"
                  src={Exchangicone}
                  alt="Exhange Icon"
                />
              </div>
              <div>
                <h3 className="Step-H3">Products you Offered:</h3>
                <ReviewPocketCardList products={buyerSelectedProducts} />
              </div>
              <div className="Step-Buttons-Exchange-3">
                <button
                  className="exchange-product-button-3"
                  onClick={handleCreateDeal}
                >
                  Create Deal
                </button>
                <button
                  className="exchange-product-button-back"
                  onClick={handleBack}
                >
                  Back
                </button>
              </div>
            </section>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
