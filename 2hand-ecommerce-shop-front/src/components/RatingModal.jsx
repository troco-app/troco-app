/* eslint-disable react/prop-types */
import { useState } from "react";
import { rateDeal } from "../api/rate-deal";
import "../assets/css/RatingModal.css";
import { useNavigate } from "react-router-dom";

export function RatingModal({ dealId, token, onClose }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const payload = {
        rating: rating,
        rating_comment: comment,
      };
      await rateDeal(payload, token, dealId);
      onClose(true); // Close the modal and signal that the rating was successful
      navigate("/");
    } catch (error) {
      console.error("Failed to submit rating:", error);
    }
  };

  return (
    <div className="rating-modal">
      <div className="rating-modal-content">
        <h2>Rate the Deal</h2>
        <label>
          Rating:
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </label>
        <div>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={() => onClose(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
