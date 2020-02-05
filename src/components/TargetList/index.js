import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import mockTargetData from '../../mockTargetData';
import TargetCard from './TargetCard';

export const TargetList = () => {
  const [targets, setTargets] = useState(mockTargetData);
  return (
    <>
      <h1>Your Targets</h1>
      <div className="target-card-container">
        <ul>
          {targets.map(target => (
            <Link to={`/targets/${target.id}/details`}>
              <TargetCard target={target} />
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TargetList;
