import { useState } from 'react';

export default function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleSumar = () => {
    setResultado(Number(numero1) + Number(numero2));
  };

  return (
    <div>
      <h2>Suma de dos números</h2>
      <input
        type="number"
        placeholder="Número 1"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Número 2"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
      />
      <button onClick={handleSumar}>Sumar</button>
      <p>Resultado: {resultado}</p>
    </div>
  );
}
