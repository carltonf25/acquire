import React, { useState } from 'react';

const MetricCard = ({ metric, title }) => {
  return (
    <div className="card metric-card">
      <span>{`$${metric}`}</span>
      <span>{title}</span>
    </div>
  );
};

export default MetricCard;
