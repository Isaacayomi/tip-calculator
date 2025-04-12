import Button from "./Button";
function MainComponent({
  bill,
  onSetBill,
  tipByPercentage,
  inputTip,
  onSetInputTip,
  percentage,
  onSetPercentage,
  numPeople,
  onSetNumPeople,
}) {
  function handleClick(percent) {
    onSetPercentage((prevClick) => (prevClick === percent ? null : percent));
    console.log(percent);
  }

  return (
    <div className="main">
      <p className="bill-heading">Bill</p>
      <input
        className="bill-input"
        type="text"
        value={bill}
        onChange={(e) => {
          const value = e.target.value;
          if (/^\d*\.?\d*$/.test(value)) {
            onSetBill(value);
          }
        }}
      />
      <p className="select-tip">Select Tip %</p>
      <div className="buttons">
        {tipByPercentage.map((percent, i) => (
          <Button
            className={`tip-button ${percent === percentage ? "isActive" : ""}`}
            onClick={() => {
              if (!inputTip) handleClick(percent);
              onSetInputTip("");
            }}
            key={i}
          >
            {percent}%
          </Button>
        ))}
        <input
          disabled={percentage}
          className="custom-input"
          type="text"
          placeholder="Custom"
          value={inputTip}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              onSetInputTip("");
            } else if (/^\d*\.?\d*$/.test(value)) {
              onSetInputTip(value);
            }
            if (value !== "") onSetPercentage(null);
          }}
        />
      </div>
      <div className="no-of-people">
        <p>
          <span>Number of People</span>
          {numPeople === 0 && <span className="error-msg">Cannot be zero</span>}
        </p>
      </div>
      <input
        style={numPeople === 0 ? { border: "1px solid red" } : {}}
        className="input-people"
        type="text"
        value={numPeople}
        onChange={(e) =>
          onSetNumPeople(Number(isNaN(e.target.value) ? "" : e.target.value))
        }
      />
    </div>
  );
}
export default MainComponent;
