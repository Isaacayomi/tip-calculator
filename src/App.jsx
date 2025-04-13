import { useState } from "react";
import MainComponent from "../src/components/MainComponent";
import SideBar from "../src/components/SideBar";

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

  const numericBill = parseFloat(bill) || 0;

  const tipAmount =
    inputTip === ""
      ? (numericBill * percentage) / 100
      : (numericBill * inputTip) / 100;
  const totalAmount = numericBill + tipAmount;
  const tipPerPerson = numPeople ? tipAmount / numPeople : 0;
  const totalPerPerson = numPeople ? totalAmount / numPeople : 0;

  console.log("Tip Per Person:", tipPerPerson);
  console.log("Total Per Person:", totalPerPerson);
  return (
    <div className="container">
      <MainComponent
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
