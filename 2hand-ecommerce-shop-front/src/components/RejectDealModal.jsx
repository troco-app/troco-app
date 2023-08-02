/* eslint-disable react/prop-types */
import { useState } from "react";
import "../assets/css/AcceptDealModal.css";

export function RejectDealModal({ onClose, onReject }) {
  const [rejectionComment, setRejectionComment] = useState("");

  const handleChange = (e) => {
    setRejectionComment(e.target.value);
  };

  const handleSubmit = () => {
    onReject({ rejection_comment: rejectionComment });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <textarea
          name="rejection_comment"
          value={rejectionComment}
          onChange={handleChange}
          placeholder="Please enter your rejection comment here"
        />
        <button onClick={handleSubmit}>Reject</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
