import { useState } from "react";
import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"

function App() {
  //componente elevado do userInput
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  //condicao para duration
  const inputIsvalid=userInput.duration >=1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: + newValue,
      };
    });
  }


  return (
    <>
 <Header/>
 <UserInput userInput={userInput} onChange={handleChange}/>
 {/* ternary operator para verificar */}
 {inputIsvalid ?  <Results input={userInput}   /> :<p className="center">Please enter a duration greater than zero.</p>}
 </>
  )
}

export default App
