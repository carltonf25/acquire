import React from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from '../StatusBadge';

const TargetCard = ({ target }) => {
  console.log(target);
  return (
    <Link to={`/targets/${target.id}`}>
      <div className="card">
        <h3>{target.name}</h3>
        <p>GP: {target.grossProfit}</p>
        <p>Est. {target.yearEstablished}</p>
        <StatusBadge status={target.status} />
      </div>
    </Link>
  );
};

export default TargetCard;
