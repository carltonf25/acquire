import React from 'react';
import StatusBadge from '../StatusBadge';
import { useHistory } from 'react-router';

const TargetCard = ({ target, openModal }) => {
  let history = useHistory();

  let handleClick = () => {
  };

  let openTargetDetails = () => {
    history.push(`/targets/${target.id}`);
  }
  return (
    <div className="card target-card">
      <div className="card-info">
        <h3>{target.name}</h3>
        <p>GP: {target.grossProfit}</p>
        <p>Est. {target.yearEstablished}</p>
        <StatusBadge status={target.status} />
      </div>
      <div className="button-block">
        <button className="btn view-btn" onClick={() => openTargetDetails()}>VIEW</button>
        <button className="btn copy-btn" onClick={() => openTargetDetails()}>COPY</button>
        <button className="btn delete-btn" onClick={() => openModal(target)}>×</button>
      </div>
    </div>
  );
};

export default TargetCard;
