import { React, useState } from "react";

const UserInput = (props) => {

  const initialUserInput = {
    "current-savings": 1000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  };

  const [userInput, setUserInput] = useState(initialUserInput);

  const inputChangeHandler = (id, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [id]: +value,
      };
    });
  };

  const resetHandler = (event) => {
    setUserInput(initialUserInput);
  };

  const calculateHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={calculateHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput["current-savings"]}
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput["expected-return"]} // doubt
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput["duration"]}
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};
export default UserInput;
