import { useState } from "react";
import { Main } from "./Main.1";
import { SideBar } from "./components/SideBar";

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

export default App;
