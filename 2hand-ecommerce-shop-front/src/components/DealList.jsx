/* eslint-disable react/prop-types */
import { Deal } from "./Deal";

export function DealList({ deals, onAccept, onReject }) {
  const uniqueDeals = deals.filter(
    (deal, index, self) =>
      index === self.findIndex((d) => d[0].id === deal[0].id)
  );

  const sortedDeals = uniqueDeals.sort(
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
