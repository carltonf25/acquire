import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import TargetContext from '../../TargetContext';
import { useSpring, animated } from 'react-spring';

// components
import InfoCard from './InfoCard';
import MetricCard from './MetricCard';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'August',
    Stock: 20,
  },
  {
    name: 'September',
    Stock: 23,
  },
  {
    name: 'October',
    Stock: 22,
  },
  {
    name: 'November',
    Stock: 28,
  },
  {
    name: 'December',
    Stock: 30,
  },
  {
    name: 'January',
    Stock: 32,
  },
  {
    name: 'February',
    Stock: 36.3,
  },
];

const TargetDetails = () => {
  let { id } = useParams();
  const appContext = useContext(TargetContext);
  const { targets, setTargets } = appContext;

  // retrieve target with ID matching URL parameter
  let target = targets.filter(t => {
    return t.id === Number(id);
  });
  // grab target from filtered array
  target = target[0];

  const props = useSpring({
    to: { opacity: 1, marginRight: 0 },
    from: { opacity: 0, marginRight: -100 },
  });
  return (
    <animated.div style={props}>
      <div className="details-page">
        <div className="card-block">
          <InfoCard
            name={target.name}
            status={target.status}
            contact={target.contact}
          />
          <MetricCard metric={target.grossProfit} title="GROSS PROFIT" />
          <MetricCard metric={target.cashFlow} title="CASH FLOW" />
          <MetricCard metric={target.stockPrice} title="STOCK PRICE" />
        </div>
        <div className="target-summary">
          <h2>Summary</h2>
          <p>{target.summary}</p>
        </div>
        <div className="chart-container">
          <h2>Stock Price</h2>
          <LineChart width={1000} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Stock"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>{' '}
        </div>
      </div>
    </animated.div>
  );
};

export default TargetDetails;
