import React from 'react';

const MetricCard = ({ metric, title }) => {
  return (
    <div className="card metric-card">
      <a href="#"><small>EDIT</small></a>
      <span>{`$${metric}`}</span>
      <span>{title}</span>
    </div>
  );
};

export default MetricCard;
