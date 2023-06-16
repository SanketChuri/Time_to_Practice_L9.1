import { React, useState } from "react";

import Header from "./Components/Header/Header";
import UserInput from "./Components/UserInput/UserInput";
import ResultsTable from "./Components/ResultsTable/ResultsTable";
// import logo from './assets/investment-calculator-logo.png';

function App() {
  const [enteredInput, setEnteredInput] = useState(null);

  const calculateHandler = (enteredInput) => {
    // console.log("enteredInput", enteredInput);
    setEnteredInput(enteredInput);
  };
  const yearlyData = []; // per-year results

  if (enteredInput) {
    let currentSavings = +enteredInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +enteredInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +enteredInput["expected-return"] / 100;
    const duration = +enteredInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  // do something with yearlyData ...

  return (
    <div>
      <Header></Header>

      <UserInput onCalculate={calculateHandler}></UserInput>
      {!enteredInput ? (
        <p style={{ textAlign: "center" }}>No investment Calculated yet</p>
      ) : (
        <ResultsTable
          data={yearlyData}
          initialInvestment={+enteredInput["current-savings"]}
        ></ResultsTable>
      )}
    </div>
  );
}

export default App;
