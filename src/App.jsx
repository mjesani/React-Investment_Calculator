import { useState } from 'react';
import Header from './components/Header.jsx';
import InvestmentInput from './components/InvestmentInput.jsx';
import InvestmentBreakdown from './components/InvestmentBreakdown.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 12,
    duration: 10
  });

  function handleChange(inputId, event) {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [inputId]: +event.target.value
      };
    });
  }

  const userInputIsValid = userInput.duration > 0;

  return (
    <>
      <Header />
      <InvestmentInput userInput={userInput} onChange={handleChange} />
      {!userInputIsValid && <p className='center'>Please enter duration greater than 0.</p>}
      {userInputIsValid && <InvestmentBreakdown userInput={userInput} />}
    </>

  )
}

export default App
