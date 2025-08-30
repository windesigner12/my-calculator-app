// frontend/src/App.js
import { useState } from "react";
import axios from "axios";

function App() {
  const [value, setValue] = useState("");
  const [type, setType] = useState("inch-to-meter");
  const [result, setResult] = useState<string | null>(null);

  const handleConvert = async () => {
    try {
      const res = await axios.post<{ result: string }>("http://localhost:4000/convert", {
        value,
        type,
      });
      setResult(res.data.result);
    } catch {
      setResult("Error converting");
    }
  };

  return (
    <div className="container" style={{ maxWidth: "500px", margin: "50px auto" }}>
      <h2>Unit Converter</h2>
      <input
        type="number"
        placeholder="Enter value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-control mb-2"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="form-control mb-2"
      >
        <option value="inch-to-meter">Inches → Meters</option>
        <option value="meter-to-inch">Meters → Inches</option>
        <option value="foot-to-meter">Feet → Meters</option>
        <option value="meter-to-foot">Meters → Feet</option>
        <option value="cm-to-inch">Centimeters → Inches</option>
        <option value="inch-to-cm">Inches → Centimeters</option>
      </select>
      <button onClick={handleConvert} className="btn btn-primary w-100 mb-3">
        Convert
      </button>
      {result !== null && <h4>Result: {result}</h4>}
    </div>
  );
}

export default App;
