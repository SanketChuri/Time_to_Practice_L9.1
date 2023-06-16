import { React, useState } from "react";

import Header from "./Components/Header/Header";
import UserInput from "./Components/UserInput/UserInput";
import ResultsTable from "./Components/ResultsTable/ResultsTable";
// import logo from './assets/investment-calculator-logo.png';

function App() {
  const [userInput, setUserInput] = useState(null);

  console.log("userinpuyyyyyyyyyyyy", userInput);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

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
      {!userInput ? (
        <p style={{ textAlign: "center" }}>No investment Calculated yet</p>
      ) : (
        <ResultsTable
          data={yearlyData}
          initialInvestment={+userInput["current-savings"]}
        ></ResultsTable>
      )}
    </div>
  );
}

export default App;
