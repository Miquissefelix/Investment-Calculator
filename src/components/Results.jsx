import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
// Calcula os resultados do investimento com base nas entradas do usuário
  const resultsData = calculateInvestmentResults(input);
  //console.log(resultsData);
  // Calcula o valor inicial do investimento
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  // Renderiza a tabela de resultados   
  return (
    <table id="result">
      {/* cabecalho */}
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      {/* conteudo dinamico com base na lista real da resultsData  */}
      <tbody>
        {resultsData.map((yearData) => {
          // console.log(yearData.year);
       
          //total de juros obtidos em todos os anos 
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
           // Calcula o capital total investido
            const totalAmountInvested=yearData.valueEndOfYear - totalInterest;

             // Retorna uma linha da tabela para cada ano de resultados
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              {/* por rever */}
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
