/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context.jsx";
import "../assets/css/Deal.css";

export function Deal({ deal, onAccept, onReject }) {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?.id;

  return (
    <div className="deal-for-page">
      <h1 className="deal-date-page">
        Deal created at: {new Date(deal[0].createdAt).toLocaleString()}
      </h1>
      <h2 className="deal-status-page ">Status: {deal[0].status}</h2>
      {deal[0].status === "pending" && (
        <div className="button-deal-container">
          {deal[0].seller_id === userId && (
            <button className="button-deal-accept" onClick={() => onAccept(deal[0].id)}>Accept</button>
          )}
          <button className="button-deal-reject" onClick={() => onReject(deal[0].id)}>Reject</button>
        </div>
      )}
      {deal.map((item, i) => (
        <div className="deal-item-page" key={i}>
          <p className="item-owner-page">Owner: {item.owner_username}</p>
          <p className="item-name-page">Item: {item.item_name}</p>
        </div>
      ))}
    </div>
  );
}
