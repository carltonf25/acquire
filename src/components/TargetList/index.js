import React, { useContext, useState, useEffect } from 'react';
import './style.scss';
import mockTargetData from '../../mockTargetData';
import TargetCard from './TargetCard';

export const TargetList = () => {
  const [targets, setTargets] = useState(mockTargetData);
  return (
    <div>
      <h1>Your Targets</h1>
      <div className="target-card-container">
        <ul>
          {targets.map(target => (
            <TargetCard target={target} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TargetList;
