import TextInput from './common/TextInput.jsx';

export default function InvestmentInput({ userInput, onChange }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <TextInput id="initialInvestment" label="Initial Investment" type="number" required={true} value={userInput["initialInvestment"]} onChange={onChange} />
                <TextInput id="annualInvestment" label="Annual Investment" type="number" required={true} value={userInput["annualInvestment"]} onChange={onChange} />
            </div>
            <div className="input-group">
                <TextInput id="expectedReturn" label="Expected Return" type="number" required={true} value={userInput["expectedReturn"]} onChange={onChange} />
                <TextInput id="duration" label="Duration" type="number" required={true} value={userInput["duration"]} onChange={onChange} />
            </div>
        </section>
    );
}