import React, { useState } from 'react';

export const TargetBuilder = () => {
  let [name, setName] = useState('');
  let [overview, setOverview] = useState('');

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
        <label>Overview</label>
        <textarea
          type="textarea"
          value={overview}
          onChange={e => setOverview(e.target.value)}
        />
        <h4>Key Metrics</h4>
        <label>Gross Profit: </label>
        <br />
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
      </form>
    </div>
  );
};

export default TargetBuilder;
