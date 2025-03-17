import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function InvestmentBreakdown({ userInput }) {
    const investmentBreakdown = calculateInvestmentResults(userInput);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {investmentBreakdown.map((data, index) => {
                    const totalInterest = investmentBreakdown.slice(0, index + 1).reduce((total, row) => total + row.interest, 0);
                    return (<tr key={index}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(data.valueEndOfYear - totalInterest)}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    );
}