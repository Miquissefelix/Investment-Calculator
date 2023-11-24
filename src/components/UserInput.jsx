//Componente funcional UserInput que recebe as prop onChange e userInput
export default function UserInput({onChange,userInput}) {
//   const [UserInput, setUserInput] = useState({
//     initialInvestment: 10000,
//     annualInvestment: 1200,
//     expectedReturn: 6,
//     duration: 10,
//   });

// e elevar tambe o handleChange
//   function handleChange(inputIdentifier, newValue) {
//     setUserInput((prevUserInput) => {
//       return {
//         ...prevUserInput,
//         [inputIdentifier]: newValue,
//       };
//     });
//   }

//Início da função que renderiza o componente
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
             // O valor do input é definido com base na propriedade userInput do componente pai
            value={userInput.initialInvestment}
            // Quando o valor do input muda, a função onChange é chamada para atualizar o estado no componente pai
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input type="number" required 
            value={userInput.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}/>
        </p>
      </div>

{/* Grupo de inputs para retorno esperado e duração do investimento */}
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required 
            value={userInput.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}/>
            {/* e é um objeto de evento que contém informações sobre o evento */}
        </p>

        <p>
          <label>duration</label>
          <input type="number" required 
            value={userInput.duration}
            onChange={(e) => onChange("duration", e.target.value)}/>
            {/* porque se trocar o valor do duration para qualquer outro ele nao altera o valor */}
        </p>
      </div>
    </section>
  );
}
