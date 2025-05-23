import TipTotals from "./TipTotals";
import Button from "./Button";

function SideBar({
  tipPerPerson,
  totalPerPerson,
  onSetBill,
  onSetInputTip,
  onSetPercentage,
  onSetNumPeople,
}) {
  return (
    <div className="sidebar">
      <TipTotals totalText="Tip" amountText="Amount" total={tipPerPerson} />
      <TipTotals totalText="Total" total={totalPerPerson} />
      <Button
        onClick={() => {
          onSetBill("");
          onSetInputTip("");
          onSetPercentage("");
          onSetNumPeople("");
        }}
        className="reset-btn"
      >
        RESET
      </Button>
    </div>
  );
}
export default SideBar;
