export default function TextInput({ id, label, onChange, value, type = "text", required = false }) {
    return (
        <p>
            <label>{label}</label>
            <input type={type} required={required} value={value} onChange={(event) => onChange(id, event)} />
        </p>
    );
}