import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth-context.jsx";
import { getUserDeals } from "../api/get-user-deals";
import { DealList } from "../components/DealList.jsx";
import { AcceptDealModal } from "../components/AcceptDealModal.jsx";
import { RejectDealModal } from "../components/RejectDealModal.jsx";
import { AcceptDeal } from "../api/accept-deal";
import { RejectDeal } from "../api/reject-deal";
import { Footer } from "../components/Footer.jsx";
import "../assets/css/pagescss/UserDeals.css";
import empty_box from "../assets/img/empty_box.png";

export function UserDeals() {
  const { currentUser, token } = useContext(AuthContext);
  const id = currentUser?.id;
  const [userDeals, setUserDeals] = useState([]);
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedDealId, setSelectedDealId] = useState(null);

  const fetchUserDeals = () => {
    if (id) {
      getUserDeals(token)
        .then((data) => setUserDeals(data))
        .catch((error) => console.error(error));
    }
  };

  useEffect(() => {
    fetchUserDeals();
  }, [id, token]);

  const handleOpenAcceptModal = (dealId) => {
    setSelectedDealId(dealId);
    setShowAcceptModal(true);
  };

  const handleAcceptDeal = async (payload) => {
    if (selectedDealId) {
      try {
        await AcceptDeal(payload, token, selectedDealId);
        setShowAcceptModal(false);
        fetchUserDeals(); // Refresh deals after accepting
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleReject = (dealId) => {
    setSelectedDealId(dealId);
    setShowRejectModal(true);
  };

  const handleRejectDeal = async (payload) => {
    if (selectedDealId) {
      try {
        await RejectDeal(payload, token, selectedDealId);
        setShowRejectModal(false);
        fetchUserDeals(); // Refresh deals after rejecting
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleCloseAcceptModal = () => setShowAcceptModal(false);
  const handleCloseRejectModal = () => setShowRejectModal(false);

  return (
    <>
      <div className="container-userdeals">
        <h1 className="userdeals-h1">Your Deals</h1>
        {userDeals.length === 0 ? (
          <div className="no-deals-text">
            <img src={empty_box} alt="empty Box" />
            <p className="no-deals-text">
              You do not have any deals yet
            </p>
            <a href="/SearchPage">
                <button className="button-userdeals">
                  EXPLORE ALL PRODUCTS
                </button>
              </a>
          </div>
        ) : (
          <DealList
            deals={userDeals}
            onAccept={handleOpenAcceptModal}
            onReject={handleReject}
          />
        )}
        {showAcceptModal && (
          <AcceptDealModal
            onClose={handleCloseAcceptModal}
            onAccept={handleAcceptDeal}
          />
        )}
        {showRejectModal && (
          <RejectDealModal
            onClose={handleCloseRejectModal}
            onReject={handleRejectDeal}
          />
        )}
      </div>
      <Footer />
    </>
  );
}
