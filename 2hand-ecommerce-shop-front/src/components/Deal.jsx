/* eslint-disable react/prop-types */

export function Deal({ deal, onAccept, onReject }) {
  return (
    <div className="deal">
      <h3 className="deal-date">
        Deal created at: {new Date(deal[0].createdAt).toLocaleString()}
      </h3>
      <h4 className="deal-status blink">Status: {deal[0].status}</h4>
      {deal[0].status === "pending" && (
        <div>
          <button onClick={() => onAccept(deal[0].id)}>Accept</button>
          <button onClick={() => onReject(deal[0].id)}>Reject</button>
        </div>
      )}
      {deal.map((item, i) => (
        <div className="deal-item" key={i}>
          <p className="item-owner">Owner: {item.owner_username}</p>
          <p className="item-name">Item: {item.item_name}</p>
        </div>
      ))}
    </div>
  );
}
