export function TipTotals({ amountText, totalText, total }) {
  return (
    <div className="total-container">
      <p className="total-heading">
        <span>
          {totalText} {amountText}
        </span>
        <span>/ person</span>
      </p>
      <p className="total-balance">
        ${!total || total === Infinity ? "0.00" : total.toFixed(2)}
      </p>
    </div>
  );
}
