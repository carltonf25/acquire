import React, { useState, useContext } from 'react';
import TargetContext from '../../TargetContext';
import { useHistory } from 'react-router-dom';
import './style.scss';

export const TargetBuilder = () => {
  let [name, setName] = useState('');
  let [summary, setSummary] = useState('');
  let [contact, setContact] = useState('');
  let [status, setStatus] = useState('');
  let [grossProfit, setGrossProfit] = useState('');
  let [cashFlow, setCashFlow] = useState('');
  let [stockPrice, setStockPrice] = useState('');

  const appContext = useContext(TargetContext);

  const { targets, setTargets } = appContext;

  let history = useHistory();

  const generateId = () => {
    let S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4();
  };

  const handleSubmit = e => {
    e.preventDefault();
    let id = Number(generateId());
    let newTarget = {
      id,
      name,
      summary,
      contact,
      status,
      grossProfit,
      cashFlow,
      stockPrice,
    };
    setTargets([...targets, newTarget]);
    history.push(`/targets`);
  };

  return (
    <div className="builder-wrapper">
      <div className="form-guide">
        <h1>Let's build your target</h1>
      </div>

      <div className="form-container">
        <form>
          <h3>Basic info:</h3>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label>Contact</label>
          <input
            type="text"
            value={contact}
            onChange={e => setContact(e.target.value)}
          />
          <label>Summary</label>
          <textarea
            value={summary}
            onChange={e => setSummary(e.target.value)}
          />
          <label>Status</label>
          <select value={status} onChange={e => setStatus(e.target.value)}>
            <option>Select a status</option>
            <option>Researching</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Denied</option>
          </select>
          <h3>Key Metrics:</h3>
          <label>Gross Profit: </label>
          <br />
          <input
            type="text"
            value={grossProfit}
            onChange={e => setGrossProfit(e.target.value)}
          />
          <br />
          <label>Cash Flow: </label>
          <input
            type="text"
            value={cashFlow}
            onChange={e => setCashFlow(e.target.value)}
          />
          <br />
          <label>Stock Price: </label>
          <input
            type="text"
            value={stockPrice}
            onChange={e => setStockPrice(e.target.value)}
          />
          <br />
          <input
            type="submit"
            value="Create Target"
            className="btn primary"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default TargetBuilder;
