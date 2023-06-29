import * as React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState("");

  const handleTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!value) {
      setResult("");
    }
    setTerm(event.target.value);
  };

  const verify = () => {
    setResult(() => {
      if (!term) {
        setResult("");
      }

      const invertedTerm = term.split("").reverse().join("");

      const result =
        term.toLocaleLowerCase() === invertedTerm.toLocaleLowerCase()
          ? "é"
          : "não é";

      return `A palavra ou frase digitada ${result} um palindromo`;
    });
  };

  return (
    <>
      <h1>Verificador de Palindromo</h1>

      <div className="container">
        <label htmlFor="palavra">Digite uma palavra:</label>
        <input type="text" value={term} onChange={handleTermChange} />

        <button id="botao-verificar" onClick={verify}>
          Verificar
        </button>

        <p id="resultado">{result}</p>
      </div>
    </>
  );
}

export default App;
