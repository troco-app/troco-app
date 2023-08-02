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
                <h1 className="deal-modal-h1">Say what is the reason for rejection:</h1>
                <textarea
                    name="rejection_comment"
                    value={rejectionComment}
                    onChange={handleChange}
                    placeholder="Please enter your rejection comment here"
                />
                <div className="buttons-deal-modal">
                    <button onClick={handleSubmit}>Reject</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}
