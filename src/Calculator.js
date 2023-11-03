import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Calculator.css';  // Make sure you've created and added the styles here.

function Calculator() {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState(5000);
  const [term, setTerm] = useState(6);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const rate = parseFloat(searchParams.get('rate') || '0');

  const monthlyPayment = ((loanAmount * (rate / 100)) + loanAmount) / term;

  return (
    <div className="container">
      <h2 className="title">WORKING CAPITAL</h2>
      <h3 className="subtitle">Choose your desired amount and term</h3>

      <input
        className="input-box"
        value={`$${loanAmount.toLocaleString()}`}
        readOnly
      />

      <div className="slider-labels">
        <span>$5K</span>
        <input 
          className="slider"
          type="range"
          min="5000"
          max="250000"
          step="500"
          value={loanAmount}
          onChange={e => setLoanAmount(Number(e.target.value))}
        />
        <span>$250K</span>
      </div>

      <div className="term-buttons">
        {[6, 12, 24].map(t => (
          <div
            key={t}
            className={`term-button ${t === term ? 'selected' : ''}`}
            onClick={() => setTerm(t)}
          >
            {t}
          </div>
        ))}
      </div>

      <button onClick={() => navigate('/upload')}>Continue</button>

      <p>Your estimated monthly payment: ${monthlyPayment.toFixed(2)}</p>
    </div>
  );
}

export default Calculator;
