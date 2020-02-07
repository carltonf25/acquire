import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './style.scss';
import TargetContext from '../../TargetContext';
import TargetCard from './TargetCard';

export const TargetList = () => {
  const appContext = useContext(TargetContext);
  const { targets, setTarget } = appContext;

  const props = useSpring({
    to: { opacity: 1, marginRight: 0 },
    from: { opacity: 0, marginRight: -100 },
  });
  return (
    <animated.div style={props}>
      <div className="wrapper">
        <h1>Your Targets</h1>
        <div className="target-card-container">
          {targets.map(target => (
            <TargetCard target={target} />
          ))}
        </div>
      </div>
    </animated.div>
  );
};

export default TargetList;
