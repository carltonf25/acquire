import React, { useState, useContext } from 'react';
import TargetContext from '../../TargetContext';
import { useHistory } from 'react-router-dom';

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
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTarget = {
      id: targets.length + 1,
      name,
      summary,
      contact,
      status,
      grossProfit,
      cashFlow,
      stockPrice
    }
    setTargets([...targets, newTarget]);
    history.push(`/targets`);
  }


  return (
    <div>
      <h1>Create a new target</h1>
      <form>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <label>Summary</label>
        <input
          type="text"
          value={summary}
          onChange={e => setSummary(e.target.value)}
        />
        <br />
        <label>Contact</label>
        <input
          type="text"
          value={contact}
          onChange={e => setContact(e.target.value)}
        />
        <br />
        <label>Status</label>
        <textarea
          type="textarea"
          value={status}
          onChange={e => setStatus(e.target.value)}
        />
        <h4>Key Metrics</h4>
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
        <button onClick={handleSubmit}>Create Target</button>
      </form>
    </div>
  );
};

export default TargetBuilder;
