/* eslint-disable react/prop-types */
import { Deal } from "./Deal";

export function DealList({ deals, onAccept, onReject }) {
  return (
    <div className="history-content">
      {deals.map((deal) => (
        <Deal
          deal={deal}
          onAccept={onAccept}
          onReject={onReject}
          key={deal[0].id}
        />
      ))}
    </div>
  );
}
