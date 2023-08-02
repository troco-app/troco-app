/* eslint-disable react/prop-types */
import { Deal } from "./Deal";

export function DealList({ deals, onAccept, onReject }) {
  // Sort the deals by the createdAt field in descending order
  const sortedDeals = deals.sort(
    (a, b) => new Date(b[0].createdAt) - new Date(a[0].createdAt)
  );

  return (
    <div className="history-content">
      {sortedDeals.map((deal) => (
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
