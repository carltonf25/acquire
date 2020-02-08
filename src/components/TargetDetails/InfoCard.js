import React from 'react';
import StatusBadge from '../StatusBadge';

const InfoCard = ({ name, status, contact }) => {
  return (
    <div className="card metric-card company-info-card">
      <a href="#"><small>EDIT</small></a>
      <h3>{name}</h3>
      <p>Status: {status}</p>
      <p>Contact: {contact}</p>
    </div>
  );
};

export default InfoCard;
