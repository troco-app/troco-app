import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth-context.jsx";
import { getUserDeals } from "../api/get-user-deals";
import { DealList } from "../components/DealList.jsx";
import { AcceptDealModal } from "../components/AcceptDealModal.jsx";
import { RejectDealModal } from "../components/RejectDealModal.jsx"; // Import RejectDealModal

export function UserDeals() {
  const { currentUser, token } = useContext(AuthContext);
  const id = currentUser?.id;
  const [userDeals, setUserDeals] = useState([]);
  const [showAcceptModal, setShowAcceptModal] = useState(false); // To control the Accept modal
  const [showRejectModal, setShowRejectModal] = useState(false); // To control the Reject modal

  useEffect(() => {
    if (id) {
      getUserDeals(token)
        .then((data) => setUserDeals(data))
        .catch((error) => console.error(error));
    }
  }, [id, token]);

  const handleAccept = (dealId) => {
    console.log(`Accepted deal with id: ${dealId}`);
    // TODO: Call API to accept the deal
    setShowAcceptModal(true); // Show Accept modal
  };

  const handleReject = (dealId) => {
    console.log(`Rejected deal with id: ${dealId}`);
    // TODO: Call API to reject the deal
    setShowRejectModal(true); // Show Reject modal
  };

  const handleCloseAcceptModal = () => setShowAcceptModal(false);
  const handleCloseRejectModal = () => setShowRejectModal(false);

  return (
    <div style={{ color: "white" }}>
      <h1>Deals</h1>
      <DealList
        deals={userDeals}
        onAccept={handleAccept}
        onReject={handleReject}
      />
      {showAcceptModal && (
        <AcceptDealModal
          onClose={handleCloseAcceptModal}
          onAccept={handleAccept}
        />
      )}
      {showRejectModal && (
        <RejectDealModal
          onClose={handleCloseRejectModal}
          onReject={handleReject}
        />
      )}
    </div>
  );
}
