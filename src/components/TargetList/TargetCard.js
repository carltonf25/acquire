import React from 'react';
import StatusBadge from '../StatusBadge';
import { useHistory } from 'react-router';

const TargetCard = ({ target }) => {
  let history = useHistory();

  let handleClick = () => {
    history.push(`/targets/${target.id}`);
  };
  return (
    <div onClick={handleClick} className="card">
      <h3>{target.name}</h3>
      <p>GP: {target.grossProfit}</p>
      <p>Est. {target.yearEstablished}</p>
      <StatusBadge status={target.status} />
    </div>
  );
};

export default TargetCard;
