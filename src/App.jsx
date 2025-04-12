import { useState } from "react";

function App() {
  return (
    <div className="overall-container">
      <div className="logo">
        <img src="./images/logo.svg" alt="logo-img" />
      </div>
      <Container />
    </div>
  );
}

function Container() {
  const tipByPercentage = [5, 10, 15, 25, 50];
  const [bill, setBill] = useState("");
  const [inputTip, setInputTip] = useState("");
  const [percentage, setPercentage] = useState("");
  const [numPeople, setNumPeople] = useState("");

  const tipAmount =
    inputTip === "" ? (bill * percentage) / 100 : (bill * inputTip) / 100;
  const totalAmount = bill + tipAmount;
  const tipPerPerson =
    (numPeople !== "" || !percentage) && tipAmount / numPeople;
  const totalPerPerson =
    (numPeople !== "" || !percentage) && totalAmount / numPeople;
  return (
    <div className="container">
      <Main
        bill={bill}
        onSetBill={setBill}
        tipByPercentage={tipByPercentage}
        inputTip={inputTip}
        onSetInputTip={setInputTip}
        percentage={percentage}
        onSetPercentage={setPercentage}
        numPeople={numPeople}
        onSetNumPeople={setNumPeople}
      />
      <SideBar
        tipPerPerson={tipPerPerson}
        totalPerPerson={totalPerPerson}
        onSetBill={setBill}
        onSetInputTip={setInputTip}
        onSetPercentage={setPercentage}
        onSetNumPeople={setNumPeople}
      />
    </div>
  );
}

function Main({
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

function TipTotals({ amountText, totalText, total }) {
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

function Button({ children, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default App;
