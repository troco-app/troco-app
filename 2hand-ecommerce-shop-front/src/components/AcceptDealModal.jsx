/* eslint-disable react/prop-types */
import { useState } from "react";
import "../assets/css/AcceptDealModal.css";

export function AcceptDealModal({ onClose, onAccept }) {
  const [formData, setFormData] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
    exchange_date_time: "",
    exchange_comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onAccept(formData);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          placeholder="Street"
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
        />
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="State"
        />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
        />
        <input
          type="text"
          name="postal_code"
          value={formData.postal_code}
          onChange={handleChange}
          placeholder="Postal Code"
        />
        <input
          type="datetime-local"
          name="exchange_date_time"
          value={formData.exchange_date_time}
          onChange={handleChange}
        />
        <textarea
          name="exchange_comment"
          value={formData.exchange_comment}
          onChange={handleChange}
          placeholder="Exchange Comment"
        />
        <div>
          <button onClick={onClose}>Close</button>
          <button onClick={handleSubmit}>Accept</button>
        </div>
      </div>
    </div>
  );
}
