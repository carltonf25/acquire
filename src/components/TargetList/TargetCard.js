import React from 'react';

const TargetCard = ({ target }) => {
  console.log(target);
  return (
    <div className="target-card">
      <h3>{target.name}</h3>
      <p>GP: {target.keyMetrics.grossProfit}</p>
      <p>Est. {target.yearEstablished}</p>
    </div>
  );
};

export default TargetCard;
